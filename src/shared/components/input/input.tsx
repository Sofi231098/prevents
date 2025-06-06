import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    Icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    id,
    Icon,
    className,
    disabled,
    ...props
}) => {
    return (
        <div className={styles.container}>
            <input
                id={id}
                className={`${styles.input} ${className}`}
                disabled={disabled}
                {...props}
            />
            {/* {
                Icon &&
                <Button
                    Icon={Icon}
                    className={styles.icon}
                    variant='ghost'
                    size='icon'
                    disabled={disabled}
                />
            } */}
        </div>
    )
}