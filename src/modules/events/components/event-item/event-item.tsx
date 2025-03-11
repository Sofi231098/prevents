import { FC } from 'react';
import styles from './event-item.module.css';
import ImageDefault from '@/assets/images/default.webp';
import { Link } from 'react-router';

interface EventItemProps {
    id: number;
    name: string;
    img: string;
}

export const EventItem: FC<EventItemProps> = ({ id, name, img }) => {

    return (
        <Link to={`detail/${id}`} className={styles.link}>
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
        </Link>
    )
}
