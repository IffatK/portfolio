import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk, MapPin } from 'lucide-react';
import { gsap } from 'gsap';

function EditorWindow() {
  return <div className="hero-code-window">
    <div className="hero-code-toolbar">
      <span className="hero-window-dots" aria-hidden="true"><i/><i/><i/></span>
      <span className="hero-code-tab"><span className="code-tab-braces">{'{}'}</span> App.jsx</span>
      <span className="hero-code-status">LIVE</span>
    </div>
    <div className="hero-code-content" aria-label="React component sample">
      <span className="code-line"><i>01</i><span><b>const</b> <strong>App</strong> = () <em>=&gt;</em> {'{'}</span></span>
      <span className="code-line"><i>02</i><span className="code-indent"><b>return</b> (</span></span>
      <span className="code-line"><i>03</i><span className="code-indent code-indent-more"><small>&lt;</small><strong>Experience</strong></span></span>
      <span className="code-line"><i>04</i><span className="code-indent code-indent-more code-string">Clear ideas, made useful.</span></span>
      <span className="code-line"><i>05</i><span className="code-indent"><small>/&gt;</small></span></span>
      <span className="code-line"><i>06</i><span>{'}'};</span></span>
    </div>
    <div className="hero-code-footer"><span><i/>Thoughtful by design</span><span>React · JSX</span></div>
  </div>;
}

function HeroDeveloperVisual() {
  return <div className="hero-dev-visual" aria-label="A React workspace with a live interface preview">
    <div className="hero-visual-board" aria-hidden="true"/>
    <div className="hero-visual-label"><span>01 / FRONTEND</span><span>IDEAS INTO INTERFACES</span></div>
    <div className="hero-visual-badge" aria-hidden="true"><Asterisk size={17}/><span>BUILD<br/>WITH CARE</span></div>
    <EditorWindow/>
    <div className="hero-live-preview">
      <div className="preview-topline"><span>LIVE PREVIEW</span><i/></div>
      <div className="preview-art" aria-hidden="true"><span/><i/><b/></div>
      <div className="preview-copy"><span>INTERFACE STUDY / 01</span><strong>Clear ideas,<br/>made useful.</strong></div>
      <div className="preview-footer"><span>REACT UI</span><span>01 — 03</span></div>
    </div>
  </div>;
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let context;
    try {
      context = gsap.context(() => {
        const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
        entrance
          .from('.hero-kicker, .hero-top-note', { y: 12, opacity: 0, duration: .45, stagger: .08 })
          .from('.hero-copy > *', { y: 20, opacity: 0, duration: .55, stagger: .07 }, '-=.12')
          .from('.hero-visual-board, .hero-code-window, .hero-live-preview', { y: 18, opacity: 0, duration: .65, stagger: .12 }, '-=.4');

        gsap.to('.hero-live-preview', { y: -5, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }, heroRef);
    } catch (error) {
      console.warn('Hero motion is unavailable; keeping all content visible.', error);
      heroRef.current?.querySelectorAll('.hero-copy > *, .hero-code-window, .hero-live-preview')
        .forEach((element) => element.removeAttribute('style'));
    }

    return () => context?.revert();
  }, []);

  return <section className="hero" id="top" ref={heroRef}>
    <div className="hero-top">
      <div className="hero-kicker"><span className="sun-mini"><Asterisk size={16}/></span><span>Frontend developer<br/> & creative builder</span></div>
      <div className="hero-rule"><span/><span className="hero-sun"><Asterisk size={28}/></span><span/></div>
      <p className="hero-top-note">Thoughtful interfaces<br/>made with care</p>
    </div>

    <div className="hero-main">
      <div className="hero-copy">
        <p className="eyebrow blue-text">Hello, I’m</p>
        <h1 className="hero-title"><span className="hero-title-line">Iffat Khan<span className="hero-name-period">.</span></span></h1>
        <div className="hero-pill"><span>React.js</span><b>·</b><span>JavaScript</span><b>·</b><span>Frontend development</span></div>
        <p className="hero-role">Frontend Developer <span>·</span> React.js Developer</p>
        <p className="body-copy">I’m a third-year BTech student with a two-year diploma in Information Technology. I love turning complex ideas into clean, intuitive interfaces and building practical digital experiences.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">View my work <ArrowDownRight size={17}/></a>
          <a className="text-link" href="#about">About me <ArrowUpRight size={15}/></a>
        </div>
        <div className="hero-location"><span className="location-dot"/><MapPin size={13}/> Open to frontend opportunities</div>
      </div>

      <HeroDeveloperVisual/>
    </div>
    <a className="scroll-note" href="#about"><span>Scroll to explore</span><ArrowDown size={14}/></a>
  </section>;
}
