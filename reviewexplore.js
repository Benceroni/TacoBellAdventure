const requestURL = "/reviews/reviews.json";
var img = [];
var itemTitle = [];
var itemReview = [];

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
      let img1 = document.createElement("img");
      let p2 = document.createElement("p");
      let menu = document.createAttribute("p");
      let img2 = document.createElement("img");

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

      for (let y = 0; y < 2; y++) {
        itemTitle[y] = document.createElement("h4");
        itemReview[y] = document.createElement("p");

        itemTitle[y].innerHTML = articles[i].items[y].title;
        itemReview[y].textContent = articles[i].items[y].review;

        menu.appendChild(itemTitle[y]);
        menu.appendChild(itemReview[y]);
        document.querySelector("div.menu").appendChild(menu);
      }
    }

    // for (let x = 0; x < articles.extraphotos.length; x++) {
    //   img[x] = document.createElement("img" + [x]);
    //   img[x].setAttribute("src", "images/extra" + [x] + ".jpg");
    //   let card = document.createElement("section");
    //   card.appendChild(img[x]);
    //   document.querySelector("div.extraphotos").appendChild(card);
    // }
  });
