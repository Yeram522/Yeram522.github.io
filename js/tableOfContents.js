// 목차 네비게이션 JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const toc = document.getElementById('toc');
    const tocToggle = document.getElementById('tocToggle');
    const tocList = document.getElementById('tocList');
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('section, .intro-section');

    // 목차 토글 기능
    tocToggle.addEventListener('click', function () {
        toc.classList.toggle('collapsed');
    });

    // 부드러운 스크롤 기능
    tocLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // 헤더 높이만큼 오프셋
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 스크롤 감지 및 활성 섹션 표시
    function updateActiveSection() {
        const scrollPosition = window.scrollY + 100; // 약간의 오프셋

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // 모든 링크에서 active 클래스 제거
                tocLinks.forEach(link => link.classList.remove('active'));

                // 현재 섹션에 해당하는 링크에 active 클래스 추가
                const activeLink = document.querySelector(`.toc-link[data-section="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // 스크롤 이벤트 리스너 (성능 최적화를 위한 throttle)
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);

    // 초기 로드 시에도 실행
    updateActiveSection();

    // 목차 표시/숨김 (스크롤 위치에 따라)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 페이지 상단에서는 목차 숨기기
        if (scrollTop < 200) {
            toc.style.opacity = '0.5';
            toc.style.transform = 'translateY(-50%) translateX(20px)';
        } else {
            toc.style.opacity = '1';
            toc.style.transform = 'translateY(-50%) translateX(0)';
        }

        lastScrollTop = scrollTop;
    });


});

