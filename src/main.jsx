import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import photo from "./assets/photo.jpg";
import * as D from "./data.js";
import "./style.css";

function useReveal(){useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(el=>io.observe(el));return()=>io.disconnect()},[])}
function Count({to}){const [v,setV]=useState(0);const ref=useRef();useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){io.disconnect();let s=null;const step=t=>{s??=t;const p=Math.min((t-s)/1300,1);setV(Math.round(to*(1-Math.pow(1-p,3))));p<1&&requestAnimationFrame(step)};requestAnimationFrame(step)}});io.observe(ref.current);return()=>io.disconnect()},[]);return <b ref={ref}>{v}</b>}
const Sec = ({ id, title, children }) => (<section id={id}><h2 className="rv">{title}</h2>{children}</section>);

function Typer({ words }) {
  const [i, setI] = useState(0), [n, setN] = useState(0), [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i], reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % words.length); }
    }, !del && n === w.length ? 1400 : del ? 35 : 70);
    return () => clearTimeout(t);
  }, [n, del, i]);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  return <span className="typer">{reduce ? words[0] : words[i].slice(0, n)}<i className="caret" /></span>;
}

function Project({ p, open, toggle }) {
  return (
    <article className={"proj pop" + (open ? " open" : "")} onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;e.currentTarget.style.transform=`perspective(800px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-4px)`}} onMouseLeave={(e)=>{e.currentTarget.style.transform=""}}>
      <button className="proj-head" onClick={toggle} aria-expanded={open}>
        <span className={"dot " + p.tag}>{p.tag}</span>
        <h3>{p.t}</h3>
        <span className="plus" aria-hidden>{open ? "−" : "+"}</span>
      </button>
      <p className="lead">{p.d}</p>
      {open && <ul>{p.pts.map((x) => <li key={x}>{x}</li>)}</ul>}
      <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
    </article>
  );
}

function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem("theme"); } catch { return null; } });
  const [filter, setFilter] = useState("All");
  const [openI, setOpenI] = useState(0);
  const [prog, setProg] = useState(0);
  const [skill, setSkill] = useState(0);
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    try { theme && localStorage.setItem("theme", theme); } catch {}
  }, [theme]);
  useEffect(() => {
    const f = () => { setProg(scrollY / (document.documentElement.scrollHeight - innerHeight)); document.documentElement.style.setProperty("--sy", scrollY); };
    const m = (e) => { const s = document.documentElement.style; s.setProperty("--mx", e.clientX + "px"); s.setProperty("--my", e.clientY + "px"); };
    addEventListener("pointermove", m);
    addEventListener("scroll", f, { passive: true }); return () => { removeEventListener("scroll", f); removeEventListener("pointermove", m); }
  }, []);
  useReveal();
  const dark = theme ? theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  const tags = ["All", "LLM", "ML", "Mobile"];
  const list = D.projects.filter((p) => filter === "All" || p.tag === filter);
  return (<>
    <div className="blobs" aria-hidden><i /><i /><i /></div><div className="glow" aria-hidden />
    <div className="bar" style={{ transform: `scaleX(${prog})` }} />
    <header className="nav">
      <a href="#top" className="logo">MA</a>
      <nav>{["projects", "skills", "experience", "education", "contact"].map((s) => <a key={s} href={"#" + s}>{s}</a>)}</nav>
      <button className="theme" onClick={() => setTheme(dark ? "light" : "dark")} aria-label="Toggle theme">{dark ? "Light" : "Dark"}</button>
    </header>
    <main>
      <section id="top" className="hero">
        <div className="hero-txt">
          <p className="hi">Hi, I’m</p>
          <h1 aria-label={D.profile.name}>{D.profile.name.split("").map((c, i) => <span key={i} aria-hidden className="ch" style={{ animationDelay: `${i * 55 + 200}ms` }}>{c === " " ? "\u00a0" : c}</span>)}</h1>
          <p className="role"><Typer words={D.profile.roles} /></p>
          <p className="sum">{D.profile.summary}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">See my projects</a>
            <a className="btn" href={"mailto:" + D.profile.email}>Email me</a>
          </div>
          <p className="loc">{D.profile.location}</p>
        </div>
        <div className="pw"><div className="photo"><img src={photo} alt="Portrait of Mariam Anwer" /></div><span className="orb o1" /><span className="orb o2" /><span className="tag t1">LLMs</span><span className="tag t2">Agentic AI</span></div>
      </section>
      <div className="stats">{D.stats.map(([n, l]) => <div key={l} className="rv" style={{ "--d": "0ms" }}><Count to={+n} /><span>{l}</span></div>)}</div>

      <div className="marq" aria-hidden><div>{[...D.skills.flatMap(([, s]) => s.slice(0, 3)), ...D.skills.flatMap(([, s]) => s.slice(0, 3))].map((s, i) => <span key={i}>{s}</span>)}</div></div>

      <Sec id="projects" title="Projects">
        <div className="filters" role="tablist">{tags.map((t) => <button key={t} className={filter === t ? "on" : ""} onClick={() => { setFilter(t); setOpenI(0); }}>{t}</button>)}</div>
        <div className="grid">{list.map((p, i) => <Project key={p.t + filter} p={p} open={openI === i} toggle={() => setOpenI(openI === i ? -1 : i)} />)}</div>
      </Sec>

      <Sec id="skills" title="Skills">
        <div className="skills">
          <div className="tabs">{D.skills.map(([g], i) => <button key={g} className={skill === i ? "on" : ""} onClick={() => setSkill(i)}>{g}</button>)}</div>
          <div className="chips big" key={skill}>{D.skills[skill][1].map((s, i) => <span key={s} className="pop" style={{ animationDelay: `${i * 50}ms` }}>{s}</span>)}</div>
        </div>
      </Sec>

      <Sec id="experience" title="Experience">
        <ol className="timeline">{D.jobs.map((j) => (
          <li key={j.o} className="rv"><div className="when">{j.p}</div><h3>{j.r}, {j.o}</h3><ul>{j.pts.map((x) => <li key={x}>{x}</li>)}</ul></li>
        ))}</ol>
        <div className="paper rv"><h3>Publication</h3><p className="pt">{D.paper.t}</p><p>{D.paper.v}. {D.paper.d}</p></div>
      </Sec>

      <Sec id="education" title="Education and certifications">
        <div className="two rv">
          <div>{D.edu.map(([d, s, y]) => <div className="edu" key={d}><h3>{d}</h3><p>{s}</p><span>{y}</span></div>)}</div>
          <ul className="certs">{D.certs.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <p className="lang">Languages: Arabic (native), English (professional working proficiency)</p>
      </Sec>

      <Sec id="contact" title="Contact">
        <div className="contact">
          <a className="rv" href={"mailto:" + D.profile.email}><span>Email</span>{D.profile.email}</a>
          <a href={D.profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>mariamanwer</a>
          <a href={D.profile.github} target="_blank" rel="noreferrer"><span>GitHub</span>MariamAnwer820</a>
          <a href={"tel:" + D.profile.phone.replace(/\s/g, "")}><span>Phone</span>{D.profile.phone}</a>
        </div>
      </Sec>
    </main>
    <footer>{D.profile.full}</footer>
  </>);
}
createRoot(document.getElementById("root")).render(<App />);
