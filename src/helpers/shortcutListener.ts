import { copyAction } from "./contextMenu/actions/copyAction";
import { cutAction } from "./contextMenu/actions/cutAction";
import { deleteAction } from "./contextMenu/actions/deleteAction";
import { loadAction } from "./contextMenu/actions/loadAction";
import { pasteAction } from "./contextMenu/actions/pasteAction";
import { redoAction } from "./contextMenu/actions/redoAction";
import { saveAction } from "./contextMenu/actions/saveAction";
import { undoAction } from "./contextMenu/actions/undoAction";

/**
 * Key listener, determines what key is already clicked or what shortcut is invoked.
 *
 * @param e event containg data about clicked keys.
 */
export const shortcutListener = (e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        undoAction();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "y") {
        redoAction();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "x") {
        cutAction();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        copyAction();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "v") {
        pasteAction();
    }
    if (e.key === "Delete") {
        deleteAction();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        saveAction();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === "l") {
        loadAction();
    }
};
