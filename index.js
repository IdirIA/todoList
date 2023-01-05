const form = document.getElementById("listManagementForm");
const flexContainer = document.getElementById("flexContainer");
const deleteListe = document.getElementById('deleteList');
const postitContainer = document.querySelectorAll(".postitContainer");
const h3Delete = document.querySelector('h3');
const h1 = document.querySelector('h1');
let nomListeAvantTri = "";


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
    const postitContainer = document.querySelectorAll(".postitContainer");
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

/////////////////////////////////////////////////////////////////////
const ulList = document.getElementById('ulList');
const list = document.getElementById('list');
const newBG = document.getElementById('notePad')
const aFaire = document.getElementById('aFaire');

function storeAFaire(listNameStorage){
    //console.log(listNameStorage)
    let x = listNameStorage
    window.localStorage.x =ulList.innerHTML;
}

flexContainer.addEventListener('click', (e)=>{
    //console.log(e.path[1])
   // e.path[1].remove();
    nomListeAvantTri = e.path[1].innerHTML
    let balisePosition=nomListeAvantTri.indexOf("</h2>")
    let nomListeAvecEspaces=[];
    nomListeAvecEspaces =  nomListeAvantTri.slice(4, balisePosition);
    let nomListeSansEspaces = nomListeAvecEspaces.replaceAll(" ","");
    //console.log(nomListeSansEspaces)
    newBG.style.transform=('translateX(0px)');
    list.style.transform=('translate(-50%, -50%)');
    storeAFaire(nomListeSansEspaces);
})


list.addEventListener('submit', (e)=>{
    e.preventDefault();
    ulList.innerHTML += `<li>${aFaire.value}</li>`
    aFaire.value = "";
    storeAFaire(nomListeSansEspaces);
})

ulList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('checked')){
        e.target.remove();
        storeAFaire()
    }else{
        e.target.classList.add("checked")
        storeAFaire()
    }
})