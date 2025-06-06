import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    Icon?: React.ReactNode;
    hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({
    id,
    Icon,
    className,
    disabled,
    hasError,
    ...props
}) => {
    return (
        <div className={styles.container}>
            <input
                id={id}
                className={`${styles.input} ${className}`}
                disabled={disabled}
                data-has-error={hasError ? 'true' : 'false'}
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