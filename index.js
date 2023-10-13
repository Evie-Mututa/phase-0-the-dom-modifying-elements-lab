// Remove the 'main' element with id 'main'
document.querySelector('main#main').remove();
// Create a new 'h1' element with the id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
// Set the text content for the 'h1' element
newHeader.textContent = "Everlyne Mututa is the champion";
// Append the 'h1' element to the body
document.body.appendChild(newHeader);