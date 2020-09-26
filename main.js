const imageDispay = document.querySelector(".imageDispay");
const arrayResult = [];
let url;
let newElement;

fetch("https://picsum.photos/v2/list")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);

    response.forEach((resp) => {
      newElement = document.createElement("img");
      console.log(resp.url);
      url = resp.url.substr(28);
      console.log(url);
      newElement.src = `http://source.unsplash.com/${url}`;
      imageDispay.appendChild(newElement);
    });
  });
