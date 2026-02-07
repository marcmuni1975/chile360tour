'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './SocialLink.module.css';

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    delay?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, delay = 0 }) => {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
            >
                <div className={styles.iconWrapper}>{icon}</div>
                <span className={styles.label}>{label}</span>
                <div className={styles.arrow}>→</div>
            </motion.div>
        </Link>
    );
};

export default SocialLink;
