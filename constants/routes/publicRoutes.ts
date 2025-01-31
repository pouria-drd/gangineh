const publicRoutes: NavItem[] = [
    {
        path: "/",
        label: "خانه",
        roles: new Set([
            NavLinkRoles.Admin,
            NavLinkRoles.User,
            NavLinkRoles.Guest,
        ]),
    },
    {
        path: "/playground",
        label: "زمین‌بازی",
        roles: new Set([
            NavLinkRoles.Admin,
            NavLinkRoles.User,
            NavLinkRoles.Guest,
        ]),
    },
];

export default publicRoutes;
