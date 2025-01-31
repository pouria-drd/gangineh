enum NavLinkRoles {
    Admin = "admin",
    User = "user",
    Guest = "guest",
}

// Define the interface for a single navigation link
type NavItem = {
    path: string; // Represents the link path
    label: string; // Represents the link label
    icon?: React.ReactNode; // Icon component
    roles: Set<NavLinkRoles>; // Set of roles that are allowed to access the link
};

// Define the interface for a group of navigation links (parent link)
type NavItemGroup = {
    title: string; // Represents the group title
    navLinks: NavItem[]; // Array of child navigation links
};

type NavLink = NavItem | NavItemGroup;
