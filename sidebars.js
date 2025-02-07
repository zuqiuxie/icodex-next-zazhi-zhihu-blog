// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  javascript: [
    {
      // type: "autogenerated",
      // // dirName: "javascript",
      type: "category",
      label: "JavaScript",
      link: { type: "doc", id: "javascript/index" },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "故事会",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/故事会", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "读者",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/读者", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "意林",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/意林", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "RegExp",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/RegExp", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "Date",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/Date", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "Object",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/Object", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "函数",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/函数", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "DOM",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/DOM", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "Runtime",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/Runtime", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "性能优化",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "javascript/性能优化", // '.' 即当前的文档文件夹
            },
          ],
        },
      ],
    },
  ],
  typescript: [
    {
      type: "category",
      label: "TypeScript",
      link: {
        type: "generated-index",
        slug: "/typescript",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "typescript", // '.' 即当前的文档文件夹
        },
      ],
    },
  ],
  css: [
    {
      type: "category",
      label: "CSS",
      link: { type: "doc", id: "css/index" },
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "css/CSS选择器", // '.' 即当前的文档文件夹
        },
        {
          type: "doc",
          id: "css/和文本有关的CSS属性", // '.' 即当前的文档文件夹
        },
        {
          type: "doc",
          id: "css/CSS长度单位", // '.' 即当前的文档文件夹
        },
        {
          type: "category",
          label: "盒模型",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "css/盒模型", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "格式化上下文",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "css/格式化上下文", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "布局",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "css/布局", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "坐标和偏移",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "css/坐标和偏移", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "doc",
          id: "css/CSS代码规范", // '.' 即当前的文档文件夹
        },
      ],
    },
  ],
  react: [
    {
      type: "category",
      label: "React",
      link: { type: "doc", id: "react/index" },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "hooks",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "react/hooks", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "react源码学习",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "react/react源码学习", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "redux",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "react/redux", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "router",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "react/router", // '.' 即当前的文档文件夹
            },
          ],
        },
      ],
    },
  ],
  algorithm: [
    {
      type: "autogenerated",
      dirName: "algorithm",
    },
  ],
  engineer: [
    {
      type: "category",
      label: "前端工程化体系",
      link: { type: "doc", id: "engineer/index" },
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "engineer", // '.' 即当前的文档文件夹
        },
      ],
    },
  ],
  network: [
    {
      type: "category",
      label: "Network",
      link: { type: "doc", id: "network/index" },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "应用层",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "network/应用层", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "category",
          label: "运输层",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "network/运输层", // '.' 即当前的文档文件夹
            },
          ],
        },
        {
          type: "doc",
          id: "network/网速与带宽", // '.' 即当前的文档文件夹
        },
      ],
    },
  ],
  nodejs: [
    {
      type: "autogenerated",
      dirName: "nodejs",
    },
  ],
  tools: [
    {
      type: "autogenerated",
      dirName: "tools",
    },
  ],
  interview: [
    {
      type: "category",
      label: "Interview",
      link: { type: "doc", id: "interview/index" },
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "interview/js",
        },
        {
          type: "doc",
          id: "interview/css",
        },
        {
          type: "doc",
          id: "interview/html",
        },
        {
          type: "doc",
          id: "interview/计算机网络",
        },
        {
          type: "doc",
          id: "interview/算法",
        },
      ],
    },
  ]
};

module.exports = sidebars;
