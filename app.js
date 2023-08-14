// const form =document.querySelector('.form')
// const input =document.querySelector('.input')
// const submit =document.querySelector('form .btn')
// const lists =document.querySelector('.lists')
// const item =document.querySelector('.item');
// const clear =document.querySelector('.clear');
// const alert =document.querySelector('.alert');


// let editElemet ;
// let editFleg=false ;
// let editID="" ;


// form.addEventListener("submit" ,displayItem) ;
// clear.addEventListener("click" ,clearAll) ;
// window.addEventListener("DOMContentLoaded",setup)



// function displayItem(e){


//     e.preventDefault()
    
//     let id =new Date().getTime() ;
//     let inputValue = input.value ;
//    if(inputValue  && !editFleg){
   
//     displayNote("Item Added","success");
//     clear.classList.remove("hide");
//     // ---------addToLocalStorage--------------
//     addToLocalStorage(id ,inputValue);
//     createItem(id,inputValue) ;
//     backToDefault() ;
   
//    }else if (inputValue && editFleg){
//         editElemet.innerHTML =inputValue ;
//         editLocalStorage(editID ,inputValue)
//         displayNote("item changes","success") ;
//         backToDefault()
//     }else {
//     displayNote("please enter value", "danger")
//    }
//    backToDefault() ;
// }
// function displayNote(text,action){
//     alert.innerHTML = text ;
//     alert.classList.add(`alert-${action}`) ;
    
//     setInterval(function(){
//         alert.innerHTML = "" ;
//         alert.classList.remove(`alert-${action}`) ;
//     },1000)
// }
// function backToDefault(){
//     input.value="";
//     editFleg =false ;
//     submit.innerHTML ="submit"
//     editID =""


// }
// function clearAll(){
//     let list =document.querySelectorAll(".list") ;
//     if(list.length > 0){
//     list.forEach(e=>{
//             lists.removeChild(e)
//         })
//     }
// clear.classList.add("hide") ;
// displayNote("empty List" ,"danger") ;
// localStorage.removeItem("list")
// }
// function deleteItem(e) {
//     let ele = e.currentTarget.parentElement.parentElement ;
//     let id =ele.dataset.id

//     lists.removeChild(ele) ;
//     if(lists.children.length ===0){
//         clear.classList.add("hide") ;
//     }
//     displayNote("item delete","danger") ;
//     backToDefault()
//     DeleteFromLocalStorage(id);
// }
// function editItem(e) {
//     let ele = e.currentTarget.parentElement.parentElement ;
    
//     editElemet = e.currentTarget.parentElement.previousElementSibling ;
//     input.value=editElemet.innerHTML  ;
//     editFleg =true
//     editID =ele.dataset.id ;
//     submit.innerHTML ="edit"
// }

// //  --------------start locla storage----------------
// function addToLocalStorage (id ,value){
//     const grocery = {id ,value} ; 
//     let items = getLocalStorage() ;
    
//     items.push(grocery) ;
//     localStorage.setItem("list" , JSON.stringify(items)) ;
    
// }
// function getLocalStorage() {
//     return localStorage.getItem("list")
//     ? JSON.parse(localStorage.getItem("list"))
//     :[] 
//   }
  
// // -----------DeleteFromLocalStorage-----------
// function DeleteFromLocalStorage(id) {
//   let items = getLocalStorage();

//   items = items.filter((e)=> {
//     if (e.id != id) {
      
//       return e
//     }
//   });
  
//   localStorage.setItem("list", JSON.stringify(items));

// }
// function editLocalStorage(id, value) {
//   let items = getLocalStorage();

//   items = items.map(e=> {
//     if (e.id == id) {
//       e.value = value;
//     }
//     return e;
//   });

//   localStorage.setItem("list", JSON.stringify(items));
// }
// function setup(){
//   let items =getLocalStorage()

//   if(items.length > 0){
//     items.forEach(function(item){
//       createItem(item.id,item.value)
//       console.log(item.id)
//       console.log(item.inputValue)
//     })
//     // lists.classList.add("show") ;

//   }
// }
// function createItem (id ,inputValue) {
//    let element = document.createElement("div");
//     let att = document.createAttribute("data-id");
//     att.value =id ;
//     element.setAttributeNode(att) ;
//     element.classList.add("list") ;
//     element.innerHTML=
//     `<p class="item">${inputValue}</p>
//             <div class="icons">
//                 <div class="edit"></div>
//                 <div class="remove"></div>
//             </div>
    
