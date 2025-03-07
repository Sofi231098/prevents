import { DarkMode, LightMode, User } from '@/assets/Icons';
import { useTheme } from '@/shared/hooks/useTheme';
import { Button } from '../button/button';
import styles from './header.module.css';

export const Header = () => {

    const { toggleTheme, theme } = useTheme();

    return (
        <header>
            <div className={styles.buttonsContainer}>
                <Button
                    size={'icon'}
                    onClick={() => { console.log('click') }}
                    Icon={<User />}
                />
                <Button
                    size={'icon'}
                    onClick={toggleTheme}
                    Icon={theme === "light" ? <DarkMode /> : <LightMode />}
                />
            </div>
            <div className={styles.titleContainer}>
                <figure>

                </figure>
                <div>
                    <h1 className={styles.title}>Prevents</h1>
                    <p>Entérate de los últimos eventos.</p>
                </div>
            </div>
        </header>
    )
}
