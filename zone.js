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

function myFunction(){
    const dragbox = document.getElementById("alpha");
    const divs = dragbox.querySelectorAll(".al");
      // Convert the NodeList to an array for easier manipulation
      const divArray = Array.from(divs);

      // Shuffle the array
      for (let i = divArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [divArray[i], divArray[j]] = [divArray[j], divArray[i]];
      }

      // Empty dragbox
      dragbox.innerHTML = '';

      // Append the shuffled divs back to the container
      divArray.forEach(div => dragbox.appendChild(div));

}
