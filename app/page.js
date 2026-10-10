import PrintButton from "./components/PrintButton";
import resume from "./resume.json";
import certifications from "./certifications.json";
const { summary, skillGroups, experiences, title } = resume;
const contactLine = "Phone +1 437 243 3693 | Email: alex@seshwithfriends.org | LinkedIn: linkedin.com/in/amorac/ | Website: eloruga.com | GitHub: github.com/Oruga420";

export default function Home() {
  return (
    <main className="page">
      <article className="resume" aria-label="Resume">
        <div className="utility-bar">
          <PrintButton />
        </div>

        <header className="header">
          <div className="name">Alejandro de la Mora</div>
          <div className="contact-line">Toronto, Ontario, Canada.</div>
          <div className="contact-line">{contactLine}</div>
        </header>

        <div className="rule" aria-hidden="true" />

        <h1 className="title">{title}</h1>

        <div className="rule" aria-hidden="true" />

        <section className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary">{summary}</p>
        </section>

        <section className="section">
          <h2 className="section-title">Core Skills</h2>
          <table className="skills-table">
            <tbody>
              {skillGroups.map((group) => (
                <tr key={group.title}>
                  <td className="skills-group">{group.title}</td>
                  <td>
                    <ul className="skills-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2 className="section-title">Professional Experience</h2>
          {experiences.map((item) => (
            <div className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-top">
                <div className="company">{item.company}</div>
                {item.location ? (
                  <div className="location">{item.location}</div>
                ) : null}
              </div>
              {!item.isStandalone ? (
                <div className="experience-meta">
                  <div className="role">{item.role}</div>
                  <div className="date-range">{item.date}</div>
                </div>
              ) : null}
              {item.client ? (
                <div className="client-line">{item.client}</div>
              ) : null}
              <ul className="experience-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            Ingenieria en Sistemas Universidad Marista de Merida, Mexico 2004 -
            2007
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert.url}>
                <a
                  className="cert-link"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
