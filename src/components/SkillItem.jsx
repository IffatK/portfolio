export default function SkillItem({children, featured=false}) { return <span className={featured ? 'skill-feature' : undefined}>{children}</span>; }
