export interface Project {
  srcImage: string;
  altImage: string;
  urlGitHub: string;
  urlProject: string;
  title: string;
  description: string;
  mainCategory: string;
  otherCategories?: string[];
}

export const projects: Project[] = [
  {
    srcImage: '/AnimaisFantásticos.png',
    description: 'Projeto feito com Javascript',
    title: 'Animais Fantásticos',
    mainCategory: 'javascript',
    altImage: 'Projeto AnimaisFantásticos',
    urlGitHub: 'https://github.com/JuliocesarWpedro/animais-fantasticos',
    urlProject:
      'https://animais-fantasticos-git-master-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    title: 'Pokedex',
    mainCategory: 'react',
    description: 'Projeto realizado com Html, Css, React, Typescript',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    title: 'Pokedex',
    mainCategory: 'react',
    description: 'Projeto feito com React e Next',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
];
