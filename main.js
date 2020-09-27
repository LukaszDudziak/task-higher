const imageDispay = document.querySelector(".imageDispay");
const arrayResult = [];
let numberOfImage = 3;
let count = 0;

//adding new image from response
const appendNewImage = (response) => {
  for (count; count < numberOfImage; count++) {
    let newElement = document.createElement("img");
    //substring url, to get slug
    let url = response[count].url.substr(28);
    let author = response[count].author;
    //creating new image
    newElement.src = `http://source.unsplash.com/${url}`;
    newElement.alt = author;
    imageDispay.appendChild(newElement);
  }
};

//fetching
const fetching = fetch("https://picsum.photos/v2/list")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    appendNewImage(response);
  });

//WERSJA Z ITEROWANIEM PO CAŁOŚCI
// response.forEach((resp) => {
//   count++;
//   let newElement = document.createElement("img");
//   //substring url, to get slug
//   let url = resp.url.substr(28);
//   //creating new image
//   if (count <= numberOfImage) {
//     newElement.src = `http://source.unsplash.com/${url}`;
//     imageDispay.appendChild(newElement);
//   }
// });
