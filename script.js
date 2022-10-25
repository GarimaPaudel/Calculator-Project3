const display = document.getElementById('C');

const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
buttons.forEach(button =>{
    button.addEventListener('click',myFunction);
})

function myFunction(){
    // console.log("You have clicked");
    document.getElementById("display").innerHTML = "You have clicked a button";
}