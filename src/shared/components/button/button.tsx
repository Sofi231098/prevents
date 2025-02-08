import styles from './button.module.css';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Loader } from '@/assets/Icons';

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
    Icon?: React.ReactNode;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    Icon,
    loading,
    className,
    variant,
    size,
    disabled,
    ...props
}) => {
    return (
        <button
            className={button({ variant, size, className })}
            disabled={disabled || loading}
            {...props}
            data-loading={loading}
        >
            {Icon &&
                loading ?
                <Loader />
                :
                Icon
            }
            {text}
        </button>
    )
}
