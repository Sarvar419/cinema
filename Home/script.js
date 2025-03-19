const suggestedFIlms = [
    {
        name: "The Great Lands",
        genre: "Movie",
        year: 2019,
        limit: "PG",
        src: "https://i.ibb.co/sCVYdz9/The-great-Lands.png",
        bookmarked: false
    },
    {
        name: "The Diary",
        genre: "TV Series",
        year: 2019,
        limit: "PG",
        src: "https://i.ibb.co/J35mMcS/The-Diary.png",
        bookmarked: false
    },
    {
        name: "Earth’s Untouched",
        genre: "TV Series",
        year: 2017,
        limit: "18+",
        src: "https://i.ibb.co/kyg09Hx/Earth-s-Untouched.png",
        bookmarked: false
    },
    {
        name: "No Land Beyond",
        genre: "Movie",
        year: 2019,
        limit: "E",
        src: "https://i.ibb.co/r2R6bnL/No-Land-Beyond.png",
        bookmarked: false
    },
    {
        name: "During The Hunt",
        genre: "TV Series",
        year: 2016,
        limit: "PG",
        src: "https://i.ibb.co/sbn837Z/During-The-Hunt.png",
        bookmarked: false
    },
    {
        name: "Autosport The Series",
        genre: "TV Series",
        year: 2016,
        limit: "PG",
        src: "https://i.ibb.co/Gv3Qgxh/Autosport-The-Series.png",
        bookmarked: false
    },
    {
        name: "Same Answer II",
        genre: "Movie",
        year: 2017,
        limit: "E",
        src: "https://i.ibb.co/51jjgbG/Same-Answer-II.png",
        bookmarked: false
    },
    {
        name: "Below Echo",
        genre: "TV Series",
        year: 2016,
        limit: "PG",
        src: "https://i.ibb.co/rGtSYzk/Below-Echo.png",
        bookmarked: false
    },
    {
        name: "The Rockies",
        genre: "TV Series",
        year: 2015,
        limit: "E",
        src: "https://i.ibb.co/ZLNrDch/The-Rockies.png",
        bookmarked: false
    },
    {
        name: "Relentless",
        genre: "Movie",
        year: 2017,
        limit: "PG",
        src: "https://i.ibb.co/v1B1Yzm/Relentless.png",
        bookmarked: false
    },
    {
        name: "Community of Ours",
        genre: "TV Series",
        year: 2018,
        limit: "18+",
        src: "https://i.ibb.co/K6kDffv/Community-of-Ours.png",
        bookmarked: false
    },
    {
        name: "Van Life",
        genre: "Movie",
        year: 2015,
        limit: "PG",
        src: "https://i.ibb.co/F08wSsr/Van-Life.png",
        bookmarked: false
    },
    {
        name: "The Heiress",
        genre: "Movie",
        year: 2021,
        limit: "PG",
        src: "https://i.ibb.co/WG6s1BC/The-Heiress.png",
        bookmarked: false
    },
    {
        name: "Off the Track",
        genre: "Movie",
        year: 2017,
        limit: "18+",
        src: "https://i.ibb.co/rsSbB8z/Off-the-Track.png",
        bookmarked: false
    },
    {
        name: "Whispering Hill",
        genre: "Movie",
        year: 2017,
        limit: "E",
        src: "https://i.ibb.co/khtkWm1/Whispering-Hill.png",
        bookmarked: false
    },
    {
        name: "112",
        genre: "TV Series",
        year: 2013,
        limit: "PG",
        src: "https://i.ibb.co/2hKrzsT/112.png",
        bookmarked: false
    },
    {
        name: "Lone Heart",
        genre: "Movie",
        year: 2017,
        limit: "E",
        src: "https://i.ibb.co/QFBV588/Lone-Heart.png",
        bookmarked: false
    },
    {
        name: "Production Line",
        genre: "TV Series",
        year: 2018,
        limit: "PG",
        src: "https://i.ibb.co/mS54NB2/Production-Line.png",
        bookmarked: false
    },
    {
        name: "Dogs",
        genre: "TV Series",
        year: 2016,
        limit: "E",
        src: "https://i.ibb.co/vHpC82V/Dogs.png",
        bookmarked: false
    },
    {
        name: "Asia in 24 Days",
        genre: "TV Series",
        year: 2020,
        limit: "PG",
        src: "https://i.ibb.co/LpS9bFJ/Asia-in-24-Days.png",
        bookmarked: false
    },
    {
        name: "The Tasty Tour",
        genre: "TV Series",
        year: 2016,
        limit: "PG",
        src: "https://i.ibb.co/hH1NRSb/The-Tasty-Tour.png",
        bookmarked: false
    },
    {
        name: "Darker",
        genre: "Movie",
        year: 2017,
        limit: "18+",
        src: "https://i.ibb.co/Z2RymGx/Darker.png",
        bookmarked: false
    },
    {
        name: "Unresolved Cases",
        genre: "TV Series",
        year: 2018,
        limit: "18+",
        src: "https://i.ibb.co/6XgBCH8/Unresolved-Cases.png",
        bookmarked: false
    },
    {
        name: "Mission: Saturn",
        genre: "Movie",
        year: 2017,
        limit: "PG",
        src: "https://i.ibb.co/Zxjrgrv/Mission-Saturn.png",
        bookmarked: false
    }
];

function toggleForm() {
    document.getElementById("login-box").classList.toggle("hidden");
    document.getElementById("signup-box").classList.toggle("hidden");
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let error = document.getElementById("login-error");
    error.textContent = "";

    if (!email.includes("@")) {
        error.textContent = "Invalid email format";
        return;
    }
    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return;
    }
    alert("Login  Qo'shildi!");
}

function signup() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirm = document.getElementById("signup-confirm").value;
    let error = document.getElementById("signup-error");
    error.textContent = "";

    if (!email.includes("@")) {
        error.textContent = "Invalid email format";
        return;
    }
    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters";
        return;
    }
    if (password !== confirm) {
        error.textContent = "Passwords do not match";
        return;
    }
    alert("Sign-up Qo'shildi!");
    location = "http://127.0.0.1:5500/Home/main.html"
}
const movies = document.querySelector(".recommended-movies");
let moviesArr = "";
suggestedFIlms.forEach(movie => {
    let trending = `
     <div class="recommended-movie">
                <div class="play-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z" fill="white" />
                  </svg>
                  <span>Play</span>
                </div>
                <img src="${movie.src}" />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='svg'>
                  <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                  <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" stroke-width="1.5" />
                </svg>
                <div class="texts">
                  <div class="desc">
                    <span class="year">${movie.year}</span> <div className="circle"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z" fill="white" />
                    </svg>
                    <span class="genre">${movie.genre}</span> <div className="circle"></div>
                    <span class="limit">${movie.limit}</span>
                  </div>
                  <h4 class="movie-name">${movie.name}</h4>
                </div>
          </div>
    `;
    moviesArr += trending;
})

movies.innerHTML = moviesArr