import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function NavMenu() {
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-2 p-4">
      {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
        <Link key={href} to={href}>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start gap-2',
              location.pathname === href && 'bg-accent'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}