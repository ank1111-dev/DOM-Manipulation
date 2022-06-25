//Displaying Name
 function  displayName () {  
  let  myName = document.getElementById('myName');
  let btnName = document.getElementById('btnName');
  let showName = document.getElementById('show-name');
  
  showName.innerText = `Hi, there ${myName.value}`
}

let btnName = document.getElementById('btnName');
btnName.addEventListener('click', displayName)

//Image light on/off
function turnImgOn() {  
let  lightOn=  document.getElementById('imageOff')
 lightOn.src = 'lighton.png'
    
}
let  lightOn=  document.getElementById('imageOff');
lightOn.addEventListener('mouseover', turnImgOn);

//display para
function displayText() {
  let  displayPara= document.getElementById("displayPara");
  let  btndbName= document.getElementById("btndbName");
  displayPara.innerText = "You have clicked on JavaScript button";
  }
  let  btndbName= document.getElementById("btndbName");
  btndbName.addEventListener('dblclick', displayText);


  //Traffic light  
  function stop() {
    let stopDiv = document.getElementById("stopDiv");
    stopDiv.style.backgroundColor = 'red';

  }
  let btnStop = document.getElementById("btnStop");
  btnStop.addEventListener('click',  stop);

  function ready() {
    let readyDiv = document.getElementById("readyDiv");
    readyDiv.style.backgroundColor = 'yellow';
  }
  let btnReady = document.getElementById("btnReady");
  btnReady.addEventListener('click',  ready);

  function go() {
    let goDiv = document.getElementById("goDiv");
    goDiv.style.backgroundColor = 'green';
  }
  let btnGo = document.getElementById("btnGo");
  btnGo.addEventListener('click',  go);

  //Change textbox colors
  function borderRadius(){
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");

    firstName.style.borderColor= "pink";
    lastName.style.borderColor = "blue";
    
  }
  let btn2Name = document.getElementById("btn2Name");
  btn2Name.addEventListener('click',  borderRadius);

//Text Validation
  function validate() {
    let myName2= (document.getElementById('myName2'))
    if (myName2.value.length > 8 || myName2.value == "" ) {
      alert("Input invalid")
    } else {
      alert("Success")
    }
  }
  
let btnSub2 =  document.getElementById("btnSub2");
btnSub2.addEventListener('click',  validate);

//Hobbies List
function getHobbiesList() {
  let myHobbies = document.getElementById('hobbies');
  for(let i = 0 ; i <=3; i++) {
    let hobbiesList = prompt("Enter your Hobbies");
    let listItem = document.createElement('li')
    listItem.innerHTML = hobbiesList;
    myHobbies.appendChild(listItem);
  }
  
  
}

let btnHobbies =  document.getElementById("btnHobbies");
btnHobbies.addEventListener('click',  getHobbiesList);
