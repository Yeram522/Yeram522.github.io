// js/detailModal.js
import { awardDetails, otherDetails } from './awardData.js';

export class DetailModalController {
    constructor() {
        this.modal = document.getElementById('detailModal');
        this.modalTitle = document.getElementById('detailModalTitle');
        this.closeButton = document.getElementById('closeDetailModal');
        this.detailContent = document.getElementById('detailContent');
        this.imageGallery = document.getElementById('imageGallery');
        
        this.currentImages = [];
        this.currentImageIndex = 0;
        
        this.initEventListeners();
    }

    initEventListeners() {
        // 모달 닫기
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
            if (this.modal.classList.contains('show')) {
                if (e.key === 'Escape') {
                    this.closeModal();
                } else if (e.key === 'ArrowLeft') {
                    this.previousImage();
                } else if (e.key === 'ArrowRight') {
                    this.nextImage();
                }
            }
        });

        // 클릭 가능한 아이템들에 이벤트 리스너 추가
        const clickableItems = document.querySelectorAll('.clickable-item');
        clickableItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const detailKey = e.currentTarget.getAttribute('data-detail-key');
                const detailType = e.currentTarget.getAttribute('data-detail-type');
                this.openModal(detailKey, detailType);
            });
        });
    }

    openModal(detailKey, detailType) {
        const data = detailType === 'award' ? awardDetails[detailKey] : otherDetails[detailKey];
        
        if (!data) {
            console.error('데이터를 찾을 수 없습니다:', detailKey);
            return;
        }

        this.modalTitle.textContent = data.title;
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // 상세 내용 렌더링
        this.renderDetailContent(data);
        
        // 이미지 갤러리 렌더링
        this.renderImageGallery(data);
    }

    renderDetailContent(data) {
        const html = `
            <div class="detail-meta">
                <div class="detail-meta-item">
                    <div class="detail-meta-label">기간</div>
                    <div class="detail-meta-value">${data.period}</div>
                </div>
                <div class="detail-meta-item">
                    <div class="detail-meta-label">기관</div>
                    <div class="detail-meta-value">${data.organization}</div>
                </div>
                <div class="detail-meta-item">
                    <div class="detail-meta-label">역할</div>
                    <div class="detail-meta-value">${data.role}</div>
                </div>
                ${data.award ? `
                <div class="detail-meta-item">
                    <div class="detail-meta-label">수상</div>
                    <div class="detail-meta-value">${data.award}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="detail-section">
                <h4>📋 개요</h4>
                <p>${data.overview}</p>
            </div>

            <div class="detail-section">
                <h4>✨ 주요 활동</h4>
                <ul>
                    ${data.activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>🎯 성과</h4>
                <ul class="results-list">
                    ${data.results.map(result => `<li>${result}</li>`).join('')}
                </ul>
            </div>
        `;
        
        this.detailContent.innerHTML = html;
    }

    renderImageGallery(data) {
        if (!data.images || data.images.length === 0) {
            this.imageGallery.innerHTML = `
                <div class="gallery-container">
                    <div class="gallery-main">
                        <div class="gallery-placeholder">
                            📷<br>이미지가 준비 중입니다
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        this.currentImages = data.images;
        this.currentImageIndex = 0;

        const html = `
            <div class="gallery-container">
                <div class="gallery-main">
                    ${data.images.map((img, index) => `
                        <img src="${data.imageFolder}/${img.filename}" 
                             alt="${img.caption}"
                             class="gallery-image ${index === 0 ? 'active' : ''}"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuydtOuvuOyngCDsobDruITspJE8L3RleHQ+PC9zdmc+'" />
                    `).join('')}
                    
                    <div class="gallery-controls">
                        <button class="gallery-btn" id="prevBtn">‹</button>
                        <button class="gallery-btn" id="nextBtn">›</button>
                    </div>
                    
                    <div class="gallery-counter">
                        <span id="currentIndex">1</span> / <span id="totalImages">${data.images.length}</span>
                    </div>
                </div>
                
                <div class="gallery-caption">
                    <h3 id="imageCaption">${data.images[0].caption}</h3>
                </div>
                
                <div class="gallery-indicators">
                    ${data.images.map((_, index) => `
                        <div class="gallery-indicator ${index === 0 ? 'active' : ''}" 
                             onclick="detailModalController.goToImage(${index})"></div>
                    `).join('')}
                </div>
            </div>
        `;

        this.imageGallery.innerHTML = html;

        // 갤러리 컨트롤 이벤트 리스너
        document.getElementById('prevBtn').addEventListener('click', () => this.previousImage());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextImage());
    }

    previousImage() {
        if (this.currentImageIndex > 0) {
            this.goToImage(this.currentImageIndex - 1);
        }
    }

    nextImage() {
        if (this.currentImageIndex < this.currentImages.length - 1) {
            this.goToImage(this.currentImageIndex + 1);
        }
    }

    goToImage(index) {
        if (index < 0 || index >= this.currentImages.length) return;

        // 현재 이미지 숨기기
        const currentImg = document.querySelector('.gallery-image.active');
        if (currentImg) currentImg.classList.remove('active');

        // 새 이미지 표시
        const newImg = document.querySelectorAll('.gallery-image')[index];
        if (newImg) newImg.classList.add('active');

        // 인디케이터 업데이트
        document.querySelectorAll('.gallery-indicator').forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        // 캡션 업데이트
        const caption = document.getElementById('imageCaption');
        if (caption) caption.textContent = this.currentImages[index].caption;

        // 카운터 업데이트
        const currentIndexSpan = document.getElementById('currentIndex');
        if (currentIndexSpan) currentIndexSpan.textContent = index + 1;

        // 버튼 상태 업데이트
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === this.currentImages.length - 1;

        this.currentImageIndex = index;
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        this.currentImages = [];
        this.currentImageIndex = 0;
    }
}

// 전역에서 접근 가능하도록 설정
window.detailModalController = null;