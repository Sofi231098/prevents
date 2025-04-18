import ReactPaginate from "react-paginate";
import { EventList } from "../components/event-list/event-list";
import { useEventsQuery } from "../queries/events.query";
import styles from './paginate.module.css';
import { NumberParam, useQueryParam } from "use-query-params";
import { useCallback, useEffect } from "react";

const EventsPage = () => {
    const { data: events, isLoading, error, isSuccess } = useEventsQuery();
    const [currentPage, setCurrentPage] = useQueryParam('page', NumberParam)

    useEffect(() => {
        if (currentPage === undefined) {
            setCurrentPage(0, "replace");
        }
    }, [currentPage, setCurrentPage]);

    const handlePageClick = useCallback(({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    }, [setCurrentPage]);

    return (
        <>
            <EventList
                events={events?._embedded.events || []}
                isLoading={isLoading}
                isSuccess={isSuccess}
                error={error}
            />
            <ReactPaginate
                initialPage={currentPage ?? 0}
                className={styles.pagination}
                nextLinkClassName={styles.next}
                previousLinkClassName={styles.previous}
                pageLinkClassName={styles.page}
                activeLinkClassName={styles.activePage}
                disabledLinkClassName={styles.disabledPage}

                pageCount={123}
                onPageChange={handlePageClick}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                pageRangeDisplayed={5}
                renderOnZeroPageCount={null}
            />
        </>

    )
}

export default EventsPage;