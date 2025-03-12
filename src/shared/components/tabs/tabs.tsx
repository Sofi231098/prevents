import styles from './tabs.module.css';
import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router';

interface TabProps {
    tabs: {
        label: string;
        path: string;
    }[];
}

export const Tabs: FC<TabProps> = ({ tabs }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const renderTabs = () => {
        return tabs.map((tab, index) => (
            <button
                key={index}
                className={`${styles.tab} ${location.pathname === tab.path ? styles.active : ''}`}
                onClick={() => navigate(tab.path)}
            >
                {tab.label}
            </button>
        ));
    };

    return (
        <div>
            <div className={styles.tabsContainer}>
                {renderTabs()}
            </div>
        </div>
    );
};
