import { sevenChurches } from "../enums/sevenChurchesInAsia";
import WhoCanAcceptRevelation from "../interfaces/whoCanAcceptRevelation";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import Angel from "./angel";
import ChurchInAsia from "./churchInAsia";
import JesusCrist from "./JesusCrist";
import John from "./john";
import Revelation from "./revelation";

/**
 * Genesis 1:1 In the beginning God created the heaven and the earth.
 * John 1:1 In the beginning was the Word, and the Word was with God, and the Word was God.
 */
export default class God implements WhoCanGiveRevelation {
    
    revelation?: Revelation


    /**
     * Rev 1:1
     * The Revelation of Jesus Christ, which God gave unto him
     * 
     * @param somebody WhoCanAcceptRevelation
     */
    giveRevelationTo(somebody: WhoCanAcceptRevelation)
    {
        if (this.revelation) {
            somebody.acceptRevelation(this.revelation)
        } else {
            throw "The revelation cannot be given because he doesn't have it."
        }
    }


    /**
     * I don't know when did God create Jesus Crist.
     * It has to be before the events of the Gospels and the Revelation.
     * 
     * @returns JesusCrist
     */
    createJesus(): JesusCrist
    {
        return new JesusCrist
    }


    /**
     * God created many many angels.
     * In this story I use only relevant entities.
     * 
     * @returns Angel
     */
    createAngel(): Angel
    {
        return new Angel
    }

    
    /**
     * We can speculate when did God created John.
     * However we can be sure It happened before the Revelation
     * @returns John
     */
    createJohn(): John
    {
        return new John
    }


    /**
     * 
     * @returns ChurchInAsia[]
     */
    createChurchesInAsia(): ChurchInAsia[]
    {
        const sevenChurchesInAsia: ChurchInAsia[] = []
        for (const church in sevenChurches) {
            sevenChurchesInAsia[church] = new ChurchInAsia(sevenChurches[church] as string)
        }
        return sevenChurchesInAsia
    }


    /**
     * Rev 1:1
     * The Revelation of Jesus Christ, which God gave unto him
     */
    writeRevelation(): void
    {
        this.revelation = new Revelation
    }


    /**
     * God says
     * @param whatSays string
     */
    says(whatSays: string): void
    {

    }
}