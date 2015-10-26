function enter(){
    var food = document.getElementsByName("foodname")[0].value;

    var table = document.getElementById("tablefood");
    var perDate = document.getElementsByName("purchaseDate")[0].value;
    var eDate = document.getElementsByName("expiraDate")[0].value;
    var dis = document.getElementsByName("Descript")[0].value;


    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = food;
    cell2.innerHTML = perDate;
    cell3.innerHTML = eDate;
    cell4.innerHTML = dis;






}
