/**
 *
 * @param navLinks - Array of navigation links
 * @param userRole - User role (admin, user, guest)
 * @returns Filtered navigation links
 */
function getAllowedNavLinks(
    navLinks: NavLink[],
    userRole: NavLinkRoles
): NavLink[] {
    return navLinks
        .map((link) => {
            if ("navLinks" in link) {
                // If it's a group, filter the child links
                const filteredLinks = link.navLinks.filter((item) =>
                    item.roles.has(userRole)
                );
                return filteredLinks.length
                    ? { ...link, navLinks: filteredLinks }
                    : null;
            }
            return link.roles.has(userRole) ? link : null;
        })
        .filter(Boolean) as NavLink[];
}

export default getAllowedNavLinks;
