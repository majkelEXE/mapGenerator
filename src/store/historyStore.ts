import HistoryEntity from "../items/history/historyEntity";
/** Stores every state of work area, history allowing to redo and undo*/
export default class HistoryStore {
    /** Stores actual work area states*/
    static historyEntities: HistoryEntity[];
    /** Currently focused work area state*/
    static focusedEntityIndex: number;

    static initalize() {
        HistoryStore.historyEntities = [new HistoryEntity()];
        this.focusedEntityIndex = 0;
    }

    /**
     * Adds work area state to history
     * @param historyEntity work area state to save
     */
    static add(historyEntity: HistoryEntity) {
        if (HistoryStore.focusedEntityIndex != HistoryStore.historyEntities.length - 1) {
            HistoryStore.historyEntities = HistoryStore.historyEntities.slice(0, HistoryStore.focusedEntityIndex + 1);
        }
        HistoryStore.historyEntities.push(historyEntity);
        HistoryStore.focusedEntityIndex++;
        console.log(HistoryStore.focusedEntityIndex);
        console.log(HistoryStore.historyEntities);
    }

    /**
     * Returns previous unit of history(undo)
     * @returns null or previous state of work area
     */
    static returnLast(): HistoryEntity | null {
        if (HistoryStore.historyEntities.length > 0 && HistoryStore.focusedEntityIndex > 0) {
            return HistoryStore.historyEntities[--HistoryStore.focusedEntityIndex];
        }

        return null;
    }

    /**
     * Returns last unit of history(redo)
     * @returns null or last state of work area
     */
    static returnEarlier(): HistoryEntity | null {
        if (HistoryStore.focusedEntityIndex < HistoryStore.historyEntities.length - 1) {
            return HistoryStore.historyEntities[++HistoryStore.focusedEntityIndex];
        }

        return null;
    }
}
