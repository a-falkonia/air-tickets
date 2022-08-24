export interface Ticket {
    id: uuidv4,
    origin: string,
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    carrier: string,
    stops: number,
    price: number
}

export interface Currency {
    locale: string;
    label: string;
};

export interface FilterOption {
    key: number;
    name: string
}