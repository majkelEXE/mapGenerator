import CellsStore from "./cellsStore";

export class SelectedStore {
    static singleCell: HTMLCanvasElement | null = null;
    static cellArea: HTMLCanvasElement[] = [];

    static selectSingleCell = (selectedCell: HTMLCanvasElement) => {
        SelectedStore.clearCellArea();

        if (SelectedStore.singleCell != null) {
            SelectedStore.singleCell.classList.remove("selected-cell");
        }

        SelectedStore.singleCell = selectedCell;
        SelectedStore.singleCell.classList.add("selected-cell");
    };

    static deselectSingleCell = () => {
        if (SelectedStore.singleCell != null) {
            SelectedStore.singleCell.classList.remove("selected-cell");
            SelectedStore.singleCell = null;
        }
    };

    static selecteCellArea = (startColumn: number, endColumn: number, startRow: number, EndRow: number) => {
        SelectedStore.deselectSingleCell();
        SelectedStore.clearCellArea();
        for (let i = startRow; i <= EndRow; i++) {
            for (let j = startColumn; j <= endColumn; j++) {
                CellsStore.cells![i][j].classList.add("selected-cell");
                SelectedStore.cellArea.push(CellsStore.cells![i][j]);
            }
        }
    };

    static clearCellArea = () => {
        SelectedStore.cellArea.forEach((cell) => {
            cell.classList.remove("selected-cell");
        });

        SelectedStore.cellArea = [];
    };
}
