import CellsStore from "./cellsStore";
import KeyStore from "./keyStore";

export class SelectedStore {
    static selectedColumnsCount: number = 0;
    static selectedRowsCount: number = 0;
    static cellArea: HTMLCanvasElement[] = [];

    static selectCellArea = (startColumn: number, endColumn: number, startRow: number, endRow: number) => {
        if (!KeyStore.ctrlKeyPressed) {
            SelectedStore.clearCellArea();
        }

        console.log("a");
        if (startColumn == endColumn && startRow == endRow && KeyStore.ctrlKeyPressed) {
            let indexToDelete: number = -1;
            SelectedStore.cellArea.forEach((cell, i) => {
                if (cell == CellsStore.cells![startRow][startColumn]) {
                    indexToDelete = i;
                }
            });

            if (indexToDelete != -1) {
                SelectedStore.cellArea[indexToDelete].classList.remove("selected-cell");
                SelectedStore.cellArea.splice(indexToDelete, 1);
                return;
            }
        }

        for (let i = startRow; i <= endRow; i++) {
            for (let j = startColumn; j <= endColumn; j++) {
                CellsStore.cells![i][j].classList.add("selected-cell");
                SelectedStore.cellArea.push(CellsStore.cells![i][j]);
            }
        }

        SelectedStore.selectedColumnsCount = endColumn - startColumn;
        SelectedStore.selectedRowsCount = endRow - startRow
    };

    static selectCellAreaSingle = (cell: HTMLCanvasElement) => {
        SelectedStore.clearCellArea();

        cell.classList.add("selected-cell");
        SelectedStore.cellArea.push(cell);
    };

    static clearCellArea = () => {
        SelectedStore.cellArea.forEach((cell) => {
            cell.classList.remove("selected-cell");
        });

        SelectedStore.cellArea = [];
        SelectedStore.selectedColumnsCount = 0;
        SelectedStore.selectedRowsCount = 0
    };
}
