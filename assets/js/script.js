
// ARREY OGGETTI
const gruppo = [
  {
    nome: "Anthony Joshua",
    ruolo: "Pugile",
    Foto: "ciao",
    nazione: "inglese"
  },
  {
    nome: "Franchino Er Criminale",
    ruolo: "Content Creator",
    Foto: "ciao"
  },
  {
    nome: "Cristiano",
    ruolo: "Ronaldo",
    Foto: "ciao"
  },
  {
    nome: "Salvatore Aranzulla",
    ruolo: "Blogger",
    Foto: "ciao"
  },
  {
    nome: "Arnold Schwarzenegger",
    ruolo: "Attore, Politico, Imprenditore, Produttore Cinematografico e Culturista",
    Foto: "ciao"
  },
  {
    nome: "Will Smith",
    ruolo: "Attore",
    Foto: "ciao"
  }
]

const nomeP = document.getElementById("nome-persona");
const row = document.getElementById("row");
console.log(nomeP)

for(let membro of gruppo){
  console.log(membro.nome, membro.ruolo, membro.Foto)

  // nomeP.innerHTML = membro.nome;
  // for (const key in membro) {

  //    console.log(key, membro[key]);
  // }

  row.innerHTML += `
  <div class="flex">
<div class="col">
  <div class="nome">
    <h5 id="nome-persona">${membro.nome}</h5>
  </div>
</div>

<div class="col">
  <div class="nome">
    <h5 class="ruolo-persona">${membro.ruolo}</h5>
  </div>
</div>

<div class="col">
  <div class="nome">
    <h5 class="foto-persona">${membro.Foto}</h5>
  </div>
</div>

</div>`;

// console.log(nomeP);

}


