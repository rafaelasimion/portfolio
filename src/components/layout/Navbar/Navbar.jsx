import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {

    const [open, setOpen] = useState(false);
    
    return (
        <nav className={styles.navbar}>

            <div className={`${styles.hamburguer} ${open ? styles.active : ''}`}
            onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
                <li className={styles.link}><a href="#home">Início</a></li>
                <li className={styles.link}><a href="#about">Sobre</a></li>
                <li className={styles.link}><a href="#skills">Skills</a></li>
                <li className={styles.link}><a href="#projects">Projetos</a></li>
                <li className={styles.link}><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
}