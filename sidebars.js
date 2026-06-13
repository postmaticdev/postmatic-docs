// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'what-is-postmatic',
    'tutorial',
    {
      type: 'category',
      label: 'Setup Akun Platform',
      link: {
        type: 'generated-index',
        description: 'Tutorial lengkap untuk membuat akun agar dapat terkoneksi ke Postmatic',
      },
      items: [
        'Setup Akun Platform/facebook-page',
        'Setup Akun Platform/instagram-business',
        'Setup Akun Platform/hubungkan instagram ke facebook',
      ],
    },
    'connect-social-media',
    'build-with-ai',
    'file-upload',
    'content-scheduler',
    'content-repetition',
    'prompt-list-and-result',
  ],

  penetapanHargaSidebar: [
    {
      type: 'category',
      label: 'Penetapan Harga',
      link: {
        type: 'generated-index',
        description: 'Informasi paket dan harga layanan Postmatic.',
      },
      items: [
        'penetapan-harga/paket-dan-harga',
      ],
    },
  ],

  legalitasSidebar: [
    {
      type: 'category',
      label: 'Legalitas dan Kebijakan',
      link: {
        type: 'generated-index',
        description: 'Dokumen legalitas dan kebijakan Postmatic.',
      },
      items: [
        'legalitas-dan-kebijakan/kebijakan-privasi',
        'legalitas-dan-kebijakan/syarat-dan-ketentuan',
        'legalitas-dan-kebijakan/hapus-data',
        'legalitas-dan-kebijakan/kebijakan-cookie',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
