document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const closeButton = document.getElementById('closeModal');
    const projectImages = document.querySelectorAll('.project-image');

    function openModal(projectKey, title) {
        const projectData = window.projectDetails[projectKey];
        if (!projectData) return;

        modalTitle.textContent = projectData.title;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        const html = window.createProjectDetailHTML(projectData);
        document.querySelector('.modal-body').innerHTML = html;
    }

    // 이벤트 리스너
    projectImages.forEach(image => {
        image.addEventListener('click', function () {
            const projectKey = this.getAttribute('data-project-key');
            const projectTitle = this.getAttribute('data-project-title');
            
            if (projectKey) {
                openModal(projectKey, projectTitle);
            }
        });
    });

    // 모달 닫기
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

});

