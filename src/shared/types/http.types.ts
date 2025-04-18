export interface PaginatedResponse {
    pagination: PaginationInfo;
}

export interface PaginationInfo {
    size: number;
    totalElements: number;
    totalPages: number;
    currentPage: number;
}