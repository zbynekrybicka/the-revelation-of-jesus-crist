import { god, jesusCrist, angelWhoGiveRevelation, john, revelation, whoHearWordOfGod } from "../entities"

import WhoHearWordOfGod from "../interfaces/whoHearWordOfGod"

describe("Revelation 1:1-8: Summary and conclusion of the entire book of Revelation", () => {

    describe('The Revelation of Jesus Christ', () => 
    {
        describe(`REV 1:1`, () => 
        {
            it(`The Revelation of Jesus Christ, which God gave unto him, 
            to show unto his servants things which must shortly come to pass;`, () => 
            {
                god.giveRevelationTo(jesusCrist)

                expect(god.hasRevelation()).toBeFalsy()
                expect(jesusCrist.hasRevelation()).toBeTruthy()
            })

            
            it(`and he sent and signified it by his angel`, () => 
            {
                jesusCrist.giveRevelationTo(angelWhoGiveRevelation)

                expect(jesusCrist.hasRevelation()).toBeFalsy()
                expect(angelWhoGiveRevelation.hasRevelation()).toBeTruthy()
            })

            
            it(`unto his servant John:`, () => 
            {
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

                expect(testimonyOfJesusCrist).toBe(revelation)
            })

        })


        describe(`REV 1:3`, () => 
        {
            it(`Blessed is he that readeth,`, () => 
            {
                const whoReadsWordOfGod = god.blessWhoReads()

                expect(whoReadsWordOfGod).toBe(john)
                expect(john.isBlessed()).toBeTruthy()
            })

            it(`and they that hear the words of this prophecy, 
            and keep those things which are written therein:
            for the time is at hand.`, () => 
            {
                john.readWordOfGod(whoHearWordOfGod)

                whoHearWordOfGod.forEach((oneWhoHearWordOfGod: WhoHearWordOfGod) => 
                {
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
                
            })

            
            it('and from the seven Spirits which are before his throne;', () => 
            {

            })

        })

    })

})