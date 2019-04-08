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

                potObjects[index].firstElementChild.setAttribute("style", "border: 3px solid black;");

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
                    pot.firstElementChild.setAttribute("src", "../img/Dwarf-Fiesta-Apple-Tree-in-pot.jpg");
                    break;
                }
            case "Barberry":
                {
                    pot.firstElementChild.setAttribute("src", "../img/mzm_a19ea3c699094e298b47c9537ad35774_580_580_ffffff_75.jpg");
                    break;
                }
            case "Chili":
                {
                    pot.firstElementChild.setAttribute("src", "../img/chilli peppers growing in a pot.jpg");
                    break;
                }
            case "Date_Palm":
                {
                    pot.firstElementChild.setAttribute("src", "../img/pygmy-date-palm-pot.jpg");
                    break;
                }
            case "Tomato":
                {
                    pot.firstElementChild.setAttribute("src", "../img/1.-Choose-an-ideal-location1.jpg");
                    break;
                }
            default:
                {
                    pot.firstElementChild.setAttribute("src", "../img/71oXxtt-4dL._SY550_.jpg");
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

                potObjects[index].firstElementChild.setAttribute("style", "border: 6px solid green;");
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


    $("#plantWidth").keyup(function(){
        let width = $("#plantWidth").val();
        let length = $("#plantLength").val();

        $("#area").val(width*length);
    });

    $("#plantLength").keyup(function(){
        let width = $("#plantLength").val();
        let length = $("#plantWidth").val();

        $("#area").val(width*length);
    });

    $("#plantWidth").change(function(){
        let width = $("#plantWidth").val();
        let length = $("#plantLength").val();

        $("#area").val(width*length);
    });

    $("#plantLength").change(function(){
        let width = $("#plantLength").val();
        let length = $("#plantWidth").val();

        $("#area").val(width*length);
    });
});

