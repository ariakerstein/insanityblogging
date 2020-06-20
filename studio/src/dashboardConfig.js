export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eee4bbf7588decad784b79e',
                  title: 'Sanity Studio',
                  name: 'insanityblogging-studio',
                  apiId: '5c553d6c-e3dd-4384-8a85-c5371b6acc73'
                },
                {
                  buildHookId: '5eee4bbfee3a439cee6391fd',
                  title: 'Blog Website',
                  name: 'insanityblogging',
                  apiId: '0ce67cbf-bb2c-4e9b-a517-45c2c37ce3f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ariakerstein/insanityblogging',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://insanityblogging.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
