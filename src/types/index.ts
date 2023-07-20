export type NavMenu = (NavLink | NavCategory)

type NavLink = {
    name: string;
    path: string;
    type: 'link';
}

type NavCategory =  {
    name: string;
    type: 'category';
    subCategory: NavLink[];
}