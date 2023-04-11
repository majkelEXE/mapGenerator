/** Settings responsible for generic app design.
 *
 * @todo add cell border width
 */

class Settings {
    /** Amounts of columns of spritesheet */
    static spritesColumnCount: number = 32;
    /** Amounts of rows of spritesheet */
    static spritesRowCount: number = 20;

    /** Amounts of columns of cells to draw  */
    static workAreaColumnCount: number = 40;
    /** Amounts of rows of cells to draw  */
    static workAreaRowCount: number = 20;

    /** Signle cell canvas size */
    static genericCellSize: number = 24;

    /** Signle cell margin left */
    static leftMargin: number = 3;
    /** Signle cell margin bottom */
    static bottomMargin: number = 3;
}

export default Settings;
