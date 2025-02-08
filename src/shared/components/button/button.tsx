import styles from './button.module.css';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const button = cva(styles.base, {
    variants: {
        variant: {
            default: styles.default,
            ghost: styles.ghost
        },
        size: {
            default: styles.sizeDefault,
            small: styles.sizeSmall,
            large: styles.sizeLarge,
            icon: styles.sizeIcon
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    text: string;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    className,
    variant,
    size,
    ...props
}) => {
    return (
        <button
            className={button({ variant, size, className })}
            {...props}
        >
            {text}
        </button>
    )
}
