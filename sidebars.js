/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "getting-started/introduction",
        "getting-started/installation",
        "getting-started/deployment",
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'User Interface',
      items: [
        "ui/general",
        "ui/containers",
        "ui/port-forwarding",
        "ui/images",
        "ui/troubleshooting",
        "ui/snapshots",
        "ui/diagnostics",
        "ui/extensions",
        {
          type: 'category',
          label: 'Preferences',
          items: [
            {
              type: 'category',
              label: 'Application',
              items:  [
                "ui/preferences/application/general",
                "ui/preferences/application/behavior",
                "ui/preferences/application/environment"
              ]
            },
            {
              type: 'category',
              label: 'Virtual Machine',
              items:  [
                "ui/preferences/virtual-machine/emulation",
                "ui/preferences/virtual-machine/hardware",
                "ui/preferences/virtual-machine/network",
                "ui/preferences/virtual-machine/volumes"
              ]
            },
            {
              type: 'category',
              label: 'WSL',
              items:  [
                "ui/preferences/wsl/integrations",
                "ui/preferences/wsl/network",
                "ui/preferences/wsl/proxy"
              ]
            },
            {
              type: 'category',
              label: 'Container Engine',
              items:  [
                "ui/preferences/container-engine/general",
                "ui/preferences/container-engine/allowed-images"
              ]
            },
            "ui/preferences/kubernetes"
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        "tutorials/working-with-images",
        "tutorials/working-with-containers",
      ],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      items: [
        "how-to-guides/hello-world-example",
        "how-to-guides/installing-uninstalling-extensions",
        "how-to-guides/transfer-container-images",
        "how-to-guides/create-multi-node-cluster",
        "how-to-guides/setup-NGINX-Ingress-Controller",
        "how-to-guides/vs-code-docker",
        "how-to-guides/vs-code-remote-containers",
        "how-to-guides/rancher-on-rancher-desktop",
        "how-to-guides/skaffold-and-rancher-desktop",
        "how-to-guides/provisioning-scripts",
        "how-to-guides/increasing-open-file-limit",
        "how-to-guides/running-air-gapped",
        "how-to-guides/odo-rancher-desktop",
        "how-to-guides/traefik-ingress-example",
        "how-to-guides/using-testcontainers"
      ],
    },
    {
      type: 'category',
      label: 'References',
      items: [
        "references/architecture",
        "references/rdctl-command-reference",
        "references/bundled-utilities"
      ],
    },
    "faq",
    "troubleshooting-tips"
  ],
};

module.exports = sidebars;
