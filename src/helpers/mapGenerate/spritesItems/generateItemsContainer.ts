import Dimens from "../../../interfaces/dimens";
import Settings from "../../../settings";
import { calcContainerDimens } from "../../calcContainerDimens";
import { generateItems } from "./generateItems";

export const generateItemsContainer = (): HTMLDivElement => {
    let itemsContainer: HTMLDivElement = document.createElement("div");
    let itemsContainerDimens: Dimens = calcContainerDimens(Settings.spritesColumnCount, Settings.spritesRowCount);
    itemsContainer.style.width = itemsContainerDimens.width + "px";
    itemsContainer.style.height = itemsContainerDimens.height + "px";
    itemsContainer.style.display = "flex";
    itemsContainer.style.flexWrap = "wrap";
    generateItems(itemsContainer);

    return itemsContainer;
};
