let links = [

  { link: "https://hani-rashed.web.app", lebel: "Contacts" },

  { link: "hr", lebel: "Social" },
  { link: "https://www.linkedin.com/in/haniomhsen3810", lebel: "linkedin" },
  { link: "https://github.com/hanimohsen31", lebel: "github" },
  { link: "https://www.facebook.com/hanimohsen3810", lebel: "facebook" },
  { link: "https://www.behance.net/hanimohsen3810", lebel: "behance" },
  { link: "https://mostaql.com/u/hanimohsen", lebel: "mostaql" },
  { link: "https://hanimohsen3810.gumroad.com", lebel: "gumroad" },
  { link: "https://sites.google.com/view/hanimohsen/home", lebel: "google sites" },
  { link: "https://drive.google.com/file/d/1rLpZ1aRn-hEBS7sxHbZnF-WnoX35_tEk/view", lebel: "Updated Cv" },
  { link: "hanimohsen3810@yahoo.com", lebel: "Paypal" },
  { link: "hanimohsen31@gmail.com", lebel: "Email" },

  { link: "hr", lebel: "Angular Projects" },
  { link: "https://onix-1.web.app", lebel: "onix" },
  { link: "https://screen-recorder-500.web.app", lebel: "screen recorder" },
  { link: "https://food-calculator-100.web.app", lebel: "food calculator" },
  { link: "https://fitness-counter-100.web.app", lebel: "fitness counter" },
  { link: "https://angular-dashboard-100.web.app", lebel: "dashboared" },
  { link: "https://angular-ecommerce-100.web.app", lebel: "ecommerce" },
  { link: "https://omra-path.web.app", lebel: "omra" },
  { link: "https://angular-cv-5000.web.app", lebel: "CV maker" },

  { link: "hr", lebel: "React Projects" },
  { link: "https://react-personal-portfolio-100.web.app", lebel: "portfolio" },
  { link: "https://collection-100.web.app", lebel: "collection" },
  { link: "https://react-dashboard-tutorial-100.web.app", lebel: "dashboard tutorial" },
  { link: "https://social-media-tutorial-100.web.app/", lebel: "social media tutorial" },
  { link: "https://react-ecommerce-100.web.app", lebel: "ecommerce" },
  { link: "https://react-arabic-dashbored.web.app", lebel: "arabic dashboared" },

  { link: "hr", lebel: "Ella Identity" },
  { link: "https://ellavibes.shop", lebel: "ella vibes" },
  { link: "https://affilite-market.web.app", lebel: "Affilite" },
  { link: "https://ellavibesstore.blogspot.com/", lebel: "Ella Blog" },
  { link: "https://www.pinterest.com/ellavibesus", lebel: "Ella Pinterest" },
  { link: "https://www.instagram.com/ellavibes.us", lebel: "Ella Instagram" },
  { link: "https://x.com/EllaVibesUs", lebel: "Ella Twitter" },

  { link: "hr", lebel: "HTML CSS Projects" },
  { link: "https://hanimohsen31.github.io/Halla-Travil", lebel: "Halla Travil" },
  { link: "https://hanimohsen31.github.io/postman-html", lebel: "Postman" },
  { link: "https://hanimohsen31.github.io/montada-egypt-emirates/", lebel: "Montada EG-UAE" },
  { link: "https://hanimohsen31.github.io/Nintendo", lebel: "Nintendo" },
  { link: "https://hanimohsen31.github.io/Casper", lebel: "Casper" },
  { link: "https://hanimohsen31.github.io/Leaon", lebel: "Leaon" },

  { link: "hr", lebel: "Certificates" },
  { link: "https://drive.google.com/file/d/1_1IPbz7gKC-io6tZOkOA852xSiuLtSxn/view", lebel: "CS50" },
  { link: "https://drive.google.com/file/d/1b0AwGUoGWP7J1Bus5A6E8Mwrqa2IV5Cv/view", lebel: "Freelancing Basics" },
  { link: "https://drive.google.com/file/d/1g1MD1YnvLRTzOVA7FCdeI_MhaoH4sDB8/view", lebel: "Interior Design" },
  { link: "https://drive.google.com/file/d/1yBHoPqo1q6sg-aJzGsMO2kJwUFtcX4Pd/view", lebel: "IN THE NIGHT SKY: ORION" },
  { link: "https://drive.google.com/file/d/1s57mETOOqt8YsEKCokf341Mc4VWB5gfF/view", lebel: "Resala" },
];

let linkContainer = `
<div class="link-container">
    <label>replaceLabel:</label>
    <a href="replaceLink" target="_blank">replaceLink</a>
    <img class="copy-icon" src="assets/svg/copy.svg" onclick="copyToClipboard('replaceLink')"/>
</div>
`;

let hr = `
<div class="hr">
    <label>replaceLabel</label>
    <hr>
</div>
`;

let injectedHTML = "";
links.map((elm) => {
  if (elm.link !== "hr") {
    injectedHTML += linkContainer
      .replaceAll("replaceLabel", elm.lebel)
      .replaceAll("replaceLink", elm.link);
  } else {
    injectedHTML += hr.replaceAll("replaceLabel", elm.lebel);
  }
});

let linksElement = document.querySelector(".links");
if (linksElement) linksElement.innerHTML = injectedHTML;
