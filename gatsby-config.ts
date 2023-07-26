import type { GatsbyConfig } from "gatsby";

const { createProxyMiddleware } = require("http-proxy-middleware") 

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Affirm POC`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }],
  // developMiddleware: app => {
  //   app.use(
  //     "/api/blackhawk",
  //     createProxyMiddleware({
  //       target: "https://api.certification.blackhawknetwork.com/eGiftManagement/v1/eGift/HYZW10690X0S2MTB95CX35AH2C",
  //       secure: false, // Do not reject self-signed certificates.
  //       pathRewrite: {
  //         "/api/blackhawk": "",
  //       },
  //     })
  //   )
  // },

};

export default config;
