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
      console.log(this.responseText);
    }
  };

  xhr.send();
}
