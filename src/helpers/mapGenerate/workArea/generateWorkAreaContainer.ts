import Dimens from "../../../interfaces/dimens";
import Settings from "../../../settings";
import { generateWorkArea } from "./generateWorkArea";
import { calcContainerDimens } from "../../calcContainerDimens";
import CellsStore from "../../../store/cellsStore";
import { SelectedStore } from "../../../store/selectedStore";
import OptionsStore from "../../../store/optionsStore";

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

    let startX = 0;
    let startY = 0;

    let absoluteStartX = 0;
    let absoluteStartY = 0;
    let absoluteStopX = 0;
    let absoluteStopY = 0;

    let selectedArea = document.createElement("div");
    selectedArea.className = "selected-area";
    workAreaContainer.appendChild(selectedArea);

    let latestFirstSelectedColumn = 0;
    let latestLastSelectedColumn = 0;
    let latestFirstSelectedRow = 0;
    let latestLastSelectedRow = 0;

    const drawRect = (e: MouseEvent) => {
        let currentX = e.clientX - workAreaContainer.getBoundingClientRect().left;
        let currentY = e.clientY - workAreaContainer.getBoundingClientRect().top;

        if (currentX < startX) {
            absoluteStartX = currentX;
            absoluteStopX = startX;
        } else {
            absoluteStartX = startX;
            absoluteStopX = currentX;
        }

        if (currentY < startY) {
            absoluteStartY = currentY;
            absoluteStopY = startY;
        } else {
            absoluteStartY = startY;
            absoluteStopY = currentY;
        }

        selectedArea.style.left = absoluteStartX + "px";
        selectedArea.style.top = absoluteStartY + "px";
        selectedArea.style.width = absoluteStopX - absoluteStartX + "px";
        selectedArea.style.height = absoluteStopY - absoluteStartY + "px";

        let firstSelectedColumn = Math.floor(absoluteStartX / realColumnSize);
        let lastSelectedColumn = Math.floor(absoluteStopX / realColumnSize);
        let firstSelectedRow = Math.floor(absoluteStartY / realColumnSize);
        let lastSelectedRow = Math.floor(absoluteStopY / realColumnSize);

        if (
            firstSelectedRow != latestFirstSelectedRow ||
            lastSelectedRow != latestLastSelectedRow ||
            firstSelectedColumn != latestFirstSelectedColumn ||
            lastSelectedColumn != latestLastSelectedColumn
        ) {
            SelectedStore.selectCellArea(firstSelectedColumn, lastSelectedColumn, firstSelectedRow, lastSelectedRow);

            latestFirstSelectedRow = firstSelectedRow;
            latestLastSelectedRow = lastSelectedRow;
            latestFirstSelectedColumn = firstSelectedColumn;
            latestLastSelectedColumn = lastSelectedColumn;
        }
    };

    workAreaContainer.addEventListener("mousedown", (e) => {
        console.log(workAreaContainer.offsetTop);
        startX = e.clientX - workAreaContainer.getBoundingClientRect().left;
        startY = e.clientY - workAreaContainer.getBoundingClientRect().top;

        console.log(CellsStore.cells);

        selectedArea.style.display = "block";

        workAreaContainer.addEventListener("mousemove", drawRect);
    });

    workAreaContainer.addEventListener("mouseup", () => {
        workAreaContainer.removeEventListener("mousemove", drawRect);

        selectedArea.style.width = 0 + "px";
        selectedArea.style.height = 0 + "px";
        selectedArea.style.display = "none";

        startX = 0;
        startY = 0;

        absoluteStartX = 0;
        absoluteStartY = 0;
        absoluteStopX = 0;
        absoluteStopY = 0;

        latestFirstSelectedColumn = 0;
        latestLastSelectedColumn = 0;
        latestFirstSelectedRow = 0;
        latestLastSelectedRow = 0;
    });
    //

    workAreaContainer.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        OptionsStore.toggleContextMenu();
    });

    return workAreaContainer;
};
