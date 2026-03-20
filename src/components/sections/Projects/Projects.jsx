import styles from './Projects.module.css';

// icons
import { MdOutlineOpenInNew } from "react-icons/md";

// img
import clinicaVet from '../../../assets/img/projects/clinica-veterinaria.png';
import siteAcademico from '../../../assets/img/projects/site-academico.png';
import cadAlunos from '../../../assets/img/projects/cadastro-alunos.png';
import todoList from '../../../assets/img/projects/todo-list.png';

export default function Projects() {

    const projects = [
        { id: 1, img: clinicaVet, title:"Clínica Veterinária", desc: "Desenvolvimento de protótipo navegável no Figma para sistema de Clínica Veterinária, focado em usabilidade e experiência do usuário.", link: "https://www.figma.com/pt-br/comunidade/file/1511358916255400705/clinica-veterinaria" },
        { id: 2, img: siteAcademico, title: "Site Acadêmico", desc: "Desenvolvido como parte das atividades do Clube Juvenil e do curso técnico em Informática para Web (Ensino Médio Integrado).", link: "https://github.com/rafaelasimion/EEDMCL" },
        { id: 3, img: cadAlunos, title: "Cadastro de Alunos", desc: "Desenvolvido como parte da disciplina de Estrutura de Dados, com o objetivo de aplicar conceitos de ordenação, filtros e interação com o DOM.", link: "https://github.com/rafaelasimion/TrabalhoED" },
        { id: 4, img: todoList, title: "To-Do List", desc: "Projeto de uma aplicação To-Do List desenvolvida em React como parte de estudos e prática da biblioteca.", link: "https://github.com/rafaelasimion/todo-list-react" },
    ];

    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <h1 className="title">Projetos</h1>

            <div className={styles.container}>

                {projects.map((p) => (
                    <div key={p.id} className={styles.card}>
                        <img src={p.img} className={styles.image} />
                        <div className={styles.text}>
                            <h2 className='subtitle'>{p.title}</h2>
                            <p>{p.desc}</p>
                            <a className={styles.btn} href={p.link}>
                                Ver Projeto
                                <MdOutlineOpenInNew />
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}