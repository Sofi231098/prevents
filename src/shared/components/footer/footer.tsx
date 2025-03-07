import { FooterItem } from "./footer-item"
import styles from './footer.module.css'

const items = [
    {
        name: 'Maximiliano Carrillo',
        linkedin: 'https://www.linkedin.com/in/maximiliano-joaquin-carrillo/',
        github: 'https://github.com/MaxiCarrillo'
    },
    {
        name: 'Sofía Yáñez',
        linkedin: 'https://www.linkedin.com/in/sof%C3%ADa-y%C3%A1%C3%B1ez-54b7a12b7/',
        github: 'https://github.com/Sofi231098'
    }
]

export const Footer = () => {

    const renderItems = () => items.map((item, index) => <FooterItem key={index} {...item} />)

    return (
        <footer className={styles.footer}>
            {renderItems()}
        </footer>
    )
}
