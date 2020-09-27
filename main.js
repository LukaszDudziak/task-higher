const imageDispay = document.querySelector(".imageDisplay");
const nextButton = document.getElementById("nextBtn");
let numberOfImage = 3;
let count = 0;

//append new image from response
const appendNewImage = (response) => {
  //hide section at the start (no one need to see how those images jumps when rendered)
  imageDispay.style.opacity = 0;
  //create next 3 containers filled with image element and description (author's name)
  for (i = count; i < numberOfImage; i++) {
    let newElement = document.createElement("img");
    let newContainer = document.createElement("figure");
    let newFigcaption = document.createElement("figcaption");
    newContainer.classList.add("container");
    newFigcaption.innerText = `fot.${response[i].author}`;
    //substring url, to get slug
    let slug = response[i].url.substr(28);
    //render new image
    newElement.src = `http://source.unsplash.com/${slug}`;
    imageDispay.appendChild(newContainer);
    newContainer.appendChild(newElement);
    newContainer.appendChild(newFigcaption);
  }
  //finally show effect
  setTimeout(function () {
    imageDispay.style.opacity = 1;
  }, 1000);
};

//fetch
fetch("https://picsum.photos/v2/list")
  .then((response) => {
    //return response in json object
    return response.json();
  })
  .then((response) => {
    appendNewImage(response);
    //create listener for button
    nextButton.addEventListener("click", () => {
      count = count + 3;
      numberOfImage = numberOfImage + 3;
      //loop next button
      if (numberOfImage == response.length) {
        count = 0;
        numberOfImage = 3;
      }
      //clear images section
      imageDispay.innerHTML = "";
      //run function which will set new images
      appendNewImage(response);
    });
  });
