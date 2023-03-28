//https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3

import Settings from "../../../settings";
import OptionsStore from "../../../store/optionsStore";
import { SelectedStore } from "../../../store/selectedStore";
import { drawCell } from "../../drawing/drawCell";
import { generateCell } from "../generateCell";

export const generateItems = (itemsContainer: HTMLDivElement) => {
    let sprites: HTMLImageElement = document.createElement("img");
    sprites.src = "src/sprites.png";

    sprites.onload = () => {
        for (let row: number = 0; row < Settings.spritesRowCount; row++) {
            for (let column: number = 0; column < Settings.spritesColumnCount; column++) {
                let spriteCell: HTMLCanvasElement = generateCell();
                itemsContainer.append(spriteCell);

                spriteCell.addEventListener("click", () => {
                    if (SelectedStore.singleCell != null) {
                        drawCell(SelectedStore.singleCell, sprites, column, row);

                        if (OptionsStore.automatCheckbox!.checked) {
                            console.log(SelectedStore.singleCell.id);
                            SelectedStore.selectSingleCell(
                                document.getElementById("" + (+SelectedStore.singleCell.id + 1)) as HTMLCanvasElement
                            );
                            return;
                        } else {
                            SelectedStore.deselectSingleCell();
                            return;
                        }
                    }

                    if (SelectedStore.cellArea.length != 0) {
                        SelectedStore.cellArea.forEach((cell) => {
                            drawCell(cell, sprites, column, row);
                            SelectedStore.clearCellArea();
                        });
                    }
                });

                let ctx: CanvasRenderingContext2D = spriteCell.getContext("2d")!;
                ctx.drawImage(sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
            }
        }
    };
};
