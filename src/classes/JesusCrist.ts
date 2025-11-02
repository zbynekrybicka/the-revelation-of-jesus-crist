import WhatHaveYouSeen from "../interfaces/whatHaveYouSeen";
import WhoCanAcceptRevelation from "../interfaces/whoCanAcceptRevelation";
import WhoCanGiveRevelation from "../interfaces/whoCanGiveRevelation";
import WhoIsFirstBegottenOfTheDead from "../interfaces/whoIsFirstBegottenOfTheDead";
import WhoIsPrinceOfTheKingsOfTheEarth from "../interfaces/whoIsPrinceOfTheKingsOfTheEarth";
import WhoIsTheFaithfulWitness from "../interfaces/whoIsTheFaithfulWitness";
import WhoMadeUsKingsAndPriests from "../interfaces/whoMadeUsKingsAndPriests";
import WhoWashedUsFromOurSins from "../interfaces/whoWashedUsFromOurSins";
import Revelation from "./revelation";

export default class JesusCrist implements 
    WhoCanAcceptRevelation, 
    WhoCanGiveRevelation,
    WhoIsTheFaithfulWitness,
    WhoIsFirstBegottenOfTheDead,
    WhoIsPrinceOfTheKingsOfTheEarth,
    WhoWashedUsFromOurSins,
    WhoMadeUsKingsAndPriests,
    WhatHaveYouSeen {
    
    revelation?: Revelation


    /**
     * Rev 1:1
     * The Revelation of Jesus Christ, which God gave unto him
     * 
     * @param revelation Revelation
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


    /**
     * REV 1:6
     * to him be glory and dominion for ever and ever. Amen.
     */
    getGloryAndDominion(): void
    {

    }


    /**
     * REV 1:7
     * Behold, he cometh with clouds;
     */
    comeWithClouds(): void
    {

    }

}