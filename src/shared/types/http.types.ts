export interface PaginatedResponse {
    page: PaginationInfo;
}

export interface PaginationInfo {
    size: number;
    totalElements: number;
    totalPages: number;
    currentPage: number;
}