import { undoAction } from "./contextMenu/actions/undoAction";

export const shortcutListener = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "z") {
        console.log("CTRL+Z");
        undoAction();
    }
    if (e.ctrlKey && e.key === "y") {
        console.log("CTRL+Y");
    }
    if (e.ctrlKey && e.key === "x") {
        console.log("CTRL+X");
    }
    if (e.ctrlKey && e.key === "c") {
        console.log("CTRL+C");
    }
    if (e.ctrlKey && e.key === "v") {
        console.log("CTRL+V");
    }
    if (e.key === "Delete") {
        console.log("Del");
    }
    if (e.ctrlKey && e.key === "s") {
        console.log("CTRL+S");
    }
    if (e.ctrlKey && e.key === "l") {
        console.log("CTRL+L");
    }
};
