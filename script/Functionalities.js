function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}

const history = (pet) => {
  const historyContainer = document.getElementById("history-container");
  const historyPicture = document.createElement("div");
  historyContainer.className = "w-1/4 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2  gap-2 max-h-96 overflow-y-auto border rounded-lg p-2 mb-2";
  historyPicture.innerHTML = `
    <img class="h-auto w-full rounded-lg" src="${pet}" alt="Pet History Image" />
  `;

  historyContainer.append(historyPicture);
};

const loadPetDetails = (videoId) => {
  console.log(videoId);
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${petId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaypetDetails(data.video));
};

const showDetails = (video) => {
  console.log(video);
  document.getElementById("popUp").showModal();
  const detailsContainer = document.getElementById("details-container");

  detailsContainer.innerHTML = `
   <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
    class="w-full"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p class"text-slate-400">${video.description}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
  `;
};

function loadCards() {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => displayCards(data.pets))
    .catch(error => console.log(error))
}

const loadCategoryCard = (category) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => displayCards(data.data))
    .catch(error => console.log(error))
}

function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("btn-section");

  categoryContainer.className = "flex justify-center gap-5"
  // Loop operation on Array of object
  for (let cat of categories) {
    // console.log(cat);

    // create Element
    const categoryDiv = document.createElement("div");

    categoryDiv.className = "py-5"

    categoryDiv.innerHTML = `
      <button onclick="loadCategoryCard('${cat.category}')"  type="button"  class="flex justify-center items-center gap-2 text-xl font-semibold border border-gray-300 rounded-3xl px-5 py-2 hover:bg-[#0E7A81] hover:text-white transition">
      <img class="h-6 w-6 object-contain" src="${cat.category_icon}" alt="${cat.category} icon" />
      <span>${cat.category}</span>
       </button>
`;

    // Append the Element
    categoryContainer.append(categoryDiv);

  }
}


const displayCards = (pets) => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ""; // Clear previous ca

  const petCard = document.createElement("div");

  if (pets.length == 0) {
    cardContainer.innerHTML = `
    <div
        class="py-20 col-span-full flex flex-col justify-center items-center text-center border rounded-lg bg-slate-400"
      >
        <img class="w-[120px]" src="/images/error.webp" alt="" />
        <h2 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h2>
        <p class="text-sm text-slate-400 pt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
      </div>
    `;

  }


  pets.forEach(pet => {

    const petCard = document.createElement("div");
    petCard.innerHTML = ""
    petCard.innerHTML = `
               <div class="h-auto w-auto]flex flex-col items-start m-3 border rounded-lg p-2">
                 <img class="h-auto w-auto rounded-lg" src="${pet.image}" />
                    <h3 class="text-black text-lg font-bold">${pet.pet_name}</h3>
                <div class="flex items-center gap-0.5">
                  <img class="h-4 w-4" src="/images/breed.png" />
                  <p class="text-slate-500 text-sm">Breed: ${pet.breed || "Unknown"}</p>
                </div>
                <div class="flex items-center gap-0.5">
                   <img class="h-4 w-4" src="/images/birth.png" />
                   <p class="text-slate-500 text-sm">Birth: ${pet.date_of_birth || "Not Provided"}</p>
                 </div>
                <div class="flex items-center  gap-0.5">
                 <img class="h-4 w-4" src="/images/gender.png" />
                 <p class="text-slate-500 text-sm">Gender: ${pet.gender ||"N/A"}</p>
               </div>
                <p class="text-sm text-gray-500">Price: ${pet.price ? `$${pet.price}` : "Contact for pricing"}</p>
                <div class="divider my-2"></div>
                <div class="flex  justify-center items-center">
                <button onclick="history('${pet.image}')" id="picture-history" class="border btn btn-sm mr-2 w-1/4"><img src="/images/like.png" alt="Like" /></button>
                <button class="p-2 btn btn-sm text-[#0E7A81] border rounded-lg  ">Adopt</button>
                <button onclick="showDetails('${pet.petId}')" class="p-2 btn btn-sm text-[#0E7A81] border rounded-lg
                ]">Details</button>
              </div>
              </div>
              
            `;
    cardContainer.append(petCard);

  });
}

loadCategories();
loadCards();


// const loadCards = (categories) => {
//         fetch('https://openapi.programming-hero.com/api/peddy/pets')
//            .then(res => res.json())
//            .then(data => displayCards(data))
//            .catch(error => console.log(error));
// }
//    const displayCards = (data) => {
//        const cardContainer = document.getElementById('card-container');
//        cardContainer.innerHTML = ""; // Clear previous ca
//        data.pets.forEach(pet => {
//            if (pet.category === 'Dog') {
//                const petCard = document.createElement("div");
//                petCard.innerHTML = `
//       <div class="h-[432px] w-[312px] flex flex-col m-3">
//         <img class="h-[272px] w-[160px]" src="${pet.image}" />
//            <h3 class="text-black text-lg font-bold">${pet.pet_name}</h3>
//        <div class="flex">
//          <img class="h-4 w-4" src="/images/breed.png" />
//          <p class="text-slate-500 text-sm">Breed: ${pet.breed || "Unknown"}</p>
//        </div>
//        <div class="flex">
//           <img class="h-4 w-4" src="/images/birth.png" />
//           <p class="text-slate-500 text-sm">Birth: ${pet.date_of_birth || "Not Provided"}</p>
//         </d
//        <div class="flex">
//         <img class="h-4 w-4" src="/images/gender.png" />
//         <p class="text-slate-500 text-sm">Gender: ${pet.gender ||"N/A"}</p>
//       </div>
//        <p class="text-sm text-gray-500">Price: ${pet.price ? `$${pet.price}` : "Contact for pricing"}<
//        <div class="divider my-2"></div>
//        <div class="flex gap-3 ">
//        <button class="btn btn-sm mr-2"><img src="/images/like.png" alt="Like" /></button>
//        <button class="btn btn-sm">Adopt</button>
//        <button class="btn btn-sm">Details</button>
//      </div>
//      </div>
//    `;
//                cardContainer.append(petCard);
//            }
//        });


