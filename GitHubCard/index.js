/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// get request
import axios from 'axios';
axios.get('https://api.github.com/users/ChristopherCorvo')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    I used httpie.org and also tried it in the browser

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
  axios.get('https://api.github.com/users/ChristopherCorvo')
    .then(result => {

      let gitHubData = result.data;
      // gitHubProfileMaker({result:avatar_url, result:name, result:login, 
      //   result:location, result:html_url, result:followers_url, result:following_url, result:bio})

      console.log(result.data)
    })

    .then (error => {

    })




/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

function gitHubProfileMaker (Object) {

  // instantiating the elements

  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')

  const nameH3 = document.createElement ('h3')
  const username = document.createElement('p')
  const locationDiv = document.createElement('p')
  const profileDiv = document.createElement('p')

  const profileURL = document.createElement('a')

  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bio = document.createElement('p')

  // Setting class names 

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  nameH3.classList.add('name')
  username.classList.add('username')

  // connecting elements to objects i.e set attributes

  image.src = avatar_url;

  nameH3.textContent = name

  username.textContent = login

  username.textContent = location

  profileURL.textContent = html_url

  followersP.textContent = followers_url

  followingP.textContent = following_url

  bio.textContent = bio





  
  // creating the hiearchy
  document.querySelector('.cards').appendChild(card);
  card.appendChild(image) 
  card.appendChild(cardInfo)

  cardInfo.appendChild(nameH3)
  cardInfo.appendChild(username)
  cardInfo.appendChild(locationDiv)
  cardInfo.appendChild(profileDiv)
  cardInfo.appendChild(followersP)
  cardInfo.appendChild(followingP)

  profileDiv.appendChild(profileURL)

  return card;
}
