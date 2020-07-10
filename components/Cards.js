// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function Cards(articleObjData) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imageContainer.classList.add('img-container');
    
    headlineDiv.textContent = articleObjData.headline;
    authorImg.src = articleObjData.authorPhoto.replace("/assets", "");
    authorName.textContent = `By ${articleObjData.authorName}`

    imageContainer.appendChild(authorImg);
    authorDiv.appendChild(imageContainer);
    authorDiv.appendChild(authorName);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);

    return cardDiv;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
      console.log(Object.keys(res.data.articles));
      console.log(res.data.articles);
      
      Object.keys(res.data.articles).forEach(articleType => {
          res.data.articles[articleType].forEach(article => {
              document.querySelector('.cards-container').appendChild(Cards(article));
          })
      })
  }).catch(err => {
      console.log(err);
  })