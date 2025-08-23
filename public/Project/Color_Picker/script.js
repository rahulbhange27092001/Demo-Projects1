console.log("Welcome");
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);
        var id= event.target.id;
        if(id === 'blue'){
            body.style.backgroundColor = id;
        }
        if(id === 'white'){
            body.style.backgroundColor = id;
             body.style.color = 'black';
        }
        if(id === 'grey'){
            body.style.backgroundColor = id;
        }
        if(id === 'yellow'){
            body.style.backgroundColor = id;
        }
         if(id === 'black'){
            body.style.backgroundColor = id;
            body.style.color = 'white';
        }
    })
})
//Digital Clock Code
const clock=document.getElementById('clock');

setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000);