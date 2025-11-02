import EternalLife from "../interfaces/EternalLife";
import KingAndPriest from "../interfaces/kingAndPriest";
import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod";
import WhoSinned from "../interfaces/whoSinned";
import JesusChrist from "./JesusChrist";

export default class Human implements 
    WhoSinned, 
    KingAndPriest, 
    WhoHearWordOfGod, 
    EternalLife 
{

    sinner: boolean = true
    eternalLife: boolean = false
    blessed: boolean = false

    washedFromSinBy(jesusChrist: JesusChrist): void 
    {
        this.sinner = false
    }

    amAlreadySinner(): boolean 
    {
        return this.sinner
    }

    isBlessed(): boolean 
    {
        return this.blessed
    }

    keepProphecy(): void
    {
        this.blessed = true
    }
    
    getBlessed(): void {
        this.blessed = true
    }

    hasEternalLife(): boolean
    {
        return this.eternalLife
    }


}