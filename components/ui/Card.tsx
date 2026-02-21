import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'glass' | 'solid' | 'interactive';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
    className = '',
    variant = 'glass',
    padding = 'lg',
    children,
    ...props
}, ref) => {
    const compClass = [
        styles.card,
        styles[`variant-${variant}`],
        styles[`padding-${padding}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={compClass} {...props}>
            {children}
        </div>
    );
});

Card.displayName = 'Card';
