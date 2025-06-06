import { DarkMode, LightMode, User } from '@/assets/Icons';
import { useTheme } from '@/shared/hooks/useTheme';
import { Button } from '../button/button';
import styles from './header.module.css';
import { Link, useNavigate } from 'react-router';

export const Header = () => {

    const { toggleTheme, theme } = useTheme();
    const navigate = useNavigate();

    return (
        <header>
            <div className={styles.buttonsContainer}>
                <Button
                    title='Ir a mi perfil'
                    size={'icon'}
                    onClick={() => navigate('/profile/my-info')}
                    Icon={<User />}
                />
                <Button
                    title='Cambiar tema'
                    size={'icon'}
                    onClick={toggleTheme}
                    Icon={theme === "light" ? <DarkMode /> : <LightMode />}
                />
            </div>
            <Link
                title='Ir a la página principal'
                to='/'
                className={styles.titleContainer}
            >
                <figure>

                </figure>
                <div>
                    <h1 className={styles.title}>Prevents</h1>
                    <p>Entérate de los últimos eventos.</p>
                </div>
            </Link>
        </header>
    )
}
