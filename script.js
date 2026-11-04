
let hasKey = false;
let hasTreasure = false;
let gameOver = false;

function findKey() {
    if (gameOver == false) {
        hasKey = true;

        document.getElementById("message").innerHTML =
            "You found a key!";
    }
}

function searchRoom() {
    if (gameOver == false) {
        hasTreasure = true;

        document.getElementById("message").innerHTML =
            "You found a hidden treasure!";
    }
}

function openDoor() {
    if (gameOver == false) {

        if (hasTreasure == true) {

            document.getElementById("message").innerHTML =
                "Secret Ending! You found the treasure!";

            document.getElementById("gameImage").src =
                "secret.png";

        } else if (hasKey == true) {

            document.getElementById("message").innerHTML =
                "You escaped! Congratulations!";

            document.getElementById("gameImage").src =
                "escaped.png";

        } else {

            document.getElementById("message").innerHTML =
                "Trapped Ending! The door is locked!";

            document.getElementById("gameImage").src =
                "trapped.png";
        }

        gameOver = true;

        let buttons = document.querySelectorAll(".buttons button");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
}

function restart() {

    hasKey = false;
    hasTreasure = false;
    gameOver = false;

    document.getElementById("message").innerHTML =
        "You are locked in a room. What will you do?";

    document.getElementById("gameImage").src =
        "locked.png";

    let buttons = document.querySelectorAll(".buttons button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}
