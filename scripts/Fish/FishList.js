import { Fish } from "/scripts/Fish/Fish.js"
import { mostHolyFish, soldierFish, nonHolyFish } from "/scripts/Fish/FishDataProvider.js"

const buildFishContainerHTML = (arrayOfFish) => {

let fishHTMLRepresentations = ""
for (const fish of arrayOfFish) {
    
    fishHTMLRepresentations += Fish(fish)
    }
    return fishHTMLRepresentations
}

export const FishList = () => {
    const contentElement = document.querySelector(".mainContainer__left")

    
    const holyFishes = mostHolyFish()
    console.log(holyFishes)

    const holyFishHTML = buildFishContainerHTML(holyFishes)
    console.log(holyFishHTML)
   
    const soldierFishes = soldierFish()
    const soldierFishHTML = buildFishContainerHTML(soldierFishes)

    const regularFishes = nonHolyFish()
    const regularFishHTML = buildFishContainerHTML(regularFishes)

    contentElement.innerHTML += `
        <h2 class="fish__header">My Fish Family</h2>
        <div class="fish">
        <ul class="fish__card">
            ${holyFishHTML}
            ${soldierFishHTML}
            ${regularFishHTML}
        </ul>
        </div>
    `
}