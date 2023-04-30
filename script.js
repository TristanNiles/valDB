function sortTable(idx, sortableIdx) {
  let table = document.getElementsByClassName("sortable")[sortableIdx];
  let rows = table.rows;
  let currCell, nextCell;
  let asc = true; //false if desc
  let switching = true;
  let shouldSwitch = false;
  let switchCount, i = 0;

  while (switching) {
    rows = table.rows
    switching = false;
    for (i = 1; i < rows.length - 1; i++) {
      currCell = rows[i].getElementsByTagName("td")[idx];
      nextCell = rows[i+1].getElementsByTagName("td")[idx];

      if (
        (asc && currCell.innerHTML.toLowerCase() > nextCell.innerHTML.toLowerCase()) ||
        (!asc && currCell.innerHTML.toLowerCase() < nextCell.innerHTML.toLowerCase())
        ) {
          shouldSwitch= true;
          break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else if (switchCount == 0 && asc) {
      asc = false;
      switching = true;
    }
  }
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
          
          if (currLabel.classList.contains("teamLabel")) {
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