function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + " ")
};

var whiteRabbit = {
    type: "white",
    speak: speak
};

var fatRabbit = {
    type: "fat",
    speak: speak
};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!")
//The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

fatRabbit.speak("I could use a carrot right now.");
//The fat rabbit says 'I could use a carrot right now.'

speak.apply(fatRabbit, ["Burp!"]);
speak.call({ type: "old" }, "Oh my!");