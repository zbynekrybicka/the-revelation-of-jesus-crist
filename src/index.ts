import Angel from "./classes/angel"
import ChurchInAsia from "./classes/churchInAsia"
import God from "./classes/god"
import GraceAndPeace from "./classes/graceAndPeace"
import JesusCrist from "./classes/JesusCrist"
import John from "./classes/john"
import SonOfMan from "./classes/sonOfMan"
import Spirit from "./classes/spirit"
import TestimonyOfJesusCrist from "./classes/testimonyOfJesusCrist"
import { Ephesus, Laodicea, Pergamos, Philadelphia, Sardis, Smyrna, Thyatira } from "./enums/sevenChurchesInAsia"
import AlphaAndOmegaTheBeginingAndTheEnding from "./interfaces/alphaAndOmegaTheBeginingAndTheEnding"
import HeWhichIsWhichWasAndWhichIsToCome from "./interfaces/heWhichIsWhichWasAndWhichIsToCome"
import TheFirstAndTheLast from "./interfaces/theFirstAndTheLast"
import WhatHaveYouSeen from "./interfaces/whatHaveYouSeen"
import WhoHearWordOfGod from "./interfaces/whoHearWordOfGod"
import WhoIsFirstBegottenOfTheDead from "./interfaces/whoIsFirstBegottenOfTheDead"
import WhoIsPrinceOfTheKingsOfTheEarth from "./interfaces/whoIsPrinceOfTheKingsOfTheEarth"
import WhoIsTheFaithfulWitness from "./interfaces/whoIsTheFaithfulWitness"
import WhoMadeUsKingsAndPriests from "./interfaces/whoMadeUsKingsAndPriests"
import WhoReadWordOfGod from "./interfaces/whoReadWordOfGod"
import WhoWashedUsFromOurSins from "./interfaces/whoWashedUsFromOurSins"

/**
 * Simple hack. God has't been created. 
 * However he is not implicitly in this application.
 */
const god: God = new God


/**
 * The Entities created before the fulfill of The Revelation
 */
const jesusCrist: JesusCrist = god.createJesus()
const angel: Angel = god.createAngel()
const john: John = god.createJohn()

const people: WhoHearWordOfGod[] = []
const nations: WhoHearWordOfGod[] = []
const languages: WhoHearWordOfGod[] = []
const kings: WhoHearWordOfGod[] = []

const churchesInAsia: ChurchInAsia[] = god.createChurchesInAsia()

const sevenSpirits: Spirit[] = god.createSevenSpirits()

const everyEye: ChurchInAsia[] = churchesInAsia
const earthTribes: ChurchInAsia[] = churchesInAsia
const sevenStars: ChurchInAsia[] = churchesInAsia

god.writeRevelation()
/**
 * Summary and conclusion of the entire book of Revelation
 * Revelation 1:1-8
 */


// REV 1:1
    // The Revelation of Jesus Christ, which God gave unto him,
        god.giveRevelationTo(jesusCrist) // to shew unto his servants things which must shortly come to pass;

    // and he sent and signified it by his angel
        jesusCrist.giveRevelationTo(angel)

    // unto his servant John:
        angel.giveRevelationTo(john)


// REV 1:2
    // who bare record of the word of God,
    // and of the testimony of Jesus Christ, and of all things that he saw.
        const testimony: TestimonyOfJesusCrist = john.testify()

// REV 1:3
    // Blessed is he that readeth,
        const whoReads: WhoReadWordOfGod = john
        whoReads.getBlessed()

    // and they that hear the words of this prophecy, 
        const whoHear: WhoHearWordOfGod[] = [...people, ...nations, ...languages, ...kings]

    // and keep those things which are written therein: 
        whoHear.forEach((oneWhoHear: WhoHearWordOfGod) => oneWhoHear.keepProphecy() && oneWhoHear.getBlessed()) // for the time is at hand.


// REV 1:4
    // John to the seven churches which are in Asia: 
    // Grace be unto you, and peace,
        const graceAndPeace: GraceAndPeace = new GraceAndPeace

    // from him which is, and which was, and which is to come; 
        const heWhichIsWhichWasAndWhichIsToCome: HeWhichIsWhichWasAndWhichIsToCome = god
        graceAndPeace.from(heWhichIsWhichWasAndWhichIsToCome)
    
    // and from the seven Spirits which are before his throne;
        graceAndPeace.fromAll(sevenSpirits)

// REV 1:5
    // and from Jesus Christ, 
        graceAndPeace.from(jesusCrist)

    // who is the faithful witness, 
        const theFaithfulWitness: WhoIsTheFaithfulWitness = jesusCrist
        graceAndPeace.from(theFaithfulWitness)

    // and the first begotten of the dead,
        const firstBegottenOfTheDead: WhoIsFirstBegottenOfTheDead = jesusCrist
        graceAndPeace.from(firstBegottenOfTheDead)

    // and the prince of the kings of the earth. 
        const princeOfTheKingsOfTheEarth: WhoIsPrinceOfTheKingsOfTheEarth = jesusCrist
        graceAndPeace.from(princeOfTheKingsOfTheEarth)

    // Unto him that loved us, and washed us from our sins in his own blood,
        const whoWashedUsFromOurSins: WhoWashedUsFromOurSins = jesusCrist
        graceAndPeace.from(whoWashedUsFromOurSins)

