import styles from './Contact.module.css';

// icons
import { LiaLinkedinIn } from "react-icons/lia";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { PiFigmaLogoLight } from "react-icons/pi";

export default function Contact() {

    const contacts = [
        { id: 1, name: "LinkedIn", icon: LiaLinkedinIn, link: "https://www.linkedin.com/in/rafaela-simion-70539327b" },
        { id: 2, name: "GitHub", icon: TbBrandGithubFilled, link: "https://github.com/rafaelasimion" },
        { id: 3, name: "Email", icon: MdAlternateEmail, link: "mailto:rafaelasimion06@gmail.com" },
        { id: 4, name: "Figma", icon: PiFigmaLogoLight, link: "https://www.figma.com/@rafaelasimion" }
    ];

    return (
        <section id='contact' className={`section ${styles.contact}`}>
            <h1 className='title'>Contato</h1>
            <div className={styles.container}>
                <p>Tem alguma dúvida, sugestão ou oportunidade? Fique à vontade para entrar em contato comigo pelos links abaixo.</p>
                <ul className={styles.list}>
                    {contacts.map((c) => {
                        const Icon = c.icon;
                        return (
                            <li key={c.id} className={styles.item}>
                                <a href={c.link} className={styles.link}>
                                    <Icon className={styles.icon} />
                                    <span className={styles.text}>
                                        {c.name}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}