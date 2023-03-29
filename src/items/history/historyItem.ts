export default class HistoryItem {
    cell: HTMLCanvasElement;
    spriteColumn: number | null;
    spriteRow: number | null;

    constructor(cell: HTMLCanvasElement, spriteColumn: number | null, spriteRow: number | null) {
        this.cell = cell;
        this.spriteColumn = spriteColumn;
        this.spriteRow = spriteRow;
    }
}
