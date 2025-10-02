// script.js - 扩写JS，添加交互如菜单切换、轮播、生成器逻辑、表单提交模拟、平滑滚动

document.addEventListener('DOMContentLoaded', () => {
    // 移动菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
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

    // 文案生成器逻辑（模拟AI，实际可集成API）
    const generateBtn = document.querySelector('#generate-btn');
    const generateResult = document.querySelector('#generate-result p');
    const copyBtn = document.querySelector('#copy-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const theme = document.querySelector('#theme').value;
            const style = document.querySelector('#style').value;
            // 模拟生成
            const generatedText = `基于主题"${theme}"和风格"${style}"的文案：今天是美好的一天，让我们一起加油！（这是一个模拟示例，实际集成AI后将生成真实内容。）`;
            generateResult.textContent = generatedText;
        });
    }
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(generateResult.textContent).then(() => {
                alert('已复制到剪贴板！');
            });
        });
    }

    // 联系表单提交模拟
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('消息已发送！（模拟，实际需后端集成）');
            contactForm.reset();
        });
    }

    // 测试轮播（简单溢出滚动，可扩展Swiper.js）
    // 对于testimonial-carousel，无需额外JS，使用CSS overflow

    // 懒加载图像已通过HTML loading="lazy"实现
});
