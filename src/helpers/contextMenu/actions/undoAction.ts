import HistoryEntity from "../../../items/history/historyEntity";
import HistoryStore from "../../../store/historyStore";
import { drawCell } from "../../drawing/drawCell";

export const undoAction = () => {
    let lastHistoryEntity: HistoryEntity | null = HistoryStore.returnLast();

    if (lastHistoryEntity != null) {
        lastHistoryEntity.historyItems.forEach((historyItem) => {
            drawCell(historyItem.cell, historyItem.spriteColumn, historyItem.spriteRow);
        });
    }
};
