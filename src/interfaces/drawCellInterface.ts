/**
 * Determines params and return type of functions responsible for drawing cells.
 *
 * */
export default interface DrawCellInterface {
    /**
     * Draw cell funtions should contain this parameters and return type
     *
     * @param cell the HTMLCanvasElement to edit.
     * @param column number of column in sprite.
     * @param row number of row in sprite.
     *
     * */
    (cell: HTMLCanvasElement, column: number | null, row: number | null): void;
}
