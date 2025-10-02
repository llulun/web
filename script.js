// script.js - 移除生成器，保持其他

document.addEventListener('DOMContentLoaded', () => {
    // 移动菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 高亮当前导航
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });

    // 面包屑动态生成
    const breadcrumb = document.querySelector('.breadcrumb ol');
    if (breadcrumb) {
        const pages = {
            'features': '核心功能',
            'installation': '安装指南',
            'usage': '使用教程',
            'changelog': '更新日志',
            'other-projects': '其他项目',
            'documentation': '文档中心',
            'faq': '常见问题',
            'contributing': '贡献指南',
            'contact': '联系我们'
        };
        const currentTitle = pages[currentPage] || '页面';
        breadcrumb.innerHTML += `<li aria-current="page">${currentTitle}</li>`;
    }

    // 平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
