import ImageDefault from '@/assets/images/default.webp';
import { SectionContainer } from "@/shared/components/section-container/section-container";
import { format } from "date-fns";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { EventType } from "../../types/event.types";
import styles from "./event-detail.module.css";


interface EventDetailProps {
  event: EventType;
}

export const EventDetail: FC<EventDetailProps> = ({ event }) => {
  return (
    <>
      <section className={styles.photoContainer}>
        <img
          src={event.images[0].url}
          title="foto del evento"
        />
      </section>
      <SectionContainer title="DESCRIPCIÓN">
        <div className={styles.description}>
          {
            event.dates.start.localDate &&
            <p>{format(event.dates.start.localDate, "dd/MM/yyyy")}</p>
          }
          <h3>{event.name}</h3>
          <p>
            {event?.info}
          </p>
          <p>
            {event?.pleaseNote}
          </p>
          {
            event?.seatmap?.staticUrl &&
            <figure>
              <img
                src={event?.seatmap?.staticUrl}
                title={event?.seatmap?.id}
                onError={($event) => {
                  $event.currentTarget.src = ImageDefault;
                }}
              />
            </figure>
          }
        </div>
      </SectionContainer>
    </>
  );
};

export const EventDetailSkeleton = () => {
  return (
    <>
      <Skeleton height={350} borderRadius={16} />
      <Skeleton height={400} borderRadius={16} style={{ marginTop: "1rem" }} />
    </>
  )
}