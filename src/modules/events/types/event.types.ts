export interface EventType {
    name: string;
    type: string;
    info?: string;
    description: string;
    id: string;
    url: string;
    images: Image[];
    dates: Dates;
    pleaseNote: string;
    seatmap: Seatmap;
}

export interface Dates {
    start: Start;
}

export interface Start {
    localTime: string;
    dateTime: Date;
    localDate: Date;
}

export interface Image {
    url: string;
}

export interface Seatmap {
    staticUrl: string;
    id: string;
}