import './style.css'
import { generateItems } from "./helpers/mapGenerate/generateItems"
import { generateWorkArea } from "./helpers/mapGenerate/generateWorkArea"

let itemsContainer = document.createElement("div");
itemsContainer.style.width = "435px";
itemsContainer.style.display = "flex";
itemsContainer.style.flexWrap = "wrap";
generateItems(itemsContainer)

let workAreaContainer = document.createElement("div");
workAreaContainer.style.width = "1515px";
workAreaContainer.style.display = "flex";
workAreaContainer.style.flexWrap = "wrap";
generateWorkArea(workAreaContainer)

document.querySelector<HTMLDivElement>('#app')!.append(itemsContainer);
document.querySelector<HTMLDivElement>('#app')!.append(workAreaContainer);
