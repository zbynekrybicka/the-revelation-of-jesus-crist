import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import Angel from "./angel";
import Revelation from "./revelation";

export default class AngelWhoGiveRevelation extends Angel implements WhoCanGiveRevelation
{

    revelation: Revelation | undefined;


    /**
     * Rev 1:1
     * Accept Revelation
     * 
     * @param revelation 
     */
    acceptRevelation(revelation: Revelation): void
    {
        this.revelation = revelation
    }


    /**
     * Rev 1:1
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
     * Rev 1:1
     * Has Revelation
     * 
     * @returns boolean
     */
    hasRevelation(): boolean 
    {
        return !!this.revelation
    }
    
}