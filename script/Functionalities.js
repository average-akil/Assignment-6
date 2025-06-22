const loadCards = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayCards(data))
        .catch(error => console.log(error));
};

const displayCards = (data) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ""; // Clear previous cards

    data.pets.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.innerHTML = `
       <div class="h-[432px] w-[312px] flex flex-col m-3">
         <img class="h-[272px] w-[160px]" src="${pet.image}" />
            <h3 class="text-black text-lg font-bold">${pet.pet_name}</h3>
        <div class="flex">
          <img class="h-4 w-4" src="/images/breed.png" />
          <p class="text-slate-500 text-sm">Breed: ${pet.breed || "Unknown"}</p>
        </div>
        <div class="flex">
           <img class="h-4 w-4" src="/images/birth.png" />
           <p class="text-slate-500 text-sm">Birth: ${pet.date_of_birth || "Not Provided"}</p>
         </div>
       
        <div class="flex">
         <img class="h-4 w-4" src="/images/gender.png" />
         <p class="text-slate-500 text-sm">Gender: ${pet.gender ||"N/A"}</p>
       </div>
        <p class="text-sm text-gray-500">Price: ${pet.price ? `$${pet.price}` : "Contact for pricing"}</p>
       
        <div class="divider my-2"></div>
        <div class="flex gap-3 ">
        <button class="btn btn-sm mr-2"><img src="/images/like.png" alt="Like" /></button>
        <button class="btn btn-sm">Adopt</button>
        <button class="btn btn-sm">Details</button>
      </div>
      </div>
    `;
        cardContainer.append(petCard);
    });
};

loadCards(); // ✅ Only this is needed


// const displayCards = (data) => {
//   const cardContainer = document.getElementById('card-container');
//   cardContainer.innerHTML = ""; // Clear previous cards

//   data.forEach(pet => {
//     const petCard = document.createElement("div");

//     petCard.innerHTML = `
//       <div class="h-[432px] w-[312px] flex flex-col m-3">
//         <img class="h-[272px] w-[160px]" src="${pet.image}" />
//         <h3 class="text-black text-lg font-bold">${pet.pet_name}</h3>
//         <div>
//           <img src="/images/breed.png" />
//           <p class="text-slate-300 text-sm">Breed: ${pet.breed || "Unknown"}</p>
//         </div>
//         <div>
//           <img src="/images/birth.png" />
//           <p class="text-slate-300 text-sm">Birth: ${pet.date_of_birth || "Not Provided"}</p>
//         </div>
//         <div>
//           <img src="/images/gender.png" />
//           <p class="text-slate-300 text-sm">Gender: ${pet.gender ||"N/A"}</p>
//         </div>
//         <div>
//           <img src="/images/price.png" />
//           <p class="text-slate-300 text-sm">Price: ${pet.price ? `${pet.price}`}</p>
//         </div>
//         <div class="divider"></div>
//         <button class="btn h-[38px] w-[56px]"><img src="/images/like.png" /></button>
//         <button class="btn h-[38px] w-[92px]">Adopt</button>
//         <button class="btn h-[38px] w-[92px]">Details</button>
//       </div> `
//     ;

//    cardContainer.append(petCard);

//   });
//   };