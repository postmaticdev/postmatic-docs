import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3ca'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd42'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f72'),
            routes: [
              {
                path: '/docs/build-with-ai',
                component: ComponentCreator('/docs/build-with-ai', '912'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/setup-akun-platform',
                component: ComponentCreator('/docs/category/setup-akun-platform', 'db0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connect-social-media',
                component: ComponentCreator('/docs/connect-social-media', '71c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/content-repetition',
                component: ComponentCreator('/docs/content-repetition', '768'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/content-scheduler',
                component: ComponentCreator('/docs/content-scheduler', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/file-upload',
                component: ComponentCreator('/docs/file-upload', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/prompt-list-and-result',
                component: ComponentCreator('/docs/prompt-list-and-result', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Setup Akun Platform/facebook-page',
                component: ComponentCreator('/docs/Setup Akun Platform/facebook-page', 'b0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Setup Akun Platform/hubungkan instagram ke facebook',
                component: ComponentCreator('/docs/Setup Akun Platform/hubungkan instagram ke facebook', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Setup Akun Platform/instagram-business',
                component: ComponentCreator('/docs/Setup Akun Platform/instagram-business', 'dcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial',
                component: ComponentCreator('/docs/tutorial', 'e64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/what-is-postmatic',
                component: ComponentCreator('/docs/what-is-postmatic', '658'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
