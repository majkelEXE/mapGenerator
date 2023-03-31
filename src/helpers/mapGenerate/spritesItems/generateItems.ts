//https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3

import HistoryEntity from "../../../items/history/historyEntity";
import Settings from "../../../settings";
import GenericStore from "../../../store/genericStore";
import HistoryStore from "../../../store/historyStore";
import OptionsStore from "../../../store/optionsStore";
import { SelectedStore } from "../../../store/selectedStore";
import { drawCell } from "../../drawing/drawCell";
import { generateCell } from "../generateCell";

export const generateItems = (itemsContainer: HTMLDivElement) => {
    // let sprites: HTMLImageElement = document.createElement("img");
    // sprites.src = "src/sprites.png";

    GenericStore.sprites.onload = () => {
        for (let row: number = 0; row < Settings.spritesRowCount; row++) {
            for (let column: number = 0; column < Settings.spritesColumnCount; column++) {
                let spriteCell: HTMLCanvasElement = generateCell();
                itemsContainer.append(spriteCell);

                spriteCell.addEventListener("click", () => {
                    if (SelectedStore.cellArea.length != 0) {
                        let lastCellId = SelectedStore.cellArea[SelectedStore.cellArea.length - 1].id;

                        SelectedStore.cellArea.forEach((cell) => {
                            drawCell(cell, column, row);
                            SelectedStore.clearCellArea();
                        });

                        if (OptionsStore.automatCheckbox!.checked) {
                            SelectedStore.selectCellAreaSingle(
                                document.getElementById("" + (+lastCellId + 1)) as HTMLCanvasElement
                            );
                        } else {
                            SelectedStore.clearCellArea();
                        }

                        HistoryStore.add(new HistoryEntity());
                    }
                });

                let ctx: CanvasRenderingContext2D = spriteCell.getContext("2d")!;
                ctx.drawImage(GenericStore.sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
            }
        }
    };
};
