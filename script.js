// 1.	Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
window.addEventListener("load", function(){

// 2.	Replace the text "Change me" with "Hello World!"
   const header = document.querySelector("#change_heading");
   header.innerHTML = "Hello World!";
  
// 3.	When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

let hover = document.getElementsByClassName("selected");
  let elemntColor = document.querySelector("section");
  let colorHover = elemntColor.children; 
   for (let i = 0; i < colorHover.length; i++){
    document.addEventListener("mouseover", function(){
      if (colorHover[i] == colorHover[0]){
      var result = hover.innerHTML = "Brown";
    }
    else if(colorHover[i] == colorHover[1]){
     result = hover.innerHTML = "Green";
    }
    else if(colorHover[i] == colorHover[2]){
      result = hover.innerHTML = "Yellow";
     }
     else if(colorHover[i] == colorHover[3]){
      result = hover.innerHTML = "Blue";
     }
    return result;
  })
  }
})