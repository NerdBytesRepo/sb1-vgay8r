import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavHeader } from '@/components/nav-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BLOG_POSTS = [
  {
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications',
    date: '2024-01-15',
    excerpt:
      'Learn how to structure and scale your React applications for better maintainability.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    readTime: '5 min read',
    category: 'React',
  },
  {
    slug: 'future-of-web-development',
    title: 'The Future of Web Development',
    date: '2024-01-01',
    excerpt:
      'Exploring upcoming trends and technologies that will shape the future of web development.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    readTime: '7 min read',
    category: 'Web Development',
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BlogPage() {
  return (
    <>
      <NavHeader />
      <main className="container mx-auto min-h-screen px-4 pt-32">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Latest <span className="gradient-text">Articles</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts, learnings, and insights from my journey as a developer.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Link to={`/blog/${post.slug}`}>
                <Card className="blog-card">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-image"
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="mt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {post.date}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  );
}