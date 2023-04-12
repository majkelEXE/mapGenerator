import DrawCellInterface from "../../interfaces/drawCellInterface";
import GenericStore from "../../store/genericStore";

/** Draws cell for a moment(mainly used in hover actions)
 *
 * @param cell the HTMLCanvasElement to edit.
 * @param column number of column in sprite.
 * @param row number of row in sprite.
 *
 */
export const drawCellTemporary: DrawCellInterface = (
    cell: HTMLCanvasElement,
    column: number | null,
    row: number | null
) => {
    let cellCtx: CanvasRenderingContext2D = cell.getContext("2d")!;

    cell.classList.add("paste-cell");

    if (column != null && row != null) {
        cellCtx.drawImage(GenericStore.sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
    } else {
        cellCtx.clearRect(0, 0, cell.width, cell.height);
    }
};
