import SpriteData from "../interfaces/spriteData";

/**
 * Responsible of storing data about sprite part on cell.
 *
 * **Every cell is about 48pixels, so for example 5th column will start at 240px*
 *
 * */
export default class CellSpritesData implements SpriteData {
    /** from left, which column */
    spriteColumn: number | null;
    /** from top, which row */
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
