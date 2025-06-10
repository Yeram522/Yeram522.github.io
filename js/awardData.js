// js/awardData.js
export const awardDetails = {
    'holy-study': {
        title: 'HOLY 학습공동체',
        period: '2021-09~2021-11',
        organization: '홍익대학교 교수학습지원센터',
        award: '우수동아리',
        overview: '자료구조 전공 과목을 심화 학습하기 위해 학습공동체 프로그램에 참여하였고, 우수동아리로 선정되어 수상했습니다.',
        role: '학습 공동체 리더',
        activities: [
            '전공 교재 문제 풀이 진행',
            '연관된 코딩테스트 문제 해결',
            '팀원들과 함께 학습하도록 동아리 운영',
            '매주 정기 스터디 진행'
        ],
        results: [
            '우수동아리 선정 및 수상',
            '팀원 전원 자료구조 과목 A+ 달성',
            '학습 공동체 프로그램 만족도 4.8/5.0'
        ],
        imageFolder: 'images/awards/holy-study',
        images: [
            { filename: 'certificate.png', caption: '우수동아리 상장' },
            { filename: 'certificate.png', caption: '정기 스터디 모습' },
            { filename: 'scertificate.png', caption: '문제 풀이 시간' },
            { filename: 'certificate.png', caption: '학습공동체 팀원들과 함께' }
        ]
    },
    'graduation-project': {
        title: '졸업작품 우수상',
        period: '2024.02',
        organization: '홍익대학교 게임학부',
        award: '우수상',
        overview: '졸업작품으로 DirectX11 엔진을 이용한 씬툴을 제작하였고 우수상을 수상했습니다.',
        role: '개발자',
        activities: [
            'DirectX11 기반 렌더링 엔진 개발',
            '컴포넌트 패턴을 활용한 씬 관리 시스템 구현',
            '싱글톤 패턴을 통한 리소스 관리',
            '객체지향 원칙을 지킨 확장성 있는 코드 설계'
        ],
        results: [
            '졸업작품 우수상 수상',
            '교수진 평가 점수 95점',
            '동기들로부터 베스트 프로젝트 선정'
        ],
        imageFolder: 'images/awards/graduation-project',
        images: [
            { filename: 'tool-interface.png', caption: '개발한 씬툴 인터페이스' },
            { filename: 'interface', caption: '렌더링 결과물' },
        ]
    }
};

export const otherDetails = {
    'academic-conference': {
        title: '2021 전공 학술회',
        period: '2021.10 ~ 2021.12',
        organization: '홍익대학교 게임학부',
        role: '진행자',
        overview: 'C++ 객체지향프로그래밍 수업을 심화 학습하기 위한 학술회로 Lambda, Template, RAII 등을 주제로 수업을 진행하였습니다.',
        activities: [
            'Lambda 표현식 활용법 강의',
            'Template 메타프로그래밍 심화 내용',
            'RAII 패턴을 통한 메모리 관리',
            '실습 예제 제작 및 진행'
        ],
        results: [
            '참석자 만족도 4.7/5.0',
            '후배들의 C++ 이해도 향상',
            '학과 내 우수 멘토로 선정'
        ],
        imageFolder: 'images/others/academic-conference',
        images: [
            { filename: 'lecture-scene1.png', caption: 'Lambda 표현식 강의 중' }
        ]
    },
    'tutoring-program': {
        title: '새내기 튜터링 프로그램',
        period: '2022.04.18 ~ 2022.06.24',
        organization: '홍익대학교 교수학습지원센터',
        role: '튜터',
        overview: '1학년 후배와 1:1로 매칭되어 한 학기 동안 최소 20시간 이상 전공과 관련해 튜터링을 진행했습니다.',
        activities: [
            '1:1 개인 맞춤 튜터링 진행',
            'C언어 기초부터 심화까지 지도',
            '프로그래밍 과제 도움 및 코드 리뷰',
            '학습 계획 수립 및 관리'
        ],
        results: [
            '튜티 성적 향상 (C → B+)',
            '튜터링 프로그램 우수 튜터 선정',
            '튜티로부터 감사 편지 받음'
        ],
        imageFolder: 'images/others/tutoring-program',
        images: [
            { filename: 'tutoring-session1.png', caption: '1:1 튜터링 진행 모습' }
        ]
    }
};