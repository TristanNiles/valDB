window.onload = () => {
  console.log("test newest");

  let collapse = document.getElementsByClassName("collapsible");
  let contents = document.getElementsByClassName("collapseContent");

  console.log(collapse);
  
  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
      this.classList.toggle("active");
      console.log(contents[i].style.maxHeight);
      if (contents[i].style.maxHeight){
        console.log("maxheight false or something");
        contents[i].style.maxHeight = null;
      } else {
        console.log("maxheight not false or something");
        console.log(contents[i].scrollHeight);
        contents[i].style.maxHeight = "min-content";
      }
    });
  }

}