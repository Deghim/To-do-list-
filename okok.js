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
        cell3.innerHTML = `<button type="button" class="btn btn-light" onclick="myDoneFunction()">Done</button><button type="button" class="btn btn-warning" onclick="myDeleteFunction()">Delete</button>`;
        cell4.innerHTML =` <input type="text" class="me-5" placeholder="Comment" id="taskText">`;
        oscaTexto.value = '';
    }
}
  function myDoneFunction(){

  }
  function myDeleteFunction() {
    document.getElementById("tableTask").deleteRow(tasks+1);
    tasks --;

  }