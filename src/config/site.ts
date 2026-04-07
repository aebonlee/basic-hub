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
    { id: 'skill', name: '교양/스킬', nameEn: 'Liberal Arts & Skills', icon: 'fa-solid fa-lightbulb', path: '/courses/skill' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.language', path: '/courses/language', activePath: '/courses/language',
      dropdown: [
        { path: '/courses/english', labelKey: 'site.nav.english' },
        { path: '/courses/japanese', labelKey: 'site.nav.japanese' },
        { path: '/courses/korean', labelKey: 'site.nav.korean' },
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
    { path: '/courses/skill', labelKey: 'site.nav.skill' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
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
