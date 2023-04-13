import KeyStore from "../store/keyStore";

/**
 * Control Key listner, determines if it is clicked or not.
 */
export const ctrlListener = () => {
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey && e.key == "Control") || (e.metaKey && e.key == "Meta")) {
            KeyStore.ctrlKeyPressed = true;
        }
    });
    document.addEventListener("keyup", (e) => {
        if (e.key == "Control" || e.key == "Meta") {
            KeyStore.ctrlKeyPressed = false;
        }
    });
};
