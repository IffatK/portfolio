import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import { achievements } from '../data/achievements.js';

export default function Achievements() {
  return <section className="experience achievements section-pad" id="achievements">
    <SectionHeading number="05">Achievements</SectionHeading>
    <div className="awards-band">
      <div className="awards-title"><span>RECOGNITION & PARTICIPATION</span><h3>Showing up,<br/><em>trying things.</em></h3></div>
      <div className="award-list">{achievements.map((item,index) => <div className="award-row" key={item}><span>{String(index + 1).padStart(2,'0')}</span><b>{item}</b><ArrowUpRight size={15}/></div>)}</div>
    </div>
  </section>;
}
