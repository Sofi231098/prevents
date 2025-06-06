import { XIcon } from "@/assets/Icons";
import { Input } from "@/shared/components";
import { useCallback, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import { EventList, EventListSkeleton } from "../components/event-list/event-list";
import { useEventsQuery } from "../queries/events.query";
import styles from './paginate.module.css';

const EventsPage = () => {
    const { data: events, isLoading, error, isSuccess } = useEventsQuery();

    const [searchTerm, setSearchTerm] = useQueryParam('search', StringParam);
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
                placeholder='Buscar evento...'
                Icon={<XIcon />}
                value={searchTerm || ''}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                                pageCount={events.page?.totalPages < 20 ? events.page.totalPages : 20}
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