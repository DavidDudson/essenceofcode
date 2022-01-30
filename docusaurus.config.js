const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Essence of Code',
  tagline: 'Building a stronger foundation',
  url: 'https://essenceofcode.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'essenceofcode.github.io',
  organizationName: 'daviddudson',
  trailingSlash: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/DavidDudson/essenceofcode',
        }
      }),
    ],
  ],
  themeConfig:
    ({
      navbar: {
        title: 'Essence of Code',
        logo: {
          alt: 'Essence of Code',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/DavidDudson/essenceofcode',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} David Dudson.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
