import { XIcon } from "@/assets/Icons";
import { Error, InputValue } from "@/shared/components";
import { DebounceInput } from "@/shared/components/debounce-input/debounce-input";
import { useCallback, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import { EventList, EventListSkeleton } from "../components/event-list/event-list";
import { useEventsQuery } from "../queries/events.query";
import styles from './paginate.module.css';

const EventsPage = () => {
    const { data: events, isLoading, error, isSuccess } = useEventsQuery();

    const [searchTerm, setSearchTerm] = useQueryParam('search', StringParam);
    const [currentPage, setCurrentPage] = useQueryParam('page', NumberParam);

    const handleDebouncedChange = useCallback((value: InputValue) => {
        const newValue = String(value).trim();
        setSearchTerm(newValue === '' ? null : newValue);
    }, [setSearchTerm]);

    useEffect(() => {
        if (currentPage === undefined || currentPage === null) setCurrentPage(0);
    }, []);

    const handlePageClick = useCallback(({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    }, [setCurrentPage]);

    return (
        <>
            <DebounceInput
                type="search"
                placeholder='Buscar evento...'
                Icon={<XIcon />}
                value={searchTerm || ''}
                onDebouncedChange={handleDebouncedChange}
            />
            {
                (isLoading) ? <EventListSkeleton /> :
                    (error) ? <Error
                        title='Error al cargar los eventos'
                        subtitle="No se pudieron obtener los eventos. Por favor, inténtalo de nuevo más tarde."
                        showButton
                    /> :
                        (isSuccess && events) &&
                        <>
                            <EventList events={events?._embedded?.events || []} />
                            <ReactPaginate
                                initialPage={currentPage || 0}
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