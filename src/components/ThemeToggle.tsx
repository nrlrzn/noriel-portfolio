import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
  }, [isDark]);

  return (
    <div className="glass-toggle" onClick={() => setIsDark(!isDark)}>
      <div className={`toggle-circle ${isDark ? 'dark' : 'light'}`}>
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </div>
    </div>
  );
}
