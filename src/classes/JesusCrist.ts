import WhoCanAcceptRevelation from "../interfaces/whoCanAcceptRevelation";
import Revelation from "./revelation";

export default class JesusCrist implements WhoCanAcceptRevelation {
    
    revelation?: Revelation

    acceptRevelation(revelation: Revelation): void {
        this.revelation = revelation
    }

}