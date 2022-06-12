const form = document.getElementById("github-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // data we want to pass from the form
  //event.target[0].value;
  // what is the effect request => GET
  // how do we take the data from our form? Interpolation
  fetch(
    `https://api.github.com/search/users?q=${event.target[0].value}`
      .then((response) => response.json())
      .then((response) => {
        //login, avatar_url, profile
        const userList = document.querySelector("#user-list");
        const reposList = document.getElementById("repos-list");
        reposList.innerHTML = "";
        userList.innerHTML = "";
        response.items.map((item) => {
          const li = document.createElement("li");
          const h2 = document.createElement("h2");
          h2.textContent = item.login;

          h2.addEventListener("click", (e) => showUserRepos(item, login, e));
          const img = document.createElement("img");
          img.src = item.avatar_url;
          // need source attribute for image tag
          //   const a = document.createElement("a");
          //   a.href = item.url;

          li.append(h2, img);
          userList.append.li;
        });
      })
  );
});
