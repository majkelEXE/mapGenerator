import SpriteData from "../interfaces/spriteData";

export default class CellSpritesData implements SpriteData {
    spriteColumn: number | null;
    spriteRow: number | null;

    constructor(cell: HTMLCanvasElement) {
        if (cell.hasAttribute("spriteX") && cell.hasAttribute("spriteY")) {
            this.spriteColumn = parseInt(cell.getAttribute("spriteX")!);
            this.spriteRow = parseInt(cell.getAttribute("spriteY")!);
        } else {
            this.spriteColumn = null;
            this.spriteRow = null;
        }
    }
}
