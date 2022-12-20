const posterImage = document.getElementById("poster")
const foodTitle = document.getElementById("title")
const foodDescription = document.getElementById("food-info")
const reviewList = document.getElementsByClassName("reviews")[0]
const btn = document.getElementById("place-order")
const foodList = document.getElementById("food-sec")
const searchBtn =document.getElementById("search-btn")


document.addEventListener("DOMContentLoaded",onload)
function onload(){
  fetch(" http://localhost:3000/foodies/1")
  .then(res => res.json())
  .then(data => {
    firstImageLoad(data)
  })

  fetch("http://localhost:3000/foodies")
  .then(res => res.json())
  .then(data => {
   displayList(data)
  })
}

function firstImageLoad(imgObj){
posterImage.src = imgObj.image_url;
foodTitle.textContent = imgObj.name;
foodDescription.textContent = imgObj.description;
reviewList.innerHTML = ""
imgObj.reviews.forEach(review =>{
 let li = document.createElement("li");
 let uli = document.createElement("ul");
 li.textContent = review;
 uli.appendChild(li);
 reviewList.appendChild(uli)
})

}
foodList.innerHTML = ""
function displayList(foodListArr){
foodListArr.forEach(food => {
  // let foodName = food.name
  // console.log(foodList+"before");
  // foodList.innerHTML += `<li class="food-item">${foodName}<li/>`
  // console.log(foodList);
  let li = document.createElement("li");
li.textContent = food.name;
li.classList.add("food-item")
foodList.appendChild(li) 
});
let listItems =document.getElementsByClassName("food-item");
Array.from(listItems).forEach(item =>{
  item.addEventListener("click", handleFoodClick)
})
}

function handleFoodClick(e) {
let foodClicked = e.target.textContent;
fetch("http://localhost:3000/foodies")
.then(result => result.json())
.then(data => {
  let newId = data.find(food => food.name == foodClicked).id
  clickedFoodDisplay(newId);
})
}

function clickedFoodDisplay(id) {
  fetch(`http://localhost:3000/foodies/${id}`)
  .then(resp =>resp.json())
  .then( data => {
    firstImageLoad(data)
  })
}

btn.addEventListener("click",() =>{
  alert("successfully placed an order")
})
// order  not picked
 btn.addEventListener("click",()=>{
    alert("order-canceled")
})
searchBtn.addEventListener("click", () => {
    let userInp = document.getElementById("user-inp").value;
    if (userInp.length == 0) {result.innerHTML 
} else {
  fetch(url + userInp)
    .then((response) => response.json())
    .then((data) => {
      let myfoodOrder = data.food[0];
    })
}
})



