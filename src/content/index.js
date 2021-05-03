export default {
  nav: {
    logo: 'k41n3w',
    links: [
      { text: 'LinkedIn', to: 'https://www.linkedin.com/in/caio-ramos-83271943/' },
      { text: 'GitHub', to: 'https://github.com/k41n3w' },
      { text: 'Medium', to: 'https://medium.com/@caio_ramos' },
      { text: 'Twitter', to: 'https://twitter.com/k41n3w' },
    ],
  },
  header: {
    img:
      'eu.png',
    text: ['Hi!', "It's me Caio Ramos.", 'I am '],
    typical: [
      'Software Engineer.',
      2000,
      'Writter.',
      2000,
      'Teacher.',
      2000,
    ],
    btnText: 'Find Out More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/ruby-on-rails.png',
        alt: 'Ruby on Rails',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/aws.png',
        alt: 'Aws Services',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/docker.png',
        alt: 'Docker',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'Newbie in react',
      },
    ],
    desc: `I work with IT since 2010 and became a programmer in 2017. I have experience with Relational Banks (SQL's), Ruby on Rails, AWS Services, Docker, TDD, Agility and I am starting my studies in the React world. I am currently studying Data Science at UNIVESP, and I have an almost complete degree as a Data Scientist at PUC Minas.`,
  },
  companies: [
    {
      img: process.env.PUBLIC_URL + '/assets/caconde.png',
      alt: 'Caconde',
      text: `
      In 2010 I started working as an IT in the city hall of my city. In six months, my boss resigned to go for a master's degree. I was until 2016 taking care of all matters related to technology as an IT Manager. I had experience with hardware maintenance and management of windows server with active directory.`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/cecafe.png',
      alt: 'CeCafe',
      text: `
      I stayed from 2010 to 2016 as a monitor and creator of didactic content in the project, providing basic technology training to about 100 people in that period.`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/outcenter.png',
      alt: 'Outcenter',
      text: `In 2016 I decided to change my area and look for bigger challenges, so I went to work in the development area of ​​Outcenter, an internet provider. There I had the opportunity to enter the world of programming working with PHP, Angular and Ionic.`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/atelie_de_software.png',
      alt: 'Atelie de Software',
      text: `In 2017 I got a job at Ateliê de Software, a company that always sought the best practices of agile methodologies. There I had the opportunity to learn about agility, TDD, Scrum, XP, Ruby on Rails, AWS Services, docker..`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/synergia.png',
      alt: 'Synergia',
      text: `During two of my three years at Atelie de Software I worked in the company Synergia, which operates in the area of ​​socio-environmental research, I was involved in the data collection system on those impacted by the Mariana and Brumadinho disaster. Works with Ruby on Rails, Aws, Docker, TDD, Rspec, Scrum. I worked mainly in reverse engineering to correct problems and automate processes.`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/Instituto-Donato-de-Oftalmologia.jpg',
      alt: 'Instituto Donato',
      text: `After helping Synergia to correct problems, create and train its development nucleus, I was assigned to attend the Eye hospital of the Donato Institute of Poços de Caldas - MG. There I had the opportunity to help build a data integration between the medical system and the billing system.
      There I had the opportunity to work with Ruby on Rails, Aws, Docker, TDD, Rspec, Scrum and React.`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/portal-solar.png',
      alt: 'Portal Solar',
      text: `In September 2020 I accepted the challenge of helping to build new tools and improve the current ones of Portal Solar, a company that operates in the area of ​​renewable resources. Here I help as a Full Stack developer, working mainly with Ruby on Rails, React, Salesforce, Apex and SoQl.`
    },
  ]
};
