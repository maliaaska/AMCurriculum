
   
export const addComment = () => {
  
  const listDiv = document.querySelector('.list');
  const listUl = listDiv.querySelector('ul');
  const addItemInput = document.querySelector('input.addItemInput');
  const lis = listUl.children;
  console.log(lis);

  function attachListItemButtons(li) {
    if(addItemInput.value !== '' ) {
      let remove = document.createElement('button');
      remove.className = 'remove';
      remove.textContent = 'remove';
      li.appendChild(remove);
    }
    // for ( let i = 0; i < lis.length; i += 1) {
    //   attachListItemBottons(lis[i]);
    // }
    }
    
  
  
  listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      if(event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      } 
    }
  });


    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li)
    ul.appendChild(li);
    ul.style.listStyle = 'none';
    addItemInput.value = '';

 }
