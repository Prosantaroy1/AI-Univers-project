const LoadData = () =>{
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    //fetch("https://openapi.programming-hero.com/api/ai/tools")
    fetch(URL)
    .then(res => res.json())
    .then(data => showData(data.data.tools.slice(0,6)))
}
//show data card design
const showData = (tools) =>{
    //console.log(tools);
       //id add html to js
    const SectionCard = document.getElementById('Section-Card');
    SectionCard.innerHTML = "";
    //condition
     tools.forEach((tool) =>{
        const{image, features, name, published_in} = tool;
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card w-96 h-full bg-base-100 shadow">
          <figure class="px-8 pt-8">
             <img src="${image}" alt="photo" class="rounded-xl" />
          </figure>
         <div class="card-body px-8 pt-8">
           <h2 class="card-title text-xl font-bold">Features</h2>
           <ul class="mt-3 mb-2">
             <li>1. ${features[0]}</li>
             <li>2. ${features[1]}</li>
             <li>3. ${features[2]}</li>
           </ul>
           <hr class="mt-3 mb-2"/>
           
            <div class="flex justify-between items-center mt-2 mb-3">
                <div class=" grid gap-4">
                  <div><h2 class="card-name text-xl font-semibold">${name}</h2></div>
                  <div><i class="fa-solid fa-calendar-days"></i> ${published_in}</div>
                </div>
                <div>
                   <i onclick="CardDetails('')" class="fa-solid fa-arrow-right bg-red-200 text-white p-3 rounded-full"></i>
                </div>
             </div>
         </div>
       </div>
        `;
        SectionCard.appendChild(div)
    });
//Card Details 
    
};
const ShowAllCard =() =>{
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    //fetch("https://openapi.programming-hero.com/api/ai/tools")
    fetch(URL)
    .then(res => res.json())
    .then(data => showData(data.data.tools))
}
LoadData();