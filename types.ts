
export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  icon: string;
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  highlights: string[];
}
