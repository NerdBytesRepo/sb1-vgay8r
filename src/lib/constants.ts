import { Code, Briefcase, User2, Mail, Newspaper, Blocks } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'About', href: '/', icon: User2 },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Skills', href: '/skills', icon: Code },
  { label: 'Projects', href: '/projects', icon: Blocks },
  { label: 'Blog', href: '/blog', icon: Newspaper },
  { label: 'Contact', href: '/contact', icon: Mail },
] as const;

export const SKILLS = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'AWS', level: 70 },
] as const;

export const EXPERIENCES = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Led development of cloud-native applications using React and Node.js',
  },
  {
    title: 'Software Engineer',
    company: 'StartUp Inc',
    period: '2018 - 2020',
    description: 'Full-stack development with focus on user experience and performance',
  },
] as const;

export const PROJECTS = [
  {
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform using React and Node.js',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'Developed a real-time chat application with AI capabilities',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624',
    tags: ['Python', 'TensorFlow', 'WebSocket'],
    demoUrl: '#',
    githubUrl: '#',
  },
] as const;