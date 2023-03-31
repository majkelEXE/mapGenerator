import CellsStore from "../../store/cellsStore";
import HistoryItem from "./historyItem";

export default class HistoryEntity {
    historyItems: HistoryItem[];

    constructor() {
        this.historyItems = [];

        CellsStore.cells!.forEach((row) => {
            row.forEach((cell) => {
                this.historyItems.push(new HistoryItem(cell));
            });
        });
    }
}