// loadCategories()




























// // document.getElementById('dog-btn').addEventListener('click', function (event) {

// //     event.preventDefault();
// //     const loadCards = () => {
// //         fetch('https://openapi.programming-hero.com/api/peddy/pets')
// //             .then(res => res.json())
// //             .then(data => displayCards(data))
// //             .catch(error => console.log(error));
// //     };


// // // // // //     const displayCards = (data) => {
// // // // // //         const cardContainer = document.getElementById('card-container');
// // // // // //         cardContainer.innerHTML = ""; // Clear previous cards

// // // // // //         data.pets.forEach(pet => {
// // // // // //             if (pet.category === 'Dog') {
// // // // // //                 const petCard = document.createElement("div");
// // // // // //                 petCard.innerHTML = `
// // // // // //        <div class="h-[432px] w-[312px] flex flex-col m-3">
// // // // // //          <img class="h-[272px] w-[160px]" src="${pet.image}" />
// // // // // //             <h3 class="text-black text-lg font-bold">${pet.pet_name}</h3>
// // // // // //         <div class="flex">
// // // // // //           <img class="h-4 w-4" src="/images/breed.png" />
// // // // // //           <p class="text-slate-500 text-sm">Breed: ${pet.breed || "Unknown"}</p>
// // // // // //         </div>
// // // // // //         <div class="flex">
// // // // // //            <img class="h-4 w-4" src="/images/birth.png" />
// // // // // //            <p class="text-slate-500 text-sm">Birth: ${pet.date_of_birth || "Not Provided"}</p>
// // // // // //          </div>

// // // // // //         <div class="flex">
// // // // // //          <img class="h-4 w-4" src="/images/gender.png" />
// // // // // //          <p class="text-slate-500 text-sm">Gender: ${pet.gender ||"N/A"}</p>
// // // // // //        </div>
// // // // // //         <p class="text-sm text-gray-500">Price: ${pet.price ? `$${pet.price}` : "Contact for pricing"}</p>

// // // // // //         <div class="divider my-2"></div>
// // // // // //         <div class="flex gap-3 ">
// // // // // //         <button class="btn btn-sm mr-2"><img src="/images/like.png" alt="Like" /></button>
// // // // // //         <button class="btn btn-sm">Adopt</button>
// // // // // //         <button class="btn btn-sm">Details</button>
// // // // // //       </div>
// // // // // //       </div>
// // // // // //     `;
// // // // // //                 cardContainer.append(petCard);
// // // // // //             }
// // // // // //         });
//    };
//    loadCards();
// // })



// // // ✅ Only this is needed


// // // const displayCards = (data) => {
// // //   const cardContainer = document.getElementById('card-container');
// // //   cardContainer.innerHTML = ""; // Clear previous cards

// // //   data.forEach(pet => {
// // //     const petCard = document.createElement("div");

// // //     petCard.innerHTML = `
// // //       <div class="h-[432px] w-[312px] flex flex-col m-3">
// // //         <img class="h-[272px] w-[160px]" src="${pet.image}" />
// // //         <h3 class="text-black text-lg font-bold">${pet.pet_name}</h3>
// // //         <div>
// // //           <img src="/images/breed.png" />
// // //           <p class="text-slate-300 text-sm">Breed: ${pet.breed || "Unknown"}</p>
// // //         </div>
// // //         <div>
// // //           <img src="/images/birth.png" />
// // //           <p class="text-slate-300 text-sm">Birth: ${pet.date_of_birth || "Not Provided"}</p>
// // //         </div>
// // //         <div>
// // //           <img src="/images/gender.png" />
// // //           <p class="text-slate-300 text-sm">Gender: ${pet.gender ||"N/A"}</p>
// // //         </div>
// // //         <div>
// // //           <img src="/images/price.png" />
// // //           <p class="text-slate-300 text-sm">Price: ${pet.price ? `${pet.price}`}</p>
// // //         </div>
// // //         <div class="divider"></div>
// // //         <button class="btn h-[38px] w-[56px]"><img src="/images/like.png" /></button>
// // //         <button class="btn h-[38px] w-[92px]">Adopt</button>
// // //         <button class="btn h-[38px] w-[92px]">Details</button>
// // //       </div> `
// // //     ;

// // //    cardContainer.append(petCard);

// // //   });
// // //   };