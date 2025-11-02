import { god, jesusCrist, angelWhoGiveRevelation, john, whoHearWordOfGod, heWhichIsAndWhichWasAndWhichIsToCome, sevenSpirits, faithfulWitness, firstBornFromTheDead, thePrinceOfTheKingsOfTheEarth, weAll, whoOvercome, whoReadsWordOfGod } from "../entities"

import Angel from "../classes/angel"
import God from "../classes/god"
import JesusCrist from "../classes/JesusCrist"


import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod"
import John from "../classes/john"
import Revelation from "../classes/revelation"
import Human from "../classes/human"

describe("Revelation 1:1-8: Summary and conclusion of the entire book of Revelation", () => {

    describe('The Revelation of Jesus Christ', () => 
    {
        describe(`REV 1:1`, () => 
        {
            it(`The Revelation of Jesus Christ, which God gave unto him, 
            to show unto his servants things which must shortly come to pass;`, () => 
            {
                god.giveRevelationTo(jesusCrist)

                expect(god).toBeInstanceOf(God)
                expect(jesusCrist).not.toBeInstanceOf(God) // Jesus Crist is not God! Remember it forever at last
                expect(jesusCrist).toBeInstanceOf(JesusCrist)
                expect(god.hasRevelation()).toBeFalsy()
                expect(jesusCrist.hasRevelation()).toBeTruthy()
            })

            it(`and he sent and signified it by his angel`, () => 
            {
                jesusCrist.giveRevelationTo(angelWhoGiveRevelation)

                expect(angelWhoGiveRevelation).toBeInstanceOf(Angel)
                expect(jesusCrist.hasRevelation()).toBeFalsy()
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
                const testimonyOfJesusCrist = john.testify()

                expect(testimonyOfJesusCrist).toBeInstanceOf(Revelation)
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
        const graceAndPeace = john.writeGraceAndPeace()
        describe('REV 1:4', () => 
        {
            it(`John to the seven churches which are in Asia:
            Grace be unto you, and peace, from him which is, and which was, and which is to come;`, () =>
            {
                expect(graceAndPeace).toBeDefined()
                graceAndPeace.from(heWhichIsAndWhichWasAndWhichIsToCome)

                expect(heWhichIsAndWhichWasAndWhichIsToCome).toBeInstanceOf(God)
            })
            
            it('and from the seven Spirits which are before his throne;', () => 
            {
                expect(graceAndPeace).toBeDefined()
                graceAndPeace.fromAll(sevenSpirits)
            })
        })

        describe('REV 1:5', () =>
        {
            it(`and from Jesus Christ, who is the faithful witness,`, () =>
            {
                expect(graceAndPeace).toBeDefined()
                graceAndPeace.from(faithfulWitness)

                expect(faithfulWitness).toBeInstanceOf(JesusCrist)
            })

            it(`and the first-begotten of the dead,`, () =>
            {
                expect(graceAndPeace).toBeDefined()
                graceAndPeace.from(firstBornFromTheDead)
                expect(firstBornFromTheDead).toBeInstanceOf(JesusCrist)
            })

            it(`and the prince of the kings of the earth.`, () =>
            {
                expect(graceAndPeace).toBeDefined()
                graceAndPeace.from(thePrinceOfTheKingsOfTheEarth)
                expect(thePrinceOfTheKingsOfTheEarth).toBeInstanceOf(JesusCrist)
            })

            it(`Unto him that loved us, and washed us from our sins in his own blood,`, () => 
            {
                jesusCrist.washFromSins(weAll)
            })
        })

        describe('REV 1:6', () =>
        {
            it(`and hath made us kings and priests unto God and his Father;`, () =>
            {

            })

            it(`to him be glory and dominion for ever and ever. Amen.`, () =>
            {
                                
            })
        })
    })
})