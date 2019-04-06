$(document).ready(function () {

    var potSelected;

    $("#exitPlantList").click(function () {
        $("#plantList").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0)");
    });

    $("#exitPlantInfo").click(function () {
        $("#plantInfo").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0)");
    });


    $("div.dropdown-content > button").click(function () {
        $("#plantList").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0.5)");

        potSelected = this.value;
    });

    $("div.planted :first-child").click(function () {
        $("#plantInfo").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0.5)");
        console.log("here");
    });

    $("option").click(function () {
        $("#plantList").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0)");
        changePic(this);
    });

    $(".pot").click(function () {
        if (this.classList.contains("green")) {
            let potSwap = this.getAttribute("id");
            let imgOG = document.getElementsByClassName("pot")[potSelected].firstElementChild.getAttribute("src");
            let imgSwap = document.getElementsByClassName("pot")[potSwap].firstElementChild.getAttribute("src");

            document.getElementsByClassName("pot")[potSelected].firstElementChild.setAttribute("src", imgSwap);
            document.getElementsByClassName("pot")[potSwap].firstElementChild.setAttribute("src", imgOG);
            let potObjects = document.getElementsByClassName("pot");
            for (let index = 0; index < potObjects.length; index++) {
                potObjects[index].classList.remove("green");

                potObjects[index].firstElementChild.setAttribute("style", "background:white");

            }
        }



    });

    $(".pot").mouseover(function () {
        if (!this.classList.contains("green")) {
            let potSelected = this.firstElementChild.getAttribute("src");
            if (potSelected != "../img/pot.png") {
                 this.getElementsByClassName("planted")[0].classList.add("dropdown-content");
                 this.getElementsByClassName("unplanted")[0].classList.remove("dropdown-content");
            } else {
                this.getElementsByClassName("planted")[0].classList.remove("dropdown-content");
                this.getElementsByClassName("unplanted")[0].classList.add("dropdown-content");

              
            }
        }
    });

    function changePic(potClicked) {
        let pot = document.getElementsByClassName("pot")[potSelected];
        let value = potClicked.value;
        switch (value) {
            case "Apple":
                {
                    pot.firstElementChild.setAttribute("src", "../img/pot_Apple.png");
                    break;
                }
            case "Barberry":
                {
                    pot.firstElementChild.setAttribute("src", "../img/pot_Barberry.png");
                    break;
                }
            case "Chili":
                {
                    pot.firstElementChild.setAttribute("src", "../img/pot_Chili.png");
                    break;
                }
            case "Date_Palm":
                {
                    pot.firstElementChild.setAttribute("src", "../img/pot_Date.png");
                    break;
                }
            case "Tomato":
                {
                    pot.firstElementChild.setAttribute("src", "../img/pot_Tomato.png");
                    break;
                }
            default:
                {
                    pot.firstElementChild.setAttribute("src", "../img/pot_Peper.png");
                }
        }

        potClicked.selected = false;
    }

    $(":nth-child(3)", ".planted").click(function () {
        potSelected = this.value;
        console.log("here");
        let pot = document.getElementsByClassName("pot")[potSelected];
        pot.firstElementChild.setAttribute("src", "../img/pot.png");
    });

    $(":nth-child(2)", ".planted").click(function () {
        potSelected = this.value;
        let potObjects = document.getElementsByClassName("pot");
        for (let index = 0; index < potObjects.length; index++) {
            potObjects[index].children[1].classList.remove("dropdown-content");
            potObjects[index].children[2].classList.remove("dropdown-content");
            if (index != potSelected) {
                potObjects[index].classList.add("green");

                potObjects[index].firstElementChild.setAttribute("style", "background:green");
            }
        }

    })

    $(".fa-chevron-left").click(function(){
        $("#garden1").removeClass("hidden");
        $("#garden2").addClass("hidden");
        $("#garden-selecter > h1").text("Garden 1");
    });

    $(".fa-minus-square").click(function(){
        $("#garden1").removeClass("hidden");
        $("#garden2").addClass("hidden");
        $("#garden-selecter > h1").text("Garden 1");
    });

    $(".fa-chevron-right").click(function(){
        $("#garden1").addClass("hidden");
        $("#garden2").removeClass("hidden");
        $("#garden-selecter > h1").text("Garden 2");
    });

    $(".fa-plus-square").click(function(){
        $("#garden1").addClass("hidden");
        $("#garden2").removeClass("hidden");
        $("#garden-selecter > h1").text("Garden 2");
    });
});

