import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: string;
    price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, price }) => {
    return (
        <div className={`glass-panel ${styles.card}`}>
            <div className={styles.header}>
                <div className={styles.icon}>{icon || '🚀'}</div>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.description}>{description}</p>
            {price && <div className={styles.price}>{price}</div>}
        </div>
    );
};

export default ServiceCard;
