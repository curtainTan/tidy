
module.exports = {
    title: "Hello awen",
    description: "awen 的知识库.",
    head: [
        [
            "script",
            {},
            `
              var _hmt = _hmt || [];
              (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?cf9970ac75cfe996ab4ce3b956cd01bd";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
              })();
            `
        ]
    ],
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        // displayAllHeaders: true,
        nav: [
            { text: "主页", link: "/" },
            {
                text: "前端",
                items: [
                    { text: "js", link: "/web/js/" },
                    { text: "css", link: "/web/css/" },
                ]
            },
            { text: "node", link: "/node/" },
            { text: "算法", link: "/algorithm/" },
            { text: "小技能", link: "/other/" },
            { text: "github", link: "https://github.com/curtainTan" }
        ],
        sidebar: {
            "/sidebar/": ["", "one", "two"],
            "/web/js/": ["", "Date", "common"],
            "/web/css/": [""],
            "/node/": [""],
            "/algorithm/": [""],
            "/other/": ["", "pm2"]
        },
    },
    plugins: [
        "@vuepress/back-to-top",
        '@vuepress/medium-zoom',
        ["@vuepress/nprogress"],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'GEEeIvDIi3q1sX8wJjKfp7a6-gzGzoHsz',
                    appKey: 'ULa1eyYDGzPyNX0rW3lfCYj0'
                }
            }
        ]
    ]

}


