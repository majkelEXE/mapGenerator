import "./style.css";
import { generateItems } from "./helpers/mapGenerate/generateItems";
import { generateWorkArea } from "./helpers/mapGenerate/generateWorkArea";
import { calcContainerDimens } from "./helpers/mapGenerate/calcContainerDimens";
import Settings from "./settings";
import OptionsStore from "./store/optionsStore";
import Dimens from "./interfaces/dimens";

let itemsContainer: HTMLDivElement = document.createElement("div");
let itemsContainerDimens: Dimens = calcContainerDimens(Settings.spritesColumnCount, Settings.spritesRowCount);
itemsContainer.style.width = itemsContainerDimens.width + "px";
itemsContainer.style.height = itemsContainerDimens.height + "px";
itemsContainer.style.display = "flex";
itemsContainer.style.flexWrap = "wrap";
generateItems(itemsContainer);

let optionContainer: HTMLDivElement = document.createElement("div");
let automatCheckbox: HTMLInputElement = document.createElement("input");
automatCheckbox.type = "checkbox";
OptionsStore.automatCheckbox = automatCheckbox;
let automatLabel: HTMLLabelElement = document.createElement("label");
automatLabel.innerText = " - automat";
optionContainer.appendChild(automatCheckbox);
optionContainer.appendChild(automatLabel);

let workAreaContainer: HTMLDivElement = document.createElement("div");
let workAreaContainerDimens: Dimens = calcContainerDimens(Settings.workAreaColumnCount, Settings.workAreaRowCount);
workAreaContainer.className = "work-area";
workAreaContainer.style.width = workAreaContainerDimens.width + "px";
workAreaContainer.style.height = workAreaContainerDimens.height + "px";
workAreaContainer.style.display = "flex";
workAreaContainer.style.flexWrap = "wrap";
generateWorkArea(workAreaContainer);

document.querySelector<HTMLDivElement>("#app")!.append(itemsContainer);
document.querySelector<HTMLDivElement>("#app")!.append(optionContainer);
document.querySelector<HTMLDivElement>("#app")!.append(workAreaContainer);
