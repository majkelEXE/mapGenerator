import { copyAction } from "./contextMenu/actions/copyAction";
import { deleteAction } from "./contextMenu/actions/deleteAction";
import { loadAction } from "./contextMenu/actions/loadAction";
import { pasteAction } from "./contextMenu/actions/pasteAction";
import { redoAction } from "./contextMenu/actions/redoAction";
import { saveAction } from "./contextMenu/actions/saveAction";
import { undoAction } from "./contextMenu/actions/undoAction";

export const shortcutListener = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "z") {
        undoAction();
    }
    if (e.ctrlKey && e.key === "y") {
        redoAction();
    }
    if (e.ctrlKey && e.key === "x") {
        copyAction();
        deleteAction();
    }
    if (e.ctrlKey && e.key === "c") {
        copyAction();
    }
    if (e.ctrlKey && e.key === "v") {
        pasteAction();
    }
    if (e.key === "Delete") {
        deleteAction();
    }
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        saveAction();
    }
    if (e.ctrlKey && e.key === "l") {
        loadAction();
    }
};
