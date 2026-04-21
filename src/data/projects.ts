export interface Project {
  username: string;
  reponame: string;
  liveUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    username: 'mdzpaulina',
    reponame: 'aura',
    liveUrl: 'https://github.com/mdzpaulina/aura',
    image: './aura.png',
  },
  {
    username: 'mdzpaulina',
    reponame: 'coin-counter',
    liveUrl: 'https://github.com/mdzpaulina/coin-counter',
    image: './CoinCounter.png',
  },
  {
    username: 'mdzpaulina',
    reponame: 'PyGLCube',
    liveUrl: 'https://github.com/mdzpaulina/PyGLCube',
    image: './PyGLCube.png',
  },
];
