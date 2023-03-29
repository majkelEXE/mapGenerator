import HistoryItem from "./historyItem";

export default class HistoryEntity {
    historyItems: HistoryItem[];

    constructor() {
        this.historyItems = [];
    }

    addItem(historyItem: HistoryItem) {
        this.historyItems.push(historyItem);
    }
}
