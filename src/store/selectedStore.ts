export class SelectedStore {
    static singleCell: HTMLCanvasElement | null = null;

    static selectSingleCell = (selectedCell: HTMLCanvasElement) => {
        if (SelectedStore.singleCell != null) {
            SelectedStore.singleCell.classList.remove("selected-cell");
        }

        SelectedStore.singleCell = selectedCell;
        SelectedStore.singleCell.classList.add("selected-cell");
    };

    static deselectSingleCell = () => {
        if (SelectedStore.singleCell != null) {
            SelectedStore.singleCell.classList.remove("selected-cell");
            SelectedStore.singleCell = null;
        }
    };
}
