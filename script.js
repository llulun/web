// script.js - 独立的JS文件，用于交互功能，如文案生成器

document.addEventListener('DOMContentLoaded', () => {
    // 示例：添加平滑滚动到锚点链接
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 文案生成器逻辑（假设在generator.html中使用，这里占位）
    // const generateBtn = document.querySelector('#generate-btn');
    // if (generateBtn) {
    //     generateBtn.addEventListener('click', () => {
    //         // 调用AI生成文案的逻辑（模拟）
    //         const result = document.querySelector('#generate-result');
    //         result.textContent = '生成的文案示例：今天天气真好，心情愉快！';
    //     });
    // }

    // 其他交互，如日志查看等，可以在此扩展
});
