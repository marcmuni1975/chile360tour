'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProfileHeader.module.css';

interface ProfileHeaderProps {
    name: string;
    username: string;
    description: string;
    imageUrl?: string; // Opcional, usaremos un placeholder si no hay imagen
    url?: string; // Nuevo prop opcional
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, username, description, imageUrl, url }) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.imageWrapper}>
                {imageUrl ? (
                    <img src={imageUrl} alt={name} className={styles.image} />
                ) : (
                    <div className={styles.placeholder}>
                        <span className={styles.initials}>{name.charAt(0)}</span>
                    </div>
                )}
                <div className={styles.glow} />
            </div>

            <h1 className={styles.name}>{name}</h1>

            {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.usernameLink}>
                    <p className={styles.username}>{username}</p>
                </a>
            ) : (
                <p className={styles.username}>{username}</p>
            )}

            <p className={styles.description}>{description}</p>
        </motion.div>
    );
};

export default ProfileHeader;
