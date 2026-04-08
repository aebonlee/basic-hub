/**
 * DreamIT Basic Hub - 사이트 설정 파일
 * 교양/인문 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'basic-hub',
  name: 'DreamIT Basic Hub',
  nameKo: '드림아이티 교양인문학습사이트',
  description: 'DreamIT Basic Hub - 교양/인문 학습사이트 허브. 어학, 프레젠테이션, 학습법 등 5개 학습 플랫폼',
  url: 'https://basic-hub.dreamitbiz.com',
  dbPrefix: 'bsh_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Basic', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#7C3AED',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: true, community: true, search: true, auth: true, license: true },

  colors: [
    { name: 'purple', color: '#7C3AED' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'blue', color: '#0046C8' },
    { name: 'orange', color: '#C87200' },
  ],

  categories: [
    { id: 'language', name: '어학', nameEn: 'Languages', icon: 'fa-solid fa-language', path: '/courses/language' },
    { id: 'liberal', name: '교양기초', nameEn: 'Liberal Arts Basics', icon: 'fa-solid fa-book-open', path: '/courses/liberal' },
    { id: 'skill', name: '스킬', nameEn: 'Skills', icon: 'fa-solid fa-lightbulb', path: '/courses/skill' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.language', path: '/courses/language', activePath: '/courses/language',
      dropdown: [
        { path: '/courses/english', labelKey: 'site.nav.english' },
        { path: '/courses/japanese', labelKey: 'site.nav.japanese' },
        { path: '/courses/korean', labelKey: 'site.nav.korean' },
        { path: '/courses/chinese', labelKey: 'site.nav.chinese' },
      ]
    },
    {
      labelKey: 'site.nav.liberal', path: '/courses/liberal', activePath: '/courses/liberal',
      dropdown: [
        { path: '/courses/koreatech', labelKey: 'site.nav.koreatech' },
        { path: '/courses/ai-sw-intro', labelKey: 'site.nav.aiSwIntro' },
        { path: '/courses/statistics', labelKey: 'site.nav.statistics' },
        { path: '/courses/writing', labelKey: 'site.nav.writing' },
      ]
    },
    {
      labelKey: 'site.nav.skill', path: '/courses/skill', activePath: '/courses/skill',
      dropdown: [
        { path: '/courses/presentation', labelKey: 'site.nav.presentation' },
        { path: '/courses/study', labelKey: 'site.nav.study' },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/pricing', labelKey: 'site.nav.pricing' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/language', labelKey: 'site.nav.language' },
    { path: '/courses/liberal', labelKey: 'site.nav.liberal' },
    { path: '/courses/skill', labelKey: 'site.nav.skill' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT AI Hub', url: 'https://ai-hub.dreamitbiz.com' },
    { name: 'DreamIT CS Hub', url: 'https://cs-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    {
      id: 'english', name: '영어', nameEn: 'English', url: 'https://english.dreamitbiz.com',
      icon: 'fa-solid fa-flag-usa', color: '#2563EB', category: 'language',
      description: '영어 회화, 문법, 리딩, 라이팅을 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn English conversation, grammar, reading, and writing.',
      techStack: ['영어회화', '영문법', '리딩', '라이팅'], difficulty: 'beginner',
      curriculum: ['기초 영어회화', '영문법 핵심 정리', '리딩 스킬 향상', '비즈니스 영어', '영어 프레젠테이션'],
      curriculumEn: ['Basic English conversation', 'Essential grammar review', 'Reading skill improvement', 'Business English', 'English presentation'],
      features: ['원어민 음성', '실전 회화 연습', '레벨 테스트'],
      featuresEn: ['Native speaker audio', 'Real conversation practice', 'Level test'],
      target: '영어 학습자, 직장인', targetEn: 'English learners, professionals',
    },
    {
      id: 'japanese', name: '일본어', nameEn: 'Japanese', url: 'https://japanese.dreamitbiz.com',
      icon: 'fa-solid fa-torii-gate', color: '#DC2626', category: 'language',
      description: '일본어 기초부터 JLPT 대비까지 체계적으로 학습합니다.',
      descriptionEn: 'Systematically learn Japanese from basics to JLPT preparation.',
      techStack: ['히라가나', '가타카나', '한자', 'JLPT'], difficulty: 'beginner',
      curriculum: ['히라가나/가타카나', '기초 일본어 문법', '일상 회화', '한자 학습', 'JLPT 대비'],
      curriculumEn: ['Hiragana/Katakana', 'Basic Japanese grammar', 'Daily conversation', 'Kanji study', 'JLPT preparation'],
      features: ['JLPT 대비', '일상 회화', '문화 학습'],
      featuresEn: ['JLPT prep', 'Daily conversation', 'Cultural learning'],
      target: '일본어 학습자, JLPT 준비생', targetEn: 'Japanese learners, JLPT candidates',
    },
    {
      id: 'korean', name: '한국어', nameEn: 'Korean', url: 'https://korean.dreamitbiz.com',
      icon: 'fa-solid fa-flag', color: '#059669', category: 'language',
      description: '외국인을 위한 한국어 교육과 TOPIK 대비를 학습합니다.',
      descriptionEn: 'Learn Korean for foreigners and prepare for TOPIK.',
      techStack: ['한글', '한국어문법', 'TOPIK', '한국문화'], difficulty: 'beginner',
      curriculum: ['한글 기초', '기초 한국어 문법', '일상 한국어 회화', '한국 문화 이해', 'TOPIK 대비'],
      curriculumEn: ['Hangul basics', 'Basic Korean grammar', 'Daily Korean conversation', 'Korean culture', 'TOPIK preparation'],
      features: ['TOPIK 대비', '한국 문화 학습', '실전 회화'],
      featuresEn: ['TOPIK prep', 'Korean culture', 'Real conversation'],
      target: '외국인 한국어 학습자, TOPIK 준비생', targetEn: 'Foreign Korean learners, TOPIK candidates',
    },
    {
      id: 'chinese', name: '실용 중국어', nameEn: 'Practical Chinese', url: '#',
      icon: 'fa-solid fa-dragon', color: '#DC2626', category: 'language',
      description: '비즈니스와 일상에서 활용할 수 있는 실용 중국어를 학습합니다.',
      descriptionEn: 'Learn practical Chinese for business and daily life.',
      techStack: ['중국어회화', '비즈니스중국어', 'HSK', '중국문화'], difficulty: 'beginner',
      curriculum: ['중국어 발음과 성조', '기초 회화와 문법', '비즈니스 중국어', 'HSK 대비', '중국 문화 이해'],
      curriculumEn: ['Chinese pronunciation and tones', 'Basic conversation and grammar', 'Business Chinese', 'HSK preparation', 'Chinese culture understanding'],
      features: ['발음 교정', '실전 회화', 'HSK 대비'],
      featuresEn: ['Pronunciation correction', 'Real conversation', 'HSK prep'],
      target: '중국어 학습자, 비즈니스 종사자', targetEn: 'Chinese learners, business professionals',
    },
    {
      id: 'koreatech', name: '컴퓨팅 사고', nameEn: 'Computational Thinking', url: 'https://koreatech.dreamitbiz.com',
      icon: 'fa-solid fa-brain', color: '#6D28D9', category: 'liberal',
      description: '컴퓨팅 사고력과 문제 해결 능력을 키우는 교양 과목입니다.',
      descriptionEn: 'A liberal arts course to develop computational thinking and problem-solving skills.',
      techStack: ['컴퓨팅사고', '문제해결', '논리적사고', '알고리즘기초'], difficulty: 'beginner',
      curriculum: ['컴퓨팅 사고란 무엇인가', '문제 분해와 패턴 인식', '추상화와 알고리즘 설계', '데이터 표현과 분석', '컴퓨팅 사고 프로젝트'],
      curriculumEn: ['What is computational thinking', 'Problem decomposition and pattern recognition', 'Abstraction and algorithm design', 'Data representation and analysis', 'Computational thinking project'],
      features: ['비전공자 맞춤', '실생활 문제 해결', '논리적 사고 훈련'],
      featuresEn: ['Non-CS major friendly', 'Real-life problem solving', 'Logical thinking training'],
      target: '비전공자, 교양 학습자', targetEn: 'Non-CS majors, liberal arts learners',
    },
    {
      id: 'ai-sw-intro', name: 'AI·SW개론', nameEn: 'AI & SW Introduction', url: '#',
      icon: 'fa-solid fa-microchip', color: '#2563EB', category: 'liberal',
      description: 'AI와 소프트웨어의 기본 개념을 교양 수준에서 이해합니다.',
      descriptionEn: 'Understand the basics of AI and software at a liberal arts level.',
      techStack: ['AI개론', 'SW개론', '디지털리터러시', '기술트렌드'], difficulty: 'beginner',
      curriculum: ['소프트웨어의 이해', '인공지능의 기초 개념', '데이터와 알고리즘', 'AI 활용 사례', '미래 기술 트렌드'],
      curriculumEn: ['Understanding software', 'AI basic concepts', 'Data and algorithms', 'AI use cases', 'Future tech trends'],
      features: ['비전공자 맞춤', '최신 기술 트렌드', '사례 중심 학습'],
      featuresEn: ['Non-CS major friendly', 'Latest tech trends', 'Case-based learning'],
      target: '비전공자, 디지털 리터러시 학습자', targetEn: 'Non-CS majors, digital literacy learners',
    },
    {
      id: 'statistics', name: '통계학 기초', nameEn: 'Statistics Basics', url: '#',
      icon: 'fa-solid fa-chart-bar', color: '#0891B2', category: 'liberal',
      description: '데이터 해석과 의사결정을 위한 기초 통계학을 학습합니다.',
      descriptionEn: 'Learn basic statistics for data interpretation and decision making.',
      techStack: ['기술통계', '확률', '추론통계', '데이터해석'], difficulty: 'beginner',
      curriculum: ['통계학이란 무엇인가', '기술통계와 데이터 시각화', '확률과 확률분포', '추론통계와 가설검정', '실생활 데이터 분석'],
      curriculumEn: ['What is statistics', 'Descriptive statistics and data visualization', 'Probability and distributions', 'Inferential statistics and hypothesis testing', 'Real-life data analysis'],
      features: ['실습 중심', '데이터 시각화', '실생활 사례'],
      featuresEn: ['Practice-centered', 'Data visualization', 'Real-life examples'],
      target: '통계 입문자, 데이터 분석 관심자', targetEn: 'Statistics beginners, data analysis enthusiasts',
    },
    {
      id: 'writing', name: '글쓰기와 소통', nameEn: 'Writing & Communication', url: '#',
      icon: 'fa-solid fa-pen-nib', color: '#EA580C', category: 'liberal',
      description: '논리적 글쓰기와 효과적인 소통 능력을 키웁니다.',
      descriptionEn: 'Develop logical writing and effective communication skills.',
      techStack: ['논술', '보고서작성', '비즈니스글쓰기', '커뮤니케이션'], difficulty: 'beginner',
      curriculum: ['글쓰기의 기본 원리', '논리적 사고와 글 구조화', '비즈니스 문서 작성법', '효과적인 커뮤니케이션', '발표와 토론 기술'],
      curriculumEn: ['Writing fundamentals', 'Logical thinking and structuring', 'Business document writing', 'Effective communication', 'Presentation and discussion skills'],
      features: ['첨삭 지도', '실전 작문 연습', '토론 학습'],
      featuresEn: ['Writing feedback', 'Practical writing practice', 'Discussion-based learning'],
      target: '대학생, 직장인, 글쓰기 향상 희망자', targetEn: 'College students, professionals, writing improvement seekers',
    },
    {
      id: 'presentation', name: '프레젠테이션', nameEn: 'Presentation', url: 'https://presentation.dreamitbiz.com',
      icon: 'fa-solid fa-person-chalkboard', color: '#E11D48', category: 'skill',
      description: 'PPT 디자인, 스피치, 스토리텔링 등 효과적인 발표 기법을 학습합니다.',
      descriptionEn: 'Learn effective presentation skills including PPT design, speech, and storytelling.',
      techStack: ['PPT', '스피치', '시각디자인', '스토리텔링'], difficulty: 'beginner',
      curriculum: ['프레젠테이션 기획', 'PPT 디자인 원칙', '스피치 전달 기법', '데이터 시각화', '영어 프레젠테이션'],
      curriculumEn: ['Presentation planning', 'PPT design principles', 'Speech delivery', 'Data visualization', 'English presentations'],
      features: ['실전 발표 연습', '템플릿 제공', '피드백 시스템'],
      featuresEn: ['Practical presentation practice', 'Template library', 'Feedback system'],
      target: '직장인, 학생, 발표 준비자', targetEn: 'Professionals, students, presenters',
    },
    {
      id: 'study', name: '공부 잘하는 방법', nameEn: 'Study Methods', url: 'https://study.dreamitbiz.com',
      icon: 'fa-solid fa-brain', color: '#8B5CF6', category: 'skill',
      description: '학습법, 기억력 향상, 시간관리, 시험전략 등 효과적인 학습 노하우를 배웁니다.',
      descriptionEn: 'Learn effective study methods including memory techniques, time management, and exam strategies.',
      techStack: ['학습법', '기억력', '시간관리', '시험전략'], difficulty: 'beginner',
      curriculum: ['효과적인 학습법', '기억력 향상 테크닉', '시간관리와 계획', '시험 전략', '자기주도 학습'],
      curriculumEn: ['Effective study methods', 'Memory enhancement techniques', 'Time management and planning', 'Exam strategies', 'Self-directed learning'],
      features: ['학습 진단', '맞춤형 학습 플랜', '실전 테스트'],
      featuresEn: ['Learning assessment', 'Personalized study plans', 'Practice tests'],
      target: '학생, 수험생, 자기계발 학습자', targetEn: 'Students, exam candidates, self-improvement learners',
    },
  ],
};

export default site;
