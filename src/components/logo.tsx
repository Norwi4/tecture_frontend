import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold lowercase" style={{ color: 'hsl(var(--foreground))' }}>
      umarta
    </Link>
  );
};

export default Logo;
