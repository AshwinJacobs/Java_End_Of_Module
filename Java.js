// const Filter = (e) => {
//   const category = e.target.value;
//   if (category === "all") {
//     return showItems(items);
//   }
//   const filtered = items.filter((item) => item.category === category);
//   return showItems(filtered);
// };

// const priceSort = (e) => {
//   const direction = e.target.value;
//   const sorted = items.sort((a, b) => a.price - b.price);
//   if (direction === "asc") {
//     showItems(sorted);
//   } else {
//     showItems(sorted.reverse());
//   }
// };
// const nameSort = (e) => {
//   const direction = e.target.value;
//   const sorted = items.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
//   if (direction === "asc") {
//     showItems(sorted);
//   } else {
//     showItems(sorted.reverse());
//   }
// };
let houses = JSON.parse(localStorage.getItem("houses"))
  ? JSON.parse(localStorage.getItem("houses"))
  : [
      {
        img: "https://i.postimg.cc/SQr1WVRV/apartment-g4cdf4d2cd-1280.jpg",
        title: "Pacific Plaza Resort",
        Location: "California",
        size: "4000sqft",
        bedroom: "4 bedrooms",
        baths: "3 bathrooms",
        Price: "R5,780,000",
        Day: "7 Days Ago",
        list: "Sale",
        ID: "1",
      },
      {
        img: "https://i.postimg.cc/qMNczG3N/apartment-ga49b12eae-1280.jpg",
        title: "Modern Apartment",
        Location: "Los Angeles",
        size: "3000sqft",
        bedroom: "1 bedrooms",
        baths: "1 bathrooms",
        Price: "R1500/night",
        Day: "6 Days Ago",
        list: "Rent",
        ID: "2",
      },
      {
        img: "https://i.postimg.cc/TY5mRYzm/apartment-ge5618e4b2-1280.jpg",
        title: "The Elet Hotel",
        Location: "Villa in South Lake Tahoe, CA",
        size: "2000sqft",
        bedroom: "2 bedrooms",
        baths: "2 bathrooms",
        Price: "R1200/Night",
        Day: "2 Days Ago",
        list: "Rent",
        ID: "3",
      },
      {
        img: "https://i.postimg.cc/QdkFtB0B/dining-room-g66d6bcd8b-1280.jpg",
        title: "The Westin Desert Willow Villas, Palm Desert",
        Location: "Villa in Palm Desert",
        size: "4500sqft",
        bedroom: "4 bedrooms",
        baths: "3 bathrooms",
        Price: "R5,500,000",
        Day: "3 Days Ago",
        list: "Sale",
        ID: "4",
      },
      {
        img: "https://i.postimg.cc/HLYtz8x5/home-gab8dae866-1280.jpg",
        title: "South Coast Winery Resort & Spa",
        Location: "Villa in Napa",
        size: "4800sqft",
        bedroom: "4 bedrooms",
        baths: "2 bathrooms",
        Price: "R3,800,000",
        Day: "1 Day Ago",
        list: "Sale",
        ID: "5",
      },
      {
        img: "https://i.postimg.cc/2yLNkKmr/room-g91f4d9196-1280.jpg",
        title: "Beach Street Inn and Suites ",
        Location: "Westside Santa Cruz",
        size: "5000sqft",
        bedroom: "5 bedrooms",
        baths: "4 bathrooms",
        Price: "R8,000,000",
        Day: "2 Days Ago",
        list: "Sale",
        ID: "6",
      },
      {
        img: "https://i.postimg.cc/yYNSPhjB/dining-room-g34ef3175c-1280.jpg",
        title: "Charming Spanish Mid-Century Gem Near LAX/Beaches",
        Location: " Universal City, Los Angeles",
        size: "3900sqft",
        bedroom: "2 bedrooms",
        baths: "2 bathrooms",
        Price: "R4,500,000",
        Day: "4 Days Ago",
        list: "Sale",
        ID: "7",
      },
      {
        img: "https://i.postimg.cc/wjqpXFhk/interior-g0254e42a6-1280.jpg",
        title: "The Lodge",
        Location: " San Diego",
        size: "6000sqft",
        bedroom: "6 bedrooms",
        baths: "6 bathrooms",
        Price: "R25,000,000",
        Day: "5 Days Ago",
        list: "Sale",
        ID: "8",
      },
      {
        img: "https://i.postimg.cc/VNZXF72Q/indoors-g0d1fa7a7d-1280.jpg",
        title: "Modern Apartment",
        Location: "Jogeshwari West",
        size: "3200 Sqft",
        bedroom: "3 Bedrooms",
        baths: "2 Bathrooms",
        Price: "R5000/Night",
        Day: "7 Days Ago",
        list: "Rent",
        ID: "9",
      },
      {
        img: "https://i.postimg.cc/7hrgd59q/kitchen-living-room-g6d3db2838-1280.jpg",
        title: "Modern Apartment",
        Location: "Jogeshwari West, Mumbai, India",
        size: "3500 Sqft",
        bedroom: "3 Bedrooms",
        baths: "3 Bathrooms",
        Price: "R3,550/Night",
        Day: "1 Day Ago",
        list: "Rent",
        ID: "10",
      },
    ];

