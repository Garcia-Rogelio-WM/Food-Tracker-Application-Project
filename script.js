function enter(){
    var food = document.getElementsByName("foodname")[0].value;
    var table = document.getElementById("tablefood");
    var perDate = document.getElementsByName("purchaseDate")[0].value;
    var eDate = document.getElementsByName("expiraDate")[0].value;
    var dis = document.getElementsByName("Descript")[0].value;
    var bod = document.getElementById("body");

    var row = table.insertRow(1) ;


    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = food;
    cell2.innerHTML = perDate;
    cell3.innerHTML = eDate;
    cell4.innerHTML = dis;

    if (eDate < perDate){
        row.style.backgroundColor = "red";
    }
    else {
        row.style.backgroundColor = "rgb(255 , 255, 255, 0)";
    }
    if (food == "Mr Meeseeks"){
        all.style.backgroundImage = "url('http://vignette1.wikia.nocookie.net/rickandmorty/images/2/21/Meeseeks_and_Destroy_6.png/revision/latest?cb=20140121143436')";

    }

    if (food == "banana"){
        all.style.backgroundImage = "url('http://static.fjcdn.com/comments/LawL+pic+somewhat+related+_11fbf6367f0933a4762230552ed93565.jpg')";

    }
    if (food == "Clawson"){
        all.style.backgroundImage = "url('https://avatars2.githubusercontent.com/u/13558379?v=3&s=400')";
    }
}