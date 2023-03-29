import HistoryEntity from "../items/history/historyEntity";

export default class HistoryStore {
    static historyEntities: HistoryEntity[] = [];
    static focusedEntityIndex: number = 0;

    static add(historyEntity: HistoryEntity) {
        this.historyEntities.push(historyEntity);
    }
}
