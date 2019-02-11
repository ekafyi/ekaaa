module.exports = {
  siteTitle:
    'Personal site of Eka, front-end web developer in Yogyakarta, Indonesia',
  siteDescription: "👋 Hey I'm a Gatsby starter!",
  authorName: 'Eka',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
    My name is Eka. I build nice websites and web interfaces for fun and profit. Exercitationem voluptas quibusdam deserunt. Welcome to my blog! <a href="#">Read more&nbsp;&gt;</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 5,

  // Accounts
  twitterUsername: '@ekaoddlass',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  disqusShortname: 'maxpou',
  contactLinks: {
    primary: [
      {
        label: 'Github',
        url: 'http://twitter.com/ekaoddlass',
        highlight: true,
        brandColor: '#a175e0',
      },
      {
        label: 'Twitter',
        url: 'http://twitter.com/ekaoddlass',
        highlight: true,
        brandColor: '#1da1f2',
      },
      {
        label: 'Email',
        url: 'mailto:eka@ekaaa.me',
        highlight: true,
        brandColor: 'salmon',
      },
    ],
    secondary: [
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/user/ekaoddlass',
      },
      {
        label: 'Dev.to',
        url: 'http://dev.to/ekaoddlass',
      },
      {
        label: 'Pinterest',
        url: 'http://pinterest.com/ekaoddlass',
      },
      {
        label: 'Smule',
        url: 'http://smule.com/ekaoddlass',
      },
    ],
  },

  // Navigation
  headerLinks: [
    {
      label: 'ekaʼs',
      url: '/',
      isHome: true,
    },
    {
      label: 'posts',
      url: '/blog',
    },
    {
      label: 'notes',
      url: '/notes',
    },
    {
      label: 'projects',
      url: '/projects',
    },
    {
      label: 'now',
      url: '/now',
    },
  ],

  // Footer
  creditHost: {
    name: 'Netlify',
    url: 'https://netlify.com',
  },
  creditBuilt: {
    name: 'Gatsby',
    url: 'https://gatsbyjs.org',
  },
  creditText: `© Eka 2018-now. Unless otherwise noted, original content is licensed under <a href="https://creativecommons.org/licenses/by-nc/3.0/" rel="external">Creative Commons BY-NC</a> for non-commercial use. Views do not represent my employers.`,
  footerLinks: [
    {
      label: 'eka@ekaaa.me',
      url: 'mailto:eka@ekaaa.me',
    },
    {
      label: 'Twitter',
      url: 'http://twitter.com/ekaonthenet',
    },
    {
      label: 'Github',
      url: 'http://github.com/ekaoddlass',
    },
  ],
}
