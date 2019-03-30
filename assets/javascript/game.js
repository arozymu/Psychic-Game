var letters = [ "a", "b","c", "d", "e" ]


var wins = 0;
var losses = 0;
var left = 2;
var guesses = 2;
var guessessofar = [];
var psychicletter;

var newletter = function() {
    psychicletter = letters[Math.floor(Math.random() * letters.length)];
};

var sofar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessessofar.join(",");
};

var guessesleft = function() {
    document.getElementById("left").innerHTML = "Guesses left: " + left;
};

var newgame = function() {
    guessedletters = [];
    left = 2;
    newletter();
    guessesleft();
    sofar();
}

document.onkeyup = function(event) {
    var userguess = event.key;
    left--;
    guessessofar.push(userguess);
    sofar();
    guessesleft();
    if (left > 0) {
        if (userguess == psychicletter) {
            wins++;
            document.getElementById("wins").innerHTML = "wins:" + wins;
            newgame();
        }
    } else if (left == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "losses:" + losses;
        newgame();
    }
};
