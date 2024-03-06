import artlife from '@/assets/projects/artlife.png';
import forstudio from '@/assets/projects/forstudio.png';
import loading from '@/assets/loading.gif';

type TProject = {
  img: string;
  stack: string[];
  title: string;
  description?: string;
  link?: string;
  adaptive?: 'PC' | 'Mobile';
};

export const projectData: TProject[] = [
  {
    img: artlife,
    title: 'Art & Life',
    stack: ['React', 'Rtk Query', 'React-router-dom', 'Firebase'],
    link: 'https://dk-dev10.github.io/rtkquery_firebase',
  },
  {
    img: forstudio,
    title: 'For studio',
    stack: ['HTML', 'CSS', 'Javascript'],
    link: 'https://dk-dev10.github.io/for_studio',
  },
  {
    img: loading,
    title: 'Скоро...',
    stack: [''],
  },
];
