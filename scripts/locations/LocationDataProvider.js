const locationList = [
    {
        name: "Komodo National Park",
        coordinates: "-8.543333, 119.489441",
        image: "https://i.ytimg.com/vi/_UU5CDDuYu8/maxresdefault.jpg",
        description: `Komodo National Park (Indonesian: Taman Nasional Komodo) is a 
        national park in Indonesia located within the Lesser Sunda Islands in the border 
        region between the provinces of East Nusa Tenggara and West Nusa Tenggara. 
        The park includes the three larger islands Komodo, Padar and Rinca, 
        and 26 smaller ones, with a total area of 1,733 km2 (603 km2 of it land). 
        The national park was founded in 1980 to protect the Komodo
        dragon, the world's largest lizard.[3] Later it was dedicated to protecting other 
        species, including marine species. In 1991 the national park was declared a 
        UNESCO World Heritage Site.

        Komodo National Park has been selected as one of the New7Wonders of Nature.
        The waters surrounding Komodo island contain rich marine biodiversity. 
        Komodo islands is also a part of the Coral Triangle, which contains
        some of the richest marine biodiversity on Earth.`
    },
    {
        name: "Carribean Sea",
        coordinates: "15.326572, -76.157227",
        image: "https://www.charteranddreams.com/media/articles/noticias/foto-1-caribe.jpg",
        description: `The Caribbean Sea is an American mediterranean sea
            of the Atlantic Ocean in the tropics of the Western Hemisphere. 
            It is bounded by Mexico and Central America to the west and south west, 
            to the north by the Greater Antilles starting with Cuba, to the east by the
            Lesser Antilles, and to the south by the north coast of South America.

            The entire area of the Caribbean Sea, the numerous islands of the West Indies, 
            and adjacent coasts, are collectively known as the Caribbean. The Caribbean Sea 
            is one of the largest seas and has an area of about 2,754,000 km2 (1,063,000 sq mi).
            The sea's deepest point is the Cayman Trough, between the Cayman Islands and Jamaica, 
            at 7,686 m (25,217 ft) below sea level. The Caribbean coastline has many gulfs and
            bays: the Gulf of Gonâve, Gulf of Venezuela, Gulf of Darién, Golfo de los Mosquitos, 
            Gulf of Paria and Gulf of Honduras.

            Coral reef, near Soufrière Quarter, Saint Lucia. The Caribbean Sea has the world's 
            second largest barrier reef, the Mesoamerican Barrier Reef. It runs 1,000
            km (620 mi) along the coasts of Mexico, Belize, Guatemala, and Honduras.`
    },  
    {
        name: "Devil's Crown, Galápagos Islands",
        coordinates: "1.2748, 90.4864",
        image: "https://www.sancristobalgalapagos.gob.ec/en/images/corona.jpg",
        description: `Located off of Floreana Island, the Devil's Crown is a ring of jagged 
        rocks that jut out of the water not too far from shore. They get their name from the 
        fact that they look roughly like a crown: they are in a circle and rather pointy when 
        seen from a distance. The rest of the name comes from the notion that only the Devil 
        could wear something so uncomfortable! The Devil's Crown was once a volcanic crater, 
        ages ago. As the earth's crust moved, the volcano became inactive, and time eroded 
        most of it away, leaving only a few rocks. It's fortunate that these rocks are still 
        there, as many think the Devil's Crown is the premier snorkelling spot in all of 
        Galapagos. SCUBA divers also like to dive there, as there is a chance of seeing some
        spectacular marine life. Why is it such a great place to snorkel? There are several 
        reasons. First of all, the rocks make the site an attractive place for small fish, 
        which form a key link in the food chain. These attract larger fish, and so on. Snorkelers 
        can expect to see a variety of dazzling reef fish at Devil's Crown. Because it is so close
        to shore, it is relatively protected from winds and currents, and although the swimming 
        is challenging, it is not as hard as it would be further out. On one side of the rocks, 
        the water is deep and the current is swift: this is where lucky snorkelers occasionally 
        see something spectacular, such as a Hammerhead Shark, White-tipped Reef Shark, sea turtle, 
        or large ray such as a Manta or Spotted Eagle Ray.`
    }
]
export const useLocation = () => {
    return locationList.slice()
}