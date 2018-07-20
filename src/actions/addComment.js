




export const CatPosterComment = () => {
  const ul = document.getElementById('ul-cat');
  const li = document.createElement('LI');
  const liValue = document.getElementById('input').value;
  li.appendChild(document.createTextNode(liValue));
  const input = document.getElementById('input');
  input.value = '';
  ul.appendChild(li)
}
  
   
