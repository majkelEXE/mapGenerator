import ExportedData from "../interfaces/exportedData";

/**
 * Class showing structure of one single cell data, that will be exported
 *
 *
 */
export default class ExportedCellData implements ExportedData {
    /** column in work area*/
    column: number;
    /** row in work area*/
    row: number;
    /** from left, which column of sprite */
    spriteColumn: number | null;
    /** from top, which row of sprite */
    spriteRow: number | null;

    constructor(column: number, row: number, spriteColumn: number | null, spriteRow: number | null) {
        this.column = column;
        this.row = row;
        this.spriteColumn = spriteColumn;
        this.spriteRow = spriteRow;
    }
}
