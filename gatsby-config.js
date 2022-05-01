require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Suntime`,
    description: `Simple e-commerce training project. JAM Stack: Gatsby.js, DatoCMS and Netlify, Stripe for payments, PWA, and some GSAP fun.`,
    
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: 'aaaa123',
        autopop: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suntime.com`,
        short_name: `Suntime`,
        start_url: `/`,
        background_color: `#ffe0c5`,
        theme_color: `#ffe0c5`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
   
   
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        allPageHeaders: ['Access-Control-Allow-Origin: *'],
      },
    },
  ],
};
