import './style.css'
import { generateItems } from "./helpers/mapGenerate/generateItems"

let itemsContainer = document.createElement("div");
itemsContainer.style.width = "360px";
itemsContainer.style.display = "flex";
itemsContainer.style.flexWrap = "wrap";
generateItems(itemsContainer)

document.querySelector<HTMLDivElement>('#app')!.append(itemsContainer);
