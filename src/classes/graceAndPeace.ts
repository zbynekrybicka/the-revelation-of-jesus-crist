import WhoCanGiveGraceAndPeace from "../interfaces/whoCanGiveGraceAndPeace";

export default class GraceAndPeace
{
    m_from: Set<WhoCanGiveGraceAndPeace> = new Set


    /**
     * REV 1:4
     * Grace be unto you, and peace, from...
     * @param somebody WhoCanGiveGraceAndPeace
     */
    from(somebody: WhoCanGiveGraceAndPeace)
    {
        this.m_from.add(somebody)
    }


    /**
     * REV 1:4
     * Grace be unto you, and peace, from...
     * @param all 
     */
    fromAll(all: WhoCanGiveGraceAndPeace[])
    {
        for (const somebody of all) {
            this.from(somebody)
        }
    }
}