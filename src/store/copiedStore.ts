import CellSpritesData from "../classes/cellSpritesData";
import Settings from "../settings";

export class CopiedStore {
    static copiedColumnsCount: number = 0;
    static copiedRowsCount: number = 0;
    static copiedCellsSpritesData: (CellSpritesData | null)[][] = [];

    static copyCells(cells: (HTMLCanvasElement | null)[]) {
        let startColumn = Settings.workAreaColumnCount;
        let startRow = Settings.workAreaRowCount;
        let endColumn = 0;
        let endRow = 0;

        cells.forEach((cell) => {
            if (cell) {
                if (parseInt(cell.getAttribute("column")!) > endColumn) {
                    endColumn = parseInt(cell.getAttribute("column")!);
                }

                if (parseInt(cell.getAttribute("column")!) < startColumn) {
                    startColumn = parseInt(cell.getAttribute("column")!);
                }

                if (parseInt(cell.getAttribute("row")!) > endRow) {
                    endRow = parseInt(cell.getAttribute("row")!);
                }

                if (parseInt(cell.getAttribute("row")!) < startRow) {
                    startRow = parseInt(cell.getAttribute("row")!);
                }
            }
        });

        let columns = endColumn - startColumn + 1;
        let rows = endRow - startRow + 1;

        console.log("rows " + rows);
        console.log("columns " + columns);

        CopiedStore.copiedCellsSpritesData = new Array(rows);
        for (let i = 0; i < rows; i++) {
            CopiedStore.copiedCellsSpritesData[i] = new Array(columns);
            CopiedStore.copiedCellsSpritesData[i].fill(null);
        }

        cells.forEach((cell) => {
            if (cell)
                CopiedStore.copiedCellsSpritesData[parseInt(cell.getAttribute("row")!) - startRow][
                    parseInt(cell.getAttribute("column")!) - startColumn
                ] = new CellSpritesData(cell);
        });

        CopiedStore.copiedRowsCount = rows;
        CopiedStore.copiedColumnsCount = columns;
    }
}
