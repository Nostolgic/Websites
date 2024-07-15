// Global header
const header = document.querySelector("header");
header.innerHTML = `<a href="../"><svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.19 230.96">
<g id="Layer_1-2" data-name="Layer 1">
  <path class="cls-1" d="M134.1,117.64l-42.99-12.34c-4.08-1.17-5.39-6.28-2.37-9.25l49.84-49.48c14.77-14.66,8.31-39.79-11.69-45.52h0c-9.65-2.76-20.05,0-27.04,7.22L11.26,99.51c-9.53,9.85-5.15,26.3,8,30.12l38.27,11.12c3.77,1.08,5.26,5.65,2.82,8.75L3.51,209.43c-6.59,6.94-3.46,18.4,5.74,21.04h0c3.58,1.03,7.44,.44,10.55-1.62l119.28-78.76c12.88-8.51,9.86-28.19-4.97-32.45Z"/>
</g>
</svg>Nosto</a>
<div id="mode"><p class="subtext mode-text">Light</p><label class="switch">
  <input id="toggle" type="checkbox" />
  <div class="toggle">
    <div class="toggle-button"></div>
  </div>
</label></div>`;

// Global favicon
const favicon = document.createElement("link");
favicon.setAttribute("rel", "shortcut icon");
favicon.setAttribute("href", "favicon.png");
favicon.setAttribute("type", "image/x-icon");
document.head.appendChild(favicon);

// Dark mode
const toggle = document.getElementById("toggle");
let modeText = document.querySelector(".mode-text");
const localDarkMode = localStorage.getItem("darkMode");
if (localDarkMode === "false") {
  light();
} else {
  dark();
}
toggle.addEventListener("click", toggleMode);
function toggleMode() {
  if (toggle.checked) {
    dark();
  } else {
    light();
  }
}


async function fetchDiscordAvatar() {
  const avatarImg = document.getElementById('discord-avatar');
  const userId = avatarImg.getAttribute('data-user-id');
  
  try {
    const response = await fetch(`https://discord.com/api/users/${userId}`, {
      headers: {
        'Authorization': `Bot YOUR_BOT_TOKEN`
      }
    });
    const data = await response.json();
    if (data.avatar) {
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${data.avatar}.png?size=1024`;
      avatarImg.src = avatarUrl;
    } else {
      // Set a default avatar if user has no avatar
      avatarImg.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
    }
  } catch (error) {
    console.error('Error fetching Discord avatar:', error);
  }
}

// Call the function to fetch the avatar
fetchDiscordAvatar();

function dark() {
  toggle.checked = true;
  document.body.classList.add("dark-mode");
  modeText.innerText = "Dark";
  localStorage.setItem("darkMode", "true");
}

function light() {
  toggle.checked = false;
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
  modeText.innerText = "Light";
}

// Global footer
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `<div class="to-top">
<?xml version="1.0" ?>
<svg
  height="15px"
  id="Layer_1"
  version="1.1"
  viewBox="0 0 30 30"
  width="15px"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>

  <path
    d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
  />
</svg>
</div>

<div class="footer-socials">
<a href="https://www.youtube.com/channel/UCYX-HMyEB5vHjceWmOZ699Q" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><defs>

</defs><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>

<a href="https://urmom.com/" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"/></svg></a>

<a href="https://urmom.com/" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>

<a href="https://www.linkedin.com/in/ayad-khalid/" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a>

<a href="mailto:ayyad.khalid9999@gmail.com"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></a>
</div>

<p id="greetings"></p>
<p class="subtext">&copy; ${currentYear} Nosto</p>
`;

// Scroll to top
const topBtn = document.querySelector(".to-top");

window.onscroll = function () {
  displayTopBtn();
};

function displayTopBtn() {
  if (window.scrollY > 1000) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", toTop);
function toTop() {
  window.scrollTo(0, 0);
}

// Footer greetings
let greetings = document.getElementById("greetings");
let message;
const today = new Date();
const options = { weekday: "long" };
const day = today.toLocaleDateString("en-US", options);

if (day === "Saturday" || day === "Sunday") {
  if (today.getHours() >= 18) {
    message = "Enjoy the rest of your Weekend!";
  } else {
    message = "Happy Weekend!";
  }
} else {
  if (today.getHours() >= 18) {
    message = `Enjoy the rest of your ${day}!`;
  } else {
    message = `Have a great ${day}!`;
  }
}

greetings.innerText = message;
