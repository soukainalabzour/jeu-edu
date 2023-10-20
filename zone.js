function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var er= document.getElementById(data);
    if (er.id===ev.target.className){
    ev.target.appendChild(document.getElementById(data));

}
}

let tab= document.getElementsByTagName("td");
for (let i=1; i<tab.length+1 ; i++){
    
    tab[i-1].className= "drag"+ i ;


    

}


    







   






