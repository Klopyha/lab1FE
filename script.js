var isFirstClick = true;
var isAlsoFirstClick = true;
function changeColors() {
  if (isFirstClick) {
    // Змінюємо кольори при першому кліку
    element.style.backgroundColor = "yellow";
    element.style.color = "blue";
    console.log("with love");
  } else {
    // Змінюємо кольори при повторному кліку
    element.style.backgroundColor = "red";
    element.style.color = "black";
  } // Змінюємо стан для наступного кліку
  isFirstClick = !isFirstClick;
}
var element = document.getElementById("clickedelement");
element.addEventListener("click", changeColors);
var nastupnyElement = document.querySelector("ul");
nastupnyElement.addEventListener("click", function () {
  if (isAlsoFirstClick) {
    // Змінюємо кольори при першому кліку
    nastupnyElement.style.backgroundColor = "green";
    nastupnyElement.style.color = "white";
    console.log("with love");
  } else {
    // Змінюємо кольори при повторному кліку
    nastupnyElement.style.backgroundColor = "orange";
    nastupnyElement.style.color = "indigo";
  } // Змінюємо стан для наступного кліку
  isAlsoFirstClick = !isAlsoFirstClick;
});

//Завдання 2

function addImage() {
  var newImage = document.createElement("img");
  newImage.src = "https://media.slovoidilo.ua/media/scimage/173/172627-uk.png";
  newImage.alt = "Фото з Соледару";
  newImage.width = 300;
  document.body.appendChild(newImage);
}

function increaseSize() {
  var mainImage = document.getElementById("town");
  var currentWidth = mainImage.width;
  mainImage.width = currentWidth * 1.2; // Збільшуємо на 20%
}

function decreaseSize() {
  var mainImage = document.getElementById("town");
  var currentWidth = mainImage.width;
  mainImage.width = currentWidth * 0.8; // Зменшуємо на 20%
}

function deleteImage() {
  var imageContainer = document.querySelector("a");
  var mainImage = document.getElementById("town");
  if (imageContainer.contains(mainImage)) {
    imageContainer.removeChild(mainImage);
  }
}
