import OptionsStore from "../../store/optionsStore";

export const generateContextMenu = (): HTMLDivElement => {
    let contextMenuOverlay: HTMLDivElement = document.createElement("div");
    contextMenuOverlay.className = "context-menu-overlay";
    contextMenuOverlay.onclick = () => OptionsStore.toggleContextMenu();
    let contextMenuContent: HTMLDivElement = document.createElement("div");
    contextMenuContent.className = "context-menu-content";
    contextMenuOverlay.appendChild(contextMenuContent);

    let undoAction = document.createElement("div");
    undoAction.innerHTML = "<p>Undo</p><p>Ctrl+Z</p>";
    undoAction.className = "context-menu-action";

    let redoAction = document.createElement("div");
    redoAction.innerHTML = "<p>Redo</p><p>Ctrl+Y</p>";
    redoAction.className = "context-menu-action";

    let cutAction = document.createElement("div");
    cutAction.innerHTML = "<p>Cut</p><p>Ctrl+X</p>";
    cutAction.className = "context-menu-action";

    let copyAction = document.createElement("div");
    copyAction.innerHTML = "<p>Copy</p><p>Ctrl+C</p>";
    copyAction.className = "context-menu-action";

    let pasteAction = document.createElement("div");
    pasteAction.innerHTML = "<p>Paste</p><p>Ctrl+V</p>";
    pasteAction.className = "context-menu-action";

    let deleteAction = document.createElement("div");
    deleteAction.innerHTML = "<p>Delete</p><p>Del</p>";
    deleteAction.className = "context-menu-action";

    let saveAction = document.createElement("div");
    saveAction.innerHTML = "<p>Save to file</p><p>Ctrl+S</p>";
    saveAction.className = "context-menu-action";

    let loadAction = document.createElement("div");
    loadAction.innerHTML = "<p>Load data from file</p><p>Ctrl+L</p>";
    loadAction.className = "context-menu-action";

    contextMenuContent.appendChild(undoAction);
    contextMenuContent.appendChild(redoAction);
    contextMenuContent.appendChild(cutAction);
    contextMenuContent.appendChild(copyAction);
    contextMenuContent.appendChild(pasteAction);
    contextMenuContent.appendChild(deleteAction);
    contextMenuContent.appendChild(saveAction);
    contextMenuContent.appendChild(loadAction);

    return contextMenuOverlay;
};
