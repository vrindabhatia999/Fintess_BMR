//to get the values

const excercise=document.querySelector(".exercise");
const checkbtn=document.querySelector(".todo-button");
const fulllist=document.querySelector(".listing");


//event listeners

checkbtn.addEventListener('click',addto);
fulllist.addEventListener('click',delete1);


//functions
function addto(event){
    event.preventDefault();


    //div
    const toDiv=document.createElement('div');
    toDiv.classList.add('Q1');

    //list
    const li=document.createElement('li');
    li.innerText=excercise.value;
    li.classList.add("Q2");
    toDiv.appendChild(li);

    //del
    const del=document.createElement('button');
    del.innerHTML=  '<i class="fa fa-trash"></i>';
    del.classList.add('del-btn');
    toDiv.appendChild(del);

    fulllist.appendChild(toDiv);

    //clear the input
    excercise.value='';
}
function delete1(event){
    const abc=event.target;
    if(abc.classList[0]==='del-btn'){
        const todo=abc.parentElement;
        todo.remove();
        
       
        
    }
}





function my(){
var female=document.getElementById("female").value;
var male=document.getElementById("male").value;
var weight=document.getElementById("weight").value;
var age=document.getElementById("age").value;
var height=document.getElementById("height").value;
var bmr;
var h1=height*30.48;
var act;
    

    if(document.getElementById("female").checked){
        bmr= (10*weight)+(6.25*h1)-(5*age)-161;


    }
    if(document.getElementById("male").checked){
        bmr=(10*weight)+(6.25*h1)-(5*age)+5;

    }
    if(document.getElementById("low").checked){
        act=bmr*1.53;
    }
    if(document.getElementById("medium").checked){
        act=bmr*1.76;
    }
    if(document.getElementById("High").checked){
        act=bmr*1.76;
    }
 

 
    document.getElementById("root").innerHTML=`Your bmr is:  ${bmr} and your total energy expenditure is: ${act}`;

    
   
}


 
 

