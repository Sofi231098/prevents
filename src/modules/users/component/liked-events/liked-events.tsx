import { EventList } from '@/modules/events/components/event-list/event-list';
import { useLikeEventStore } from '../../store/like-event-store';
import styles from './liked-events.module.css';

export const LikedEvents = () => {

    const { likedEvents } = useLikeEventStore();

    return (
        likedEvents.length > 0 ?
            <EventList
                events={likedEvents}
            />
            :
            <div className={styles.empty}>
                <h2>¡Aún no tienes eventos favoritos!</h2>
                <p>Explora nuestros eventos y marca tus favoritos.</p>
            </div>
    )
}
