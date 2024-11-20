//PIKODEX centered at top of page 
// all nine pikomon and their details displayed in 3 column format
// pikomon card: flex column stacked top to bottom - image, name, details

import { getPikoData } from "./database.js";
import { generatePikoHTML } from "./pikomon.js";

const pikoData = getPikoData()
const pikoHTML = generatePikoHTML(pikoData)

const pikoElement = document.getElementById("container")
pikoElement.innerHTML = pikoHTML