window.onload = () => {
  let collapse = document.getElementsByClassName("collapsible");
  let collapseContents = document.getElementsByClassName("collapseContent");
  let dropdowns= document.getElementsByClassName("dropdownButton");
  let dropdownContents = document.getElementsByClassName("dropdownContent");
  let dropdownBtns = document.querySelectorAll(".dropdownContent > input");
  let dropdownLabels = document.querySelectorAll(".dropdownContent > label");
  let data = new FormData();

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

  for (let i = 0; i < dropdownLabels.length; i++) {
    console.log(i);
    dropdownLabels[i].addEventListener("click", function() {

      for (let j = 0; j < dropdownBtns.length; j++) {
        let currLabel = dropdownBtns[j].previousElementSibling;
        if (i == j) {
          dropdowns[0].replaceChildren(currLabel.innerHTML, dropdowns[0].children[0]);
          currLabel.style.backgroundColor = "var(--accent)";
          currLabel.style.color = "var(--light)";
        } else {
          currLabel.style.backgroundColor = "var(--light)";
          currLabel.style.color = "var(--accents)";
        }
      }

    })
  }

  let teamDropdown = new XMLHttpRequest();
  teamDropdown.open("POST", "teamDropdown.php");
  teamDropdown.onload = function() {
    console.log(this.response);
  }
  //teamDropdown.send("TEST");

}