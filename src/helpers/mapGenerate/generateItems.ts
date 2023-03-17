//https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3

export const generateItems = (itemsContainer: HTMLDivElement) => {
    let sprites:HTMLImageElement = document.createElement("img");
    sprites.src = 'src/sprites.png';

    // let itemsContainer = document.createElement("div");
    // itemsContainer.style.width = "480px";
    sprites.onload = ()=>{
        for(let row: number = 0; row < 20; row++){
            for(let column: number = 0; column < 32; column++){
                let spriteCell = document.createElement("canvas");      
                spriteCell.width = 24;
                spriteCell.height = 24;
                spriteCell.style.marginLeft = "5px";
                spriteCell.style.marginBottom = "5px";
                spriteCell.style.border = "1px dashed white";
                // spriteCell.style.width = '48px';    
                // spriteCell.style.height = '48px';                    
                itemsContainer.append(spriteCell);
    
                let ctx: CanvasRenderingContext2D = spriteCell.getContext('2d')!;
                ctx.drawImage(sprites, 48 * column, 48 * row, 48, 48, 0, 0, 24, 24);
            }
        }
    }
    
}