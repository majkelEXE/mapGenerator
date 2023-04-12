import HistoryEntity from "../../../items/history/historyEntity";
import Settings from "../../../settings";
import CellsStore from "../../../store/cellsStore";
import { CopiedStore } from "../../../store/copiedStore";
import HistoryStore from "../../../store/historyStore";
import { SelectedStore } from "../../../store/selectedStore";
import { drawCell } from "../../drawing/drawCell";
import { drawCellTemporary } from "../../drawing/drawCellTemporary";
import { redrawCells } from "../../drawing/redrawCells";

let previousFirstSelectedColumn: number = -1;
let previousFirstSelectedRow: number = -1;

/** Loads cells sprites data from file and merges it to current work area. */
const pasteMoveAction = (e: MouseEvent) => {
    let currentX: number = e.clientX - document.getElementById("work-area")!.getBoundingClientRect().left;
    let currentY: number = e.clientY - document.getElementById("work-area")!.getBoundingClientRect().top;

    //get actual column and row

    let borderWidth = 2;
    let realColumnSize = Settings.genericCellSize + Settings.leftMargin + borderWidth;

    let firstSelectedColumn = Math.floor(currentX / realColumnSize);
    let firstSelectedRow = Math.floor(currentY / realColumnSize);

    if (previousFirstSelectedColumn != firstSelectedColumn || previousFirstSelectedRow != firstSelectedRow) {
        redrawCells(CellsStore.cells!);

        previousFirstSelectedColumn = firstSelectedColumn;
        previousFirstSelectedRow = firstSelectedRow;

        for (let i = previousFirstSelectedRow; i < previousFirstSelectedRow + CopiedStore.copiedRowsCount; i++) {
            for (
                let j = previousFirstSelectedColumn;
                j < previousFirstSelectedColumn + CopiedStore.copiedColumnsCount;
                j++
            ) {
                if (CopiedStore.copiedCellsSpritesData[i - previousFirstSelectedRow][j - previousFirstSelectedColumn]) {
                    if (i >= 0 && i < Settings.workAreaRowCount && j >= 0 && j < Settings.workAreaColumnCount) {
                        drawCellTemporary(
                            CellsStore.cells![i][j],
                            CopiedStore.copiedCellsSpritesData[i - previousFirstSelectedRow][
                                j - previousFirstSelectedColumn
                            ]!.spriteColumn,
                            CopiedStore.copiedCellsSpritesData[i - previousFirstSelectedRow][
                                j - previousFirstSelectedColumn
                            ]!.spriteRow
                        );
                    }
                }
            }
        }
    }
};

const pasteClickAction = () => {
    console.log("klik");

    for (let i = previousFirstSelectedRow; i < previousFirstSelectedRow + CopiedStore.copiedRowsCount; i++) {
        for (
            let j = previousFirstSelectedColumn;
            j < previousFirstSelectedColumn + CopiedStore.copiedColumnsCount;
            j++
        ) {
            if (CopiedStore.copiedCellsSpritesData[i - previousFirstSelectedRow][j - previousFirstSelectedColumn]) {
                if (i >= 0 && i < Settings.workAreaRowCount && j >= 0 && j < Settings.workAreaColumnCount) {
                    CellsStore.cells![i][j].classList.remove("paste-cell");
                    drawCell(
                        CellsStore.cells![i][j],
                        CopiedStore.copiedCellsSpritesData[i - previousFirstSelectedRow][
                            j - previousFirstSelectedColumn
                        ]!.spriteColumn,
                        CopiedStore.copiedCellsSpritesData[i - previousFirstSelectedRow][
                            j - previousFirstSelectedColumn
                        ]!.spriteRow
                    );
                }
            }
        }
    }
    HistoryStore.add(new HistoryEntity());
    SelectedStore.clearCellArea();

    document.getElementById("work-area")!.removeEventListener("mousemove", pasteMoveAction);
    document.getElementById("work-area")!.removeEventListener("click", pasteClickAction);
};

export const pasteAction = () => {
    if (CopiedStore.copiedColumnsCount > 0 && CopiedStore.copiedRowsCount > 0) {
        SelectedStore.clearCellArea();
        document.getElementById("work-area")!.addEventListener("mousemove", pasteMoveAction);
        document.getElementById("work-area")!.addEventListener("click", pasteClickAction);
    }
};
