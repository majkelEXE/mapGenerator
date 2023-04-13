import CellsStore from "../../store/cellsStore";
import HistoryItem from "./historyItem";

/**
 * Stores whole work area in particular moment
 */
export default class HistoryEntity {
    /** Responsible for storing info about single cell*/
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
