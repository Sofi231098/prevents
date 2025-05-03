import { useCallback, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { NumberParam, useQueryParam } from "use-query-params";
import { EventList, EventListSkeleton } from "../components/event-list/event-list";
import { useEventsQuery } from "../queries/events.query";
import styles from './paginate.module.css';
import { Input } from "@/shared/components";
import { XIcon } from "@/assets/Icons";

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
            <Input
                placeholder='Search...'
                Icon={<XIcon />}

            />
            {
                (isLoading) ? <EventListSkeleton /> :
                    (error) ? <p>Error: {error.message}</p> :
                        (isSuccess && events) &&
                        <>
                            <EventList events={events?._embedded.events || []} />
                            <ReactPaginate
                                initialPage={currentPage ?? 0}
                                className={styles.pagination}
                                nextLinkClassName={styles.next}
                                previousLinkClassName={styles.previous}
                                pageLinkClassName={styles.page}
                                activeLinkClassName={styles.activePage}
                                disabledLinkClassName={styles.disabledPage}
                                pageCount={20}
                                onPageChange={handlePageClick}
                                breakLabel="..."
                                nextLabel=">"
                                previousLabel="<"
                                pageRangeDisplayed={3}
                                renderOnZeroPageCount={null}
                            />
                        </>
            }
        </>

    )
}

export default EventsPage;