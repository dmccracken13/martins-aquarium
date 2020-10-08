export const Fish = (fishObj) => {
    return`
    <ul class="fish__card">
      <img src= ${fishObj.image}>
      <li>Species: ${fishObj.species}</li>
      <li>Length: ${fishObj.length}</li>
      <li>Name: ${fishObj.name}</li>
      <li>Location: ${fishObj.location}</li>
      <li>Food: ${fishObj.diet}</li>
    </ul>
    `
}