//     ` ;
//     const deleteBtn = element.querySelector(".remove");
//     deleteBtn.addEventListener("click", deleteItem);

//     const editBtn = element.querySelector(".edit");
//     editBtn.addEventListener("click", editItem);
    
//     lists.appendChild(element) ;

// }
let form =document.querySelector('.form')
let input= document.querySelector(".input")
let lists= document.querySelector(".lists") ;
let item= document.querySelector(".item") ;
let submit= document.querySelector(".btn") ;
let alert= document.querySelector(".alert") ;
let clear= document.querySelector(".clear") ;

form.addEventListener("submit" ,addeItem) ;
clear.addEventListener("click" ,clearAll) ;

window.addEventListener("DOMContentLoaded",setUp)

let editflag=false ;
let editElement;
let editId ="" ;

function addeItem(e) {
  e.preventDefault() ;
  let inputValue = input.value ;
  let id =new Date().getTime().toString() ;

  if(inputValue && !editflag) {
    createItem(id,inputValue) ;
     backToDefault(input) ;
    clear.classList.remove("hide")
    displayNote("new Item","success") ;
    addToLocalStorage(id ,inputValue)
   
  }else if (inputValue && editflag){
        editElement.innerHTML =inputValue ;
        backToDefault(input);
        displayNote("edit Item","success") ;
        editLocalStorage(editId,inputValue)
  }else {
    displayNote("Empty Item","danger")
  }
}
function backToDefault(input){
  input.value="";
  submit.innerHTML ="Submit"
}
function displayNote(text,action){
alert.innerHTML =text ;
alert.classList.add(`alert-${action}`) ;

setInterval(function(){
alert.innerHTML ="" ;
alert.classList.remove(`alert-${action}`) ;

},1000) ;
}
function clearAll(){
let list= document.querySelectorAll(".list") ;
  if(list.length > 0) {
    list.forEach(item=>{
      lists.removeChild(item);
    })
  }
  clear.classList.add("hide") ;
  displayNote("items deleted","danger") ;
  localStorage.removeItem("list") ;
}
function removeItem(e){
  let element = e.currentTarget.parentElement.parentElement ;
  let id = element.dataset.id ;
  lists.removeChild(element) ;
  displayNote("Item removed","danger") ;
  deletFromLocalStorage(id)
}
function editItem (e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  console.log(editElement)
  input.value=editElement.innerHTML
  editflag =true ;
  submit.innerHTML ="edit"
  editId=element.dataset.id
  console.log(editId)
}

// <---------------local Storage-------------------->

function addToLocalStorage(id ,value){
  let grocery ={id ,value}
  let items =getLocalStorage();
  items.push(grocery) ;

  localStorage.setItem("list",JSON.stringify(items)) ;
}
// get localStorage
function getLocalStorage(){
  return localStorage.getItem("list")
  ?JSON.parse(localStorage.getItem("list")):[] ;
}
// delet localStorage
function deletFromLocalStorage(id) {
  let items =getLocalStorage();
  items=items.filter(function(item){
    if(item.id !== id){
      return item
    }
  })
  localStorage.setItem("list",JSON.stringify(items)) ;
}
function editLocalStorage(id ,value){
  let items =getLocalStorage() ;
   items=items.map(function(item){
    if(item.id === id){
      item.value = value
    }
    return item
  })
  localStorage.setItem("list",JSON.stringify(items)) ;
}

//<--------------------- setup --------------------->
function setUp(){
  let items= getLocalStorage() ;
  if(items.length > 0){
    items=items.forEach((item)=>{
      createItem(item.id,item.value)
    })
  }
};
function createItem (id ,inputValue) {
   let element =document.createElement("div");
    element.className="list" ;
    element.setAttribute("data-id",id) ;
    element.innerHTML =`
                <p class="item">${inputValue}</p>
                <div class="icons">
                    <div class="edit"></div>
                    <div class="remove"></div>
                </div>
    `
    let editBtn =element.querySelector(".edit") ;
    let removeBtn =element.querySelector(".remove") ;
    editBtn.addEventListener("click",editItem) ;
    removeBtn.addEventListener("click",removeItem) ;
    
    lists.appendChild(element) ;
}