function showHouses(houses) {
  document.querySelector("#list").innerHTML = "";
  houses.forEach((home) => {
    document.querySelector("#list").innerHTML += `
<div class="box-container">
    <div class="box">
    <div class="image-container">
    <img src= ${home.img}>
    <div class="info">
    <h3> ${home.Day}</h3>
    <h3> ${home.list}</h3>
    </div>
    </div>
    <div class="content">
    <div class="price">
    <h3>${home.Price}</h3>
    <a href="#" class="fas fa-envelope"></a>
    <a href="#" class="fas fa-phone"></a>
    </div>
    <div class="location">
    <h3>${home.title}</h3>
    <p> ${home.Location}</p>
    </div>
    <div class="details">
    <h3><i class="fas fa-expand"></i>${home.size} </h3>
    <h3><i class="fas fa-bed"></i> ${home.bedroom} </h3>
    <h3><i class="fas fa-bath"></i>${home.baths} </h3>
</div>

</div>
 </div>
</div>

  `;
  });
}
console.log(houses);

localStorage.setItem("list", JSON.stringify(houses));
showHouses(houses);

function filter2(event) {
  let FilterOption = event.target.value;
  if (FilterOption !== "all") {
    // console.log(FilterOption);
    document.querySelector("#list").innerHTML = "";
    let specificView = houses.filter2((home) => home.list === FilterOption);
    specificView.forEach((home) => {
      document.querySelector("#list").innerHTML += `
       <div class="box-container">
    <div class="box">
    <div class="image-container">
    <img src= ${home.img}>
    <div class="info">
    <h3> ${home.Day}</h3>
    <h3> ${home.list}</h3>
    </div>
    </div>
    <div class="content">
    <div class="price">
    <h3>${home.Price}</h3>
    <a href="#" class="fas fa-heart"></a>
    <a href="#" class="fas fa-envelope"></a>
    <a href="#" class="fas fa-phone"></a>
    </div>
    <div class="location">
    <h3>${home.title}</h3>
    <p> ${home.Location}</p>
    </div>
    <div class="details">
    <h3><i class="fas fa-expand"></i>${home.size} </h3>
    <h3><i class="fas fa-bed"></i> ${home.bedroom} </h3>
    <h3><i class="fas fa-bath"></i>${home.baths} </h3>
</div>

</div>
 </div>
</div>
        `;
      console.log(specificView);
    });
  } else {
    display();
  }
}

localStorage.setItem("list", JSON.stringify(houses));
showHouses(houses);

function filter(event) {
  let FilterOption = event.target.value;
  if (FilterOption !== "Size") {
    // console.log(FilterOption);
    document.querySelector("#list").innerHTML = "";
    let specificView = houses.filter((home) => home.size === FilterOption);
    specificView.forEach((home) => {
      document.querySelector("#list").innerHTML += `
       <div class="box-container">
    <div class="box">
    <div class="image-container">
    <img src= ${home.img}>
    <div class="info">
    <h3> ${home.Day}</h3>
    <h3> ${home.list}</h3>
    </div>
    </div>
    <div class="content">
    <div class="price">
    <h3>${home.Price}</h3>
    <a href="#" class="fas fa-heart"></a>
    <a href="#" class="fas fa-envelope"></a>
    <a href="#" class="fas fa-phone"></a>
    </div>
    <div class="location">
    <h3>${home.title}</h3>
    <p> ${home.Location}</p>
    </div>
    <div class="details">
    <h3><i class="fas fa-expand"></i>${home.size} </h3>
    <h3><i class="fas fa-bed"></i> ${home.bedroom} </h3>
    <h3><i class="fas fa-bath"></i>${home.baths} </h3>
</div>

</div>
 </div>
</div>
        `;
      console.log(specificView);
    });
  } else {
    display();
  }
}
