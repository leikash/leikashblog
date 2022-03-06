/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// APIキーを環境変数に含めるためにdotenvを設定
// 参照: https://blog.microcms.io/gatsby-microcms-media/
 const path = require('path');

 require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
 });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Fruitful World",
    author: "Leikash",
    category: ["Blog", "Try", "React"],
    user: { name: "Kashbellie", email: "Kashbellie@gmail" },
  },
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'kashbellie',
        apis: [
          {
            endpoint: "blog",
          },
        ],
      },
    },
    'gatsby-plugin-netlify',
/*    
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/components/layout.js" // 先ほど作成したreduxの設定ファイルのパスを入力
      }
    },
*/
  ],
}


