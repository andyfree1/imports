export type ProjectCategory = 'All' | 'Video Production' | 'AI Projects' | 'Sales';

export interface BaseProject {
  title: string;
  category: ProjectCategory;
  description: string;
}

export interface VideoProject extends BaseProject {
  videoId: string;
  image?: never;
}

export interface ImageProject extends BaseProject {
  image: string;
  videoId?: never;
}

export type Project = VideoProject | ImageProject;