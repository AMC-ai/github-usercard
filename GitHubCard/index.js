/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  //get data from api
  .get('https://api.github.com/users/AMC-ai')
  //do this with data typically called response bc thats what we're looking for
  .then(response => {
    console.log(response);
    //acces data, message value and loop over it
    response.data.message.forEach(item => {
      //create element out of data using constructor function
      const newFollower = followerCard(item);
      //append new created element to html element
      entryPoint.appendChild(newFollower);
    });
  })
  //catch errors, debuging tool
  .catch(error => {
    console.log("The data was not returned", error);
  });

const entryPoint = document.querySelector('cards');
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function followerCard(gitData) {
  //create elements
  const
    card = document.createElement('div'),
    userImg = document.createElement('img')
  cardInfo = document.createElement('div'),
    userName = document.createElement('h3'),
    followerName = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    profileLink = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    userBio = document.createElement('p');

  //setup structure of elements
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(followerName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(userBio);

  //set class names
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userName.classList.add('name')
  followerName.classList.add('username')

  //set text content
  userImg.src = avatar_url
  userName.textContent = name
  followerName.textContent = followers_url
  location.textContent = location
  profileLink.textContent = html_url
  followers.textContent = followers
  following.textContent = following
  userBio.textContent = bio


  return card
}
/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
