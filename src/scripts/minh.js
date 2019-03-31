$(document).ready(function () {

    var potSelected;

    $("#exitPlantList").click(function () {
        $("#plantList").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0)");
    });


    $("div.dropdown-content > button").click(function () {
        $("#plantList").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0.5)");

        potSelected = this.value;
    });

    $("td > button").click(function () {
        $("#plantList").toggle();
        $(".dropdown").toggleClass("noHover");
        $("html").css("background-color", "rgba(0, 0, 0, 0)");
        changePic(this.value);
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
                $(":nth-child(3)", this).addClass("dropdown-content");
                $(":nth-child(2)", this).removeClass("dropdown-content");
            } else {
                $(":nth-child(3)", this).removeClass("dropdown-content");
                $(":nth-child(2)", this).addClass("dropdown-content");
            }
        }
    });

    function changePic(value) {
        let pot = document.getElementsByClassName("pot")[potSelected];

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
    }


    $(":nth-child(2)", ".planted").click(function () {
        potSelected = this.value;
        console.log("here");
        let pot = document.getElementsByClassName("pot")[potSelected];
        pot.firstElementChild.setAttribute("src", "../img/pot.png");
    });

    $(":nth-child(1)", ".planted").click(function () {
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


});

