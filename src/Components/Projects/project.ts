export interface Project {
  srcImage: string;
  altImage: string;
  urlGitHub: string;
  urlProject?: string;
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
    srcImage: '/AnimaisFantasticos.webp',
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
    srcImage: 'Bikcraft.webp',
    description: {
      pt: {
        text: 'Este projeto foi construído utilizando HTML, CSS e JavaScript, e inclui uma página de compras onde os usuários podem customizar suas próprias bicicletas.',
      },
      en: {
        text: 'This project was built using HTML, CSS, and JavaScript, and it features a shopping page where users can customize their own bicycles.',
      },
    },
    title: 'Bikcraft',
    mainCategory: 'javascript',
    otherCategories: ['html', 'css'],
    altImage: 'Projeto Bikcraft',
    urlGitHub: 'https://github.com/JuliocesarWpedro/Bikcraft',
    urlProject: 'https://juliocesarwpedro.github.io/Bikcraft/',
  },
  {
    srcImage: '/Eccomerce.webp',
    title: 'Eccomerce',
    mainCategory: 'next',
    otherCategories: [
      'react',
      'typescript',
      'styled-components',
      'TanStack Query',
      'Swiper',
    ],
    description: {
      pt: {
        text: 'Este projeto inclui diversas funcionalidades para aprimorar a experiência do usuário, como paginação dinâmica através da URL do site, permitindo uma navegação mais eficiente. Além disso, implementamos um filtro de produtos e opções de ordenação por novidades, preço crescente e decrescente. Também disponibilizamos uma barra de pesquisa de produtos e um carrinho de compras, onde é possível alterar a quantidade dos itens selecionados. O projeto foi realizado com: Next.js 14, styled-components, TanStack Query para requisições e cacheamento, e swiper para paginação.',
      },
      en: {
        text: "This project includes several features to improve the user experience, such as dynamic pagination through the website's URL, allowing for more efficient navigation. Furthermore, we implemented a product filter and sorting options by new arrivals, ascending and descending prices. We also provide a product search bar and a shopping cart, where you can change the quantity of selected items. The project was carried out with: Next.js 14, styled-components, TanStack Query for requests and caching, and swiper for pagination.",
      },
    },
    altImage: 'Projeto Eccomerce',
    urlGitHub: 'https://github.com/JuliocesarWpedro/ecommerce',
    urlProject: 'https://ecommerce-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/ClothingStore.webp',
    title: 'Clothing store',
    mainCategory: 'next',
    otherCategories: ['react', 'typescript', 'scss'],
    description: {
      pt: {
        text: 'Este projeto representa uma plataforma de eccomerce construída com tecnologias avançadas, incluindo React, TypeScript e scss. Possui um filtro de produtos incluindo tamanho, cores e faixa de preço. Além disso, proporciona aos usuários a facilidade de adicionar produtos ao carrinho de compras, tornando a experiência de compra mais intuitiva e conveniente.',
      },
      en: {
        text: 'This project represents an e-commerce platform built with advanced technologies including React, TypeScript and scss. It has a product filter including size, cores and price range. Furthermore, it provides users with the ease of adding products to the shopping cart, making the shopping experience more intuitive and convenient.',
      },
    },
    altImage: 'Projeto Store',
    urlGitHub: 'https://github.com/JuliocesarWpedro/store',
    urlProject:
      'https://store-git-master-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/lanternaLuminosa.webp',
    title: 'Lanterna Luminosa',
    mainCategory: 'next',
    otherCategories: ['react', 'tailwindcss', 'zustand'],
    description: {
      pt: {
        text: 'Este é um projeto voluntário de uma landing page para uma Associação Civil do Terceiro Setor dedicada ao combate ao abuso contra mulheres e seus filhos. As tecnologias usadas são Next, Tailwind CSS e Zustand.',
      },
      en: {
        text: 'This is a volunteer project for a landing page for a Third Sector Civil Association dedicated to combating abuse against women and their children. The technologies used are Next.js, Tailwind CSS, and Zustand.',
      },
    },
    altImage: 'Projeto Lanterna Luminosa',
    urlGitHub: 'https://github.com/bolodissenoura/lantera-luminosa',
    urlProject: 'https://www.lanternaluminosa.com.br/',
  },
  {
    srcImage: '/dogs.webp',
    title: 'Dogs',
    description: {
      pt: {
        text: 'Desenvolvido em React, este projeto é uma plataforma de rede social que permite comentários em posts, postagens de conteúdo e possui um sistema de login. Para fins de teste, utilize a palavra "dog" como nome de usuário e senha.',
      },
      en: {
        text: 'Developed in React, this project is a social networking platform that allows comments on posts, content posts and has a login system. For testing purposes, use the word "dog" as the username and password.',
      },
    },

    mainCategory: 'react',
    otherCategories: ['css'],
    altImage: 'Projeto Dogs',
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
    title: 'Cadastrar Usuários',
    mainCategory: 'node',
    otherCategories: ['express', 'mongoDB', 'react', 'tailwindcss'],
    description: {
      pt: {
        text: 'Este projeto é uma plataforma de cadastro de usuários, desenvolvida com Node.js e Express no backend, e React com tailwindcss no frontend. Permite criar contas com nome, email e telefone, validando os dados antes de armazená-los no banco de dados. A experiência interativa e segura garante um registro confiável para os usuários, com validação em tempo real e comunicação eficiente entre cliente e servidor.',
      },
      en: {
        text: 'This project is a user registration platform, developed with Node.js and Express on the backend, and React with tailwindcss on the frontend. Allows you to create accounts with name, email and telephone number, validating the data before storing it in the database. The interactive and secure experience guarantees reliable registration for users, with real-time validation and efficient communication between client and server.',
      },
    },
    altImage: 'Projeto Cadastrar Usuários',
    urlGitHub: 'https://github.com/JuliocesarWpedro/users-typescript-api',
    urlProject: 'https://crud-users-frontend.vercel.app/',
  },
  {
    srcImage: '/Devstore.webp',
    title: 'devstore',
    mainCategory: 'next',
    otherCategories: ['react', 'typescript', 'tailwindcss'],
    description: {
      pt: {
        text: 'Este projeto representa uma plataforma de eccomerce construída com tecnologias avançadas, incluindo Next.js, TypeScript e tailwindcss. Implementado com a utilização de Route Handles, o sistema oferece um filtro de busca eficiente e proporciona uma página dedicada para cada produto, detalhando informações relevantes. Além disso, proporciona aos usuários a facilidade de adicionar produtos ao carrinho de compras, tornando a experiência de compra mais intuitiva e conveniente.',
      },
      en: {
        text: 'This project represents an e-commerce platform built with advanced technologies, including Next.js, TypeScript, and tailwindcss. Implemented using Route Handles, the system provides an efficient search filter and offers a dedicated page for each product, detailing relevant information. Additionally, it provides users with the convenience of adding products to the shopping cart, making the shopping experience more intuitive and convenient.',
      },
    },
    altImage: 'Projeto devstore',
    urlGitHub: 'https://github.com/JuliocesarWpedro/dev-store',
    urlProject: 'https://dev-store-julio-cesar-w-pedros-projects.vercel.app/',
  },
];
