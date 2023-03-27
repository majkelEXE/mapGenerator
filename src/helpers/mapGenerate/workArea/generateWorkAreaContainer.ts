import Dimens from "../../../interfaces/dimens";
import Settings from "../../../settings";
import { generateWorkArea } from "./generateWorkArea";
import { calcContainerDimens } from "../../calcContainerDimens";
import CellsStore from "../../../store/cellsStore";

export const generateWorkAreaContainer = (): HTMLDivElement => {
    let workAreaContainer: HTMLDivElement = document.createElement("div");
    let workAreaContainerDimens: Dimens = calcContainerDimens(Settings.workAreaColumnCount, Settings.workAreaRowCount);
    workAreaContainer.className = "work-area";
    workAreaContainer.style.width = workAreaContainerDimens.width + "px";
    workAreaContainer.style.height = workAreaContainerDimens.height + "px";
    workAreaContainer.style.display = "flex";
    workAreaContainer.style.flexWrap = "wrap";
    generateWorkArea(workAreaContainer);

    //
    let borderWidth = 2;
    let realColumnSize = Settings.genericCellSize + Settings.leftMargin + borderWidth;

    let start_x = 0;
    let start_y = 0;

    let absolute_start_x = 0;
    let absolute_start_y = 0;
    let absolute_stop_x = 0;
    let absolute_stop_y = 0;

    let selectedArea = document.createElement("div");
    selectedArea.className = "selected-area";
    workAreaContainer.appendChild(selectedArea);

    const drawRect = (e: MouseEvent) => {
        let current_x = e.clientX - workAreaContainer.getBoundingClientRect().left;
        let current_y = e.clientY - workAreaContainer.getBoundingClientRect().top;

        if (current_x < start_x) {
            absolute_start_x = current_x;
            absolute_stop_x = start_x;
        } else {
            absolute_start_x = start_x;
            absolute_stop_x = current_x;
        }

        if (current_y < start_y) {
            absolute_start_y = current_y;
            absolute_stop_y = start_y;
        } else {
            absolute_start_y = start_y;
            absolute_stop_y = current_y;
        }

        selectedArea.style.left = absolute_start_x + "px";
        selectedArea.style.top = absolute_start_y + "px";
        selectedArea.style.width = absolute_stop_x - absolute_start_x + "px";
        selectedArea.style.height = absolute_stop_y - absolute_start_y + "px";

        let first_selected_column = Math.floor(absolute_start_x / realColumnSize);
        let last_selected_column = Math.floor(absolute_stop_x / realColumnSize);
        let first_selected_row = Math.floor(absolute_start_y / realColumnSize);
        let last_selected_row = Math.floor(absolute_stop_y / realColumnSize);

        for (let i = first_selected_row; i <= last_selected_row; i++) {
            for (let j = first_selected_column; j <= last_selected_column; j++) {
                CellsStore.cells![i][j].style.backgroundColor = "red";
            }
        }

        console.log(first_selected_column);
        console.log(last_selected_column);
        console.log(first_selected_row);
        console.log(last_selected_row);

        // console.log(start_x);
        // console.log(start_y);
        // console.log(e);
    };

    workAreaContainer.addEventListener("mousedown", (e) => {
        console.log(workAreaContainer.offsetTop);
        start_x = e.clientX - workAreaContainer.getBoundingClientRect().left;
        start_y = e.clientY - workAreaContainer.getBoundingClientRect().top;

        console.log(CellsStore.cells);

        selectedArea.style.display = "block";

        workAreaContainer.addEventListener("mousemove", drawRect);
    });

    workAreaContainer.addEventListener("mouseup", () => {
        workAreaContainer.removeEventListener("mousemove", drawRect);

        selectedArea.style.display = "none";
    });
    //

    return workAreaContainer;
};
