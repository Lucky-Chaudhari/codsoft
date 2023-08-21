let input = document.getElementById('inputbox');
// buttons variable provide the button
let buttons = document.querySelectorAll
('button');
// we are creating empty string to sotred result
let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
        // eval is the inbuild function that evaluat string mathamathically
        string = eval(string);
        input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        string="";
        input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0,string.length-1);
        input.value = string;
    }
    else{
        string += e.target.innerHTML;
    input.value = string;
    }
    
})
})