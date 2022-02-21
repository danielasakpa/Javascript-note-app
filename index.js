var input = document.querySelector('#text-input');
var ul = document.querySelector('#list-items');
var noteNum = " ";

 
// INCREMENTING-liNum
noteLi = () =>  noteNum++;




document.querySelector("#ad-note-btn").addEventListener("click",  () => {
   // TO-PREVENT-EMPTY-NOTE
   if (input.value.length > 1) {
      // GET-INPUT-VALUE
      var getvalue = input.value;
      var container = document.createElement("div")
      ul.appendChild(container)
     
      // CALL-liNum
      noteLi()

      // GET-CURRENT-DATE
      var today = new Date();

      var currentDay = today.getDay();
  
      var day = " ";
  
      const options = {
          weekday: "long",
          day: "numeric",
          month: "long"
      }
  
      var day = today.toLocaleDateString("en-US", options)

      // ADD-NOTE-DATE
      const date = document.createElement("p")
      date.textContent = day;
      date.className = "notedate";
      container.appendChild(date);


      

      // NOTE-HEADER
      const noteHeader = document.createElement("h2")
      noteHeader.textContent = noteNum + ":   " + getvalue;
      noteHeader.className = "noteheader";
      container.appendChild(noteHeader);

      // CREATE-NEW-NOTE
      const newLi = document.createElement("textarea");
      newLi.className =  "note-li";

      // ADD-NEW-NOTE
      container.appendChild(newLi);


      // EMPTY-INPUT-WHEN-CREATING-NEW-NOTES
      input.value = " ";
    
      //  DELETE-NOTES
      const dleLi = document.createElement("button");
      dleLi.textContent = "delete";
      dleLi.className = "list-btn";
      container.appendChild(dleLi);
      dleLi.addEventListener("click", deleteLi = () => {
         noteHeader.remove()
         newLi.remove();
         dleLi.remove();
         edLi.remove();
         saveLi.remove();
  
      // TRACKING-noteNum
      isEmpty = id => {
         return document.querySelector(id).innerHTML.trim() == ""
      }
             
      if (isEmpty('#list-items') == true) {
         noteNum = " "
      } else {
         noteNum--
      }
             
     });

     //   EDIT-LIST
     const edLi = document.createElement("button");
     edLi.textContent = "Edit";
     container.appendChild(edLi);
     edLi.className = "list-btn";
     edLi.addEventListener("click", () => {
      newLi.disabled = false; 
     });
 
    //   SAVE-LIST
    const saveLi = document.createElement("button");
    saveLi.textContent = "save";
    container.appendChild(saveLi);
    saveLi.className = "list-btn";
    saveLi.addEventListener("click", () => {
       if (newLi.value.length > 1) {
         newLi.disabled = true;
      } else {
         deleteLi()
       }
   });

   } else {
      ul.appendChild();
   }

})




document.querySelector("#clear-btn").addEventListener("click", () => {
   input.value = " ";
})




let el = document.getElementById('div-03').previousElementSibling;
console.log(el);


