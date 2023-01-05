const form = document.getElementById("listManagementForm");
const flexContainer = document.getElementById("flexContainer");
const deleteListe = document.getElementById('deleteList');
let postitContainer = document.querySelectorAll(".postitContainer");
const h3Delete = document.querySelector('h3');
const h1 = document.querySelector('h1');

function storeLists(){
    window.localStorage.lists=flexContainer.innerHTML;
}
function getLists(){
        if (window.localStorage.lists!= undefined){
            flexContainer.innerHTML=window.localStorage.lists;
        }
}
window.addEventListener("load", getLists)

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nomListe = prompt("Veuillez entrer le nom de la liste");
    let couleurPostit = Math.floor(Math.random()*4);
    flexContainer.innerHTML += `<div class="postitContainer"><h2>${nomListe}</h2><img src="images/postit${couleurPostit}.png"></div>`
    storeLists();
})

  postitContainer.forEach((box)=>{
    deleteListe.addEventListener('click',()=>{ 
        box.style.opacity="0";
    })
  })
deleteListe.addEventListener('click', ()=>{
    postitContainer = document.querySelectorAll(".postitContainer");
    if (deleteListe.value==="Supprimer une liste"){
    deleteListe.value="Arreter la suppression"
    h3Delete.style.opacity=1;
    postitContainer.forEach((box)=>{
        box.classList.add('postitContainerDelete');
             
        box.addEventListener('click',()=>{
            if (deleteListe.value==="Arreter la suppression") {
                box.remove()
            }
        })
    })
    }else{
    deleteListe.value="Supprimer une liste"
    h3Delete.style.opacity=0;
    postitContainer.forEach((box)=>{
        box.classList.remove('postitContainerDelete');
    })
    }
})

//////////////////////////////////////////////////////////////////////

flexContainer.addEventListener('click', (e)=>{
    postitContainer = document.querySelectorAll(".postitContainer");
    postitContainer.forEach((box)=>{
        box.addEventListener('click',(e)=>{
            console.log(e)
            h1.style.color="red";
          
        })
    })
 
})
