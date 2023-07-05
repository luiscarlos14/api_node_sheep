import {prisma} from "../../../../prisma/client";
import {CreateAffiliationDTO} from "../../dtos/AffiliationDTO";

import { Affiliation } from "@prisma/client";

export class CreateAffiliationUseCase{
    async execute({sheepID, motherID}: CreateAffiliationDTO):Promise<Affiliation>{

        const affiliation = await prisma.affiliation.create({
            data:{
                sheepID, motherID
            }
        });

        return affiliation;
    }
}