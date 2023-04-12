import RedrawCellInterface from "../../interfaces/redrawCellInterface";
import GenericStore from "../../store/genericStore";

/** Redraws cells(used to clear temporary draw changes)
 *
 * @param cells a two dimensional array of HTMLCanvasElements containg cells in work area.
 *
 */
export const redrawCells: RedrawCellInterface = (cells: HTMLCanvasElement[][]): void => {
    cells.forEach((cellsRow) => {
        cellsRow.forEach((cell) => {
            let cellCtx: CanvasRenderingContext2D = cell.getContext("2d")!;

            cell.classList.remove("paste-cell");

            if (cell.hasAttribute("spriteX") && cell.hasAttribute("spriteY")) {
                cellCtx.drawImage(
                    GenericStore.sprites,
                    48 * parseInt(cell.getAttribute("spriteX")!),
                    48 * parseInt(cell.getAttribute("spriteY")!),
                    48,
                    48,
                    0,
                    0,
                    24,
                    24
                );
            } else {
                cellCtx.clearRect(0, 0, cell.width, cell.height);
            }
        });
    });
};
