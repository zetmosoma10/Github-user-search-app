import fetchData from "./fetchData.js";

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
  const profileContainer = document.querySelector(".profile");
  try {
    const userData = await fetchData(apiEndpoint, value);
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
    } = userData;

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
                
                <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="${
                  twitter_username ? "#4b6a9b" : "red"
                }  "/></svg>
                <a href="" class="icon-social__name" >${
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
    profileContainer.innerHTML = `<h2>No User Found</h2>`;
  }
};

export default displayData;
