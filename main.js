const imageDispay = document.querySelector(".imageDispay");
const arrayResult = [];

//fecz danych i przerobienie promisa w tablicę
fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    for (let i in data) {
      arrayResult.push([data[i]]);
    }
  });

const display = () => {
  console.log(arrayResult);
  arrayResult.forEach((result) => {
    console.log(result);
  });
};

display();
