import { Outlet } from 'react-router-dom';
import { NavMenu } from '@/components/nav-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';

export function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>
        <Separator />
        <NavMenu />
        <div className="absolute bottom-4 left-4">
          <ThemeToggle />
        </div>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}