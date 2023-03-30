import CellsStore from "./cellsStore";

export class SelectedStore {
    static cellArea: HTMLCanvasElement[] = [];

    static selectCellArea = (startColumn: number, endColumn: number, startRow: number, EndRow: number) => {
        SelectedStore.clearCellArea();
        for (let i = startRow; i <= EndRow; i++) {
            for (let j = startColumn; j <= endColumn; j++) {
                CellsStore.cells![i][j].classList.add("selected-cell");
                SelectedStore.cellArea.push(CellsStore.cells![i][j]);
            }
        }
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
    };
}
