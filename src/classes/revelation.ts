import Spirit from "./spirit"
import WordOfGod from "./wordOfGod"

export default class Revelation extends WordOfGod
{
    m_from: Set<Spirit> = new Set


    /**
     * REV 1:4
     * Grace be unto you, and peace, from...
     * @param somebody Spirit
     */
    from(somebody: Spirit)
    {
        this.m_from.add(somebody)
    }


    /**
     * REV 1:4
     * Grace be unto you, and peace, from...
     * @param all 
     */
    fromAll(all: Spirit[])
    {
        for (const somebody of all) {
            this.from(somebody)
        }
    }

}