import { Fish } from "./Fish.js"
import { useFish } from "./FishDataProvider.js"

export const FishList = () => {
    const contentElement = document.querySelector(".mainContainer__left")

    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    contentElement.innerHTML += `
        <h2 class="fish__header">My Fish Family</h2>
        <div class="fish">
        <ul class="fish__card">
            ${fishHTMLRepresentations}
         </ul>
        </div>
    `
}