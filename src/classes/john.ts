import WhoCanAcceptGraceAndPeace from "../interfaces/whoCanAcceptGraceAndPeace";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod";
import WhoReadWordOfGod from "../interfaces/whoReadWordOfGod";
import GraceAndPeace from "./graceAndPeace";
import Revelation from "./revelation";
import TestimonyOfJesusCrist from "./testimonyOfJesusCrist";


export default class John implements WhoCanGiveRevelation, WhoReadWordOfGod {

    revelation?: Revelation
    m_isBlessed: boolean = false


    /**
     * Rev 1:1
     * and he sent and signified it by his angel unto his servant John:
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
            delete this.revelation
        }    
    }


    /**
     * REV 1:1
     * Has Revelation
     * 
     * @returns boolean
     */
    hasRevelation(): boolean {
        return !!this.revelation
    }


    /**
     * Rev 1:2
     * who bare record of the word of God, and of the testimony of Jesus Christ, and of all things that he saw. 
     */
    testify(): TestimonyOfJesusCrist
    {
        if (this.revelation) {
            return this.revelation
        } else {
            throw "The revelation cannot be testified because he doesn't have it."
        }
    }


    /**
     * Rev 1:3
     * Get Blessed
     */
    getBlessed(): void {
        this.m_isBlessed = true
    }


    /**
     * Rev 1:3
     * Is Blessed
     */
    isBlessed(): boolean
    {
        return this.m_isBlessed
    }


    /**
     * Rev 1:3
     * Read Word of God
     * @param whoHearWordOfGod WhoHearWordOfGod[]
     */
    readWordOfGod(whoHearWordOfGod: WhoHearWordOfGod[])
    {
        whoHearWordOfGod.forEach((oneWhoHearWordOfGod: WhoHearWordOfGod) => oneWhoHearWordOfGod.getBlessed())
    }


    /**
     * John to the seven churches which are in Asia: 
     * Grace be unto you, and peace,
     * @param graceAndPeace 
     * @param everybody 
     */
    sendGraceAndPeace(graceAndPeace: GraceAndPeace, somebody: WhoCanAcceptGraceAndPeace): void
    {
        somebody.acceptGraceAndPeace(graceAndPeace)
    }

}