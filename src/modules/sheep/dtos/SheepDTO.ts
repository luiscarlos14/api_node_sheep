export interface CreateSheepDTO {
    identifier: number;
    name: string;
    userID: string;
    race: string;
    female: boolean;
    birth: string;
    alive: boolean;
}

export interface UpdateSheepDTO {
    id: string;
    identifier: number;
    name: string;
    userID: string;
    race: string;
    female: boolean;
    birth: string;
    alive: boolean;
}


