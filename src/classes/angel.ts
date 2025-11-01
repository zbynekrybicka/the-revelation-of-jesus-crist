import WhoCanAcceptRevelation from "../interfaces/whoCanAcceptRevelation";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import Revelation from "./revelation";

export default class Angel implements WhoCanAcceptRevelation, WhoCanGiveRevelation
{

    revelation?: Revelation;


    /**
     * Rev 1:1
     * and he sent and signified it by his angel unto his servant John
     * 
     * @param revelation 
     */
    acceptRevelation(revelation: Revelation): void
    {
        this.revelation = revelation
    }


    /**
     * Rev 1:1
     * and he sent and signified it by his angel unto his servant John
     * 
     * @param somebody WhoCanAcceptRevelation
     */
    giveRevelationTo(somebody: WhoCanAcceptRevelation): void 
    {
        if (this.revelation) {
            somebody.acceptRevelation(this.revelation)
        } else {
            throw "The revelation cannot be given because he doesn't have it."
        }
    }

}