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
        Id: "1",
      },
      {
        img: "https://i.postimg.cc/qMNczG3N/apartment-ga49b12eae-1280.jpg",
        title: "Modern Apartment",
        Location: "Los Angeles",
        size: "3000sqft",
        bedroom: "1 bedroom",
        baths: "1 bathroom",
        Price: "R1500/night",
        Day: "6 Days Ago",
        list: "Rent",
        Id: "2",
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
        Id: "3",
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
        Id: "4",
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
        Id: "5",
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
        Id: "6",
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
        Id: "7",
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
        Id: "8",
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
        Id: "9",
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
        Id: "10",
      },
    ];
const housesContainer = document.querySelector("#TableItems");

function showHomes(houses) {
  housesContainer.innerHTML = "";
  console.log(houses);
  houses.forEach((home) => {
    housesContainer.innerHTML += `

     <tr>
      <td scope="col">${home.Id}</td>
      <td scope="col">${home.title}</td>
      <td scope="col">${home.Location}</td>
      <td scope="col">${home.bedroom}</td>
      <td scope="col">${home.baths}</td>
      <td scope="col">${home.size}</td>
      <td scope="col">${home.list}</td>
      <td scope="col">${home.img}</td>
      <td scope="col">${home.Price}</td>
      <td scope="col">${home.Day}</td>
    <td><i class="fa-solid fa-folder-plus"></i></td>
    <td><i class="fa-solid fa-trash-can" onclick="delItem(${home.Id})"></i></td>
    <td><i class="fa-solid fa-pen-to-square" ></i></td>
      </tr>
  `;
  });
}
showHomes(houses);

// Adding new items
function addItem() {
  const newHouses = {
    title: document.querySelector("#Title").value,
    Location: document.querySelector("#Location").value,
    bedroom: document.querySelector("#Bedrooms").value,
    bathroom: document.querySelector("#Bathrooms").value,
    size: document.querySelector("#Size").value,
    type: document.querySelector("#Type").value,
    Price: document.querySelector("#Price").value,
    img: document.querySelector("#Img ").value,
    list: document.querySelector("#Listed").value,
    Day: document.querySelector("#Day").value,
    Id: houses.length + 1,
  };
  houses.push(newHouses);
  localStorage.setItem("houses", JSON.stringify(houses));
  showHomes(houses);
}

document.querySelector("#addItems").addEventListener("click", addItem);

// Delete An Item

function delItem(Id) {
  houses = houses.filter((home) => {
    return home.Id !== Id;
  });
  localStorage.setItem("houses", JSON.stringify(houses));
  showHomes(houses);
}

// Edit Item

// Edit Function
function editItem(id) {
  document.querySelector(`#Title${id}`).disabled = false;
  document.querySelector(`#Location${id}`).disabled = false;
  document.querySelector(`#Bedrooms${id}`).disabled = false;
  document.querySelector(`#Bathrooms${id}`).disabled = false;
  document.querySelector(`#Size${id}`).disabled = false;
  document.querySelector(`#Type${id}`).disabled = false;
  document.querySelector(`#Img${id}`).disabled = false;
  document.querySelector(`#Price${id}`).disabled = false;
  document.querySelector(`#Listed${id}`).disabled = false;
}
// function saveItem(id) {}
// showTable(houses);
// function updateItem(id) {
//   const #Listed = houses.find((#Listed) => {
//     return Listed.id == id;
//   });
//   const titleBox = document.querySelector(`#Title${id}`);
//   const locationBox = document.querySelector(`#Location${id}`);
//   const bedroomsBox = document.querySelector(`#Bedrooms${id}`);
//   const bathroomsBox = document.querySelector(`#Bathrooms${id}`);
//   const areaBox = document.querySelector(`#Size${id}`);
//   const typeBox = document.querySelector(`#Type${id}`);
//   const imgBox = document.querySelector(`#Img${id}`);
//   const priceBox = document.querySelector(`#Price${id}`);
//   const listingBox = document.querySelector(`#Listed${id}`);
//   document.querySelector(`#Title${id}`).disabled = true;
//   document.querySelector(`#Location${id}`).disabled = true;
//   document.querySelector(`#Bedrooms${id}`).disabled = true;
//   document.querySelector(`#Bathrooms${id}`).disabled = true;
//   document.querySelector(`#Size${id}`).disabled = true;
//   document.querySelector(`#Type${id}`).disabled = true;
//   document.querySelector(`#Img${id}`).disabled = true;
//   document.querySelector(`#Price${id}`).disabled = true;
//   document.querySelector(`#Listed${id}`).disabled = true;
//   listings.title = titleBox.value;
//   listings.location = locationBox.value;
//   listings.bedrooms = bedroomsBox.value;
//   listings.bathrooms = bathroomsBox.value;
//   listings.garage = garageBox.value;
//   listings.area = areaBox.value;
//   listings.type = typeBox.value;
//   listings.img = imgBox.value;
//   listings.price = priceBox.value;
//   listings.listing = listingBox.value;
//   localStorage.setItem("houses", JSON.stringify(houses));
// }
// showTable(houses);
