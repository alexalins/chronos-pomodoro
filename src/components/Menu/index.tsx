import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes;
    return savedTheme || 'dark';
  });

  function handleChangeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink} aria-label='Ir para Home' title='Ir para Home'>
        <HouseIcon />
      </a>
      <a href='#' className={styles.menuLink} aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para Configurações'
        title='Ir para Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleChangeTheme}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
