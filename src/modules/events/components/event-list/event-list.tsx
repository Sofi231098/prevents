import { SectionContainer } from "@/shared/components/section-container/section-container";
import { FC } from "react";
import { EventType } from "../../types/event.types";
import { EventItem } from "../event-item/event-item";
import styles from "./event-list.module.css";

interface EventListProps {
  events: EventType[];
  isLoading?: boolean;
  isSuccess?: boolean;
  error: Error | null;
}

export const EventList: FC<EventListProps> = ({ events, isLoading, isSuccess, error }) => {

  const renderEventItems = () => {
    return events.map((evento, index) => <EventItem key={index} event={evento} />);
  };

  return (
    <SectionContainer title="EVENTOS">
      {
        isLoading ? (<p>Cargando</p>) :
          error ? (<p>{error.message}</p>) :
            isSuccess && events.length > 0 ?
              (<div className={styles.list}>{renderEventItems()}</div>) :
              (<p>No hay eventos disponibles</p>)
      }
    </SectionContainer>
  );
};
