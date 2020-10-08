import { Tip } from "/scripts/tips/Tip.js"
import { useTip } from "/scripts/tips/TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".mainContainer__right")

    const tips = useTip()

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tip(tip)
    }

    contentElement.innerHTML += `
        <aside>
        <h2 class="tip__header">Tank Maintenance</h2>
        <p class="tip__list">
            <li class="tip__card>
            ${tipsHTMLRepresentations}
            </li>
        </p>
        </aside>
    `
}