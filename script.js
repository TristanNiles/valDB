//mostly from "How to EASILY sort HTML Tables with CSS & JavaScript - Web Development Tutorial" by dcode on YouTube
function sortTable(idx, sortableIdx) {
  let asc = true;
  let table = document.getElementsByClassName("sortable")[sortableIdx];
  let tbody = table.tBodies[0]; //assuming 1 tbody in any table
  let rows = Array.from(tbody.querySelectorAll("tr")); //get all rows in the body in an array (allowing us to have javascript sort it)

  if (table.querySelector("th:nth-child(" + (idx + 1) + ")").classList.contains("asc")) {
    asc = false;
  }

  let ascMod = asc ? 1 : -1; //the ascMod will be 1 if ascending, -1 if descending

  //sort function for the rows
  let sortedRows = rows.sort((x, y) => {
    //console.log(x);
    //console.log(y);
    xText = x.querySelector("td:nth-child(" + (idx + 1) + ")").textContent.trim().toLowerCase(); //the text of the row at the index we want to sort by for x
    yText = y.querySelector("td:nth-child(" + (idx + 1) + ")").textContent.trim().toLowerCase(); //the text of the row at the index we want to sort by for y

    if (idx > 4) {
      xText = parseFloat(xText);
      yText = parseFloat(yText);
    }

    return xText > yText ? ascMod : (-1 * ascMod); //return ascMod if xText is greater than yText, else invert ascMod
  })

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild); //remove all children from tbody (all rows) so we can replace with our sorted rows
  }
  tbody.append(...sortedRows); //pass in all sorted rows;

  table.querySelectorAll("th").forEach(th => th.classList.remove("asc", "desc")); //remove all asc and desc classes from table header so they don't compound
  table.querySelector("th:nth-child(" + (idx + 1) + ")").classList.toggle("asc", asc); //add ascending class to table header if asc
  table.querySelector("th:nth-child(" + (idx + 1) + ")").classList.toggle("desc", !asc); //add descending to table header if !asc
}

function teamPlayersPost(data) {
  let teamPlayersHR = new XMLHttpRequest();
  let teamPlayers = document.getElementById("teamPlayers");

  teamPlayersHR.open("POST", "teamPlayers.php", true);
  teamPlayersHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  teamPlayersHR.onreadystatechange = function() {
    if (teamPlayersHR.readyState == 4 /*&& teamPlayers.status == 200*/) {
      
      teamPlayers.innerHTML = teamPlayersHR.responseText;
      teamPlayers.maxHeight = teamPlayers.scrollHeight + "px";
    }
  }

  teamPlayersHR.send(data);
  teamPlayers.innerHTML = "...";
}

function maxStatPost(data) {
  let maxStatHR = new XMLHttpRequest();
  let maxStat = document.getElementById("maxStat");

  maxStatHR.open("POST", "maxStat.php", true);
  maxStatHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  maxStatHR.onreadystatechange = function() {
    if (maxStatHR.readyState == 4 /*&& maxStat.status == 200*/) {
      
      maxStat.innerHTML = maxStatHR.responseText;
      maxStat.maxHeight = maxStat.scrollHeight + "px";
    }
  }

  maxStatHR.send(data);
  maxStat.innerHTML = "...";
}


window.onload = () => {
  let collapse = document.getElementsByClassName("collapsible");
  let collapseContents = document.getElementsByClassName("collapseContent");
  let dropdowns= document.getElementsByClassName("dropdownButton");
  //let dropdownContents = document.getElementsByClassName("dropdownContent");
  let dropdownBtns = document.querySelectorAll(".dropdownContent > input");
  let dropdownLabels = document.querySelectorAll(".dropdownContent > label");
  let data = "";
  data = "name=DRX"; 
  teamPlayersPost(data);
  data="stat=FIRST_BLOOD";
  maxStatPost(data);

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
    
    dropdownLabels[i].addEventListener("click", function() {

      for (let j = 0; j < dropdownBtns.length; j++) {
        let currLabel = dropdownBtns[j].previousElementSibling;
        if (i == j) {
          
          if (currLabel.classList.contains("teamLabel1")) {
            data = "name=" + currLabel.innerHTML;
            teamPlayersPost(data);
            dropdowns[0].replaceChildren(currLabel.innerHTML, dropdowns[0].children[0]);
          } else if (currLabel.classList.contains("statLabel")) {
            data = "stat=";
            switch (currLabel.innerHTML) {
              case "First bloods":
                data += "FIRST_BLOOD";
                break;
              case "First deaths":
                data += "FIRST_DEATH";
                break;
              case "ACS":
                data += "ACS";
                break;
              case "KD":
                data += "KD";
                break;
              case "Win percentage":
                data += "WIN_PERC";
                break;
              case "HS percentage":
                data += "HS_PERC";
                break;
              case "KAST":
                data += "KAST";
                break;
              default:
                console.log("nonexistent case");
                break;
            }
            maxStatPost(data);
            dropdowns[1].replaceChildren(currLabel.innerHTML, dropdowns[1].children[0]);
          }

          currLabel.style.backgroundColor = "var(--accent)";
          currLabel.style.color = "var(--light)";
          currLabel.style.borderColor = "var(--accent)";
        } else {
          currLabel.style.backgroundColor = "var(--light)";
          currLabel.style.color = "var(--accents)";
          currLabel.style.borderColor = "var(--light)";
        }
      }

    })
  }

}