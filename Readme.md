# 🎯 InterX 2025 - 채용 관리 시스템

프론트엔드 개발자 채용 프로세스를 관리하는 직관적이고 효율적인 대시보드 애플리케이션입니다.

## 📋 프로젝트 개요

채용 담당자가 지원자의 현재 상태를 한눈에 파악하고, 드래그 앤 드롭으로 간편하게 지원자 상태를 관리할 수 있는 칸반 스타일의 대시보드입니다.

### 주요 기능

- ✅ **지원자 관리**: 지원자 정보 등록, 수정, 삭제
- 🎯 **상태 관리**: 6단계 채용 프로세스 (지원 → TA → 1차인터뷰 → 코딩테스트 → 2차인터뷰 → 입사확정)
- 🎨 **드래그 앤 드롭**: 직관적인 상태 변경 인터페이스
- 🔍 **검색 기능**: 이름, 이메일, 전화번호로 지원자 검색
- 🌓 **다크 모드**: 라이트/다크 테마 지원
- 📱 **반응형 디자인**: 모바일부터 데스크톱까지 대응

## 🛠 기술 스택

### Core
- **React 18.3.1** - UI 라이브러리
- **TypeScript 5.6.3** - 타입 안정성
- **Vite 5.4.11** - 빌드 툴

### UI/UX
- **Material-UI (MUI) 7.3.5** - 컴포넌트 라이브러리
- **Tailwind CSS 3.4.15** - 유틸리티 CSS
- **@tabler/icons-react 3.19.0** - 아이콘
- **@dnd-kit/core 6.3.1** - 드래그 앤 드롭

### State Management & Data Fetching
- **TanStack React Query 5.90.10** - 서버 상태 관리
- **Context API** - 전역 테마 상태 관리

### Utilities
- **Moment.js 2.30.1** - 날짜 처리

## 📁 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── common/          # 공통 컴포넌트 (Menu 등)
│   └── ui/              # UI 컴포넌트
│       └── Dashboard/   # 대시보드 관련 컴포넌트
│           ├── UserCard/                  # 지원자 카드
│           ├── UserCardContainer/         # 상태별 컨테이너
│           ├── UserCardContainerTitle/    # 컨테이너 제목
│           ├── UserRegister/              # 지원자 등록 폼
│           ├── UserRegisterModal/         # 등록 모달
│           └── UserStatusBoard/           # 메인 보드
├── contexts/            # React Context (테마 관리)
├── hooks/              # Custom Hooks
│   ├── useDragAndDrop.ts      # 드래그 앤 드롭 로직
│   ├── useUserForm.ts         # 폼 상태 관리
│   └── useUserListHook.ts     # 사용자 리스트 관리
├── pages/              # 페이지 컴포넌트
│   └── Dashboard/
├── quries/             # React Query 설정 및 쿼리
│   ├── queryClient.ts
│   └── UserQuery.ts
├── types/              # TypeScript 타입 정의
│   ├── status.type.ts  # 채용 상태 enum
│   └── user.type.ts    # 사용자 타입
├── themes/             # MUI 테마 설정
│   └── muiTheme.ts
├── dummy/              # 더미 데이터
│   └── dummyData.ts
└── App.tsx             # 앱 루트 컴포넌트
```

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 실행

```bash
# 개발 서버 실행
npm run dev
# 또는
yarn dev
```

브라우저에서 `http://localhost:5173` 으로 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build
# 또는
yarn build

# 빌드 결과 미리보기
npm run preview
# 또는
yarn preview
```

### Storybook

```bash
# Storybook 실행
npm run storybook
# 또는
yarn storybook

