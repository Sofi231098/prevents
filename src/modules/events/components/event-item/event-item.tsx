import { FC } from 'react';
import styles from './event-item.module.css';
import ImageDefault from '@/assets/images/default.webp';

interface EventItemProps {
    name: string;
    img: string;
}

export const EventItem: FC<EventItemProps> = ({ name, img }) => {

    return (
        <article className={styles.item}>
            <img
                className={styles.imgItem}
                width={300}
                src={img}
                alt={name}
                onError={($event) => {
                    $event.currentTarget.src = ImageDefault;
                }}
            />
            <p className={styles.itemName}>{name}</p>
        </article>
    )
}
