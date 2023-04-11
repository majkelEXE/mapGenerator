import HistoryEntity from "../../../items/history/historyEntity";
import HistoryStore from "../../../store/historyStore";
import { SelectedStore } from "../../../store/selectedStore";
import { drawCell } from "../../drawing/drawCell";

export const deleteAction = () => {
    SelectedStore.cellArea.forEach((cell) => {
        if (cell) drawCell(cell, null, null);
    });

    SelectedStore.clearCellArea();
    HistoryStore.add(new HistoryEntity());
};
