export interface Project {
  slug: string;
  title: string;
  description: string;
  screenshot?: string;
  video?: string;
  tags: string[];
  github?: string;
  live?: string;
  features?: string[];
  tech?: string[];
}

export interface AboutData {
  title: string;
  description: string;
  content: string;
  experience: Experience[];
  skills: string[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface HomeData {
  greeting: string;
  name: string;
  tagline: string;
  availability: {
    text: string;
    show: boolean;
  };
  qualities: Quality[];
}

export interface Quality {
  title: string;
  description: string;
  icon: string;
}