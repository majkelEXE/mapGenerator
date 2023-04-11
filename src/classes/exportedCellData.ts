import ExportedData from "../interfaces/exportedData";

export default class ExportedCellData implements ExportedData {
    column: number;
    row: number;
    spriteColumn: number | null;
    spriteRow: number | null;

    constructor(column: number, row: number, spriteColumn: number | null, spriteRow: number | null) {
        this.column = column;
        this.row = row;
        this.spriteColumn = spriteColumn;
        this.spriteRow = spriteRow;
    }
}
