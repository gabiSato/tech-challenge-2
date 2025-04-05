import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface CustomLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export default function CustomLink({
  href,
  className,
  activeClassName,
  children,
}: CustomLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} className={clsx(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
}
