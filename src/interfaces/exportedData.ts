import SpriteData from "./spriteData";
/**
 * Interface determining structure of one single cell data, that will be exported
 *
 *
 */
export default interface ExportedData extends SpriteData {
    /** column in work area*/
    column: number;
    /** row in work area*/
    row: number;
}
