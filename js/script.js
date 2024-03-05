console.log('js-our-team');

const ourTeam = [
  {
    name: 'Wayne Barnett',
    postion: 'Founder & CEO',
    img: "assets/img/wayne-barnett-founder-ceo.jpg",
  },

  {
    name: 'Angela Caroll',
    postion: 'Chief Editor',
    img: "angela-caroll-chief-editor.jpg",
  },

  {
    name: 'Walter Gordon',
    postion: 'Office Manager',
    img: "assets/img/walter-gordon-office-manager.jpg",
  },

  {
    name: 'Angela Lopez',
    postion: 'Social Media Manager',
    img: "assets/img/angela-lopez-social-media-manager.jpg",
  },

  {
    name: 'Scott Estrada',
    postion: 'Developer',
    img: "assets/img/scott-estrada-developer.jpg",
  },

  {
    name: 'Barbara Ramos',
    postion: 'Graphic Designer',
    img: "assets/img/barbara-ramos-graphic-designer.jpg",
  }
];

for(let team of ourTeam){
  console.log(team);
}