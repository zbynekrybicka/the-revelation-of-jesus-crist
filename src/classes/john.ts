import WhoCanAcceptGraceAndPeace from "../interfaces/whoCanAcceptGraceAndPeace";
import WhoCanAcceptRevelation from "../interfaces/whoCanAcceptRevelation";
import WhoReadWordOfGod from "../interfaces/whoReadWordOfGod";
import GraceAndPeace from "./graceAndPeace";
import Revelation from "./revelation";


export default class John implements WhoCanAcceptRevelation, WhoReadWordOfGod {

    revelation?: Revelation


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
     * Rev 1:2
     * who bare record of the word of God, and of the testimony of Jesus Christ, and of all things that he saw. 
     */
    testify(): Revelation
    {
        if (this.revelation) {
            return this.revelation
        } else {
            throw "The revelation cannot be testified because he doesn't have it."
        }
    }


    /**
     * Rev 1:3
     * Blessed is he that readeth
     */
    getBlessed(): void 
    {
        throw new Error("Method not implemented.");
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