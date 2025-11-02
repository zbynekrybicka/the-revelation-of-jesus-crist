import AngelWhoGiveRevelation from "../classes/angelWhoGiveRevelation"
import God from "../classes/god"
import JesusCrist from "../classes/JesusCrist"
import John from "../classes/john"
import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod"

export const god = new God
export const jesusCrist: JesusCrist = god.createJesus()
export const angelWhoGiveRevelation: AngelWhoGiveRevelation = god.createAngelWhoGiveRevelation()
export const john: John = god.createJohn()

export const revelation = god.writeRevelation()

export const whoHearWordOfGod: WhoHearWordOfGod[] = []