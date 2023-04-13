/** Stores main controls values*/
export default class OptionsStore {
    /** Checks if input for automat is selected*/
    static automatCheckbox: HTMLInputElement | null = null;
    /** Decides if context menu is displayed*/
    static contextMenuVisible: boolean;

    /** Changes contextMenuVisible controls, hides or shows context menu*/
    static toggleContextMenu() {
        OptionsStore.contextMenuVisible = !OptionsStore.contextMenuVisible;
        document.getElementById("contextMenu")!.style.display = OptionsStore.contextMenuVisible ? "flex" : "none";
    }
}
