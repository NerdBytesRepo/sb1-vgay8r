import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EXPERIENCES } from '@/lib/constants';

export function ExperiencePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Experience</h1>
      <div className="grid gap-6">
        {EXPERIENCES.map((experience) => (
          <Card key={experience.title}>
            <CardHeader>
              <CardTitle>{experience.title}</CardTitle>
              <CardDescription>
                {experience.company} • {experience.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}