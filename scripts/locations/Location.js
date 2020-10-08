export const Location = (locationObj) => {
    return`
    <ul class="locations__card">
      <li>Name: ${locationObj.name}>
      <li>Coordinates: ${locationObj.coordinates}</li>
      <img src= ${locationObj.image}>
      <li>Description: ${locationObj.description}</li>
    </ul>
    `
}