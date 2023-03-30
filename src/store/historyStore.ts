import HistoryEntity from "../items/history/historyEntity";

export default class HistoryStore {
    static historyEntities: HistoryEntity[] = [];
    static focusedEntityIndex: number = -1;

    static add(historyEntity: HistoryEntity) {
        if (historyEntity.historyItems.length != 0) {
            HistoryStore.historyEntities.push(historyEntity);
            HistoryStore.focusedEntityIndex++;
            console.log(HistoryStore.focusedEntityIndex);
        }
    }

    static returnLast(): HistoryEntity | null {
        if (HistoryStore.historyEntities.length > 0 && HistoryStore.focusedEntityIndex >= 0) {
            return HistoryStore.historyEntities[HistoryStore.focusedEntityIndex--];
        }

        return null;
    }
}
