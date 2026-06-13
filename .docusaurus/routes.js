import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '201'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '791'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9ed'),
            routes: [
              {
                path: '/docs/build-with-ai',
                component: ComponentCreator('/docs/build-with-ai', '912'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/legalitas-dan-kebijakan',
                component: ComponentCreator('/docs/category/legalitas-dan-kebijakan', 'd42'),
                exact: true,
                sidebar: "legalitasSidebar"
              },
              {
                path: '/docs/category/penetapan-harga',
                component: ComponentCreator('/docs/category/penetapan-harga', '441'),
                exact: true,
                sidebar: "penetapanHargaSidebar"
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
                path: '/docs/legalitas-dan-kebijakan/hapus-data',
                component: ComponentCreator('/docs/legalitas-dan-kebijakan/hapus-data', '37e'),
                exact: true,
                sidebar: "legalitasSidebar"
              },
              {
                path: '/docs/legalitas-dan-kebijakan/kebijakan-cookie',
                component: ComponentCreator('/docs/legalitas-dan-kebijakan/kebijakan-cookie', '168'),
                exact: true,
                sidebar: "legalitasSidebar"
              },
              {
                path: '/docs/legalitas-dan-kebijakan/kebijakan-privasi',
                component: ComponentCreator('/docs/legalitas-dan-kebijakan/kebijakan-privasi', '44b'),
                exact: true,
                sidebar: "legalitasSidebar"
              },
              {
                path: '/docs/legalitas-dan-kebijakan/syarat-dan-ketentuan',
                component: ComponentCreator('/docs/legalitas-dan-kebijakan/syarat-dan-ketentuan', '0bd'),
                exact: true,
                sidebar: "legalitasSidebar"
              },
              {
                path: '/docs/penetapan-harga/paket-dan-harga',
                component: ComponentCreator('/docs/penetapan-harga/paket-dan-harga', '789'),
                exact: true,
                sidebar: "penetapanHargaSidebar"
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
