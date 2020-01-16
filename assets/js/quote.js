(() => {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function() {
    console.log("READYSTATE", xhttp.readyState);
    if (this.status == 200) {
      document.getElementById("quote").innerHTML = JSON.parse(this.responseText).quote;
      document.getElementById("footer").innerHTML = JSON.parse(this.responseText).author;
      document.getElementById("author-pic").setAttribute('src', JSON.parse(this.responseText).photo);
    }
  };

  xhttp.onerror = function() {
    console.error("error");
  };
  xhttp.open("GET", "https://thatsthespir.it/api", true);
  xhttp.send();
})();
