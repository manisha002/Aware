
let input = document.querySelector('#habit-input');   //points to input from the element with id: habit-input

let dynamicList = document.querySelector('#dynamic-list'); //points to the 

function hide()  {  //hides an element on load

    document.getElementById("habit-input").style.visibility="hidden";  
    
}

function addNewHabit(){  //makes the main input element visible

    document.getElementById("habit-input").style.visibility="visible";

}


input.addEventListener('keyup', (e) => {  //Listen to Enter

    if (e.key === "Enter"){
        handleEnter(e.target.value);   

        document.getElementById("habit-input").value = null;
        document.getElementById("habit-input").style.visibility="hidden";      
    }
});

const handleEnter = (text) => {

    if(!text) return;    //if there's no text, return immediately
    let button = createElement("button", "habit", randID(6)); //otherwise, create a button element
    button.innerText = text; //add the input text inside the button
    dynamicList.appendChild(button); //append to the dynamic list
};


function randID(length) {  //creates a random ID
    return [...Array(length)]
      .map((_) => ((Math.random() * 36) | 0).toString(36))
      .join(``)
      .toUpperCase();
  }


const createElement = (tag, className, idName) => {  //helper function to create an element
    let element = document.createElement(tag);
    if(className){
        element.classList.add(className);
    }
    if(idName){
        element.setAttribute("id", idName);
    }
    return element;
} ; 
