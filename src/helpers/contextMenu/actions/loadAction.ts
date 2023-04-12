import ExportedCellData from "../../../classes/exportedCellData";
import HistoryEntity from "../../../items/history/historyEntity";
import CellsStore from "../../../store/cellsStore";
import HistoryStore from "../../../store/historyStore";
import { drawCell } from "../../drawing/drawCell";

/** Loads cells sprites data from file and merges it to current work area. */
const load = () => {
    let input: HTMLInputElement = document.getElementById("files")! as HTMLInputElement;
    console.log(input);
    let file = input.files![0];
    // console.log(files);
    // console.log(files.files);
    // file = files.files[0];

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function () {
        let exportedCellsData: ExportedCellData[] = JSON.parse(reader.result as string);
        exportedCellsData.forEach((cellData) => {
            drawCell(CellsStore.cells![cellData.row][cellData.column], cellData.spriteColumn, cellData.spriteRow);
        });
        HistoryStore.add(new HistoryEntity());
    };

    input.remove();
};

export const loadAction = () => {
    const input = document.createElement("input");
    input.id = "files";
    input.style.display = "none";
    input.type = "file";
    document.body.appendChild(input);
    input.click();
    setTimeout(() => {
        input.onchange = load;
    }, 100);
};
