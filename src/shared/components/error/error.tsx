import { Button } from '../button/button';
import styles from './error.module.css';

export const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <h2>Esta página no existe.</h2>
            <p>Lo sentimos, pero la página que estás buscando no se encuentra disponible.</p>
            <Button className={styles.button}
                variant="filled"
                text='Volver al inicio'
            />
        </div>
    )
}
