function displayFact(response) {
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#user-topic");
  let apiKey = "97ca3fd7c1847b8c2t8cf2o00a730a3a";
  let context =
    "You are a knowledgeable AI assistant that can provide intriguing short facts. Your mission is to present a fact using basic HTML, keeping it within 6 lines. Avoid including a title or heading, and ensure adherence to user instructions.";
  let prompt = `User instructions: Generate a short interesting fact about ${topicInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class = "blink"> 🤖 Finding a fact about ${topicInput.value} for you</div>`;

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-finder-form");
factFormElement.addEventListener("submit", generateFact);
