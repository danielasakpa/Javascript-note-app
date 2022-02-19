var input = document.querySelector('#text-input');


document.querySelector("#ad-note-btn").addEventListener("click",  () => {
   if (input.value.length > 1) {
      // GET-INPUT-VALUE
      var getvalue = input.value;
      // CREATE-NEW-NOTE
      const newLi = document.createElement("textarea");
      newLi.value =  getvalue;
      newLi.className =  "note-li";
      // ADD-NEW-NOTE
      var ul = document.querySelector('#list-items');
      ul.appendChild(newLi);



      // EMPTY-INPUT-WHEN-CREATING-NEW-NOTES
      input.value = " ";
    
      //  DELETE-NOTES
      const dleLi = document.createElement("button");
      dleLi.textContent = "delete";
      dleLi.className = "list-btn";
      ul.appendChild(dleLi);
      dleLi.addEventListener("click", () => {
         newLi.remove();
         dleLi.remove();
         edLi.remove();
         saveLi.remove();
     })
    
   //   EDIT-NOTES
     const edit = () => {
       if( newLi.value.length > 0 ) {
          newLi.disabled = true; 
       } else {
          newLi.disabled = false; 
       }
     }
    
     edit()
    
    const edLi = document.createElement("button");
    edLi.textContent = "Edit";
    ul.appendChild(edLi);
    edLi.className = "list-btn";
    edLi.addEventListener("click", () => {
       if ( newLi.disabled = true ) {
          newLi.disabled = false; 
       }else {
          newLi.disabled = true; 
       }
    })
    
    const saveLi = document.createElement("button");
    saveLi.textContent = "save";
    ul.appendChild(saveLi);
    saveLi.className = "list-btn";
    saveLi.addEventListener("click", () => {
       edit();
    })

    var todoList = JSON.parse(localStorage.getItem('todo-list'));
    todoList.push(newLi)
    localStorage.setItem('todo-list', JSON.stringify(todoList));

    
   } else {
      ul.appendChild();
   }


})

 
document.querySelector("#clear-btn").addEventListener("click", () => {
   input.value = " ";
})




