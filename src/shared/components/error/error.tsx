import { useNavigate } from 'react-router';
import { Button } from '../button/button';
import styles from './error.module.css';

interface ErrorProps {
    title: string;
    subtitle: string;
    showButton?: boolean;
}

export const Error = ({ title, subtitle, showButton }: ErrorProps) => {

    const navigate = useNavigate();

    return (
        <div className={styles.error}>
            <h2>{title}.</h2>
            <p>{subtitle}</p>
            {showButton &&
                <Button className={styles.button}
                    onClick={() => navigate('/')}
                    variant="filled"
                    text='Volver al inicio'
                />
            }
        </div>
    )
}
