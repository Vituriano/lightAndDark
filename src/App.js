import React, { useState, useEffect } from 'react';
import * as S from './styled.js';

function App() {
  const [theme, setTheme] = useState(null);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <S.Wrapper>
      <S.Button
        onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
        }}
      >
        <S.On>ON</S.On>
        <S.Off>OFF</S.Off>
        <S.Toggle status={isDarkMode ? 'On' : 'Off'}/>
      </S.Button>
    </S.Wrapper>
  );
}

export default App;
