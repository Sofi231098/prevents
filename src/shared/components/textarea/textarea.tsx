import React from 'react'
import styles from './textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    hasError?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
    className,
    hasError,
    ...props
}) => {
    return (
        <textarea
            className={`${styles.textarea} ${className}`}
            data-has-error={hasError ? 'true' : 'false'}
            {...props}
        />
    )
}
