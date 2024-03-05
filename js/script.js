console.log('js-our-team');

const uscita = document.querySelector('.uscita');

const ourTeam = [
  {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    image: "assets/img/wayne-barnett-founder-ceo.jpg",
  },

  {
    name: 'Angela Caroll',
    position: 'Chief Editor',
    image: "assets/img/angela-caroll-chief-editor.jpg",
  },

  {
    name: 'Walter Gordon',
    position: 'Office Manager',
    image: "assets/img/walter-gordon-office-manager.jpg",
  },

  {
    name: 'Angela Lopez',
    position: 'Social Media Manager',
    image: "assets/img/angela-lopez-social-media-manager.jpg",
  },

  {
    name: 'Scott Estrada',
    position: 'Developer',
    image: "assets/img/scott-estrada-developer.jpg",
  },

  {
    name: 'Barbara Ramos',
    position: 'Graphic Designer',
    image: "assets/img/barbara-ramos-graphic-designer.jpg",
  }
];

for(let team of ourTeam){
  console.log(team);

  uscita.innerHTML += `
  <div class="col">
    <div class="card">
      <img src="${team.image}" class="card-img-top" alt="${team.image}">
      <div class="card-body">
        <h5 class="card-title">${team.name}</h5>
        <p class="card-text">${team.position}</p>
      </div>
    </div>
  </div>
  `
}