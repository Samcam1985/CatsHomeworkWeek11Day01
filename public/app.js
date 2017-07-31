var addCat = function(name, food, imageUrl){
var ul = createCat();
var li = createName(name);
var li2 = createFavouriteFood(food);
var li3 = createImage(imageUrl);

appendElements(ul, li, li2, li3);
};

var createCat = function(){
  var ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
};

var createName = function(name){
  var li = document.createElement('li');
  li.innerText = "Name: " + name;
  return li;
};

var createFavouriteFood = function(food){
  var li2 = document.createElement('li');
  li2.innerText = "Favourite food: " + food;
  return li2;
};

var createImage = function(imageUrl){
  var li3 = document.createElement('li');
  var image = document.createElement('img');
  image.style.width = '500px';
  image.src = imageUrl;
  li3.appendChild(image);
  return li3;
};

var appendElements = function(ul, li, li2, li3){

ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

var cats = document.querySelector('#cats');
cats.appendChild(ul)

};

var app = function() {
  addCat("Gemini", "Beans", "http://www.catadoption.co.uk/wp-content/uploads/2013/07/ea4c22547edfcf6b06c5c0bec38e3800.jpg");
}


// var app = function () {
//   var ul = document.createElement('ul')
//   ul.classList.add('cat');

//   var li = document.createElement('li')
//   li.innerText = 'Name: Vigo';
  
//   var li2 = document.createElement('li');
//   li2.innerText = 'Favourite food: Cat Soup';

//   var li3 = document.createElement('li');
//   var image = document.createElement('img')
//   image.style.width = "500px"
//   image.src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg";

//   li3.appendChild(image);
//   ul.appendChild(li);
//   ul.appendChild(li2);
//   ul.appendChild(li3);
// var cats = document.querySelector('#cats');
// cats.appendChild(ul)
// }

window.addEventListener('load', app)