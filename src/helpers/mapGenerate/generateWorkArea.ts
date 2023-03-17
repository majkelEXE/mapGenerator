export const generateWorkArea = (workAreaContainer: HTMLDivElement) => {

    for(let row: number = 0; row < 20; row++){
        for(let column: number = 0; column < 32; column++){
            let spriteCell = document.createElement("canvas");      
            spriteCell.width = 24;
            spriteCell.height = 24;
            spriteCell.style.marginLeft = "5px";
            spriteCell.style.marginBottom = "5px";
            spriteCell.style.border = "1px dashed white";
            // spriteCell.style.width = '24px';    
            // spriteCell.style.height = '24px';                    
            workAreaContainer.append(spriteCell);
        }
    }
    
}