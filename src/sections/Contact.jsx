import { ArrowDownRight, ArrowUpRight, Asterisk, Code2, Link2, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Footer from '../components/Footer.jsx';

const email = 'kiffat411@gmail.com';
const linkedin = 'https://www.linkedin.com/in/iffat-khan-5b0907270/';

export default function Contact() {
  return <footer className="contact" id="contact">
    <div className="contact-top">
      <SectionHeading number="07">A project in mind?</SectionHeading>
      <div className="contact-grid">
        <div className="contact-headline">
          <p className="eyebrow">Have something good in mind?</p>
          <h2>Let’s build<br/>something<br/><em>meaningful.</em></h2>
          <a className="button button-yellow" href={`mailto:${email}?subject=Portfolio%20inquiry`}>Start a conversation <ArrowUpRight size={16}/></a>
        </div>
        <div className="contact-side">
          <span className="contact-flower"><Asterisk size={54}/></span>
          <p>Good work starts with a good conversation. Tell me what you’re imagining.</p>
          <div className="contact-links">
            <a href={`mailto:${email}`}><Mail size={17}/><span>Email<small>{email}</small></span><ArrowUpRight size={15}/></a>
            <a href="https://github.com/IffatK" target="_blank" rel="noreferrer"><Code2 size={17}/><span>GitHub<small>github.com/IffatK</small></span><ArrowUpRight size={15}/></a>
            <a href={linkedin} target="_blank" rel="noreferrer"><Link2 size={17}/><span>LinkedIn<small>iffat-khan-5b0907270</small></span><ArrowUpRight size={15}/></a>
            <a href="/resume.pdf" download="IffatKhanResume.pdf"><ArrowDownRight size={17}/><span>Resume<small>Download PDF</small></span><ArrowUpRight size={15}/></a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </footer>;
}
