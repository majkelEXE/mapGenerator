export default class OptionsStore {
    static automatCheckbox: HTMLInputElement | null = null;
    static contextMenuVisible: boolean;

    static toggleContextMenu() {
        OptionsStore.contextMenuVisible = !OptionsStore.contextMenuVisible;
        document.getElementById("contextMenu")!.style.display = OptionsStore.contextMenuVisible ? "flex" : "none";
    }
}
