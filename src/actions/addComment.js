



export const CatPosterComment = () => {
  let ul = document.getElementById('ul-cat');
  let li = document.createElement('LI');
  let input = document.getElementById('input');
  let liValue = document.getElementById('input').value;
  li.appendChild(document.createTextNode(liValue));
  ul.style.listStyle = 'none';
  input.value = '';
  ul.appendChild(li);
}
   
