import styles from "./event-list.module.css";
import { FC } from "react";
import { EventType } from "../../types/event.types";
import { EventItem } from "../event-item/event-item";
import { SectionContainer } from "@/shared/components/section-container/section-container";

interface EventListProps {
  events: EventType[];
}

export const EventList: FC<EventListProps> = ({ events }) => {
  const renderEventItems = () => {
    return events.map((evento, index) => <EventItem key={index} {...evento} />);
  };

  return (
    <SectionContainer title="EVENTOS">
      <div className={styles.list}>{renderEventItems()}</div>
    </SectionContainer>
  );
};
