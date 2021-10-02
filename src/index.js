caret = document.getElementById('caret') ;
hobbies_div = document.getElementById('hobbies');

const text = ["Inquisitors", "Software Developers", "Hardware Enthusiasts", "Dancers", "Artists", "Musicians", "Explorers", "Thinkers", "Students"];

window.i = 0;
window.j = 0;

setInterval(
    () => {
        caret.classList.toggle('invisible') ;
    }, 300)

anim1 = (text) =>{
    i = window.i
    j = window.j
    if (i>0){    
        hobbies_div.innerHTML += text[j][i-1];
    }else if(i <= 0){
        hobbies_div.innerHTML = hobbies_div.innerHTML.slice(0, -i)    
    }
    if (i >text[j].length-1){
        window.i = - text[j].length
    }
    if (hobbies_div.innerHTML == "" ){
        window.j += 1
    }
    if (window.j >= text.length){
        j=0
    }
    window.i += 1; 
}
setInterval(anim1, 110, s=text);
