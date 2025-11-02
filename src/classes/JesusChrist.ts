import EternalLife from "../interfaces/EternalLife";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import WhoSinned from "../interfaces/whoSinned";
import Revelation from "./revelation";
import Spirit from "./spirit";

export default class JesusChrist extends Spirit implements 
    WhoCanGiveRevelation, 
    EternalLife
{

    revelation: Revelation | undefined
    eternalLife: boolean = false
    spiritEntities: any[] = []


    /**
     * Rev 1:1
     * Accept Revelation
     * 
     * @param revelation Revelation
     */
    acceptRevelation(revelation: Revelation): void
    {
        this.revelation = revelation
    }


    /**
     * REV 1:1
     * Give Revelation To
     * 
     * @param somebody WhoCanGiveRevelation
     */
    giveRevelationTo(somebody: WhoCanGiveRevelation): void 
    {
        if (this.revelation) {
            somebody.acceptRevelation(this.revelation)
            this.revelation = undefined
        }
    }


    /**
     * REV 1:1
     * Has Revelation
     */
    hasRevelation(): boolean {
        return !!this.revelation
    }
    

    washFromSins(whoAll: WhoSinned[])
    {
        whoAll.forEach((who: WhoSinned) => who.washedFromSinBy(this))
    }


    gloryAndDominitionToHim(): void
    {
        this.eternalLife = true
    }


    hasEternalLife(): boolean 
    {
        return this.eternalLife
    }


    giveSpiritEntities(entities: any[]): void
    {
        this.spiritEntities.push(...entities)
    }


    hasSpiritEntity(what: any): boolean
    {
        return this.spiritEntities.includes(what)
    }


}