# Storybook 빌드
npm run build-storybook
# 또는
yarn build-storybook
```

## 📊 채용 프로세스 단계

1. **지원 (APPLICATION)** - 지원자가 최초 지원한 상태
2. **TA (TECHNICAL ASSESSMENT)** - 기술 평가 진행 중
3. **1차인터뷰 (INTERVIEW_FIRST)** - 첫 번째 인터뷰 단계
4. **코딩테스트 (CODING_TEST)** - 코딩 테스트 진행
5. **2차인터뷰 (INTERVIEW_SECOND)** - 최종 인터뷰 단계
6. **입사확정 (CONFIRMATION)** - 최종 합격 및 입사 확정

## 🎨 주요 컴포넌트 설명

### DashboardContainer
- 최상위 페이지 컴포넌트
- 검색, 필터링, 테마 토글 기능 제공

### UserStatusBoard
- 6개의 상태 컨테이너를 렌더링하는 메인 보드
- 검색 필터링 로직 적용
- 드래그 앤 드롭 Context 제공

### UserCardContainer
- 각 상태별 지원자 카드를 담는 컨테이너
- Droppable 영역으로 작동
- 지원자 수 표시

### UserCard
- 개별 지원자 정보 표시 카드
- Draggable 아이템으로 작동
- 지원자 정보 수정/삭제 기능

### UserRegister / UserRegisterModal
- 새로운 지원자 등록 폼
- 유효성 검증 로직 포함
- 이름, 이메일, 전화번호, 등록 방법, 이력서 업로드

## 🔧 Custom Hooks

### useDragAndDrop
- 드래그 앤 드롭 이벤트 처리
- 지원자 상태 업데이트 로직

### useUserForm
- 폼 상태 관리 및 유효성 검증
- 폼 제출 핸들러

### useUserListHook
- 사용자 리스트 CRUD 작업
- 로컬 상태와 서버 상태 동기화

## 🎯 LLM 활용 내역

프로젝트 개발 과정에서 AI 어시스턴트를 활용한 주요 작업 내역입니다.

### 1. 프로젝트 Base 생성
- **작업 내용**: Vite + React + TypeScript 프로젝트 초기 세팅
- **활용 범위**: 
  - 프로젝트 구조 설계 및 폴더 구조 생성
  - package.json 의존성 설정
  - Vite 설정 파일 구성
  - ESLint, Prettier 설정

### 2. TypeScript 타입 정의 및 Cleanup
- **작업 내용**: 타입 안정성을 위한 인터페이스 및 Enum 정의
- **활용 범위**:
  - `UserType`, `StatusEnum`, `RegisterMethod` 등 핵심 타입 정의
  - 타입 가드 함수 생성 (`getStatusLabel`)
  - 컴포넌트 Props 타입 정의
  - any 타입 제거 및 엄격한 타입 체크

### 3. 더미 데이터 생성
- **작업 내용**: 개발 및 테스트를 위한 샘플 데이터 생성
- **활용 범위**:
  - 다양한 상태의 지원자 데이터 생성
  - 실제 사용 패턴을 고려한 데이터 구성
  - 검색 및 필터링 테스트용 다양한 케이스 포함

### 4. MUI Component 커스터마이징 및 Variable 설정
- **작업 내용**: Material-UI 컴포넌트 스타일 커스터마이징
- **활용 범위**:
  - 테마 시스템 구축 (lightTheme, darkTheme)
  - 커스텀 색상 팔레트 정의
  - 컴포넌트별 기본 스타일 오버라이드
  - Tailwind CSS와의 통합 작업

### 5. User Register Modal - Validation 로직 구현
- **작업 내용**: 사용자 입력 유효성 검증 시스템 구축
- **활용 범위**:
  - 이메일 형식 검증 (정규표현식)
  - 전화번호 형식 검증 (한국 전화번호 형식)
  - 필수 필드 체크
  - 실시간 에러 메시지 표시
  - 중복 검증 로직

### 6. MUI Component Dark Mode 구현
- **작업 내용**: 다크 모드 테마 시스템 구축
- **활용 범위**:
  - ThemeContext 생성 및 Provider 설정
  - MUI ThemeProvider와 통합
  - 라이트/다크 테마 전환 로직
  - localStorage를 활용한 테마 설정 지속성
  - 모든 컴포넌트에 테마 적용

### 7. React Query 통합 (추가 작업)
- **작업 내용**: 서버 상태 관리 및 캐싱 시스템 구축
- **활용 범위**:
  - queryClient 설정
  - useUserQuery 커스텀 훅 생성
  - 낙관적 업데이트 (Optimistic Update) 구현
  - 에러 핸들링 및 로딩 상태 관리

### 8. 드래그 앤 드롭 시스템 구현 (추가 작업)
- **작업 내용**: @dnd-kit을 활용한 인터랙티브 UI 구현
- **활용 범위**:
  - DndContext 설정
  - Draggable/Droppable 컴포넌트 구현
  - 드래그 이벤트 핸들링
  - 상태 변경 애니메이션

### 9. 검색 및 필터링 기능 (추가 작업)
- **작업 내용**: 다양한 검색 조건 지원
- **활용 범위**:
  - 카테고리별 검색 (이름, 이메일, 전화번호)
  - 실시간 검색 결과 필터링
  - 검색어 하이라이팅
  - 검색 결과 카운트 표시

---
