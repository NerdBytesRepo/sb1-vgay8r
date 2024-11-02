import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavHeader } from '@/components/nav-header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BLOG_CONTENT = {
  'building-scalable-react-apps': {
    title: 'Building Scalable React Applications',
    date: '2024-01-15',
    author: 'John Doe',
    content: `
      <p class="lead">
        Building scalable React applications requires careful consideration of architecture, state management, and code organization.
      </p>

      <h2>1. Component Architecture</h2>
      <p>
        When building large-scale React applications, it's crucial to have a well-thought-out component architecture. This includes:
      </p>
      <ul>
        <li>Atomic Design Principles</li>
        <li>Smart vs. Presentational Components</li>
        <li>Component Composition</li>
      </ul>

      <h2>2. State Management</h2>
      <p>
        Choosing the right state management solution is critical for scalability. Consider:
      </p>
      <ul>
        <li>Local vs. Global State</li>
        <li>State Management Libraries</li>
        <li>Performance Optimization</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  },
  'future-of-web-development': {
    title: 'The Future of Web Development',
    date: '2024-01-01',
    author: 'John Doe',
    content: `
      <p class="lead">
        The web development landscape is constantly evolving, with new technologies and methodologies emerging regularly.
      </p>

      <h2>1. Web Assembly</h2>
      <p>
        WebAssembly is revolutionizing web performance by allowing developers to run low-level code in the browser.
      </p>

      <h2>2. Edge Computing</h2>
      <p>
        Edge computing is changing how we think about deployment and server architecture.
      </p>
    `,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  },
} as const;

export function BlogPost() {
  const { slug } = useParams();
  const post = slug ? BLOG_CONTENT[slug as keyof typeof BLOG_CONTENT] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <NavHeader />
      <main className="min-h-screen">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="h-[50vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="container relative z-10 -mt-32 px-4">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert mx-auto max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <div
              className="prose-headings:gradient-text prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </main>
    </>
  );
}