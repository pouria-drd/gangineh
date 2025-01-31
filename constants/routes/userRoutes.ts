// User Base Routes
const userBasePath = "/user";

const userBaseRoutes: NavItem[] = [
    {
        path: userBasePath + "/dashboard",
        label: "داشبورد",
        roles: new Set([NavLinkRoles.Admin, NavLinkRoles.User]),
    },
    {
        path: userBasePath + "/settings",
        label: "تنظیمات",
        roles: new Set([NavLinkRoles.Admin, NavLinkRoles.User]),
    },
];

// User Wallet Routes
const walletBasePath = userBasePath + "/wallet";

const userWalletGroupRoutes: NavItemGroup[] = [
    {
        title: "کیف‌‌‌ پول",
        navLinks: [
            {
                path: walletBasePath + "/deposit",
                label: "واریزها",
                roles: new Set([NavLinkRoles.Admin, NavLinkRoles.User]),
            },
            {
                path: walletBasePath + "/withdraw",
                label: "برداشت‌ها",
                roles: new Set([NavLinkRoles.Admin, NavLinkRoles.User]),
            },
        ],
    },
];

const userRoutes: NavLink[] = [...userBaseRoutes, ...userWalletGroupRoutes];

export default userRoutes;
