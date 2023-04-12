import Dimens from "../interfaces/dimens";
import Settings from "../settings";

/**
 * Calculates the square root of a number.
 *
 * @param cellColumnCount the number of cell columns in container.
 * @param cellRowCount the number of cell rows in container.
 * @returns an object containg dimensions for the container containg determined amount of columns and rows
 */
export const calcContainerDimens = (cellColumnCount: number, cellRowCount: number): Dimens => {
    let borderWidth = 2;

    let width =
        cellColumnCount * Settings.leftMargin +
        cellColumnCount * Settings.genericCellSize +
        cellColumnCount * borderWidth;

    let height =
        cellRowCount * Settings.bottomMargin + cellRowCount * Settings.genericCellSize + cellRowCount * borderWidth;

    return { width, height };
};
