import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}>
      Tecture
    </Link>
  );
};

export default Logo;
