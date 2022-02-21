async function apiCall(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
  //add api call logic here
}

function appendArticles(articles, main) {
  console.log(articles);
  articles.forEach((element) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.urlToImage;

    let name = document.createElement("p");
    name.innerText = element.title;

    let desc = document.createElement("p");
    desc.innerText = element.description;

    div.append(name, desc, image);
    main.append(div);
    div.addEventListener("click", () => {
      localStorage.setItem("article", JSON.stringify(element));
      window.location.href = "news.html";
    });
  });
}

export { apiCall, appendArticles };
