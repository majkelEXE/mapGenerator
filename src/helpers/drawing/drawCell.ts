import DrawCellInterface from "../../interfaces/drawCellInterface";
import GenericStore from "../../store/genericStore";

/** Draws cell permanently
 *
 * @param cell the HTMLCanvasElement to edit.
 * @param column number of column in sprite.
 * @param row number of row in sprite.
 *
 */
export const drawCell: DrawCellInterface = (
    cell: HTMLCanvasElement,
    column: number | null,
    row: number | null
): void => {
    let cellCtx: CanvasRenderingContext2D = cell.getContext("2d")!;

    if (column != null && row != null) {
        cellCtx.drawImage(GenericStore.sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
        cell.setAttribute("spriteX", `${column}`);
        cell.setAttribute("spriteY", `${row}`);
    } else {
        cellCtx.clearRect(0, 0, cell.width, cell.height);
        cell.removeAttribute("spriteX");
        cell.removeAttribute("spriteY");
    }
};
