//yay 

let acc = document.getElementsByClassName("accordion");


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
      let panel = this.lastChild;
      if (!panel.classList.value.includes("panel-visible")) {
      panel.classList.add("panel-visible") 

    } else {
      panel.classList.remove("panel-visible") 
  
    }
  });
}