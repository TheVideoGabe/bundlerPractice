// Main container elements holding the content
import { mainContainer, bodyContainer } from "./index.js";
import blueFrenchHornImg from "../asset/blue-french-horn.png"

export function homePage() {
    bodyContainer.innerHTML = `
    <div class="px-4 pt-2 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold pb-4">Welcome To The Blue French Horn <img src="${blueFrenchHornImg}"></h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Enjoy a beer or some pizza at the most <strong>legen-</strong> wait for it... <strong>Dary</strong> Pub in town.</p>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="container px-5">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d758d941776145.57b3f6edc1751.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
      </div>
    </div>
  </div>
   <div class="container-fluid marketing">

    <div class="row featurette align-items-center justify-content-center">
      <div class="col-md-7 ">
        <h2 class="featurette-heading fw-normal lh-1">Come Experience It For Yourself. <span class="text-muted">Vibe to some Jazz.</span></h2>
        <p class="lead">Or just chill with your regular group of friends sit-com style.</p>
      </div>
      <div class="col-md-5">
        <img class="img-fluid shadow-lg border rounded-3" src="https://static01.nyt.com/images/2014/04/02/arts/television/02HIMYM-FINALE/02HIMYM-FINALE-superJumbo.jpg" alt="">
    </div>
</div>

<hr class="featurette-divider">

<div class="row featurette align-items-center justify-content-center">
      <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">But please stop stealing the french horn, our insurance is going to stop covering it.</p>
      </div>
      <div class="col-md-5 order-md-1">
          <img class="img-fluid shadow-lg border rounded-3" src="https://people.com/thmb/G231smNjrDDBHsFfsN-9wK9pwEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/josh-radnor-how-i-met-your-mother-finale-021925-db633cbf82a44c969df7b6ff3996b168.jpg" width="500" height="300" alt="">
      </div>
    </div>
  </div>
    `
    // const h1 = document.createElement("h1");
    // h1.setAttribute("class", "text-center landing-main")
    // h1.textContent = "Welcome To The Blue French Horn";
    // bodyContainer.appendChild(h1);
}



export function newsPage() {
// News items
    const restaurantNews = [
    {
        title: "Food Reviewer Drives Traffic To The Blue French Horn",
        subtitle: "Unorthodox.. But Valid",
        description:
        "Nathan gave us a Yelp review based on how other people ate their food... He didn't order anything.",
        image:
        "https://www.indiewire.com/wp-content/uploads/2017/11/nathan-for-you-season-4-suit.jpg"
    },
    {
        title: "Super Smah Bros Ultimate Tournament On Wednesday",
        subtitle: "Winner Gets Free Pizza",
        description:
        "Have fun with your mainy starting at 7 PM.",
        image:
        "https://www.smashbros.com/assets_v2/img/movie/20200622_1.jpg"
    },
    {
        title: "Dinosaur Chicken Nugget Shortage",
        subtitle: "Oh No!",
        description:
        "Due to a supply chain issue we were not able to secure enough stock for our pub. We apologize.",
        image:
        "https://t3.ftcdn.net/jpg/16/61/45/00/360_F_1661450031_tTr2vB8H97AxkDxJhijwLY59c1uPiyLK.jpg"
    },
];

    const title = document.createElement("h1");
    title.textContent = "Restaurant News";
    title.className = "text-center pt-5 title-main";
    
    bodyContainer.appendChild(title);
    
    // card container
      const cardsContainer = document.createElement("div");
      cardsContainer.className =
      "container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto";
      
      restaurantNews.forEach((article, index) => {
          const card = document.createElement("div");
          
          card.className = "col px-md-3 px-lg-5 px-xl-5 pt-5";
        
          card.innerHTML = `
          <div class="card h-100 shadow-sm">
          <img
          src="${article.image}"
          class="card-img-top"
          alt="${article.title}"
        />
        
        <div class="card-body">
          <h4 class="card-title">
            ${article.title}
          </h4>

          <h6 class="card-subtitle mb-2 text-muted">
            ${article.subtitle}
          </h6>

          <p class="card-text">
            ${article.description}
          </p>

          <button class="btn btn-primary">
            Read More
          </button>
        </div>
      </div>
    `;

    bodyContainer.appendChild(card);
  });
}


// Make manu page
export function menuPage() {
    // News items
    const restaurantItems = [
    {
        title: "Chicken Nuggets",
        subtitle: "No Dinosaurs Due To High Demand... Sadly",
        description:
        "Try some chicken nuggies, works for every occasion.",
        image:
        "https://images.alphacoders.com/135/1352149.png"
    },
    {
        title: "Mac n Cheese",
        subtitle: "Every Friday Night",
        description:
        "According to every person I know, this dish will boost your dopamine levels.",
        image:
        "https://media.istockphoto.com/id/1083507120/photo/classic-boxed-mac-and-cheese-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=lJjXvQO7cvVOzGSg0Bz8FGSrbs4Px2ILCYJ9v6FkcF4="
    },
    {
        title: "Chef's Special",
        subtitle: "Comes With A Toy!",
        description:
        "Try our chef’s signature truffle mushroom risotto before it leaves the menu.",
        image:
        "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
];

    const title = document.createElement("h1");
    title.textContent = "Restaurant Menu";
    title.className = "text-center pt-5 title-main";
    
    bodyContainer.appendChild(title);
    
    // card container
      const cardsContainer = document.createElement("div");
      cardsContainer.className =
      "container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto pt-5";

      restaurantItems.forEach((menuiItem, index) => {
          const card = document.createElement("div");
          
          card.className = "col";
        
          card.innerHTML = `
          <div class="card h-100 shadow-sm">
          <img
          src="${menuiItem.image}"
          class="card-img-top"
          alt="${menuiItem.title}"
        />
        
        <div class="card-body d-flex flex-column">
          <h4 class="card-title">
            ${menuiItem.title}
          </h4>

          <h6 class="card-subtitle mb-2 text-muted">
            ${menuiItem.subtitle}
          </h6>

          <p class="card-text">
            ${menuiItem.description}
          </p>

          <button class="btn btn-primary mt-auto">
            Order!
          </button>
        </div>
      </div>
    `;

    cardsContainer.appendChild(card);
  });
  bodyContainer.appendChild(cardsContainer)
}

// Make About page
export function aboutPage() {
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center landing-main")
    h1.textContent = "About Us";
    bodyContainer.appendChild(h1);
    bodyContainer.innerHTML += `
    <div class="d-flex h-100 text-center text-bg-dark">
    <div class="cover-container justify-content-center d-flex w-100 h-100 p-3 mx-auto flex-column">
  <main class="px-3">
    <h1>GitHub Repo</h1>
    <p class="lead">This was just practice on how to use webpack, making re usable page components and importing them as well as clarifying the best way to create dynamic HTML elements using javascript and rendering them to the DOM.</p>
    <p class="lead">
      <a href="https://github.com/TheVideoGabe/bundlerPractice" target="_blank" class="btn btn-lg btn-secondary fw-bold border-black bg-black">Learn more</a>
    </p>
  </main>  
</div>
</div>
`
}