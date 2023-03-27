import "./style.css";
import OptionsStore from "./store/optionsStore";
import { generateItemsContainer } from "./helpers/mapGenerate/spritesItems/generateItemsContainer";
import { generateWorkAreaContainer } from "./helpers/mapGenerate/workArea/generateWorkAreaContainer";

let itemsContainer: HTMLDivElement = generateItemsContainer();

let optionContainer: HTMLDivElement = document.createElement("div");
let automatCheckbox: HTMLInputElement = document.createElement("input");
automatCheckbox.type = "checkbox";
OptionsStore.automatCheckbox = automatCheckbox;
let automatLabel: HTMLLabelElement = document.createElement("label");
automatLabel.innerText = " - automat";
optionContainer.appendChild(automatCheckbox);
optionContainer.appendChild(automatLabel);

let workAreaContainer: HTMLDivElement = generateWorkAreaContainer();

document.querySelector<HTMLDivElement>("#app")!.append(itemsContainer);
document.querySelector<HTMLDivElement>("#app")!.append(optionContainer);
document.querySelector<HTMLDivElement>("#app")!.append(workAreaContainer);