// REV 1:6
    // and hath made us kings and priests unto God and his Father;
        const whoMadeUsKingsAndPriests: WhoMadeUsKingsAndPriests = jesusCrist
        graceAndPeace.from(whoMadeUsKingsAndPriests)

    // to him be glory and dominion for ever and ever. Amen.
        jesusCrist.getGloryAndDominion()

        churchesInAsia.forEach((churchInAsia: ChurchInAsia) => john.sendGraceAndPeace(graceAndPeace, churchInAsia))

// REV 1:7
    // Behold, he cometh with clouds;
        jesusCrist.comeWithClouds()

    // and every eye shall see him, and they also which pierced him:
        everyEye.forEach((eye: ChurchInAsia) => eye.seeHim(jesusCrist))

    // and all kindreds of the earth shall wail because of him. Even so, Amen.
        earthTribes.forEach((earthTribe: ChurchInAsia) => earthTribe.beatFor(jesusCrist))

// REV 1:8
    // I am Alpha and Omega, the beginning and the ending,
        const alphaAndOmegaTheBeginingAndTheEnding: AlphaAndOmegaTheBeginingAndTheEnding = god
    // saith the Lord, which is, and which was, and which is to come, the Almighty.
        god === heWhichIsWhichWasAndWhichIsToCome

/**
 * The Election of John
 * Revelation 1:9-20
 */
// REV 1:9
  // I John, who also am your brother, and companion in tribulation, 
  // and in the kingdom and patience of Jesus Christ, was in the isle that is called Patmos, 
  // for the word of God, and for the testimony of Jesus Christ.
    john.exilOn(patmos)

// REV 1:10
  // I was in the Spirit on the Lord's day,
    john.getSpirit()
  // and heard behind me a great voice, as of a trumpet,

// REV 1:11
  // saying, I am Alpha and Omega, the first and the last: 
    jesusCrist.says("I am Alpha and Omega, the first and the last.")
  // and, What thou seest, write in a book,
    const whatHaveYouSeen: Set<WhatHaveYouSeen> = new Set<WhatHaveYouSeen>
  // and send it unto the seven churches which are in Asia; 
  // unto Ephesus, and unto Smyrna, and unto Pergamos, and unto Thyatira,
  // and unto Sardis, and unto Philadelphia, and unto Laodicea.
    jesusCrist.ordersToSend(whatHaveYouSeen, [
        churchesInAsia[Ephesus],
        churchesInAsia[Smyrna],
        churchesInAsia[Pergamos],
        churchesInAsia[Thyatira],
        churchesInAsia[Sardis],
        churchesInAsia[Philadelphia],
        churchesInAsia[Laodicea]
    ])

// REV 1:12
  // And I turned to see the voice that spake with me.
  // And being turned, I saw seven golden candlesticks;
    const sevenCandlesticks: ChurchInAsia[] = churchesInAsia
    sevenCandlesticks.forEach((candleStick: ChurchInAsia) => whatHaveYouSeen.add(candleStick))

// REV 1:13
  // and in the midst of the seven candlesticks one like unto the Son of man,
    const sonOfMan: SonOfMan = jesusCrist
    whatHaveYouSeen.add(sonOfMan)

  // clothed with a garment down to the foot, 
  // and girt about the paps with a golden girdle.

// REV 1:14
  // His head and his hairs were white like wool, as white as snow; 
  // and his eyes were as a flame of fire;

// REV 1:15
  // and his feet like unto fine brass, as if they burned in a furnace;
  // and his voice as the sound of many waters.

// REV 1:16
  // And he had in his right hand seven stars:
  // and out of his mouth went a sharp twoedged sword:
  // and his countenance was as the sun shineth in his strength.

// REV 1:17
  // And when I saw him, I fell at his feet as dead.
  // And he laid his right hand upon me,
  // saying unto me, Fear not; I am the first and the last:
    const theFirstAndTheLast: TheFirstAndTheLast = sonOfMan

// REV 1:18
  // I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen;
  // and have the keys of hell and of death.
    sonOfMan.hasKeys(keysOfHellAndDeath)

// REV 1:19
  // Write the things which thou hast seen,
  // and the things which are, 
  // and the things which shall be hereafter;

// REV 1:20
  // the mystery of the seven stars which thou sawest in my right hand, and the seven golden candlesticks. 
  // The seven stars are the angels of the seven churches: 
  // and the seven candlesticks which thou sawest are the seven churches.
    sevenStars === churchesInAsia
    sevenCandlesticks === churchesInAsia


/**
 * Revelation 2: The letters sent to seven churches
 */
// REV 2:1 
    // Unto the angel of the church of Ephesus write; 
    // These things saith he that holdeth the seven stars in his right hand, 
    // who walketh in the midst of the seven golden candlesticks.


// REV 2:2
  // I know thy works, and thy labor, and thy patience, 
  // and how thou canst not bear them which are evil: 
  // and thou hast tried them which say they are apostles, 
  // and are not, and hast found them liars: 


// REV 2:3
    // and hast borne, and hast patience, and for my name's sake hast labored, and hast not fainted. 

    
// REV 2:4    
    // Nevertheless I have somewhat against thee, 
    // because thou hast left thy first love. 


// REV 2:5
    // Remember therefore from whence thou art fallen, 
    // and repent, and do the first works; 
    // or else I will come unto thee quickly, 
    // and will remove thy candlestick out of his place, 
    // except thou repent. 


// REV 2:6
    // But this thou hast, that thou hatest the deeds of the Nicola´itans, 
    // which I also hate. 


// REV 2:7    
    // He that hath an ear, let him hear what the Spirit saith unto the churches; 
    // To him that overcometh will I give to eat of the tree of life, 
    // which is in the midst of the paradise of God.