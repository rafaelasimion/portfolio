import styles from './Skills.module.css';

// icons
import { MdDateRange } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuCloudCog } from "react-icons/lu";
import { FaBook } from "react-icons/fa";

export default function Skills() {

    const skills = [
        { id: 1, desc: "html", icon: FaHtml5 },
        { id: 2, desc: "css", icon: FaCss3Alt },
        { id: 3, desc: "javascript", icon: IoLogoJavascript },
        { id: 4, desc: "react", icon: FaReact },
        { id: 5, desc: "git", icon: FaGitAlt },
        { id: 6, desc: "github", icon: FaGithub },
        { id: 7, desc: "api rest", icon: LuCloudCog },
    ];

    const institutions = [
        { id: 1, desc: "Tec. em Análise e Desenvolvimento de Sistemas - FATEC", date: "2024 - atualmente" },
        { id: 2, desc: "Ensino Médio Técnico - Informática para Web", date: "2021 - 2023" }
    ];

    const courses = [
        { id: 1, desc: "React JS para Iniciantes - Udemy", date: "2026" },
        { id: 2, desc: "Git e GitHub - Curso em Vídeo", date: "2025" },
        { id: 3, desc: "JavaScript para Iniciantes - Curso em Vídeo", date: "2024" },
    ];

    return (
        <section id="skills" className={`section ${styles.skills}`}>
            <h1 className='title'>Tecnologias & Estudos</h1>

            <div className={styles.content}>

                <div className={styles.skillsCard}>
                    <h2 className='subtitle'>Skills</h2>

                    <ul className={styles.skillList}>
                        {skills.map((s) => {
                            const Icon = s.icon;
                            return (
                                <li key={s.id} className={styles.skillItem}>
                                    <Icon className={styles.icon} />
                                    <p>
                                        {s.desc}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>

                    <div className={styles.studying}>
                        <FaBook className={styles.studyingIcon} />
                        next.js | express | python | mysql
                         <span className={styles.tooltip}>Estudando atualmente</span>
                    </div>

                </div>

                <div className={styles.educationCard}>
                    <h2 className='subtitle'>Formação</h2>

                    <ul className={styles.list}>
                        {institutions.map((i) => (
                            <li key={i.id} className={styles.item}>
                                <span className={styles.text}>
                                    {i.desc}
                                </span>
                                <span className={styles.badge}>
                                    <MdDateRange />
                                    {i.date}
                                </span>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className={styles.courseCard}>
                    <h2 className='subtitle'>Cursos</h2>

                    <ul className={styles.list}>
                        {courses.map((c) => (
                            <li key={c.id} className={styles.item}>
                                <span className={styles.text}>
                                    {c.desc}
                                </span>
                                <span className={styles.badge}>
                                    <MdDateRange />
                                    {c.date}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}