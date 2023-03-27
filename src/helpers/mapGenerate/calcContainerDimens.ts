import Dimens from "../../interfaces/dimens";
import Settings from "../../settings";

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
