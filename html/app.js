{
    redColor.addEventListener("click", function () {
        cartButton.style.backgroundColor = "red";
        itemTag.style.backgroundColor = "red";
        imageCard.style.backgroundImage = 'url("./img/red-benz.webp")';
      });
}
{
    grayColor[0].addEventListener("click", function () {
        cartButton.style.backgroundColor = "gray";
        itemTag.style.backgroundColor = "gray";
        imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
      });
}
{
    grayColor[0].addEventListener("click", function () {
        cartButton.style.backgroundColor = "gray";
        itemTag.style.backgroundColor = "gray";
        imageCard.style.backgroundImage = 'url("./img/gray-benz.jpg")';
      });
}
{
    blackColor.addEventListener("click", function () {
        cartButton.style.backgroundColor = "black";
        itemTag.style.backgroundColor = "black";
        imageCard.style.backgroundImage = 'url("./img/black-benz.jpg")';
      });
}
{
    const cart = () => {
        cartButton.style.display = "none";
        feedbackBtn.style.display = "block";
      };
      cartButton.addEventListener("click", cart);
}