document.addEventListener("DOMContentLoaded", function () {
    var nextButton = document.querySelector(".leftSliderArrow");
    var prevButton = document.querySelector(".rightSliderArrow");
    var list = document.querySelectorAll(".slider li");
    console.log(nextButton, prevButton, list);

    //Slider

    function getList(elements) {
        var arrList = [];
        for (var i = 0; i < elements.length; i++) {
            arrList.push(elements[i]);
        }
        return arrList
    }

    var imageList = getList(list);
    var counter = 0;
    imageList[counter].classList.add("visible");

    nextButton.addEventListener("click", function () {
        imageList[counter].classList.remove("visible");
        counter++;
        if (counter >= imageList.length) {
            counter = 0;
        }
        imageList[counter].classList.add("visible");

    });

    prevButton.addEventListener("click", function () {
        imageList[counter].classList.remove("visible");
        counter--;
        if (counter < 0) {
            counter = imageList.length - 1
        }
        imageList[counter].classList.add("visible");

    });

    //Mouseover function

    var firstPic = document.querySelector(".firstPic");
    var secondPic = document.querySelector(".secondPic");
    var toHover = document.querySelectorAll(".whiteBackground");

    function hide() {
        for (var i=0; i<toHover.length; i++) {
            this.firstElementChild.classList.add("hide");
        }
    }

    function show() {
        for (var i=0; i<toHover.length; i++) {
            this.firstElementChild.classList.remove("hide");
        }
    }

    firstPic.addEventListener("mouseover", hide);
    firstPic.addEventListener("mouseout", show);
    secondPic.addEventListener("mouseover", hide);
    secondPic.addEventListener("mouseout", show);


});