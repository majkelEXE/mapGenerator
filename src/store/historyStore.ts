import HistoryEntity from "../items/history/historyEntity";

export default class HistoryStore {
    static historyEntities: HistoryEntity[];
    static focusedEntityIndex: number;

    static initalize() {
        HistoryStore.historyEntities = [new HistoryEntity()];
        this.focusedEntityIndex = 0;
    }

    static add(historyEntity: HistoryEntity) {
        if (HistoryStore.focusedEntityIndex != HistoryStore.historyEntities.length - 1) {
            HistoryStore.historyEntities = HistoryStore.historyEntities.slice(0, HistoryStore.focusedEntityIndex + 1);
        }
        HistoryStore.historyEntities.push(historyEntity);
        HistoryStore.focusedEntityIndex++;
        console.log(HistoryStore.focusedEntityIndex);
        console.log(HistoryStore.historyEntities);
    }

    static returnLast(): HistoryEntity | null {
        if (HistoryStore.historyEntities.length > 0 && HistoryStore.focusedEntityIndex > 0) {
            return HistoryStore.historyEntities[--HistoryStore.focusedEntityIndex];
        }

        return null;
    }

    static returnEarlier(): HistoryEntity | null {
        if (HistoryStore.focusedEntityIndex < HistoryStore.historyEntities.length - 1) {
            return HistoryStore.historyEntities[++HistoryStore.focusedEntityIndex];
        }

        return null;
    }
}
