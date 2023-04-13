import CellsStore from "./cellsStore";
import KeyStore from "./keyStore";

/** Stores data about selected cells*/
export class SelectedStore {
    /** Stores references to selected cells*/
    static cellArea: (HTMLCanvasElement | null)[] = [];

    /**
     * Selects an area of cells
     * @param startColumn which column is first in new selected area
     * @param endColumn which column is last in new selected area
     * @param startRow which row is first in new selected area
     * @param endRow which row is last in new selected area
     */
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
                SelectedStore.cellArea[indexToDelete]!.classList.remove("selected-cell");
                SelectedStore.cellArea[indexToDelete] = null;
                return;
            }
        }

        for (let i = startRow; i <= endRow; i++) {
            for (let j = startColumn; j <= endColumn; j++) {
                CellsStore.cells![i][j].classList.add("selected-cell");
                SelectedStore.cellArea.push(CellsStore.cells![i][j]);
            }
        }
    };

    /**
     * Selects one single cell
     * @param cell reference to a sell to select
     */
    static selectCellAreaSingle = (cell: HTMLCanvasElement) => {
        SelectedStore.clearCellArea();

        cell.classList.add("selected-cell");
        SelectedStore.cellArea.push(cell);
    };

    /** Deselects all cells*/
    static clearCellArea = () => {
        SelectedStore.cellArea.forEach((cell) => {
            if (cell) cell.classList.remove("selected-cell");
        });

        SelectedStore.cellArea = [];
    };
}
