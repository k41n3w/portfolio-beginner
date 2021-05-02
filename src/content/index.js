export default {
  nav: {
    logo: 'k41n3w',
    links: [
      { text: 'GitHub', to: 'https://github.com/k41n3w' },
      { text: 'Medium', to: 'https://medium.com/@caio_ramos' },
      { text: 'Twiter', to: 'https://twitter.com/CaioRam51024555' },
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
        img: process.env.PUBLIC_URL + '/assets/Ruby-on-rails.png',
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
};
