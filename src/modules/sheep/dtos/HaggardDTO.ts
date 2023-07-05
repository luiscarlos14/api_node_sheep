export interface CreateHaggardDTO{
    sheepID: string;
    date: string;
    weight: number;
    price: number;
    soldAmount: number;
    profit: number;
}

export interface UpdateHaggardDTO{
    id: string;
    date: string;
    weight: number;
    price: number;
    soldAmount: number;
    profit: number;
}