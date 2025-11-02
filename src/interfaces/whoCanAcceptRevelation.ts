import Revelation from "../classes/revelation";

/**
 * Revelation 1:1 The Revelation of Jesus Christ, which God gave unto him, 
 * to shew unto his servants things which must shortly come to pass; 
 * and he sent and signified it by his angel unto his servant John:
 * 
 * Entities who can accept the Revelation (Jesus Christ, Angel, John)
 * Note: Of course, God can accept the anything but God doesn't accept
 * the Revelation from anybody.
 */
export default interface WhoCanAcceptRevelation {

    acceptRevelation(revelation: Revelation): void
}