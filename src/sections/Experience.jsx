import { Asterisk } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  return <section className="experience section-pad" id="experience">
    <SectionHeading number="04">Experience</SectionHeading>
    <div className="experience-grid">
      <div className="experience-left"><p className="eyebrow">Learning by doing</p><h2>Every build<br/>adds a <em>chapter.</em></h2><p className="experience-intro">The best lessons happen when ideas move out of the notebook and into the hands of real people.</p><div className="award-stamp"><Asterisk size={38}/><span>GOOD WORK<br/>GETS NOTICED</span></div></div>
      <div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.where}><span className="timeline-index">0{index + 1}</span><div className="timeline-copy"><span className="timeline-date">{item.kind} · {item.date}</span><h3>{item.where}</h3><h4>{item.role}</h4><p>{item.desc}</p></div><span className="timeline-dot"/></article>)}</div>
    </div>
  </section>;
}
