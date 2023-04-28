window.onload = () => {
  let collapse = document.getElementsByClassName("collapsible");
  let collapseContents = document.getElementsByClassName("collapseContent");
  let dropdowns= document.getElementsByClassName("dropdownButton");
  let dropdownContents = document.getElementsByClassName("dropdownContent");
  let dropdownBtns = document.querySelectorAll(".dropdownContent > input");
  let dropdownLabels = document.querySelectorAll(".dropdownContent > label");

  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {

      this.classList.toggle("active");

      if (collapseContents[i].style.maxHeight){
        collapseContents[i].style.maxHeight = null;
      } else {
        collapseContents[i].style.maxHeight = collapseContents[i].scrollHeight + "px";
      }

    });
  }

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {

      this.classList.toggle("active");
      
      if (dropdownContents[i].style.maxHeight){
        dropdownContents[i].style.maxHeight = null;
      } else {
        dropdownContents[i].style.maxHeight = dropdownContents[i].scrollHeight + "px";
      }
    })
  }

  for (let i = 0; i < dropdownLabels.length; i++) {
    console.log(i);
    dropdownLabels[i].addEventListener("click", function() {

      for (let j = 0; j < dropdownBtns.length; j++) {
        let currLabel = dropdownBtns[j].previousElementSibling;
        if (i == j) {
          currLabel.style.backgroundColor = "var(--accent)";
          currLabel.style.color = "var(--light)";
        } else {
          currLabel.style.backgroundColor = "var(--light)";
          currLabel.style.color = "var(--accent)";
        }
      }

    })
  }

}