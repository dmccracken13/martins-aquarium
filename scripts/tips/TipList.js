import { Tip } from "/scripts/tips/Tip.js"
import { useTip } from "/scripts/tips/TipDataProvider.js"

export const TipList = () => {
    const contentElement = document.querySelector(".mainContainer__left")

    const tips = useTip()

    let tipsHTMLRepresentations = ""
    for (const tip of tips) {
        tipsHTMLRepresentations += Tip(tip)
    }

    contentElement.innerHTML += `
        <h2>Travel</h2>
            <div class="travel">
                <h3 class="tip__header">Travel Tips</h3>
                    <section class="travel__tips>
                        <p class="tip">
                        ${tipsHTMLRepresentations}
                         </p>
                    </section>
            </div>
    `
}