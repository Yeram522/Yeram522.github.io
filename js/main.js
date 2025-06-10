// js/main.js
import { projectDetails } from './projectData.js';
import { ModalController } from './modalController.js';

class Portfolio {
    constructor() {
        this.modalController = new ModalController();
        this.initProjectImageEvents();
    }

    initProjectImageEvents() {
        const projectImages = document.querySelectorAll('.project-image');
        console.log('프로젝트 이미지 개수:', projectImages.length);

        projectImages.forEach((image, index) => {
            console.log(`이미지 ${index} 이벤트 리스너 등록됨`);
            
            image.addEventListener('click', (e) => {
                const projectKey = e.currentTarget.getAttribute('data-project-key');
                console.log('클릭된 프로젝트 키:', projectKey);
                
                if (projectKey && projectDetails[projectKey]) {
                    this.modalController.openModal(projectDetails[projectKey]);
                } else {
                    console.error('프로젝트를 찾을 수 없습니다:', projectKey);
                    console.log('사용 가능한 키들:', Object.keys(projectDetails));
                }
            });
        });
    }
}

// DOM이 로드되면 Portfolio 클래스 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 로드됨, Portfolio 초기화 시작');
    new Portfolio();
});