var arr = [];
var totalExpense = 0;

function calculateBalance() {
  let budget = document.getElementById("Add Budget").value;
  let expenseAmount = document.getElementById("Add Expenses").value;
  let balance = budget - expenseAmount;

  return [budget, expenseAmount, balance];
}

function createExpenseTable() {
  let [budget, expenseAmount, balance] = calculateBalance();
  let id = Math.floor(Math.random() * 100000);
  var obj = {
    id: id,
    budget: budget,
    expense: expenseAmount,
    balance: balance,
  };
  arr.length = 0;
  arr.push(obj);

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    var tableRow = document.createElement("tr"); // <tr></tr>
    tableRow.setAttribute("id", "" + element.id); // <tr id="any"></tr>

    // <table>
    //    <tr>
    //    </tr>
    //</table>
    document.getElementById("myTable").appendChild(tableRow);

    var tabledata = document.createElement("td"); // <td></td>
    var text = document.createTextNode(element.budget); // Ali
    tabledata.appendChild(text); // <td>Ali</td>

    // <table>
    //    <tr>
    //      <td>Ali</td>
    //    </tr>
    //</table>
    document.getElementById("" + element.id).appendChild(tabledata);

    var tabledata = document.createElement("td");
    var text = document.createTextNode(element.expense);
    tabledata.appendChild(text);
    document.getElementById("" + element.id).appendChild(tabledata);

    var tabledata = document.createElement("td");
    var text = document.createTextNode(element.balance);
    tabledata.appendChild(text);
    document.getElementById("" + element.id).appendChild(tabledata);
  }
}

function AddBudget() {
  
  let budget = document.getElementById("Add Budget").value;
  if (budget === "") {
    alert("Please Enter your budget");
    return;
  } 
  document.getElementById("setbudget").innerHTML = budget;

}

function AddExpences() {
  let expenseAmount = document.getElementById("expenseAmount").value;
  if (expenseAmount === "") {
    alert("Please Enter your expense Amount");
    return;
  } 

  let expensedate = document.getElementById("expensedate").value;

  if (expensedate === "") {
    alert("Please Enter your expense date");
    return;
  }
  

  let Category = document.getElementById("Category").value;
  let expenseDescription = document.getElementById("expenseDescription").value;

  if (expenseDescription === "") {
    alert("Please Enter your expense Description");
    return;
  } 

  let id = Math.floor(Math.random() * 100000);
  var obj = {
    id: id,
    EDescriptions: expenseDescription,
    EAmount: expenseAmount,
    Edate: expensedate,
    ECategory: Category,
  };

  arr.push(obj);

  updateTable();
}

function updateTable() {
  let table = document.getElementById("myTable1");
  let rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    var tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "" + element.id);
    document.getElementById("myTable1").appendChild(tableRow);

    var tabledata = document.createElement("td");
    var text = document.createTextNode(element.EDescriptions);
    tabledata.appendChild(text);
    document.getElementById("" + element.id).appendChild(tabledata);

    var tabledata = document.createElement("td");
    var text = document.createTextNode(element.EAmount);
    tabledata.appendChild(text);
    document.getElementById("" + element.id).appendChild(tabledata);

    var tabledata = document.createElement("td");
    var text = document.createTextNode(element.Edate);
    tabledata.appendChild(text);
    document.getElementById("" + element.id).appendChild(tabledata);

    var tabledata = document.createElement("td");
    var text = document.createTextNode(element.ECategory);
    tabledata.appendChild(text);
    document.getElementById("" + element.id).appendChild(tabledata);


    var editbtn = document.createElement("button");
    editbtn.setAttribute("id", "" + element.id);
    editbtn.onclick = function () {
      editExpense(element);
    }
    var editExpence = document.createTextNode("Edit");
    editbtn.appendChild(editExpence);
    document.getElementById("" + element.id).appendChild(editbtn);


    var deletebtn = document.createElement("button");
    deletebtn.setAttribute("id", "" + element.id);
    deletebtn.onclick = function () {
      deleteExpense(element);
    };
    var deleteTextNode = document.createTextNode("Delete");
    deletebtn.appendChild(deleteTextNode);
    document.getElementById("" + element.id).appendChild(deletebtn);
  }
}

function editExpense(element) {
  var index = arr.indexOf(element);
  var updatedAmount = prompt("Enter a Expence amount");
  var updatedDiscription = prompt("Enter a Updated Discription");
  element.EAmount = updatedAmount;
  element.EDescriptions = updatedDiscription;
  
  arr[index] = element;
  updateTable();

}

function deleteExpense(element) {
  var index = arr.indexOf(element);
  arr.splice(index,1);
  updateTable();
}

function CalculateBalance() {
  totalExpense = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    totalExpense = totalExpense + Number.parseInt(element.EAmount);
  }
  document.getElementById("setExpense").innerHTML = totalExpense;
  let budget = document.getElementById("Add Budget").value;

  let total = Number.parseInt(budget) - totalExpense;
  console.log(total);
  document.getElementById("setbalance").innerHTML = total;
}



