import HistoryEntity from "../../../items/history/historyEntity";
import HistoryStore from "../../../store/historyStore";
import { drawCell } from "../../drawing/drawCell";

export const redoAction = () => {
    let earlierHistoryItem: HistoryEntity | null = HistoryStore.returnEarlier();

    if (earlierHistoryItem != null) {
        earlierHistoryItem.historyItems.forEach((historyItem) => {
            drawCell(historyItem.cell, historyItem.spriteColumn, historyItem.spriteRow);
        });
    }
};
