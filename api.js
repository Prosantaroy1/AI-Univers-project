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
      const{image, features, name, published_in, id} = tool;
      const div = document.createElement("div");
      div.innerHTML = `
      <div>
        <div class="col">
         <div class="card h-100">
             <img src="${image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h2 class="card-title fs-3 fw-bold">Features</h2>
             <ul class="mt-3 mb-2 ">
               <li>${features[0]}</li>
               <li>${features[1]}</li>
               <li>${features[2]}</li>
             </ul>
             <hr class="mt-3 mb-2"/>
             <div class="row">
              <div class="col-12">
                 <h4 class="card-name fs-5">${name}</h4>
               </div>
                <div class="d-flex justify-content-between">
                 <div class="cols-6">
                    <i class="fa-solid fa-calendar-days"></i> <span>${published_in}</span>
                  </div>
                  <div class="cols-6">
                     <i onclick="ShowCardDetails('${id}')" class="fa-solid fa-arrow-right text-white bg-danger p-2 rounded-full" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                    
                  </div>
                </div>
              </div>
             </div>
         
      `;
      SectionCard.appendChild(div)
  });
  
};
//ShowCardDetails 
const ShowCardDetails = (id)=>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  //console.log(id);
  fetch(url)
  .then(res => res.json())
  .then(data => DisplayDetails(data.data))
}
//display data
const DisplayDetails = data =>{
 console.log(data); 
 //Modal Box3 Side
 const Modalbox2 = document.getElementById('Modal-box2');
 Modalbox2.innerHTML =`
 <div class="d-flex gap-3  justify-content-between mx-auto">
  <div class="w-75 ">
  <div class="cols-5">
    <p>${data.description}</p>

<div class="chat d-flex justify-content-between w-25 gap-1">
 <div class="border-none Regular shadow py-2 px-4 text-center">
     <h6>${data.pricing[0].price}</h6>
     <h6>${data.pricing[0].plan}</h6>
 </div>

 <div class="border-none Regular shadow bg-white py-2 px-4 text-center">
   <h6>${data.pricing[1].price}</h6>
   <h6>${data.pricing[1].plan}</h6>
 </div>

 <div class="border-none Regular shadow py-2 px-2 text-center ">
   <h6>${data.pricing[2].price}</h6>
   <h6>${data.pricing[2].plan}</h6>
 </div>

   </div>
 </div>


<div class="d-flex justify-content-around align-items-center gap-2  ps-1">
 <div class="text-align-center mt-5 w-75">
     <h3>Feature</h3>
     <div class="">
       <ul class=" mt-3">
         <li>Natural language processing</li>
         <li>Contextual understanding</li>
        <li>Text generation</li>
      </ul>
     </div>
 </div>
 <div class="mb-5">
     <h3>Integrations</h3>
     <div>
     <ul class="mt-3 ">
         <li>FB Messenger</li>
         <li>Slack</li>
         <li>Telegram</li>
      </ul>
     </div>
   </div>
 </div>

</div>
<!--images-->
  <div class="cols-7">
     <img class="img-fluid" "w-50" src="${data.image_link[0]} " alt=""/>
     <div class="card-body">
     <h6>
     ${data.input_output_examples && data.input_output_examples[0] &&
      data.input_output_examples[0].input ? data.input_output_examples[0].input:"NO! NOT YET Take a brek"}
     </h6>
      <p class="text-center">
         ${data.input_output_examples && data.input_output_examples[0] &&
           data.input_output_examples[0].output ? data.input_output_examples[0].output:"NO! NOT YET Take a brek"}
      </p>
    </div>
     
 </div>
 `;
};


////show all Card design 
const ShowAllCard = () =>{
  const URL = "https://openapi.programming-hero.com/api/ai/tools";
  //fetch("https://openapi.programming-hero.com/api/ai/tools")
  fetch(URL)
  .then(res => res.json())
  .then(data => showData(data.data.tools))
}
LoadData();