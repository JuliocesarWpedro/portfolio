export interface Project {
  srcImage: string;
  altImage: string;
  urlGitHub: string;
  urlProject: string;
  title: string;
  description: {
    pt: {
      text: string;
    };
    en: {
      text: string;
    };
  };
  mainCategory: string;
  otherCategories?: string[];
}

export const projects: Project[] = [
  {
    srcImage: '/AnimaisFantásticos.webp',
    description: {
      pt: {
        text: 'O projeto foi desenvolvido utilizando JavaScript e incorpora um carrossel tanto vertical quanto horizontal, juntamente com um accordion. Além disso, apresenta animações de entrada e saída dos elementos para uma experiência mais dinâmica e interativa.',
      },
      en: {
        text: 'The project was developed using JavaScript and incorporates both vertical and horizontal carousels, along with an accordion. Additionally, it features entrance and exit animations for a more dynamic and interactive experience.',
      },
    },
    title: 'Animais Fantásticos',
    mainCategory: 'javascript',
    otherCategories: ['html', 'css'],
    altImage: 'Projeto AnimaisFantásticos',
    urlGitHub: 'https://github.com/JuliocesarWpedro/animais-fantasticos',
    urlProject:
      'https://animais-fantasticos-git-master-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/dogs.webp',
    description: {
      pt: {
        text: 'Desenvolvido em React, este projeto é uma plataforma de rede social que permite comentários em posts, postagens de conteúdo e possui um sistema de login. Para fins de teste, utilize a palavra "dog" como nome de usuário e senha.',
      },
      en: {
        text: 'Developed in React, this project is a social networking platform that allows comments on posts, content posts and has a login system. For testing purposes, use the word "dog" as the username and password.',
      },
    },
    title: 'Dogs',
    mainCategory: 'react',
    otherCategories: ['css'],
    altImage: 'Projeto AnimaisFantásticos',
    urlGitHub: 'https://github.com/JuliocesarWpedro/dogs',
    urlProject: 'https://dogs-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/Pokedex.webp',
    title: 'Pokedex',
    mainCategory: 'react',
    otherCategories: ['next', 'css'],
    description: {
      pt: {
        text: 'O projeto foi construído com React usando Next.js e apresenta uma extensa lista de Pokémons. Com recursos de paginação e filtros de busca, os usuários podem facilmente encontrar Pokémon por nome, além de acessar uma variedade de informações detalhadas, incluindo altura, peso, estatísticas e tipos individuais de cada Pokémon.',
      },
      en: {
        text: 'The project was built with React using Next.js and features an extensive list of Pokémons. With pagination features and search filters, users can easily find Pokémon by name and access a variety of detailed information, including height, weight, statistics, and individual types of each Pokémon.',
      },
    },
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
  {
    srcImage: '/CadastrarCliente.webp',
    title: 'Cadastrar Usuário',
    mainCategory: 'node',
    otherCategories: ['express', 'react', 'tailwind'],
    description: {
      pt: {
        text: 'Este projeto é uma plataforma de cadastro de usuários, desenvolvida com Node.js e Express para o backend, e React com tailwindcss no frontend. Permite criar contas com e-mail, telefone e nome, validando os dados antes de armazená-los no banco. A experiência interativa e segura garante um registro confiável para os usuários, com validação em tempo real e comunicação eficiente entre cliente e servidor.',
      },
      en: {
        text: 'This project is a user registration platform, developed with Node.js and Express for the backend, and React with tailwindcss on the frontend. Allows you to create accounts with email, telephone and name, validating the data before storing it in the bank. The interactive and secure experience ensures reliable registration for users, with real-time validation and efficient communication between client and server.',
      },
    },
    altImage: 'Projeto Cadastrar usuário',
    urlGitHub: 'https://github.com/JuliocesarWpedro/users-typescript-api',
    urlProject: 'https://crud-users-frontend.vercel.app/',
  },
];
