
const travelAdvice = [
    {
        travelTip: `Do a practice dive. This is highly recommended as it is a chance to get familiar 
        with snorkeling gear, practice breathing techniques, and get comfortable in the water.`
    },
    {
        travelTip: `Ensure you have the right gear. Styles, sizes and prices are all things to 
        consider when getting snorkeling gear. It is also important to decide whether you want to 
        invest in your own equipment or rent some out for the day.`
    },
    {
        travelTip: `Choose a location. Several factors are important when selecting a location. 
        Choose one that matches your level of experience and inquire about regular sea life sightings 
        in that area before making a commitment. Understand that the day you choose may not be the 
        best day for sightings. Nevertheless, you’re bound to spot something exciting!`
    },
]
export const useTip = () => {
    return travelAdvice.slice()
}
