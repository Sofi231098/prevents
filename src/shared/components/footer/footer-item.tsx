import { Github, LinkedIn } from '@/assets/Icons';
import { FC } from 'react';
import styles from './footer.module.css';

interface FooterItemProps {
    name: string;
    linkedin: string;
    github: string;
}

export const FooterItem: FC<FooterItemProps> = ({ name, github, linkedin }) => {
    return (
        <article className={styles.footerItem}>
            <div>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <Github />
                </a>
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <LinkedIn />
                </a>
            </div>
            <p>Made by {name}</p>
        </article >
    )
}
