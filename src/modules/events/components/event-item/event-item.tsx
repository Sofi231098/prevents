import { FC } from 'react';
import styles from './event-item.module.css';
import ImageDefault from '@/assets/images/default.webp';
import { Link } from 'react-router';
import { EventType } from '../../types/event.types';

interface EventItemProps {
    event: EventType;
}

export const EventItem: FC<EventItemProps> = ({ event }) => {

    const { id, name, images } = event;

    return (
        <Link to={`detail/${id}`} className={styles.link}>
            <article className={styles.item}>
                <img
                    className={styles.imgItem}
                    width={300}
                    src={images[0].url}
                    alt={name}
                    onError={($event) => {
                        $event.currentTarget.src = ImageDefault;
                    }}
                />
                <p className={styles.itemName}>{name}</p>
            </article>
        </Link>
    )
}
