import WhatHaveYouSeen from "../interfaces/whatHaveYouSeen"
import WhoCanAcceptGraceAndPeace from "../interfaces/whoCanAcceptGraceAndPeace"
import Angel from "./angel"
import JesusChrist from "./JesusChrist"
import Revelation from "./revelation"
import Satan from "./satan"
import Spirit from "./spirit"

export default class ChurchInAsia implements WhoCanAcceptGraceAndPeace, WhatHaveYouSeen
{
    title: string
    graceAndPeace?: Revelation
    spirit: Spirit
    angel: Angel


    constructor(title: string, angel: Angel, spirit: Spirit)
    {
        this.title = title
        this.angel = angel
        this.spirit = spirit
    }


    /**
     * REV 1:4
     * John to the seven churches which are in Asia: 
     * Grace be unto you, and peace,
     * @param graceAndPeace GraceAndPeace
     */
    acceptGraceAndPeace(graceAndPeace: Revelation): void
    {
        graceAndPeace
    }


    hasLetter(): boolean
    {
        return !!this.graceAndPeace
    }


    /**
     * REV 1:7
     * and every eye shall see him, and they also which pierced him:
     * @param he JesusChrist
     */
    seeHim(he: JesusChrist): void
    {

    }


    /**
     * REV 1:7
     * and all kindreds of the earth shall wail because of him. Even so, Amen
     * @param somebody JesusChrist
     */
    beatFor(somebody: JesusChrist): void
    {

    }


    getSpirit(): Spirit
    {
        return this.spirit
    }


    pierceSpirit(): void
    {
        this.spirit = new Satan
    }


    getAngel(): Angel
    {
        return this.angel
    }

}