import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">About Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>Hello, I'm John Doe</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            I'm a passionate Full Stack Developer with over 5 years of experience
            building web applications. I specialize in React, Node.js, and cloud
            technologies. When I'm not coding, you can find me contributing to
            open-source projects or writing technical blog posts.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}