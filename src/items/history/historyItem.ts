/** Responsible for storing info about single cell*/
export default class HistoryItem {
    /** Reference to a cell*/
    cell: HTMLCanvasElement;
    /** Sprite column, every column has about 48px, x point on sprite*/
    spriteColumn: number | null;
    /** Sprite row, every row has about 48px, y point on sprite*/
    spriteRow: number | null;

    constructor(cell: HTMLCanvasElement) {
        this.cell = cell;

        if (cell.hasAttribute("spriteX") && cell.hasAttribute("spriteY")) {
            this.spriteColumn = Number(cell.getAttribute("spriteX"));
            this.spriteRow = Number(cell.getAttribute("spriteY"));
        } else {
            this.spriteColumn = null;
            this.spriteRow = null;
        }
    }
}
