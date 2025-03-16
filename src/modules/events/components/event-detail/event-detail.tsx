import { SectionContainer } from "@/shared/components/section-container/section-container";
import styles from "./event-detail.module.css";

export const EventDetail = () => {
  return (
    <>
      <section className={styles.photoContainer}>
        <img
          src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-06/Real%20Madrid%20Barcelona%20crest%20logo%20badge%20El%20Clasico%20062322.jpg?itok=Q09me5cc"
          title="foto del evento"
        />
      </section>
      <SectionContainer title="DESCRIPCIÓN">
        <div className={styles.description}>
          <p>25 de enero del 2025</p>
          <h3>Barcelona vs Real Madrid</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            fugiat voluptatem placeat, sequi ab numquam ullam id eum unde,
            ratione repellendus eos perferendis? Voluptas minima corrupti
            voluptatem assumenda a omnis!
          </p>
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIlHtpCY9bjsa7kRLvjVBFxlD8fwAU2pC_w&s"
              title="sector"
            />
          </figure>
        </div>
      </SectionContainer>
    </>
  );
};
