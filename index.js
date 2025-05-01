var numberOfDrums=document.querySelectorAll(".drum");  //Selects all elements with the "drum" class and store them in a NodeList

 
//Detect button press
// Loop through each drum button to add a click event listener
for(var i=0;i < numberOfDrums.length; i++){

//Add an event listener that listens to each button press
     numberOfDrums[i].addEventListener("click",function(){

//When clicked,get the inner HTML of each clicked button
       var buttonInnerHTML=this.innerHTML;

// Call the makeSound function and pass in the button character
       makeSound(buttonInnerHTML);

     });
    
    
}


//Detect key presses
//Add a keydown event listener to the whole document to listen for when a key is pressed on the keyboard(keyboard interaction)
document.addEventListener("keydown",function(event){


//Here we are accessing the key property of the keydown event
//When a key is pressed,pass in the key to the makeSound function
    makeSound(event.key);     //Tapping in to the event that triggered the event listener
})

 //Create a new (makeSound)function that will be called when either the buttons are pressed or when the keys are pressed instead
//Use switch and case statements to check the key characters against the events
function makeSound(key){            
    switch (key) {             
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
            
            break;

            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
            
            break;

            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
            
            break;

            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
            
            break;

            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
            
            break;

            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
            
            break;

            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
            
            break;
    
        default:
// If the key doesn't match any drum, log it to the console (for debugging)
           console.log(key);
    }

}