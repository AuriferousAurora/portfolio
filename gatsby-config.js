module.exports = {
  plugins: [ 'gatsby-plugin-sass', 
             'gatsby-plugin-catch-links',
            {
              resolve: 'gatsby-plugin-s3',
              options: { bucketName: 'kyleeverettlang.com' }
            }
          ]
}