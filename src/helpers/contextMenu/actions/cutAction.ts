import { copyAction } from "./copyAction";
import { deleteAction } from "./deleteAction";

/** Cuts selected cells and saves them sprites data in clipboard. */
export const cutAction = () => {
    copyAction();
    deleteAction();
};
