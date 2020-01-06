const url = 'https://www.reddit.com/r/ProgrammerHumor.json';
let redditDiv = document.querySelector('#reddit');

const getReddit = () => {
  // Do not edit above this line
  fetch(url)
  .then(response => response.json())
  .then(data => {
    data.data.children.forEach((post) => {
      let div = document.createElement("div")
      div.classList.add("reddit-divs")
      div.innerHTML += `<h2>${post.data.title}</h2><img src=${post.data.url}/>`
      redditDiv.appendChild(div)
      console.log(div)
    })
  })
  // Do not edit below this line
};
getReddit();