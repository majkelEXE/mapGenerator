import KeyStore from "../store/keyStore";

export const ctrlListener = () => {
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key == "Control") {
            KeyStore.ctrlKeyPressed = true;
        }
    });
    document.addEventListener("keyup", (e) => {
        if (e.key == "Control") {
            KeyStore.ctrlKeyPressed = false;
        }
    });
};
