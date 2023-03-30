export default class HistoryItem {
    cell: HTMLCanvasElement;
    spriteColumn: number | null;
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
