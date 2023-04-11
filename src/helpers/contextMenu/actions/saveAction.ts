import ExportedCellData from "../../../classes/exportedCellData";
import CellsStore from "../../../store/cellsStore";

const save = (data: string, filename: string, type: string) => {
    console.log(data, data.length);
    const blob: Blob = new Blob([data], { type: type });
    console.log(blob);

    const url = URL.createObjectURL(blob);
    console.log(url);

    const link = document.createElement("a");
    link.style.display = "none";
    link.innerText = "save";
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
        URL.revokeObjectURL(url);
        link.remove();
    }, 100);
};

export const saveAction = () => {
    const exportedCellsData: ExportedCellData[] = [];

    CellsStore.cells!.forEach((cellsRow) => {
        cellsRow.forEach((cell) => {
            if (cell.hasAttribute("spriteX") && cell.hasAttribute("spriteY"))
                exportedCellsData.push(
                    new ExportedCellData(
                        parseInt(cell.getAttribute("column")!),
                        parseInt(cell.getAttribute("row")!),
                        parseInt(cell.getAttribute("spriteX")!),
                        parseInt(cell.getAttribute("spriteY")!)
                    )
                );
            else
                exportedCellsData.push(
                    new ExportedCellData(
                        parseInt(cell.getAttribute("column")!),
                        parseInt(cell.getAttribute("row")!),
                        null,
                        null
                    )
                );
        });
    });

    const data = JSON.stringify(exportedCellsData);
    const type = "application/json";
    const filename = "data.json";
    save(data, filename, type);
};
