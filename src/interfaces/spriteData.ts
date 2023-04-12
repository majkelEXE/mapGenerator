/**
 * Interface determining what properties should contain class saving sprites data
 */
export default interface SpriteData {
    /** from left, which column of sprite */
    spriteColumn: number | null;
    /** from top, which row of sprite */
    spriteRow: number | null;
}
