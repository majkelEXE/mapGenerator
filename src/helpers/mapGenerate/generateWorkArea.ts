import Settings from "../../settings";
import { SelectedStore } from "../../store/selectedStore";
import { generateCell } from "./generateCell";

export const generateWorkArea = (workAreaContainer: HTMLDivElement) => {
    let counter = 0;
    for (let row: number = 0; row < Settings.workAreaRowCount; row++) {
        for (let column: number = 0; column < Settings.workAreaColumnCount; column++) {
            let workAreaCell = generateCell();
            workAreaCell.id = "" + counter;
            workAreaContainer.append(workAreaCell);

            workAreaCell.addEventListener("click", (e) => {
                SelectedStore.selectSingleCell(workAreaCell);
            });
            counter++;
        }
    }
};
