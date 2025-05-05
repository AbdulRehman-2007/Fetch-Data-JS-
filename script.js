

let api = "https://abdulrehman-2007.github.io/Cricket-Gallery-API/index.json"


async function getApi (url){

    let response = await fetch(url)
let data = await response .json ()

console.log(data);

let img = "" 

data.forEach(element => {
    


img += `
 <div class="card">
      <img src=" ${element.image_url} " class="card-img-top" alt="card-img1" />
      <div class="card-content">
        <p class="id">ID: ${element.image_id} </p>
        <h2 class="card-title">${element.image_category}</h2>
        <p class="card-description">${element.image_description}</p>
        <button class="btn btn warning"> </button> 
      </div>
    </div>
`
document.getElementById("showAPI").innerHTML = img

});
}
getApi(api)