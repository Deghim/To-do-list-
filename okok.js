var toDoList = [];
var tasks = 0;

function oscartots(){
    let oscaTexto = document.getElementById("taskText");
    let table = document.getElementById("tableTask").getElementsByTagName("tbody")[0];
    if (oscaTexto.value!='') { 
        tasks +=1;
        toDoList.push(oscaTexto.value);
        var nRow = table.insertRow(-1);
        
        let th = document.createElement('th');  
        th.innerHTML = tasks;  
        nRow.appendChild(th);  
        
        let cell2 = nRow.insertCell(-1);
        let cell3 = nRow.insertCell(-1);
        let cell4 = nRow.insertCell(-1);
        cell2.innerHTML = oscaTexto.value;
        cell3.innerHTML = `<button type="button" class="btn btn-light" onclick="myDoneFunction(${tasks})">Done</button><button type="button" class="btn btn-warning" onclick="myDeleteFunction(${tasks})">Delete</button>`;
        cell4.innerHTML =` <input type="text" class="me-5" placeholder="Comment" id="taskText">`;
        oscaTexto.value = '';
    }
}
function myDoneFunction(taskNumber) {
  let tableTask = document.getElementById("tableTask").getElementsByTagName("tbody")[0];
  let tableCompleted = document.getElementById("tableCompleted").getElementsByTagName("tbody")[0];
  let currentDate = new Date().toLocaleDateString();

  for (let i = 0, row; row = tableTask.rows[i]; i++) {
      if (row.getElementsByTagName("th")[0].innerHTML == taskNumber) {
          let newRow = tableCompleted.insertRow(-1);

          let newTh = document.createElement('th');
          newTh.scope = "row";
          newTh.innerHTML = row.getElementsByTagName("th")[0].innerHTML;
          newRow.appendChild(newTh);

          let cell2 = newRow.insertCell(-1);
          cell2.innerHTML = row.cells[1].innerHTML;

          let cell3 = newRow.insertCell(-1);
          cell3.innerHTML = currentDate;

          tableTask.deleteRow(i);
          break;
      }
  }
}
  function myDeleteFunction(taskNumber) {
    let table = document.getElementById("tableTask").getElementsByTagName("tbody")[0];
    for (let i = 0, row; row = table.rows[i]; i++) {
        if (row.getElementsByTagName("th")[0].innerHTML == taskNumber) {
            table.deleteRow(i);
            break;
        }
    }
    tasks--;
}
