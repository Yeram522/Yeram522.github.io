// js/projectData.js
export const projectDetails = {
    'cquis': {
        title: 'Cquis - CS 퀴즈 플랫폼',
        period: '2024.09 - 2024.11',
        team: '4명 (FE 2명, BE 2명)',
        role: 'Frontend 개발',
        tasks:[
            'OpenAI API를 활용한 CS 문제 자동 생성',
            'Socket.io를 이용한 실시간 퀴즈 대결',
            'React Query를 활용한 효율적인 상태 관리',
            '반응형 웹 디자인으로 모바일 최적화'
        ],
        overview: 'OpenAI API를 활용한 맞춤형 CS 퀴즈 플랫폼으로, 실시간 퀴즈 대결과 개인별 맞춤 문제 생성 기능을 제공합니다.',
        features: [
            'OpenAI API를 활용한 CS 문제 자동 생성',
            'Socket.io를 이용한 실시간 퀴즈 대결',
            'React Query를 활용한 효율적인 상태 관리',
            '반응형 웹 디자인으로 모바일 최적화'
        ],
        techStack: {
            'Frontend': ['React', 'TypeScript', 'React Query', 'Socket.io', 'Styled-components'],
            'Backend': ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
            'Deployment': ['AWS EC2', 'Docker', 'GitHub Actions']
        },
        challenges: [
            {
                problem: '실시간 퀴즈 동기화 문제',
                solution: 'Socket.io를 활용하여 Room 기반 실시간 통신 구현'
            },
            {
                problem: 'OpenAI API 응답 시간 최적화',
                solution: '캐싱 전략과 스트리밍 응답으로 사용자 경험 개선'
            }
        ],
        results: [
            '평균 응답 시간 2초 이내 달성',
            '동시 접속자 100명 이상 처리 가능',
            '사용자 만족도 4.5/5.0'
        ],
        links: {
            github: 'https://github.com/Jungle-CQuiS/frontend',
            demo: null,
            notion: 'https://yeram-info.notion.site/Cquis-159b8e01c55c80c8a18ae18bda3b45c6?pvs=74'
        },
        review: '좋은 경험이었다.'
    },
    'pintos': {
        title: '크래프톤 정글 핀토스 프로젝트',
        period: '2024.08 - 2024.11',
        team: '2명',
        role: 'OS 개발',
        overview: 'Stanford의 PintOS를 기반으로 운영체제의 핵심 기능들을 직접 구현하는 프로젝트입니다.',
        features: [
            'Timer와 Priority Scheduling 구현',
            'User Program과 System Call 구현', 
            'Virtual Memory Management 구현',
            'File System 구현'
        ],
        techStack: {
            'Language': ['C'],
            'Environment': ['Ubuntu', 'GDB', 'QEMU'],
            'Tools': ['Make', 'Git']
        },
        challenges: [
            {
                problem: 'Priority Inversion 문제 해결',
                solution: 'Priority Donation 알고리즘 구현'
            },
            {
                problem: 'Page Fault 처리 최적화',
                solution: 'LRU 알고리즘 기반 페이지 교체 정책 구현'
            }
        ],
        results: [
            '모든 테스트 케이스 통과',
            '메모리 사용량 20% 최적화',
            '파일 시스템 성능 15% 향상'
        ],
        links: {
            github: 'https://github.com/Yeram522/W08-Pintos',
            demo: null,
            notion: null
        }
    },
    'imageArchive': {
        title: 'Image Archive',
        period: '2025.06 ~',
        team: '개인 프로젝트',
        role: 'Fullstack 개발',
        overview: '이미지 공유 아카이브 플랫폼입니다.',
        features: [
            '이미지 업로드 및 관리',
            '태그 기반 분류 시스템',
            '반응형 갤러리 뷰',
            '검색 및 필터링 기능'
        ],
        techStack: {
            'Backend': ['Spring Boot', 'Java', 'MySQL'],
            'Frontend': ['HTML', 'CSS', 'JavaScript'],
            'Deployment': ['AWS EC2', 'AWS S3']
        },
        challenges: [
            {
                problem: '이미지 최적화 문제',
                solution: 'AWS S3와 CloudFront를 활용한 CDN 구성'
            }
        ],
        results: [
            '개발 진행 중',
            'AWS 인프라 구축 완료'
        ],
        links: {
            github: 'https://github.com/Yeram522/Image-Archive-frontend',
            demo: 'https://yeram522.github.io/Image-Archive-frontend/',
            notion: null
        }
    }
};