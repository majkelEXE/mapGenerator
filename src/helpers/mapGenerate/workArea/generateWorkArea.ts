import Settings from "../../../settings";
import CellsStore from "../../../store/cellsStore";
import HistoryStore from "../../../store/historyStore";
import { SelectedStore } from "../../../store/selectedStore";
import { generateCell } from "../generateCell";

export const generateWorkArea = (workAreaContainer: HTMLDivElement) => {
    let counter = 0;

    CellsStore.cells = makeArray(Settings.workAreaRowCount, Settings.workAreaColumnCount);

    for (let row: number = 0; row < Settings.workAreaRowCount; row++) {
        for (let column: number = 0; column < Settings.workAreaColumnCount; column++) {
            let workAreaCell = generateCell();
            workAreaCell.setAttribute("row", String(row));
            workAreaCell.setAttribute("column", String(column));
            workAreaCell.id = "" + counter;
            workAreaContainer.append(workAreaCell);

            CellsStore.cells[row][column] = workAreaCell;

            workAreaCell.addEventListener("click", () => {
                SelectedStore.selectCellArea(column, column, row, row);
            });
            counter++;
        }
    }

    HistoryStore.initalize();
};

const makeArray = (a: number, b: number): [][] => {
    var arr = new Array(a);
    for (var i = 0; i < a; i++) arr[i] = new Array(b);
    return arr;
};
