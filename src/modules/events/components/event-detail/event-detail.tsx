import { SectionContainer } from "@/shared/components/section-container/section-container";
import styles from "./event-detail.module.css";
import { EventType } from "../../types/event.types";
import { FC } from "react";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";

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
          <p>{format(event.dates.start.dateTime, "dd/MM/yyyy")}</p>
          <h3>{event.name}</h3>
          <p>
            {event.pleaseNote}
          </p>
          <figure>
            <img
              src={event.seatmap.staticUrl}
              title={event.seatmap.id}
            />
          </figure>
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