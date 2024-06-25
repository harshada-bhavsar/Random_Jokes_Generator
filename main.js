const jokes = document.querySelector(".jokes");
const generateJoke = document.querySelector(".generate_joke");

const jokes_arr = [ "Debugging: Removing the needles from the haystack.", "Programmer – a machine that turns coffee into code.", "To understand what recursion is, you must first understand recursion.", "5 Errors walk into a bar. The barman says, “Normally I’d Throw you all out, but tonight I’ll make an Exception.”", "Why do programmers always have to write code? Because without code, there would be nothing to debug!" , "I'm not a bug, I'm a feature!", "There are 10 types of people in this world: those who understand binary, and those who don't.", "I'm not lazy, I'm just very efficient!" , "The best thing about a boolean is even if you are wrong, you are only off by a bit.","Without requirements or design, programming is the art of adding bugs to an empty text file."];

generateJoke.addEventListener('click', generate_joke);

function generate_joke() {
    const randomIndex = Math.floor(Math.random() * jokes_arr.length);
    const randomJoke = jokes_arr[randomIndex];
    jokes.textContent = randomJoke;
}

// Initial joke display
generate_joke();
