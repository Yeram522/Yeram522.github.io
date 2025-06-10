// js/modalController.js
import { createProjectDetailHTML } from './projectTemplate.js';

export class ModalController {
    constructor() {
        this.modal = document.getElementById('projectModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.closeButton = document.getElementById('closeModal');
        this.loadingSpinner = document.getElementById('loadingSpinner');
        
        this.initEventListeners();
    }

    initEventListeners() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.closeModal());
        }

        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.closeModal();
            }
        });
    }

    openModal(projectData) {
        if (!projectData) {
            console.error('프로젝트 데이터가 없습니다');
            return;
        }

        console.log('모달 열기:', projectData.title);

        this.modalTitle.textContent = projectData.title;
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // 로딩 스피너 숨기기
        if (this.loadingSpinner) {
            this.loadingSpinner.style.display = 'none';
        }
        
        // 상세 내용 렌더링
        const html = createProjectDetailHTML(projectData);
        const modalBody = document.querySelector('.modal-body');
        if (modalBody) {
            modalBody.innerHTML = html;
        }
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}