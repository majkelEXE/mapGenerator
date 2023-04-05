import CellSpritesData from "../interfaces/cellSpritesData";

export class CopiedStore {
    static copiedColumnsCount: number = 0;
    static copiedRowsCount: number = 0;
    static copiedCellsSpritesData: CellSpritesData[][] = []

    static copyCells(cells: HTMLCanvasElement[], columns: number, rows: number){
        CopiedStore.copiedCellsSpritesData = new Array(rows);

        for (var i = 0; i < rows; i++) {
            CopiedStore.copiedCellsSpritesData[i] = new Array(columns);
        }
    }
}