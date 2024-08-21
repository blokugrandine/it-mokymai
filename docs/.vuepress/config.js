module.exports = {
  title: 'IT Mokymai',
  description:
    'IT Mokymų platforma pradedantiesiems',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    docsDir: 'docs',
    smoothScroll: true,
    nav: [
      { text: 'Pradžia', link: '/' },
      {
        text: 'Programavimas',
        items: [
          { text: 'Python', link: '/programavimas-python/' },
        ]
      },
      {
        text: 'Front-end pradmenys',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/' },
        ]
      },
      { text: 'Pasiūlymai', link: '/pasiulymai/' },
      { text: 'Apie mus',
        items: [
          { text: 'Tikslas', link: '/tikslas/' },
          { text: 'Kontaktai', link: '/kontaktai/' },
        ]
      },
    ],
    sidebar: {
      '/programavimas-python/': [
        {
          title: 'Programavimas Python',
          children: [
            '/programavimas-python/',
          ]
        },
        {
          title: 'Python įvadas',
          children: [
            '/programavimas-python/python-ivadas/',
          ]
        },
        {
          title: 'Pagrindinės operacijos',
          children: [
            '/programavimas-python/pagrindines-operacijos/',
          ]
        },
        {
          title: 'Duomenų tipai',
          children: [
            '/programavimas-python/duomenu-tipai/',
          ]
        },
        {
          title: 'Valdymo struktūros',
          children: [
            '/programavimas-python/valdymo-strukturos/',
          ]
        },
        {
          title: 'Funkcijos',
          children: [
            '/programavimas-python/funkcijos/',
          ]
        },
      ],
      '/html/': [
        {
          title: 'HTML istorija',
          children: [
            '/html/html-istorija/',
          ]
        },
        {
          title: 'HTML pradmenys',
          children: [
            '/html/html-pradmenys/',
          ]
        },
        {
          title: 'HTML žymės',
          children: [
            '/html/html-zymes/',
          ]
        },
        {
          title: 'HTML atributai',
          children: [
            '/html/html-atributai/',
          ]
        },
        {
          title: 'HTML spalvos',
          children: [
            '/html/html-spalvos/',
          ]
        },
        {
          title: 'HTML formos',
          children: [
            '/html/html-formos/',
          ]
        }
      ],
      '/css/': [
        {
          title: 'CSS',
          children: [
            '/css/',
          ]
        },
        {
          title: 'Įvadas į CSS',
          children: [
            '/css/ivadas-i-css/',
          ]
        },
        {
          title: 'Pagrindinė sintaksė',
          children: [
            '/css/pagrindine-sintakse/',
          ]
        },
        {
          title: 'Teksto stilius',
          children: [
            '/css/teksto-stilius/',
          ]
        },
        {
          title: 'Spalvos ir fonai',
          children: [
            '/css/spalvos-ir-fonai/',
          ]
        },
        {
          title: 'Išdėstymo pagrindai',
          children: [
            '/css/isdestymo-pagrindai/',
          ]
        },
      ],
    }
  },
}