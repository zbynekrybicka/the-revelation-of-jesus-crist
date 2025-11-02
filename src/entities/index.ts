import God from "../classes/god"
import WordOfGod from "../classes/wordOfGod"

export const god = new God
export const jesusChrist = god.createJesus()
export const angelWhoGiveRevelation = god.createAngelWhoGiveRevelation()
export const john = god.createJohn()
export const weAll = god.createWeAll()

export const revelation = god.writeRevelation()
export const wordOfGod: WordOfGod = new WordOfGod
export const wordOfTheCourt = god.createWordOfTheCourt()

export const whoReadsWordOfGod = john
export const whoHearWordOfGod = weAll

export const churchesInAsia = god.createChurchesInAsia(jesusChrist)

export const heWhichIsAndWhichWasAndWhichIsToCome = god
export const sevenSpirits = god.createSevenSpirits()

export const faithfulWitness = jesusChrist
export const firstBornFromTheDead = jesusChrist
export const thePrinceOfTheKingsOfTheEarth = jesusChrist

export const kingsAndPriests = weAll

export const alphaAndOmega = god

export const johnSpirit = god.createBodySpirit(john)
export const greatVoiceAsOfTrumpet = jesusChrist

export const thingsWhatHaveYouSeen = revelation

export const candlesticks = churchesInAsia
export const sonOfMan = jesusChrist

export const whiteGarment = revelation
export const fireEyes = wordOfTheCourt
export const feetLikeBurnedBronze = wordOfGod // verify
export const voiceAsTheSoundOfManyWaters = wordOfGod // verify
export const sevenStars = churchesInAsia.map((church) => church.getAngel())
export const sharpTwoEdgedSword = wordOfTheCourt
export const countenanceLikeSunInHisStrength = wordOfGod // verify

jesusChrist.giveSpiritEntities([
    whiteGarment,
    fireEyes,
    feetLikeBurnedBronze,
    voiceAsTheSoundOfManyWaters,
    sevenStars,
    sharpTwoEdgedSword,
    countenanceLikeSunInHisStrength
])

export const theFirstAndTheLast = jesusChrist
export const theLivingOne = jesusChrist

export const keysOfHell = wordOfGod // verify

jesusChrist.giveSpiritEntities([ keysOfHell ])

export const thingsWhichAre = revelation
export const thingsWhichShallBe = revelation

export const whoOvercome = john