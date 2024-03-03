const main = document.querySelector("main");
const joke1 = "There are 10 kinds of people in the world. Those who understand binary and those who don't.";
const joke2 = "Why did the programmer quit her job? Because she didn't get arrays.";
const joke3 = "When in doubt, // it out.";

const template = `
    <h2>My Jokes</h2>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>   
`
main.innerHTML = template;

const p = document.createElement("p");
p.textContent = "That's all folks!";
main.appendChild(p);