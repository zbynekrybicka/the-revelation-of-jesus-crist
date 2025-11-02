import WhatHaveYouSeen from "../interfaces/whatHaveYouSeen"
import WhoCanAcceptGraceAndPeace from "../interfaces/whoCanAcceptGraceAndPeace"
import GraceAndPeace from "./graceAndPeace"
import JesusCrist from "./JesusCrist"

export default class ChurchInAsia implements WhoCanAcceptGraceAndPeace, WhatHaveYouSeen
{
    title: string
    graceAndPeace?: GraceAndPeace


    constructor(title: string)
    {
        this.title = title
    }


    /**
     * REV 1:4
     * John to the seven churches which are in Asia: 
     * Grace be unto you, and peace,
     * @param graceAndPeace GraceAndPeace
     */
    acceptGraceAndPeace(graceAndPeace: GraceAndPeace): void
    {
        this.graceAndPeace = graceAndPeace
    }


    /**
     * REV 1:7
     * and every eye shall see him, and they also which pierced him:
     * @param he JesusCrist
     */
    seeHim(he: JesusCrist): void
    {

    }


    /**
     * REV 1:7
     * and all kindreds of the earth shall wail because of him. Even so, Amen
     * @param somebody JesusCrist
     */
    beatFor(somebody: JesusCrist): void
    {

    }

}