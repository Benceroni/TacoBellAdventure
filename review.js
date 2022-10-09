const requestURL = "/reviews/reviews.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);

    const articles = jsonObject["articles"];
    console.log[articles];
    console.log[articles.length];
    for (let i = 0; i < articles.length; i++) {
      let card = document.createElement("section");
      let h3 = document.createElement("h3");
      let p1 = document.createElement("p");
      let img1 = document.createElement("img1");
      let p2 = document.createElement("p");

      let img2 = document.createElement("img2");

      h3.innerHTML = articles[i].date;
      p1.textContent = articles[i].intro;
      p2.textContent = articles[i].content;

      img1.setAttribute("src", "images/" + [i] + "1.jpg");
      img2.setAttribute("src", "images/" + [i] + "2.jpg");

      card.appendChild(h3);
      card.appendChild(p1);
      card.appendChild(img1);
      card.appendChild(p2);
      card.appendChild(img2);
      document.querySelector("div.reviews").appendChild(card);
    }
  });
