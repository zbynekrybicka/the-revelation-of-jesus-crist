import Angel from "./classes/angel"
import ChurchInAsia from "./classes/churchInAsia"
import God from "./classes/god"
import GraceAndPeace from "./classes/graceAndPeace"
import JesusCrist from "./classes/JesusCrist"
import John from "./classes/john"
import Spirit from "./classes/spirit"
import TestimonyOfJesusCrist from "./classes/testimonyOfJesusCrist"
import HeWhichIsWhichWasAndWhichIsToCome from "./interfaces/heWhichIsWhichWasAndWhichIsToCome"
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

const sevenSpirits: Spirit[] = new Array(7).fill(null).map(() => new Spirit)

const everyEye: ChurchInAsia[] = churchesInAsia
const earthTribes: ChurchInAsia[] = churchesInAsia

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
        god.says("I am Alpha and Omega, the begining and the ending.")
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

// REV 1:10
  // I was in the Spirit on the Lord's day,
  // and heard behind me a great voice, as of a trumpet,

// REV 1:11
  // saying, I am Alpha and Omega, the first and the last: 
  // and, What thou seest, write in a book,
  // and send it unto the seven churches which are in Asia; 
  // unto Ephesus, and unto Smyrna, and unto Pergamos, and unto Thyatira,
  // and unto Sardis, and unto Philadelphia, and unto Laodicea.

// REV 1:12
  // And I turned to see the voice that spake with me.
  // And being turned, I saw seven golden candlesticks;

// REV 1:13
  // and in the midst of the seven candlesticks one like unto the Son of man,
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

// REV 1:18
  // I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen;
  // and have the keys of hell and of death.

// REV 1:19
  // Write the things which thou hast seen,
  // and the things which are, 
  // and the things which shall be hereafter;

// REV 1:20
  // the mystery of the seven stars which thou sawest in my right hand, and the seven golden candlesticks. 
  // The seven stars are the angels of the seven churches: 
  // and the seven candlesticks which thou sawest are the seven churches.