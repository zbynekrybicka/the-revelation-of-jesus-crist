describe("Revelation 1:1-8: Summary and conclusion of the entire book of Revelation", () =>
{
    describe('The Revelation of Jesus Christ', () => 
    {
        describe(`REV 1:1`, () => 
        {
            it(`The Revelation of Jesus Christ, which God gave unto him, 
            to show unto his servants things which must shortly come to pass;`, () => 
            {
                god.writeRevelation()
                god.giveRevelationTo(jesusChrist)
            })

            it(`and he sent and signified it by his angel`, () => 
            {
                jesusChrist.giveRevelationTo(angel[whoHaveRevelation])
            })
            
            it(`unto his servant John:`, () => 
            {
                angel[whoHaveRevelation].giveRevelationTo(john)
            })
        })

        describe(`REV 1:2`, () => {

            it(`who bare record of the word of God, and of the testimony of Jesus Christ,
            and of all things that he saw.`, () => 
            {
                john.write(testimonyOfJesusChrist, thingsThatHeSaw)
            })
        })


        describe(`REV 1:3`, () => 
        {
            it(`Blessed is he that readeth,`, () => 
            {
                whoReadsWordOfGod.getBlessed()
            })

            it(`and they that hear the words of this prophecy, 
            and keep those things which are written therein:
            for the time is at hand.`, () => 
            {
                whoHearWordOfGod.keepProphecy()
                whoHearWordOfGod.getBlessed()
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
                const grace = john.sendGraceTo(sevenChurches)
                grace.from([heWhichIsAndWhichWasAndWhichIsToCome])
            })
            
            it('and from the seven Spirits which are before his throne;', () => 
            {
                grace.from(sevenSpiritsBeforeThrone)
            })
        })

        describe('REV 1:5', () =>
        {
            it(`and from Jesus Christ, who is the faithful witness,`, () =>
            {
                grace.from(jesusChrist)
                expect(jesusChrist).toBe(faithfulWitness)
            })

            it(`and the first-begotten of the dead,`, () =>
            {
                expect(jesusChrist).toBe(firstBornFromTheDead)
            })

            it(`and the prince of the kings of the earth.`, () =>
            {
                expect(jesusChrist).toBe(thePrinceOfTheKingsOfTheEarth)
            })

            it(`Unto him that loved us, and washed us from our sins in his own blood,`, () => 
            {
                expect(jesusChrist).toBe(whoLoveUs)
                jesusChrist.washFromSins(we)
            })
        })

        describe('REV 1:6', () =>
        {
            it(`and hath made us kings and priests unto God and his Father;`, () =>
            {
                jesusChrist.makeKingsAndPriests(we)
            })

            it(`to him be glory and dominion for ever and ever. Amen.`, () =>
            {
                jesusChrist.gloryAndDominitionToHim()
            })
        })

        describe('REV 1:7', () =>
        {
            it(`Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him:`, () =>
            {
                jesusChrist.comeWithClouds()
                we.see(jesusChrist)
                sevenChurches.see(jesusChrist)
            })

            it(`and all kindreds of the earth shall wail because of him. Even so, Amen.`, () => 
            {
                earthTribes.promote(jesusChrist)
            })
        })

        describe('REV 1:8', () =>
        {
            it(`I am Alpha and Ome´ga, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.`, () =>
            {
                expect(god).toBe(alphaAndOmega)
                expect(god).toBe(beginAndEnd)
                expect(god).toBe(heWhichIsAndWhichWasAndWhichIsToCome)
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
                john.exilTo(patmos)
            })
        })

        describe('REV 1:10', () =>
        {
            it(`I was in the Spirit on the Lord's day,`, () =>
            {
                const johnSpirit = god.bringToSpirit(john)
            })
            
            it(`and heard behind me a great voice, as of a trumpet,`, () =>
            {
                johnSpirit.hear(greatVoiceAsOfTrumpet)
            })
        })

        describe('REV 1:11', () =>
        {
            it(`saying, I am Alpha and Omega, the first and the last:`, () =>
            {
                expect(god).toBe(alphaAndOmega)
            })
            
            it(`and, What thou seest, write in a book,`, () =>
            {
                johnSpirit.hear(commandToWrite)
            })
            
            it (`and send it unto the seven churches which are in Asia; 
            unto Ephesus, and unto Smyrna, and unto Pergamos, 
            and unto Thyatira, and unto Sardis,
            and unto Philadelphia, and unto Laodicea.`, () =>
            {
                johnSpirit.hear(commandToSend)
            })
        })

        describe('REV 1:12', () =>
        {
            it(`And I turned to see the voice that spake with me.
            And being turned, I saw seven golden candlesticks;`, () =>
            {
                johnSpirit.see(candleStick)
            })
        })

        describe('REV 1:13', () => 
        {
            it(`and in the midst of the seven candlesticks one like unto the Son of man,`, () =>
            {
                johnSpirit.see(sonOfMan)
            })

            it(`clothed with a garment down to the foot, and girt about the paps with a golden girdle.`, () =>
            {
                johnSpirit.see(whiteGarment)
                expect(sonOfMan.hasSpiritEntity(whiteGarment)).toBeTruthy()
            })
        })

        describe('REV 1:14', () =>
        {
            it(`His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire;`, () =>
            {
                johnSpirit.see(hairsLikeWool)
                johnSpirit.see(fireEyes)
                expect(sonOfMan.hasSpiritEntity(hairsLikeWool)).toBeTruthy()
                expect(sonOfMan.hasSpiritEntity(fireEyes)).toBeTruthy()
            })
        })

        describe('REV 1:15', () =>
        {
            it(`and his feet like unto fine brass, as if they burned in a furnace; 
            and his voice as the sound of many waters.`, () =>
            {
                johnSpirit.see(feetLikeBurnedBronze)
                expect(sonOfMan.hasSpiritEntity(feetLikeBurnedBronze)).toBeTruthy()
                expect(feetLikeBurnedBronze).toBeInstanceOf(WordOfGod)

                johnSpirit.hear(voiceAsTheSoundOfManyWaters)
                expect(sonOfMan.hasSpiritEntity(voiceAsTheSoundOfManyWaters)).toBeTruthy()
                expect(voiceAsTheSoundOfManyWaters).toBeInstanceOf(WordOfGod)
            })
        })

        describe('REV 1:16', () =>
        {
            it(`And he had in his right hand seven stars:`, () =>
            {
                johnSpirit.see(sevenStars)
                expect(sonOfMan.hasSpiritEntity(sevenStars)).toBeTruthy()
            })

            it(`and out of his mouth went a sharp two-edged sword:`, () =>
            {
                johnSpirit.see(sharpTwoEdgedSword)
                expect(sonOfMan.hasSpiritEntity(sharpTwoEdgedSword)).toBeTruthy()
                expect(sharpTwoEdgedSword).toBeInstanceOf(WordOfGod)
                expect(sharpTwoEdgedSword).toBeInstanceOf(WordOfTheCourt)
            })

            it(`and his countenance was as the sun shineth in his strength.`, () =>
            {
                johnSpirit.see(countenanceLikeSunInHisStrength)
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
                johnSpirit.see(theFirstAndTheLast)
                expect(theFirstAndTheLast).toBeInstanceOf(JesusChrist)
            })
        })

        describe('REV 1:18', () =>
        {
            it(`I am he that liveth, and was dead; 
            and, behold, I am alive for evermore, Amen;`, () =>
            {
                johnSpirit.see(theLivingOne)
                expect(theLivingOne).toBeInstanceOf(JesusChrist)
                expect(theLivingOne.hasEternalLife()).toBeTruthy()
            })

            it(`and have the keys of hell and of death.`, () =>
            {
                johnSpirit.see(keysOfHell)
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
                johnSpirit.hear(commandToWriteWhatHasHeSeen)
                johnSpirit.hear(commandToWriteThingsWhichAre)
                johnSpirit.hear(commandToWriteThingsWhichShallBe)
            })
        })

        describe(`REV 1:20`, () =>
        {
            it(`the mystery of the seven stars which thou sawest in my right hand, 
            and the seven golden candlesticks. The seven stars are the angels of the seven churches: 
            and the seven candlesticks which thou sawest are the seven churches.`, () =>
            {
                expect(sevenStars).toBe(angelsOfTheSevenChurches)
                expect(candlesticks).toBe(sevenChurches)
            })
        })
    })
})

