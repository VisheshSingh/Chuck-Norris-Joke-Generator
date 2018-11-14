document.getElementById("btn").addEventListener("click", loadJokes);

function loadJokes(e) {
  const numOfJokes = document.getElementById("jokes").value;

  e.preventDefault();

  // AJAX CALL
  let xhr = new XMLHttpRequest();
  let url = `http://api.icndb.com/jokes/random/${numOfJokes}`;

  xhr.open("GET", url, true);

  xhr.onload = function() {
    if (this.status == 200) {
      let res = JSON.parse(this.responseText);

      let output = "";

      if (res.type === "success") {
        res.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<h3>Opps! looks like something went wrong</h3>`;
      }

      document.getElementById("jokes-list").innerHTML = output;
    }
  };

  xhr.send();
}
