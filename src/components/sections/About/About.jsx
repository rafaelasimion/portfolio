import styles from './About.module.css';

// img
import about from '../../../assets/img/about.png';

export default function About() {

    return (
        <section id="about" className={`section ${styles.about}`}>
            <img src={about} className={styles.image} />
            <span className={styles.text}>
                <h1 className="title">Sobre mim</h1>
                Sou Rafaela Simion, estudante de Análise e Desenvolvimento de Sistemas na FATEC Franca e apaixonada por desenvolvimento web.
                <br></br><br></br>
                Desde o ensino médio descobri meu interesse por tecnologia, principalmente pela criação de interfaces e experiências digitais. Hoje estudo e desenvolvo projetos utilizando <span className={styles.highlight}>HTML, CSS, JavaScript e React</span>.
                <br></br><br></br>
                Gosto de transformar ideias em interfaces funcionais, aprender novas tecnologias e evoluir constantemente como desenvolvedora front-end.
            </span>
        </section>
    );
}