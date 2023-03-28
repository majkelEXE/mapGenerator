export const drawCell = (cell: HTMLCanvasElement, sprites: HTMLImageElement, column: number, row: number) => {
    let cellCtx: CanvasRenderingContext2D = cell.getContext("2d")!;
    cellCtx.drawImage(sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
    cell.setAttribute("spriteX", `${48 * column}`);
    cell.setAttribute("spriteY", `${48 * row}`);
};
