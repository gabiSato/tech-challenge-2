import CustomLink from "@/components/layout/custom-link";

interface NavbarProps {
  routes?: Record<string, string>[];
}

export default function Navbar({ routes = [] }: NavbarProps) {
  return (
    <div className="hidden sm:block lg:hidden">
      <ul className="flex gap-16 pt-8">
        {routes.map((route) => (
          <li key={route.path}>
            <CustomLink
              href={route.path}
              className="block min-w-[138px] text-sm-regular text-black text-center pb-16"
              activeClassName="text-sm-bold text-green-200 border-b border-b-green-200"
            >
              {route.label}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
