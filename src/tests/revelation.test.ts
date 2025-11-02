import { god, jesusChrist, angelWhoGiveRevelation, john, whoHearWordOfGod, heWhichIsAndWhichWasAndWhichIsToCome, sevenSpirits, faithfulWitness, firstBornFromTheDead, thePrinceOfTheKingsOfTheEarth, weAll, whoOvercome, whoReadsWordOfGod, kingsAndPriests, churchesInAsia, alphaAndOmega, johnSpirit, greatVoiceAsOfTrumpet, thingsWhatHaveYouSeen, candlesticks, sonOfMan, whiteGarment, fireEyes, feetLikeBurnedBronze, voiceAsTheSoundOfManyWaters, sevenStars, sharpTwoEdgedSword, countenanceLikeSunInHisStrength, theFirstAndTheLast, theLivingOne, keysOfHell, thingsWhichAre, thingsWhichShallBe } from "../entities"

import Angel from "../classes/angel"
import God from "../classes/god"
import JesusChrist from "../classes/JesusChrist"


import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod"
import John from "../classes/john"
import Revelation from "../classes/revelation"
import Human from "../classes/human"
import Spirit from "../classes/spirit"
import Place from "../classes/place"
import ChurchInAsia from "../classes/churchInAsia"
import WordOfGod from "../classes/wordOfGod"
import WordOfTheCourt from "../classes/wordOfTheCourt"

describe("Revelation 1:1-8: Summary and conclusion of the entire book of Revelation", () =>
{

    describe('The Revelation of Jesus Christ', () => 
    {
        describe(`REV 1:1`, () => 
        {
            it(`The Revelation of Jesus Christ, which God gave unto him, 
            to show unto his servants things which must shortly come to pass;`, () => 
            {
                god.giveRevelationTo(jesusChrist)

                expect(god).toBeInstanceOf(God)
                expect(jesusChrist).not.toBeInstanceOf(God) // Jesus Christ is not God! Remember it forever at last
                expect(jesusChrist).toBeInstanceOf(JesusChrist)
                expect(god.hasRevelation()).toBeFalsy()
                expect(jesusChrist.hasRevelation()).toBeTruthy()
            })

            it(`and he sent and signified it by his angel`, () => 
            {
                jesusChrist.giveRevelationTo(angelWhoGiveRevelation)

                expect(angelWhoGiveRevelation).toBeInstanceOf(Angel)
                expect(jesusChrist.hasRevelation()).toBeFalsy()
                expect(angelWhoGiveRevelation.hasRevelation()).toBeTruthy()
            })
            
            it(`unto his servant John:`, () => 
            {
                expect(john).toBeInstanceOf(John)
                angelWhoGiveRevelation.giveRevelationTo(john)

                expect(angelWhoGiveRevelation.hasRevelation()).toBeFalsy()
                expect(john.hasRevelation()).toBeTruthy()
            })
        })

        describe(`REV 1:2`, () => {

            it(`who bare record of the word of God, and of the testimony of Jesus Christ,
            and of all things that he saw.`, () => 
            {
                const testimonyOfJesusChrist = john.testify()

                expect(testimonyOfJesusChrist).toBeInstanceOf(Revelation)
            })
        })


        describe(`REV 1:3`, () => 
        {
            it(`Blessed is he that readeth,`, () => 
            {
                expect(whoReadsWordOfGod).toBeInstanceOf(John)
                expect(whoReadsWordOfGod?.isBlessed()).toBeTruthy()
            })

            it(`and they that hear the words of this prophecy, 
            and keep those things which are written therein:
            for the time is at hand.`, () => 
            {
                whoHearWordOfGod.forEach((oneWhoHearWordOfGod: WhoHearWordOfGod) => 
                {
                    expect(oneWhoHearWordOfGod).toBeInstanceOf(Human)
                    expect(oneWhoHearWordOfGod.keepProphecy()).toBeTruthy()
                    expect(oneWhoHearWordOfGod.isBlessed()).toBeTruthy()
                })
            })
        })
    })


    describe('Greetings to the Seven Churches', () => 
    {
        describe('REV 1:4', () => 
        {
            it(`John to the seven churches which are in Asia:
            Grace be unto you, and peace, from him which is, and which was, and which is to come;`, () =>
            {
                const graceAndPeace = john.getGraceAndPeace()
                expect(graceAndPeace).toBeDefined()
                churchesInAsia.forEach((churchInAsia) => {
                    if (graceAndPeace) {
                        john.sendGraceAndPeace(graceAndPeace, churchInAsia)
                    }
                })
                graceAndPeace?.from(heWhichIsAndWhichWasAndWhichIsToCome)

                expect(heWhichIsAndWhichWasAndWhichIsToCome).toBeInstanceOf(God)
            })
            
            it('and from the seven Spirits which are before his throne;', () => 
            {
                const graceAndPeace = john.getGraceAndPeace()
                expect(graceAndPeace).toBeDefined()
                graceAndPeace?.fromAll(sevenSpirits)
            })
        })

        describe('REV 1:5', () =>
        {
            it(`and from Jesus Christ, who is the faithful witness,`, () =>
            {
                const graceAndPeace = john.getGraceAndPeace()
                expect(graceAndPeace).toBeDefined()
                graceAndPeace?.from(faithfulWitness)

                expect(faithfulWitness).toBeInstanceOf(JesusChrist)
            })

            it(`and the first-begotten of the dead,`, () =>
            {
                const graceAndPeace = john.getGraceAndPeace()
                expect(graceAndPeace).toBeDefined()
                graceAndPeace?.from(firstBornFromTheDead)
                expect(firstBornFromTheDead).toBeInstanceOf(JesusChrist)
            })

            it(`and the prince of the kings of the earth.`, () =>
            {
                const graceAndPeace = john.getGraceAndPeace()
                expect(graceAndPeace).toBeDefined()
                graceAndPeace?.from(thePrinceOfTheKingsOfTheEarth)
                expect(thePrinceOfTheKingsOfTheEarth).toBeInstanceOf(JesusChrist)
            })

            it(`Unto him that loved us, and washed us from our sins in his own blood,`, () => 
            {
                jesusChrist.washFromSins(weAll)
            })
        })

        describe('REV 1:6', () =>
        {
            it(`and hath made us kings and priests unto God and his Father;`, () =>
            {
                kingsAndPriests.forEach((kingAndPriest) => {
                    expect(kingAndPriest).toBeInstanceOf(Human)
                    expect(kingAndPriest.hasEternalLife()).toBeTruthy()
                })
            })

            it(`to him be glory and dominion for ever and ever. Amen.`, () =>
            {
                expect(jesusChrist.hasEternalLife()).toBeFalsy()
                jesusChrist.gloryAndDominitionToHim()
                expect(jesusChrist.hasEternalLife()).toBeTruthy()
            })
        })

        describe('REV 1:7', () =>
        {
            it(`Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him:`, () =>
            {
                expect(jesusChrist).toBeInstanceOf(Spirit)
                churchesInAsia.forEach((church) => {
                    expect(church.getSpirit()).toBeInstanceOf(JesusChrist)
                    church.pierceSpirit()
                    expect(church.getSpirit()).not.toBeInstanceOf(JesusChrist)
                })
            })

            it(`and all kindreds of the earth shall wail because of him. Even so, Amen.`, () => 
            {
                churchesInAsia.forEach((church) => {
                    expect(church.getSpirit()).not.toBeInstanceOf(JesusChrist)
                    expect(church.getSpirit()).toBeInstanceOf(Spirit)
                })
            })
        })

        describe('REV 1:8', () =>
        {
            it(`I am Alpha and Ome´ga, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.`, () =>
            {
                expect(alphaAndOmega).toBeInstanceOf(God)
                expect(heWhichIsAndWhichWasAndWhichIsToCome).toBeInstanceOf(God)
            })
        })
    })
})

