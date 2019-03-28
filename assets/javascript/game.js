var letters = [ "a", "b","c", "d", "e", "f", "g", "h", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]


var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
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
    left = 9;
    newletter();
    guessesleft();
    sofar();
}

document.onkeyup = function(event) {
    var usersguess = event.key;
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
