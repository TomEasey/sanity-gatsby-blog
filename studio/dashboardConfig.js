export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de40564fb9606d0d9f8d542',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3ricbobx',
                  apiId: '76a8fba8-2af9-4680-bae6-9f133e84037c'
                },
                {
                  buildHookId: '5de40565fb96063d5ef8d56d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xwuwzw9a',
                  apiId: 'b2ade577-0826-46b4-ae15-9022056f8e3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomEasey/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xwuwzw9a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
