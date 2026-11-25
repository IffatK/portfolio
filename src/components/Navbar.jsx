import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export default function Navbar() {
  const [open,setOpen] = useState(false);
  const [theme,setTheme] = useState(getInitialTheme);
  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#211b18' : '#f8f5ec');
    try { window.localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works for this session. */ }
  }, [theme]);

  return <header className="nav-wrap">
    <a className="wordmark" href="#top" onClick={close}>IK<span>®</span></a>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'}>{open?<X/>:<Menu/>}</button>
    <div className="nav-actions">
      <nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">
        <a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Selected work</a><a href="#experience" onClick={close}>Experience</a><a href="#contact" className="nav-contact" onClick={close}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="theme-toggle" type="button" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={theme==='dark'?'Switch to light theme':'Switch to dark theme'} aria-pressed={theme==='dark'} title={theme==='dark'?'Switch to light theme':'Switch to dark theme'}>
        {theme==='dark'?<Sun size={18} aria-hidden="true"/>:<Moon size={18} aria-hidden="true"/>}
      </button>
    </div>
  </header>;
}
