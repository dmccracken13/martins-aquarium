
const tipSteps = [
    {
        maintenanceStep: `Salinity/Topping Off: Daily Heated saltwater tanks, even with a tight-fitting lid, 
        will lose water to evaporation. When this happens, you will notice your salinity starts to increase. 
        This is because when the water leaves your tank, the salt stays behind, becoming more concentrated. 
        To correct this, you will need to add heated FRESHWATER on a regular basis. It will feel very odd 
        at first, but this will keep your salinity stable. Make sure your salinity stays in range using a 
        hydrometer or refractometer.`
    },
    {
        maintenanceStep: `Water Changes: Weekly
        For the first few months of your saltwater aquarium, you will need to keep a strict water change schedule.
        When you first set up a tank and get it cycled, it will take some time for all your trophic levels to balance
        out. This is the balance between the new fish you just added, any invertebrates, such as corals or shrimp, and
        your biological filtration. Once your tank is fully cycled, you may still have a few hiccups over the first 6-8
        months. Regular water changes will help keep these from becoming a bigger problem later. This is especially
        true if you plan to keep adding live elements, such as fish or live rock, and are still finessing your equipment
        setup.`
    },
    {
        maintenanceStep: `Use a gravel or sand siphon to get into the deeper layers of your substrate. This will 
        not hurt the bacteria living in the substrate! If you can, move your décor or live rock and vacuum underneath. 
        You’d be surprised how much debris can pile up these elements. Be cautious not to disturb any bottom dwellers! 
        You can make new piles of substrate for any burrowing fish, but be sure not to suck them up or squish them.`
    },
    {
        maintenanceStep: `Maintaining Filtration: Weekly
        Part of your water change regimen should be inspecting your filter media. No matter what kind of filter
        media you choose, it should allow water to flow freely and not collect lots of debris. You never want to replace
        your filter media unless it is falling apart. After you have collected your waste water from your water change,
        use that water to rinse your filtration. Never rinse your filter media in freshwater. Once you have removed the
        larger debris, be sure to wipe out the container and replace the media. It will not look or smell clean–that’s
        the point! You want to keep your biological filtration bacteria in their place.`
    },
    {
        maintenanceStep: `Saltwater: As Needed
        If you are keeping saltwater fish, you will need a way to collect or make saltwater. If you live close to a
        beach and plan on collecting water, make sure it has been properly tested and is allowed by your local laws.
        It is strongly recommended that you sterilize “wild” water for at least 24 hours with a UV sterilizer so you
        don’t bring in any dangerous or nuisance pathogens from the wild. If you don’t have access to a supply of 
        ready-made seawater, you will have to make your own. You can start with tap, well or RO water. If you are 
        using tap or well water, be sure it is tested prior to making your saltwater. There are many different salt 
        mixes you can use, and they will be specific to an all-fish saltwater aquarium or one for fish and corals. 
        Corals require more carbonate and phosphate to make their rocky homes and will need these coral-specific 
        salt mixes. When you are first getting started with saltwater, it is recommended that you start with fish 
        only. Adding corals will require more specific tank, light, water flow and saltwater requirements.`
    },
    {
        maintenanceStep: `Scrub Algae: Weekly
        Fish + water = algae; there’s no way around it. If you have corals, their strong lights will often make
        algae problems worse. Scrubbing your glass or acrylic with an appropriate scrubber on a regular basis will help
        with build up. If you have a severe algae problem, check your water quality. Lots of phosphate and nitrate will
        cause algae blooms.`
    },
    {
        maintenanceStep: `Check Water Quality: Daily/Weekly/Monthly
        Maintaining good water quality is essential to ALL aquariums, both fresh and saltwater. A good saltwater
        aquarium plan will allow your system to be set up correctly with proper filtration. When you are first
        starting out and your tank is still cycling, you will need to check your water chemistry daily. This is especially
        critical if you are cycling your tank with fish. Once you have made it past the initial cycling period, you
        can scale back to checking your water chemistry weekly, but only if you are not in the process of adding more
        fish, invertebrates or equipment. If you are still adding elements, keep testing daily. Waiting too long between
        testing when you are still manipulating your nitrogen cycle can be disastrous if you do not catch any
        problems early. Once you are done adding or making changes to your system, give it 4 weeks to settle out, then you
        can start cutting back on your testing.

        Saltwater fish are significantly more strict about their pH than most freshwater fish. It is critical to
        maintain a consistent pH for any saltwater system. Most salt mixes will include enough carbonate buffers to
        keep your pH stable, but it is still important to check regularly.

        Replace your liquid-based test kit yearly. The “expiration dates” printed on the packages are only for the
        stores that sell them. Once you open the bottles, you have one year to use the liquid. If you are using an
        electronic probe, be sure to calibrate it at least once a month per the manufacturer’s instructions.

        The only parameter you must always test daily is temperature. Do not rely on sticky, external thermometers.
        Invest a few dollars in a submerged thermometer or a few more for a fancy digital one. Check it daily to
        make
        sure your heaters are functioning correctly. Cold saltwater fish are not happy and will easily sicken and
        die.`
    }
]
export const useTip = () => {
    return tipSteps.slice()
}
