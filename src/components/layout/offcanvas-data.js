export const OffcanvasData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        cName: 'offcanvas-text',
    },
    {
        id: 2,
        title: 'About',
        path: '/about',
        cName: 'offcanvas-text',
    },

    {
        id: 3,
        title: 'Services',
        path: '',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '/maintenance-reparing',
                text: 'Maintenance & Repairing',
            },
            {
                id: 'submenu-02',
                link: '/construction-civil',
                text: 'Construction & Civil',
            },
            {
                id: 'submenu-03',
                link: '/equipment-rental',
                text: 'Equipment Rental',
            },

        ],
    },
    {
        id: 4,
        title: 'Projects',
        path: '',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '/projects-history',
                text: 'Projects History',
            },
        ],
    },
    {
        id: 5,
        title: 'Contact',
        path: '/contact',
        cName: 'offcanvas-text',
    },
];
