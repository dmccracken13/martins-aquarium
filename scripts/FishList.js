export const FishList = () => {
    const contentElement = document.querySelector("mainContainer__left")

    contentElement.innerHTML += `
    <section class="mainContainer__left">
    <h2 class="fish__header">My Fish Family</h2>
    <div class="fish">
    <ul class="fish__card">
    Placeholder for list of fishes
    </ul>
    </div>
    </section>
`
}