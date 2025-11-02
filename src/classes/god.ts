import { sevenChurches } from "../enums/sevenChurchesInAsia";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import WhoReadWordOfGod from "../interfaces/whoReadWordOfGod";
import AngelWhoGiveRevelation from "./angelWhoGiveRevelation";
import ChurchInAsia from "./churchInAsia";
import JesusCrist from "./JesusCrist";
import John from "./john";
import Revelation from "./revelation";
import Spirit from "./spirit";

/**
 * Genesis 1:1 In the beginning God created the heaven and the earth.
 * John 1:1 In the beginning was the Word, and the Word was with God, and the Word was God.
 */
export default class God implements 
    WhoCanGiveRevelation
{
    
    revelation?: Revelation

    jesusCrist?: JesusCrist
    john?: John


    /**
     * Rev 1:1
     * The Revelation of Jesus Christ, which God gave unto him
     */
    writeRevelation(): Revelation
    {
        this.revelation = new Revelation
        return this.revelation
    }


    /**
     * REV 1:1
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
     * 
     * Give Revelation To
     * @param somebody WhoCanGiveRevelation
     */
    giveRevelationTo(somebody: WhoCanGiveRevelation)
    {
        if (this.revelation) {
            somebody.acceptRevelation(this.revelation)
            delete this.revelation
        }
    }


    /**
     * REV 1:1
     * Has Revelation
     * @returns boolean
     */
    hasRevelation(): boolean
    {
        return !!this.revelation    
    }




    /**
     * I don't know when did God create Jesus Crist.
     * It has to be before the events of the Gospels and the Revelation.
     * 
     * @returns JesusCrist
     */
    createJesus(): JesusCrist
    {
        this.jesusCrist = new JesusCrist
        return this.jesusCrist
    }


    /**
     * God created many many angels.
     * In this story I use only relevant entities.
     * 
     * @returns AngelWhoGiveRevelation
     */
    createAngelWhoGiveRevelation(): AngelWhoGiveRevelation
    {
        return new AngelWhoGiveRevelation
    }

    
    /**
     * We can speculate when did God created John.
     * However we can be sure It happened before the Revelation
     * @returns John
     */
    createJohn(): John
    {
        this.john = new John
        return this.john
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
     * Rev 1:4
     * and from the seven Spirits which are before his throne
     * @returns Spirit[]
     */
    createSevenSpirits(): Spirit[]
    {
        return new Array(7).fill(null).map(() => new Spirit)
    }



    blessWhoReads(): WhoReadWordOfGod | undefined
    {
        this.john?.getBlessed()
        return this.john
    }

}