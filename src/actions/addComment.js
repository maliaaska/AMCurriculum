export const addComment = () => {

  const listDiv = document.querySelector('.list');
  const listUl = listDiv.querySelector('ul');
  const input = document.querySelector('input.input');
  const lis = listUl.children;
  const warningParagraph = document.getElementsByClassName("warning")[0];
  console.log(lis);
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  let p = document.createElement('p');
  

  listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
    }
  });

  const attachListItemButtons = (li) => {
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'remove';
    li.appendChild(remove);
  }
  
  if (input.value.length > 0) {
      li.appendChild(p);
      p.innerHTML = input.value;
      attachListItemButtons(li)
      ul.appendChild(li);
      ul.style.listStyle = 'none';
      input.value = '';
      warningParagraph.innerHTML = '';  //this line help to wipe out warning message.

  } else {
      const warningMessage = "weź kierwa wpisz ten komentarz typie";
      warningParagraph.innerHTML = warningMessage;  //This line helps to show warning message if input is blank
  }
}