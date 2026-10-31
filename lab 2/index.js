const sysInfo = `${navigator.userAgent} (${navigator.oscpu || 'Unknown OS'})`;
localStorage.setItem('system_info', sysInfo);

const sysInfoDiv = document.getElementById('sys-info');
if (sysInfoDiv) {
    sysInfoDiv.innerHTML = `<p><b>System Info:</b> ${localStorage.getItem('system_info')}</p>`;
}

async function loadComments() {
    const container = document.getElementById('comments-container');
    if (!container) return;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/11/comments`);
        const comments = await response.json();

        container.innerHTML = '';
        comments.forEach(comment => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.marginBottom = '10px';
            card.innerHTML = `
                <h3>${comment.name}</h3>
                <small style="color: #38bdf8;">${comment.email}</small>
                <p style="margin-top: 8px; font-size: 0.9rem;">${comment.body}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p style="color: #ef4444;">Failed to load comments.</p>';
        console.error('Error loading comments:', error);
    }
}
loadComments();

const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');

setTimeout(() => {
    if (modalOverlay) modalOverlay.style.display = 'flex';
}, 60000);

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        if (modalOverlay) modalOverlay.style.display = 'none';
    });
}

const themeToggleBtn = document.getElementById('theme-toggle-btn');

function applyAutoTheme() {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}

applyAutoTheme();

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}
