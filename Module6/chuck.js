const url = "https://api.chucknorris.io/jokes/random"; //decalre constant for the url

document.getElementById("getJoke").addEventListener("click", recieveJoke); //pressing the button gets a joke

function recieveJoke() {
    fetch(url) //connect to the url in the url constant and grab a joke
    .then(response => response.json()) //stop and parse data recieved for the joke, as the url uses json to
    .then(data => {
        document.getElementById("jokeOutput").textContent = data.value;
    });
}