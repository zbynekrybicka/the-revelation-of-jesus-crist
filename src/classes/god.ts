import WhoCanAcceptRevelation from "../interfaces/whoCanAcceptRevelation";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import JesusCrist from "./JesusCrist";
import Revelation from "./revelation";

/**
 * Genesis 1:1 In the beginning God created the heaven and the earth.
 * John 1:1 In the beginning was the Word, and the Word was with God, and the Word was God.
 */
export default class God implements WhoCanGiveRevelation {
    
    revelation?: Revelation

    public giveRevelationTo(somebody: WhoCanAcceptRevelation)
    {
        if (this.revelation) {
            somebody.acceptRevelation(this.revelation)
        } else {
            throw "The revelation cannot be given because he doesn't have it."
        }
    }


    public createJesus(): JesusCrist
    {
        return new JesusCrist
    }
}