import Settings from "../../settings";

export const generateCell = (): HTMLCanvasElement => {
    let cell: HTMLCanvasElement = document.createElement("canvas");
    cell.className = "cell";
    cell.width = Settings.genericCellSize;
    cell.height = Settings.genericCellSize;
    cell.style.marginLeft = Settings.leftMargin + "px";
    cell.style.marginBottom = Settings.bottomMargin + "px";

    return cell;
};
