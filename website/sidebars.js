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
  sidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'deploying-the-offline-image',
      label: 'Deploying the Offline Image',
    },
    {
      type: 'category',
      label: 'Developing Apps for Offline Use',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'developing-apps-for-offline-use/declaring-third-party-dependencies',
          label: 'Declaring Third-Party Dependencies'
        },
        {
          type: 'doc',
          id: 'developing-apps-for-offline-use/template-tags',
          label: 'Template Tags'
        }
      ],
    },
    {
      type: 'doc',
      id: 'limitations',
      label: 'Limitations'
    },
  ],
};

export default sidebars;
