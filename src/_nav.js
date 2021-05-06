export default {
  top: [
    {
      name: 'Inicio',
      url: '/inicio',
      icon: 'Home',
    },
    {
      name: 'Métodos 2.n',
      icon: 'Circle',
      children: [
        {
          name: "Newton",
          url: '/meto-dos/newton',
          icon:"Minus"
        },
        {
          name: "Biseccion",
          url: '/meto-dos/biseccion',
          icon:"Plus"
        },
        {
          name: "False Posicion",
          url: '/meto-dos/falsa-posicion',
          icon:"Minus"
        },
        
      ],
      
    },
    {
      name: 'Métodos 3.n',
      icon: 'Square',
      children: [
        {
          name: "Jacobi",
          url: '/tres/jacobi',
          icon:"Plus"
        },
        {
          name: "Seidel",
          url: '/tres/seidel',
          icon:"Minus"
        },
        
      ],
    },
    {
      name: 'Métodos 4.n',
      icon: 'Circle',
      children: [
        {
          name: "Primeras Derivadas",
          url: '/cuatro/primeras',
          icon:"Plus"
        },
        {
          name: "Segundas Derivadas",
          url: '/cuatro/segundas',
          icon:"Minus"
        },
        {
          name: "Método del Trapecio",
          url: '/cuatro/trapecio',
          icon:"Plus"
        },
        {
          name: "1/3 de Simpson",
          url: '/cuatro/tercio',
          icon:"Minus"
        },
        {
          name: "3/8 de Simpson",
          url: '/cuatro/octavos',
          icon:"Plus"
        },
        
      ],
    },

/*     
    {
      name: 'UI Elements',
      icon: 'Layers',
      children: [
        {
          name: 'Buttons',
          url: '/elements/buttons',
        },
        {
          name: 'Grid',
          url: '/elements/grid',
        },
        {
          name: 'Alerts',
          url: '/elements/alerts',
        },
        {
          name: 'Typography',
          url: '/elements/typography',
        },
        {
          name: 'Cards',
          url: '/elements/cards',
        },
        {
          name: 'Tabs',
          url: '/elements/tabs',
        },
        {
          name: 'Tables',
          url: '/elements/tables',
        },
        {
          name: 'Breadcrumbs',
          url: '/elements/breadcrumbs',
        },
        {
          name: 'Forms',
          url: '/elements/forms',
        },
        {
          name: 'Modals',
          url: '/elements/modals',
        },
        {
          name: 'Loaders',
          url: '/elements/loaders',
        },
        {
          name: 'Avatars',
          url: '/elements/avatars',
        },
        {
          name: 'Progress Bars',
          url: '/elements/progressbars',
        },
        {
          name: 'Pagination',
          url: '/elements/pagination',
        },
      ],
    },
    {
      name: 'Pages',
      icon: 'File',
      children: [
        {
          name: 'Blank',
          url: '/pages/blank',
        },
        {
          name: 'Sub Navigation',
          url: '/pages/subnav',
        },
        {
          name: '404',
          url: '/pages/404',
        },
      ],
    },
    {
      name: 'Apps',
      icon: 'Cloud',
      children: [
        {
          name: 'Analytics',
          url: '/apps/analytics',
        },
        {
          name: 'Invoice',
          url: '/apps/invoice',
        },
        {
          name: 'Activity Feed',
          url: '/apps/feed',
        },
        {
          name: 'CMS',
          url: '/apps/cms',
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'Package',
      badge: {
        text: 'NEW',
      },
    }, */
  ],
  bottom: [
    {
      name: 'github/danielabeoy',
      url: 'https://github.com/DanielAbedoy/',
      icon: 'GitHub',
      external: true,
      target: '_blank',
    },
   /*  {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    }, */
  ],
};
