//https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3

import Settings from "../../settings";
import OptionsStore from "../../store/optionsStore";
import { SelectedStore } from "../../store/selectedStore";
import { generateCell } from "./generateCell";

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
                        let selectedCtx: CanvasRenderingContext2D = SelectedStore.singleCell.getContext("2d")!;
                        selectedCtx.drawImage(sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
                        SelectedStore.singleCell.setAttribute("spriteX", `${48 * column}`);
                        SelectedStore.singleCell.setAttribute("spriteY", `${48 * row}`);

                        if (OptionsStore.automatCheckbox!.checked) {
                            console.log(SelectedStore.singleCell.id);
                            SelectedStore.selectSingleCell(
                                document.getElementById("" + (+SelectedStore.singleCell.id + 1)) as HTMLCanvasElement
                            );
                        } else {
                            SelectedStore.deselectSingleCell();
                        }
                    }
                });

                let ctx: CanvasRenderingContext2D = spriteCell.getContext("2d")!;
                ctx.drawImage(sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
            }
        }
    };
};
