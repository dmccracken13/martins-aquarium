import { Location } from "/scripts/locations/Location.js"
import { useLocation } from "/scripts/locations/LocationDataProvider.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".mainContainer__left")

    const locations = useLocation()

    let locationHTMLRepresentation = ""
    for (const location of locations) {
        locationHTMLRepresentation += Location(location)
    }

    contentElement.innerHTML += `
        <h2 class="locations">Harvesting Locations</h2>
            <section class="travel__locations">
                <div class="locations__card">
                ${locationHTMLRepresentation}
                </div>
            </section>
    `
}