import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import WhoSinned from "../interfaces/whoSinned";
import Revelation from "./revelation";

export default class JesusCrist implements WhoCanGiveRevelation 
{

    revelation?: Revelation


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
            delete this.revelation
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


}