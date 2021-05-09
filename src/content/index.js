export default {
  nav: {
    logo: 'k41n3w',
    links: [
      { text: 'Stacks', to: 'stack' },
      { text: 'Experiences', to: 'experience' },
      { text: 'Contact', to: 'contact' },
    ],
  },
  header: {
    img:
      'eu.png',
    img_contact:
      'eufeliz.jpg',
    text: ['Hi!', "It's me Caio Ramos.", 'I am '],
    typical: [
      'Software Engineer.',
      2000,
      'Backend Developer.',
      2000,
      'Writter.',
      2000,
      'Teacher.',
      2000,
      'Seller.',
      2000,
      'Maintenance Technician.',
      2000,
      'a Good Friend.',
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
      img: process.env.PUBLIC_URL + '/assets/atelie_de_software.png',
      alt: 'Atelie de Software',
      text: `In 2017 I got a job at Ateliê de Software, a company that always sought the best practices of agile methodologies. There I had the opportunity to learn about agility, TDD, Scrum, XP, Ruby on Rails, AWS Services, docker. Here I use to work attend big companies like Synergia and Instituto de Olhos Donato.`
    },
    {
      img: process.env.PUBLIC_URL + '/assets/portal-solar.png',
      alt: 'Portal Solar',
      text: `In September 2020 I accepted the challenge of helping to build new tools and improve the current ones of Portal Solar, a company that operates in the area of ​​renewable resources. Here I help as a Full Stack developer, working mainly with Ruby on Rails, React, Salesforce, Apex and SoQl.`
    },
  ]
};
