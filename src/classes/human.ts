import KingAndPriest from "../interfaces/kingAndPriest";
import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod";
import WhoSinned from "../interfaces/whoSinned";
import JesusCrist from "./JesusCrist";

export default class Human implements WhoSinned, KingAndPriest, WhoHearWordOfGod {

    sinner: boolean = true

    washedFromSinBy(jesusCrist: JesusCrist): void 
    {
        this.sinner = false
    }

    amAlreadySinner(): boolean 
    {
        return this.sinner
    }

    isBlessed(): boolean {
        throw new Error("Method not implemented.");
    }
    keepProphecy(): boolean {
        throw new Error("Method not implemented.");
    }
    getBlessed(): void {
        throw new Error("Method not implemented.");
    }

}