module.exports = {
  siteTitle: 'Personal site of Eka, front-end web developer in Yogyakarta, Indonesia',
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
  background_color: '#1c2d6e',
  theme_color: '#17255a',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 200,
  maxExcerptLength: 3000,

  // Accounts
  twitterUsername: '@ekaonthenet',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  disqusShortname: 'maxpou',
  contactLinks: {
    github: {
      url: 'http://github.com/ekaoddlass',
      brandColor: '#b392f0',
    },
    twitter: {
      url: 'http://twitter.com/ekaonthenet',
      brandColor: '#1da1f2',
    },
    rssAll: {
      url: 'http://ekaaaa.me/rss',
    },
    rssPosts: {
      url: 'http://ekaaaa.me/rss-posts',
    },
    primary: [
      {
        label: 'Github',
        url: 'http://twitter.com/ekaoddlass',
        brandColor: '#b392f0',
      },
      {
        label: 'Twitter',
        url: 'http://twitter.com/ekaoddlass',
        brandColor: '#1da1f2',
      },
      {
        label: 'Email',
        url: 'mailto:eka@ekaaa.me',
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
      label: 'ekaaa.me',
      url: '/',
      isHome: true,
    },
    {
      label: 'posts',
      url: '/posts',
    },
    {
      label: 'feed',
      url: '/feed',
    },
    // {
    //   label: 'notes',
    //   url: '/notes',
    // },
    // {
    //   label: 'links',
    //   url: '/links',
    // },
    {
      label: 'projects',
      url: '/projects',
    },
    {
      label: 'about',
      url: '/',
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
  creditText: `© Eka 2018 - now. Unless otherwise noted, original content is licensed under <a href="https://creativecommons.org/licenses/by-nc/3.0/" rel="external">Creative Commons BY-NC</a> for non-commercial use. Views are personal.`,
}
