import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillItem from '../components/SkillItem.jsx';
import { skills } from '../data/skills.js';
export default function Skills(){return <section className="skills section-pad"><SectionHeading number="02">Tools of the trade</SectionHeading><div className="skills-header"><h2>Building blocks<br/>for <em>what’s next.</em></h2><p>From the first line of markup to the data behind a product, I like understanding how the pieces work together.</p></div><div className="skills-list">{skills.map((group,i)=><div className="skill-row" key={group.title}><span className="skill-number">0{i+1}</span><h3>{group.title}</h3><div className="skill-items">{group.items.map((item,j)=><SkillItem key={item} featured={j===0&&i===0}>{item}</SkillItem>)}</div><ArrowUpRight className="skill-arrow" size={18}/></div>)}</div></section>}
