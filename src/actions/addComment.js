
   
export const addComment = () => {
  
  const listDiv = document.querySelector('.list');
  const listUl = listDiv.querySelector('ul');
  const addItemInput = document.querySelector('input.addItemInput');
  const lis = listUl.children;
  console.log(lis);
    
  listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      if(event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      } 
    }
  });
  // function attachListItemButtons(li) {
  //   let remove = document.createElement('button');
  //   remove.className = 'remove';
  //   remove.textContent = 'remove';
  //   li.appendChild(remove);
  // }

  function attachListItemButtons(li) {
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'remove';
    li.appendChild(remove);
  }

    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    // li.setAttribute('class', 'comment-list');
    let p = document.createElement('p');
    li.appendChild(p);
    p.innerHTML = addItemInput.value;
    attachListItemButtons(li)
    ul.appendChild(li);
    ul.style.listStyle = 'none';
    addItemInput.value = '';

   
 }
