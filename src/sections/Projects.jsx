import { useState } from 'react';
import { Asterisk } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

const filters = ['All', 'Frontend', 'Full Stack', 'AI / ML', 'Cybersecurity'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = projects.filter((project) => filter === 'All' || project.category === filter);

  return <section className="work section-pad" id="work">
    <SectionHeading number="03">Selected work</SectionHeading>
    <div className="work-heading"><div><p className="eyebrow">A few things I’ve made</p><h2>Ideas into<br/><em>interfaces.</em></h2></div><p className="work-intro">Products, experiments and collaborative builds — each one a chance to solve a real problem and learn something new.</p></div>
    <div className="filter-bar" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}<span>{item === 'All' ? projects.length : projects.filter((project) => project.category === item).length.toString().padStart(2, '0')}</span></button>)}</div>
    <div className="project-list">{shown.map((project) => <ProjectCard p={project} key={project.n} />)}</div>
    <div className="work-end"><span>MORE IDEAS IN THE WORKS</span><Asterisk size={22}/><span>ALWAYS BUILDING</span></div>
  </section>;
}
