export interface CreateVaccinesDTO{
    userID: string;
    sheepID: string;
    name: string;
    indications: string;
    dosage: number;
    date: string;
}

export interface UpdateVaccinesDTO{
    id: string;
    name: string;
    indications: string;
    dosage: number;
    date: string;
}