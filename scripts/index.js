document.addEventListener("DOMContentLoaded", async () => {

  const h2 = document.createElement("h2");
  let getURL = "https://api.chucknorris.io/jokes/random";

  function eventos() {
    document.querySelector("#btn").addEventListener("click", appendFact);
    document.querySelector('#btn2').addEventListener('click', appendFactEsp);
  }
  eventos();

  async function getFact(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async function appendFact() {
    const chuckNorris = await getFact(getURL);
    h2.textContent = chuckNorris.value;
    console.log(h2);

    document.querySelector("#contenido").appendChild(h2);
  }


});
