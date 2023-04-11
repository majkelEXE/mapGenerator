export default interface DrawCellInterface {
    (cell: HTMLCanvasElement, column: number | null, row: number | null): void;
}
