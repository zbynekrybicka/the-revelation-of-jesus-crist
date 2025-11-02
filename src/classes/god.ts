import { sevenChurches } from "../enums/sevenChurchesInAsia";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import WhoReadWordOfGod from "../interfaces/whoReadWordOfGod";
import AngelWhoGiveRevelation from "./angelWhoGiveRevelation";
import ChurchInAsia from "./churchInAsia";
import Human from "./human";
import JesusChrist from "./JesusChrist";
import John from "./john";
import Place from "./place";
import Revelation from "./revelation";
import Spirit from "./spirit";
import BodySpirit from "./bodySpirit";
import WordOfTheCourt from "./wordOfTheCourt";
import AngelOfChurch from "./angelOfChurch";

/**
 * Genesis 1:1 In the beginning God created the heaven and the earth.
 * John 1:1 In the beginning was the Word, and the Word was with God, and the Word was God.
 */
export default class God extends Spirit implements 
    WhoCanGiveRevelation
{
    
    revelation: Revelation | undefined

    jesusChrist?: JesusChrist
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


    createWordOfTheCourt(): WordOfTheCourt
    {
        return new WordOfTheCourt
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
            this.revelation = undefined
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
     * I don't know when did God create Jesus Christ.
     * It has to be before the events of the Gospels and the Revelation.
     * 
     * @returns JesusChrist
     */
    createJesus(): JesusChrist
    {
        this.jesusChrist = new JesusChrist
        return this.jesusChrist
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
        const patmos = this.createPlace("Patmos")
        this.john = new John(patmos)
        return this.john
    }


    createBodySpirit(human: Human): BodySpirit
    {
        return new BodySpirit(human)
    }


    createAngelOfChurch(): AngelOfChurch
    {
        return new AngelOfChurch
    }


    /**
     * 
     * @returns ChurchInAsia[]
     */
    createChurchesInAsia(spirit: Spirit): ChurchInAsia[]
    {
        const sevenChurchesInAsia: ChurchInAsia[] = []
        for (const church in sevenChurches) {
            const angel = this.createAngelOfChurch()
            sevenChurchesInAsia[church] = new ChurchInAsia(sevenChurches[church] as string, angel, spirit)
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


    createWeAll(): Human[]
    {
        return []
    }


    createPlace(title: string): Place
    {
        return new Place(title)
    }


    blessWhoReads(): WhoReadWordOfGod | undefined
    {
        this.john?.getBlessed()
        return this.john
    }

}