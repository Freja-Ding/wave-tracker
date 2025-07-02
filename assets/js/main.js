
document.getElementById('toggleLang').addEventListener('click', () => {
    const html = document.documentElement;
    if (html.lang === 'en') {
        html.lang = 'zh';
        document.querySelector('h1').textContent = 'wave！追踪器';
        document.querySelectorAll('.btn')[0].textContent = '➕ 填写表单';
        document.querySelectorAll('.btn')[1].textContent = '📈 查看图表';
    } else {
        html.lang = 'en';
        document.querySelector('h1').textContent = 'wave! Tracker';
        document.querySelectorAll('.btn')[0].textContent = '➕ Fill the Form';
        document.querySelectorAll('.btn')[1].textContent = '📈 View the Chart';
    }
});
