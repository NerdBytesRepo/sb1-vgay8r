import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import { NavHeader } from '@/components/nav-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { SKILLS, EXPERIENCES, PROJECTS } from '@/lib/constants';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Element name={id}>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="section-padding"
      >
        {children}
      </motion.section>
    </Element>
  );
}

export function HomePage() {
  return (
    <>
      <NavHeader />

      {/* Hero Section */}
      <Section id="hero">
        <div className="container relative min-h-screen">
          <div className="absolute inset-0 hero-gradient" />
          <div className="flex min-h-screen items-center justify-center">
            <div className="relative z-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold leading-tight md:text-6xl"
              >
                Hi, I'm{' '}
                <span className="gradient-text">John Doe</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-xl text-muted-foreground"
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex justify-center gap-4"
              >
                <Button size="lg" asChild>
                  <a href="#contact">
                    Let's Talk <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/blog">Read My Blog</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="container">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate Full Stack Developer with over 5 years of
                  experience building web applications. I specialize in React,
                  Node.js, and cloud technologies.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>What I Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I create beautiful, performant, and accessible web applications
                  that solve real-world problems. I'm also passionate about
                  sharing my knowledge through writing and mentoring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="container">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="mt-8 grid gap-8">
            {EXPERIENCES.map((experience, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>
                    {experience.company} • {experience.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="container">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SKILLS.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <Progress
                  value={skill.level}
                  className="mt-4"
                  indicatorClassName="bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="container">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="container">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <div className="mx-auto mt-8 max-w-2xl">
            <form className="contact-form">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="mt-1 min-h-[150px]"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}