/** Interface determining look of redraw work area functions*/
export default interface RedrawCellInterface {
    /** Function redrawing work area should containing this parameters and return type
     *
     * @param cells a two dimensional array of HTMLCanvasElements containg cells in work area.
     *
     */
    (cells: HTMLCanvasElement[][]): void;
}
