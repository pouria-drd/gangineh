const adminRoutes: NavItemGroup[] = [
    {
        title: "Admin",
        navLinks: [
            {
                path: "/admin/dashboard",
                label: "داشبورد",
                roles: new Set([NavLinkRoles.Admin]),
            },
        ],
    },
];

export default adminRoutes;
