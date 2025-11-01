import WhoCanAcceptRevelation from "./whoCanAcceptRevelation";

/**
 * Revelation 1:1 The Revelation of Jesus Christ, which God gave unto him, 
 * to shew unto his servants things which must shortly come to pass; 
 * and he sent and signified it by his angel unto his servant John:
 * 
 * Entities who can give the Revelation (God, Jesus Crist, Angel)
 */
export default interface WhoCanGiveRevelation {
    
    giveRevelationTo(somebody: WhoCanAcceptRevelation): void
}