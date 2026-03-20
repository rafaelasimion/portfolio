import styles from './Hero.module.css';

// images
import hero from '../../../assets/img/hero.png';

export default function Hero() {

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.text}>
                <p>
                    Oi! Sou a Rafaela, uma
                </p>
                <p className={styles.tourney}>
                    DESENVOLVEDORA <br></br>
                    <span className={styles.highlight}>FRONT</span> END
                </p>
            </div>
            <div className={styles.image}>
                <img src={hero} />
            </div>
        </section>
    );
}