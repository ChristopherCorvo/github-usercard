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
      let gitHubProfile = gitHubProfileMaker(gitHubData) // this is the problem
      let mainDiv = document.querySelector('.cards').appendChild(gitHubProfile);
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

const followersArray = ['https://api.github.com/users/yirano','https://api.github.com/users/MattBokovitz1','https://api.github.com/users/clbmiami2004',
'https://api.github.com/users/MorganWilliamson'];


followersArray.forEach(i => {
  axios.get(i)
    .then(obj => {
      let gitHubData = obj.data;
      let gitHubProfile = gitHubProfileMaker(gitHubData);
      let mainDiv = document.querySelector('.cards').appendChild(gitHubProfile);
      
    })
    .catch (error => {
      // error code
    })

  })

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

function gitHubProfileMaker (object) {

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

  image.src = object.avatar_url;
  nameH3.textContent = object.name;
  username.textContent = object.login;
  locationDiv.textContent = `Location: ${object.location}`;
  profileURL.textContent = `URL: ${object.html_url}`;
  followersP.textContent = `Followers: ${object.followers}`;
  followingP.textContent = `Following: ${object.following}`;
  bio.textContent = `Bio: ${object.bio}`;

  // creating the hiearchy
  
  card.append(image,cardInfo)
  cardInfo.append(nameH3, username, locationDiv, profileDiv, followersP, followingP)
  profileDiv.appendChild(profileURL)

  return card;
}
