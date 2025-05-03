import { SectionContainer } from "@/shared/components/section-container/section-container";
import { FC } from "react";
import { EventType } from "../../types/event.types";
import { EventItem } from "../event-item/event-item";
import styles from "./event-list.module.css";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface EventListProps {
  events: EventType[];
}

export const EventList: FC<EventListProps> = ({ events }) => {

  const renderEventItems = () => {
    return events.map((evento, index) => <EventItem key={index} event={evento} />);
  };

  return (
    <SectionContainer title="EVENTOS">
      {
        events.length > 0 ?
          (<div className={styles.list}>{renderEventItems()}</div>) :
          (<p>No hay eventos disponibles</p>)
      }
    </SectionContainer>
  );
};

export const EventListSkeleton = () => {
  return (
    <SectionContainer title="EVENTOS">
      <div className={styles.list}>
        {
          Array.from({ length: 20 }, (_, index) => (
            <div
              key={index}
              style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}
            >
              <Skeleton height={140} borderRadius={10} />
              <div>
                <Skeleton count={2} />
              </div>
            </div>
          ))
        }
      </div>
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '1.2rem' }}>
        {
          Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} width={36} height={36} />
          ))
        }
      </div>
    </SectionContainer>
  )
}
