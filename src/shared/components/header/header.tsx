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
                    size={'icon'}
                    onClick={() => navigate('/profile/my-info')}
                    Icon={<User />}
                />
                <Button
                    size={'icon'}
                    onClick={toggleTheme}
                    Icon={theme === "light" ? <DarkMode /> : <LightMode />}
                />
            </div>
            <Link to='/' className={styles.titleContainer}>
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
