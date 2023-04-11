import { CopiedStore } from "../../../store/copiedStore";
import { SelectedStore } from "../../../store/selectedStore";

export const copyAction = () => {
    CopiedStore.copyCells(SelectedStore.cellArea);
    console.log(CopiedStore.copiedCellsSpritesData);
};
