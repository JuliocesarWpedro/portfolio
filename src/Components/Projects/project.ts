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
    otherCategories: ['html', 'css', 'javascript', 'typescript'],
    altImage: 'Projeto AnimaisFantásticos',
    urlGitHub: 'https://github.com/JuliocesarWpedro/animais-fantasticos',
    urlProject:
      'https://animais-fantasticos-git-master-julio-cesar-w-pedros-projects.vercel.app/',
  },
  {
    srcImage: '/Pokedex.png',
    title: 'Pokedex',
    mainCategory: 'react',
    otherCategories: [
      'html',
      'scss',
      'react',
      'typescript',
      'css',
      'javascript',
      'graphQL',
      'next',
    ],
    description: 'Projeto realizado com Html, Css, React, Typescript',
    altImage: 'Projeto Pokedex',
    urlGitHub: 'https://github.com/JuliocesarWpedro/pokedexNext',
    urlProject: 'https://pokedex-next-julio.vercel.app/',
  },
];
