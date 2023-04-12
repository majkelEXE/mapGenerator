import { CopiedStore } from "../../../store/copiedStore";
import { SelectedStore } from "../../../store/selectedStore";

/** Saves selected cells sprites data in clipboard. */
export const copyAction = () => {
    CopiedStore.copyCells(SelectedStore.cellArea);
    console.log(CopiedStore.copiedCellsSpritesData);
};
