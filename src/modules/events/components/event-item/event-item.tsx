import { Delete, Favorite } from '@/assets/Icons';
import ImageDefault from '@/assets/images/default.webp';
import { useLikeEventStore } from '@/modules/users/store/like-event-store';
import { Button } from '@/shared/components';
import { FC } from 'react';
import { Link } from 'react-router';
import { EventType } from '../../types/event.types';
import styles from './event-item.module.css';

interface EventItemProps {
    event: EventType;
}

export const EventItem: FC<EventItemProps> = ({ event }) => {

    const { id, name, images } = event;
    const { addLikedEvent, removeLikedEvent, isEventLiked } = useLikeEventStore();

    return (
        <Link to={`/detail/${id}`} className={styles.link}>
            {
                isEventLiked(id) ? (
                    <Button
                        Icon={<Delete />}
                        size="icon"
                        onClick={(e) => {
                            e.preventDefault();
                            removeLikedEvent(id);
                        }}
                        title='Desmarcar evento favorito'
                    >
                        Desmarcar
                    </Button>
                ) : (
                    <Button
                        Icon={<Favorite />}
                        size="icon"
                        onClick={(e) => {
                            e.preventDefault();
                            addLikedEvent(event);
                        }}
                        title='Marcar evento como favorito'
                    >
                        Marcar como favorito
                    </Button>
                )
            }
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
