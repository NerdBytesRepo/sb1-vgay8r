import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/lib/constants';

export function SkillsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="grid gap-6">
        {SKILLS.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={skill.level} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}