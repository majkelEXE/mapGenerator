import GenericStore from "../../store/genericStore";

export const drawCellTemporary = (cell: HTMLCanvasElement, column: number | null, row: number | null) => {
    let cellCtx: CanvasRenderingContext2D = cell.getContext("2d")!;

    cell.classList.add("paste-cell");

    if (column != null && row != null) {
        cellCtx.drawImage(GenericStore.sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
    } else {
        cellCtx.clearRect(0, 0, cell.width, cell.height);
    }
};
