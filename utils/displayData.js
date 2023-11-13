import fetchData from "./fetchData.js";
const profileContainer = document.querySelector(".profile");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const displayData = async (apiEndpoint, value) => {
  try {
    const {
      created_at,
      name,
      bio,
      blog,
      company,
      location,
      login,
      followers,
      following,
      avatar_url,
      public_repos,
      twitter_username,
    } = await fetchData(apiEndpoint, value);

    // create date object to get date created
    const dateCreated = new Date(created_at);
    const year = dateCreated.getUTCFullYear();
    const month = months[dateCreated.getUTCMonth()];
    const date = dateCreated.getUTCDate();

    //   render the profile
    profileContainer.innerHTML = `
          <header class="header">
            <img class="header__image" src="${avatar_url}" alt="" />
            <div class="header__content">
              <div class="header__content-name">
                <h2>${name}</h2>
                <h3>@${login}</h3>
              </div>
              <p>Joined ${date} ${month} ${year}</p>
            </div>
          </header>
          <p class="header__bio">${bio || "Bio Not Available"}</p>
          <div class="subscribers">
            <div class="subscribers__container">
              <p>Repos</p>
              <span class="subscribers__number">${public_repos}</span>
            </div>
            <div class="subscribers__container">
              <p>Followers</p>
              <span class="subscribers__number">${followers}</span>
            </div>
            <div class="subscribers__container">
              <p>Following</p>
              <span class="subscribers__number">${following}</span>
            </div>
          </div>
          <div class="links">
            <div class="links-first">
              <div class="icon-social">
                <img src="Assets/icon-location.svg" alt="" />
                <a href="" class="icon-social__name location">${
                  location || "Not Available"
                }</a>
              </div>
              <div class="icon-social">
                <img src="Assets/icon-website.svg" alt="" />
                <a href="" class="icon-social__name">${
                  blog || "Not Available"
                }</a>
              </div>
            </div>
            <div class="links-second">
              <div class="icon-social">
                <img src="Assets/icon-twitter.svg" alt="" />
                <a href="" class="icon-social__name">@${
                  twitter_username || "Not Available"
                }</a>
              </div>
              <div class="icon-social" >
                <img  src="Assets/icon-company.svg" alt="" />
                <a  href="" class="icon-social__name">${
                  company || "Not Available"
                }</a>
              </div>
            </div>
          </div>
    `;
  } catch (error) {
    profileContainer.innerHTML = `<h2>No User Found.</h2>`;
  }
};

export default displayData;
