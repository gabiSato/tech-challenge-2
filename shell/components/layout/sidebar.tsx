import CustomLink from "@/components/layout/custom-link";

interface SidebarProps {
  routes?: Record<string, string>[];
}

export default function Sidebar({ routes = [] }: SidebarProps) {
  return (
    <aside className="bg-neutral-100 hidden lg:block rounded min-w-[180px] px-24 py-32">
      <ul>
        {routes.map((route) => (
          <li
            className="pb-16 mb-16 text-center not-last-of-type:border-b border-b-cyan-300"
            key={route.path}
          >
            <CustomLink
              href={route.path}
              className="text-sm text-cyan-300 hover:opacity-80"
              activeClassName="font-bold"
            >
              {route.label}
            </CustomLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
