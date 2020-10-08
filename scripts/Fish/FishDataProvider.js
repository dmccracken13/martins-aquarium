
const fishCollection = [
    {
        name: "Pennywise",
        food: "Fish of equal or smaller size",
        species:"Clown Frogfish (Antennarius maculatus)",
        length: 5.9,
        location:"Komodo National Park",
        image:"https://pics.livejournal.com/tickflicker/pic/0001r2h5",
    },
    {
        name: "Liz",
        food: "Algal turf, sponges, and other encrusting organisms",
        species: "Queen Parrot Fish (Scarus vetula)",
        length: 24,
        location: "Carribean Sea",
        image: "https://fish101.community.uaf.edu/wp-content/uploads/sites/14/2013/02/Pfish3.jpg"
    },
    {
        name: "Warren",
        food: "Sponges, sessile invertebrates, zooplankton, and certain species of benthic microalgae",
        species: "King Angel Fish (Holacanthus Passer)",
        length: 13.7,
        location: "Devil's Crown, Galápagos Islands",
        image: "https://www.livetropicalfish.net/wp-content/uploads/2018/11/Emperor-angelfish.jpg"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}