import styles from './event-list.module.css';
import { FC } from 'react';
import { EventType } from '../../types/event.types';
import { EventItem } from '../event-item/event-item';

interface EventListProps {
    events: EventType[];
}

export const EventList: FC<EventListProps> = ({ events }) => {

    const renderEventItems = () => {
        return events.map((evento, index) => (
            <EventItem key={index} {...evento} />
        ))
    }

    return (
        <section className={styles.container}>
            <h2>EVENTOS</h2>
            <div className={styles.list}>
                {renderEventItems()}
        </div>
        </section>
    )
}