describe("Revelation 2: The letters which were sent to angels of seven churches", () =>
{
    describe("The Mesage to Ephesus", () =>
    {
        describe('REV 2:1', () =>
        {
            it(`Unto the angel of the church of Ephesus write;`, () =>
            {
                john.sendLetter(churchOfEphesus)
            })

            it(`These things saith he that holdeth the seven stars in his right hand,`, () =>
            {
                expect(whoHoldsTheSevenStars).toBe(jesusChrist)
            })

            it(`who walketh in the midst of the seven golden candlesticks.`, () =>
            {
                expect(whoWalksInTheCandlesticks).toBe(jesusChrist)
            })
        })

        describe('REV 2:2', () =>
        {
            it(`I know thy works, and thy labor, and thy patience,`, () =>
            {
                churchOfEphesus.acts([workLaborAndPatience])
            })

            it(`and how thou canst not bear them which are evil:`, () =>
            {
                churchOfEphesus.acts([cannotStandBadPeople])
            })

            it(`and thou hast tried them which say they are apostles, and are not, and hast found them liars:`, () =>
            {
                churchOfEphesus.acts([triedWhichSayTheApostles])
            })
        })

        describe('REV 2:3', () =>
        {
            it(`and hast borne, and hast patience, and for my name's sake hast labored`, () =>
            {
                churchOfEphesus.acts([endureHardshipsForGodName])
            })

            it(`and hast not fainted.`, () =>
            {
                churchOfEphesus.acts([notFainted])
            })
        })

        describe('REV 2:4', () =>
        {
            it(`Nevertheless I have somewhat against thee, because thou hast left thy first love.`, () =>
            {
                churchOfEphesus.acts([leavedTheFirstLove])
            })
        })

        describe('REV 2:5', () =>
        {
            it(`Remember therefore from whence thou art fallen,`, () => 
            {

            })

            it(`and repent, and do the first works;`, () => 
            {

            })

            it(`or else I will come unto thee quickly, and will remove thy candlestick out of his place, except thou repent.`, () => 
            {

            })
        })

        describe('REV 2:6', () =>
        {
            it('But this thou hast, that thou hatest the deeds of the Nicolaitans, which I also hate.', () =>
            {

            })
        })

        describe('REV 2:7', () =>
        {
            it(`He that hath an ear, let him hear what the Spirit saith unto the churches;`, () => 
            {

            })

            it(`To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.`, () => 
            {

            })
        })
    })

    describe("The Message to Smyrna", () =>
    {
        describe('REV 2:8', () =>
        {
            it(`And unto the angel of the church in Smyrna write;`, () =>
            {

            })

            it(`These things saith the first and the last, which was dead, and is alive.`, () =>
            {

            })
        })

        describe('REV 2:9', () =>
        {
            it(`I know thy works, and tribulation, and poverty, (but thou art rich)`, () =>
            {

            })

            it(`and I know the blasphemy of them which say they are Jews, and are not,`, () =>
            {

            })

            it(`but are the synagogue of Satan.`, () =>
            {

            })
        })

        describe('REV 2:10', () =>
        {
            it(`Fear none of those things which thou shalt suffer:`, () =>
            {

            })

            it(`behold, the devil shall cast some of you into prison, that ye may be tried; and ye shall have tribulation ten days:`, () =>
            {

            })

            it(`be thou faithful unto death, and I will give thee a crown of life.`, () =>
            {

            })            
        })

        describe('REV 2:11', () =>
        {
            it(`He that hath an ear, let him hear what the Spirit saith unto the churches;`, () =>
            {

            })

            it(`He that overcometh shall not be hurt of the second death.`, () =>
            {

            })
        })
    })

    describe("The Message to Pergamos", () =>
    {

    })
})

describe("Revelation 3: The letters which were sent to angels of seven churches", () =>
{
    
})