describe("Revelation 1:9-20: The Election of New John", () =>
{
    describe('A Vision of the Son of Man', () =>
    {
        describe('REV 1:9', () =>
        {
            it(`I John, who also am your brother, and companion in tribulation, 
            and in the kingdom and patience of Jesus Christ, 
            was in the isle that is called Patmos, 
            for the word of God, and for the testimony of Jesus Christ.`, () =>
            {
                expect(john.location()).toBeInstanceOf(Place)
                expect(john.location().getTitle()).toBe("Patmos")
            })
        })

        describe('REV 1:10', () =>
        {
            it(`I was in the Spirit on the Lord's day,`, () =>
            {
                expect(johnSpirit).toBeInstanceOf(Spirit)
                expect(johnSpirit.getBody()).toBeInstanceOf(John)
            })
            
            it(`and heard behind me a great voice, as of a trumpet,`, () =>
            {
                expect(greatVoiceAsOfTrumpet).toBeInstanceOf(JesusChrist)
            })
        })

        describe('REV 1:11', () =>
        {
            it(`saying, I am Alpha and Omega, the first and the last:`, () =>
            {
                // It's a mistake in translation! 
                // Here is specified that Jesus Christ is God. 
                // It's not true.
                expect(alphaAndOmega).toBeInstanceOf(God)
                expect(alphaAndOmega).not.toBeInstanceOf(JesusChrist)
            })
            
            it(`and, What thou seest, write in a book,`, () =>
            {
                expect(thingsWhatHaveYouSeen).toBeInstanceOf(Revelation)
            })
            
            it (`and send it unto the seven churches which are in Asia; 
            unto Ephesus, and unto Smyrna, and unto Pergamos, 
            and unto Thyatira, and unto Sardis,
            and unto Philadelphia, and unto Laodicea.`, () =>
            {
                churchesInAsia.forEach((churchInAsia) => 
                {
                    john.sendLetter(thingsWhatHaveYouSeen, churchInAsia)
                    expect(churchInAsia.hasLetter()).toBeFalsy()
                })
            })
        })

        describe('REV 1:12', () =>
        {
            it(`And I turned to see the voice that spake with me.
            And being turned, I saw seven golden candlesticks;`, () =>
            {
                candlesticks.forEach((candleStick) => expect(candleStick).toBeInstanceOf(ChurchInAsia))
            })
        })

        describe('REV 1:13', () => 
        {
            it(`and in the midst of the seven candlesticks one like unto the Son of man,`, () =>
            {
                expect(sonOfMan).toBeInstanceOf(JesusChrist)
            })

            it(`clothed with a garment down to the foot, and girt about the paps with a golden girdle.`, () =>
            {
                expect(sonOfMan.hasSpiritEntity(whiteGarment)).toBeTruthy()
                expect(whiteGarment).toBeInstanceOf(WordOfGod)
                expect(whiteGarment).toBeInstanceOf(Revelation)
            })
        })

        describe('REV 1:14', () =>
        {
            it(`His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire;`, () =>
            {
                expect(sonOfMan.hasSpiritEntity(fireEyes)).toBeTruthy()
                expect(fireEyes).toBeInstanceOf(WordOfGod)
                expect(fireEyes).toBeInstanceOf(WordOfTheCourt)
            })
        })

        describe('REV 1:15', () =>
        {
            it(`and his feet like unto fine brass, as if they burned in a furnace; 
            and his voice as the sound of many waters.`, () =>
            {
                expect(sonOfMan.hasSpiritEntity(feetLikeBurnedBronze)).toBeTruthy()
                expect(feetLikeBurnedBronze).toBeInstanceOf(WordOfGod)

                expect(sonOfMan.hasSpiritEntity(voiceAsTheSoundOfManyWaters)).toBeTruthy()
                expect(voiceAsTheSoundOfManyWaters).toBeInstanceOf(WordOfGod)
            })
        })

        describe('REV 1:16', () =>
        {
            it(`And he had in his right hand seven stars:`, () =>
            {
                expect(sonOfMan.hasSpiritEntity(sevenStars)).toBeTruthy()
                sevenStars.forEach((star) => expect(star).toBeInstanceOf(Angel))
            })

            it(`and out of his mouth went a sharp two-edged sword:`, () =>
            {
                expect(sonOfMan.hasSpiritEntity(sharpTwoEdgedSword)).toBeTruthy()
                expect(sharpTwoEdgedSword).toBeInstanceOf(WordOfGod)
                expect(sharpTwoEdgedSword).toBeInstanceOf(WordOfTheCourt)
            })

            it(`and his countenance was as the sun shineth in his strength.`, () =>
            {
                expect(sonOfMan.hasSpiritEntity(countenanceLikeSunInHisStrength)).toBeTruthy()
                expect(countenanceLikeSunInHisStrength).toBeInstanceOf(WordOfGod)
            })
        })

        describe('REV 1:17', () =>
        {
            it(`And when I saw him, I fell at his feet as dead. 
            And he laid his right hand upon me, saying unto me, 
            Fear not; I am the first and the last:`, () => 
            {
                expect(theFirstAndTheLast).toBeInstanceOf(JesusChrist)
            })
        })

        describe('REV 1:18', () =>
        {
            it(`I am he that liveth, and was dead; 
            and, behold, I am alive for evermore, Amen;`, () =>
            {
                expect(theLivingOne).toBeInstanceOf(JesusChrist)
                expect(theLivingOne.hasEternalLife()).toBeTruthy()
            })

            it(`and have the keys of hell and of death.`, () =>
            {
                expect(theLivingOne.hasSpiritEntity(keysOfHell)).toBeTruthy()
                expect(keysOfHell).toBeInstanceOf(WordOfGod)
            })
        })

        describe('REV 1:19', () =>
        {
            it(`Write the things which thou hast seen, 
            and the things which are, 
            and the things which shall be hereafter;`, () => 
            {
                expect(thingsWhatHaveYouSeen).toBeInstanceOf(WordOfGod)
                expect(thingsWhatHaveYouSeen).toBeInstanceOf(Revelation)

                expect(thingsWhichAre).toBeInstanceOf(WordOfGod)
                expect(thingsWhichAre).toBeInstanceOf(Revelation)

                expect(thingsWhichShallBe).toBeInstanceOf(WordOfGod)
                expect(thingsWhichShallBe).toBeInstanceOf(Revelation)
            })
        })

        describe(`REV 1:20`, () =>
        {
            it(`the mystery of the seven stars which thou sawest in my right hand, 
            and the seven golden candlesticks. The seven stars are the angels of the seven churches: 
            and the seven candlesticks which thou sawest are the seven churches.`, () =>
            {
                sevenStars.forEach((star) => expect(star).toBeInstanceOf(Angel))
                candlesticks.forEach((candlestick) => expect(candlestick).toBeInstanceOf(ChurchInAsia))
            })
        })
    })
})