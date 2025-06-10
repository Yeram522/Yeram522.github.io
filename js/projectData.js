// projectData.js
const projectDetails = {
    'cquis': {
        title: 'Cquis - CS 퀴즈 플랫폼',
        period: '2024.09 - 2024.11',
        team: '4명 (FE 2명, BE 2명)',
        role: 'Frontend 개발',
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
        }
    }
};

// 전역으로 내보내기
window.projectDetails = projectDetails;
