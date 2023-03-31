import OptionsStore from "../../store/optionsStore";
import { redoAction } from "./actions/redoAction";
import { undoAction } from "./actions/undoAction";

export const generateContextMenu = (): HTMLDivElement => {
    let contextMenuOverlay: HTMLDivElement = document.createElement("div");
    contextMenuOverlay.className = "context-menu-overlay";
    contextMenuOverlay.onclick = () => OptionsStore.toggleContextMenu();
    let contextMenuContent: HTMLDivElement = document.createElement("div");
    contextMenuContent.className = "context-menu-content";
    contextMenuOverlay.appendChild(contextMenuContent);

    let undoActionElement = document.createElement("div");
    undoActionElement.innerHTML = "<p>Undo</p><p>Ctrl+Z</p>";
    undoActionElement.addEventListener("click", undoAction);
    undoActionElement.className = "context-menu-action";

    let redoActionElement = document.createElement("div");
    redoActionElement.innerHTML = "<p>Redo</p><p>Ctrl+Y</p>";
    redoActionElement.addEventListener("click", redoAction);
    redoActionElement.className = "context-menu-action";

    let cutActionElement = document.createElement("div");
    cutActionElement.innerHTML = "<p>Cut</p><p>Ctrl+X</p>";
    cutActionElement.className = "context-menu-action";

    let copyActionElement = document.createElement("div");
    copyActionElement.innerHTML = "<p>Copy</p><p>Ctrl+C</p>";
    copyActionElement.className = "context-menu-action";

    let pasteActionElement = document.createElement("div");
    pasteActionElement.innerHTML = "<p>Paste</p><p>Ctrl+V</p>";
    pasteActionElement.className = "context-menu-action";

    let deleteActionElement = document.createElement("div");
    deleteActionElement.innerHTML = "<p>Delete</p><p>Del</p>";
    deleteActionElement.className = "context-menu-action";

    let saveActionElement = document.createElement("div");
    saveActionElement.innerHTML = "<p>Save to file</p><p>Ctrl+S</p>";
    saveActionElement.className = "context-menu-action";

    let loadActionElement = document.createElement("div");
    loadActionElement.innerHTML = "<p>Load data from file</p><p>Ctrl+L</p>";
    loadActionElement.className = "context-menu-action";

    contextMenuContent.appendChild(undoActionElement);
    contextMenuContent.appendChild(redoActionElement);
    contextMenuContent.appendChild(cutActionElement);
    contextMenuContent.appendChild(copyActionElement);
    contextMenuContent.appendChild(pasteActionElement);
    contextMenuContent.appendChild(deleteActionElement);
    contextMenuContent.appendChild(saveActionElement);
    contextMenuContent.appendChild(loadActionElement);

    return contextMenuOverlay;
};
