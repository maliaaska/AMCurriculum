

 const removeItemButton = () => {
   return () => {
    console.log('its working removeItemButton');
    let ul = document.getElementById('ul-cat');
    let removeItemButton = document.createElement('BUTTON');
    let buttonText = document.createTextNode('Remove Comment');
    removeItemButton.appendChild(buttonText);
    ul.appendChild(removeItemButton);
   }
  
}
const consoleLog = () => {
  console.log("consoleLog function works");
}


   
 export const CatPosterComment = () => {
  let ul = document.getElementById('ul-cat');
  let li = document.createElement('LI');
  let input = document.getElementById('input');
  let liValue = document.getElementById('input').value;
  let removeItemButton = document.createElement('BUTTON');
  let buttonText = document.createTextNode('Remove Comment');

  li.appendChild(document.createTextNode(liValue));
  ul.style.listStyle = 'none';
  input.value = '';
  ul.appendChild(li);
  removeItemButton.appendChild(buttonText);
  ul.appendChild(removeItemButton);
}