import React from 'react'
import styles from './textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    hasError?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
    className,
    ...props
}) => {
    return (
        <textarea
            className={`${styles.textarea} ${className}`}
            data-has-error={props.hasError ? 'true' : 'false'}
            {...props}
        />
    )
}
