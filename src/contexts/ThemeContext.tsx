import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';

/**
 * SRP: 테마 상태 타입 정의 책임
 */
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

/**
 * SRP: 테마 Context 생성 책임
 */
const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * SRP: 테마 상태 제공 책임
 * - localStorage에서 초기값 로드
 * - 테마 상태 관리
 * - 테마 변경 시 DOM 업데이트
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // localStorage에서 저장된 테마 불러오기
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  // 테마 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('darkMode', String(newValue));
      return newValue;
    });
  };

  // 다크모드 변경 시 HTML root에 클래스 추가/제거
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // 불필요한 리렌더링 방지
  const value = useMemo(
    () => ({ isDarkMode, toggleDarkMode }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * SRP: 테마 Context 접근 로직 책임
 * - Context 유효성 검증
 * - 편리한 Hook 인터페이스 제공
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
};

