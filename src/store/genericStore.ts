/** Stores actual spritesheet*/
export default class GenericStore {
    static sprites: HTMLImageElement = document.createElement("img");

    public static _initialize() {
        GenericStore.sprites.src = "src/sprites.png";
    }
}
GenericStore._initialize();
