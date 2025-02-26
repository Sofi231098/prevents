import styles from './event-item.module.css';

export const EventItem = () => {
    return (
        <article className={styles.item}>
            <img 
            className={styles.imgItem} 
            width={300}
            src="https://www.cnet.com/a/img/resize/6019f01d3b92576edc0a52712a047db8cb78331d/hub/2014/10/27/40194e6e-2544-419e-a340-f7c17b2e83c5/html5-wow-image-w3c.jpg?auto=webp&fit=crop&height=900&width=1200" alt=""/>
            <p className={styles.itemName}>Nombre del evento bien largo para probar</p>
        </article>
    )
}
