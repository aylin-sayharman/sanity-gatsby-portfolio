export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fd86bf38c7b288b45b17626',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8qt4u57u',
                  apiId: 'd6626bc7-8dce-4125-8cc6-0063f5f6d1ae'
                },
                {
                  buildHookId: '5fd86bf42c027f9bb151de14',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ud1hfdt2',
                  apiId: '07a4b7a9-049d-41a9-898d-6f747da2d0c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aylin-sayharman/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ud1hfdt2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
