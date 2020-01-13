var thisIsOdd = {}
module.exports = {
    beforeEach: browser => {
        thisIsOdd = browser.page.oddsEvens()
        thisIsOdd.navigate()
    },
    after: browser => {
        thisIsOdd.end()
    },
    'Even and Odd': browser => {
        thisIsOdd
            .setValue('@evenOddText', '9837')
            .verify.valueContains('@evenOddText', '9837')
            .click('@splitButton')
            .waitForElementPresent('@oddResults')
            .pause(300)
            .clearValue('@evenOddText')
            .setValue('@evenOddText', '662')
            .verify.valueContains('@evenOddText', '662')
            .click('@splitButton')
            .waitForElementPresent('@evenResults')
            .pause(300)
            .clearValue('@evenOddText')
            .setValue('@evenOddText', 'This will be null')
            .verify.valueContains('@evenOddText', 'This will be null')
            .click('@splitButton')
            .verify.containsText('@oddResults', 'null')
    },
    'Object Test': browser => {
        thisIsOdd

            .setValue('@objectInput', 'title')
            .verify.valueContains('@objectInput', 'title')
            .click('@objectButton')
            .waitForElementPresent('@objectResults')
            .pause(300)
            .clearValue('@objectInput')
            .setValue('@objectInput', 'age')
            .verify.valueContains('@objectInput','age')
            .click('@objectButton')
            .waitForElementPresent('@objectResults')
            .pause(300)

    },
    'The String Test': browser => {
        thisIsOdd

            .setValue('@stringInput', 'J')
            .verify.valueContains('@stringInput', 'J')
            .click('@stringButton')
            .waitForElementPresent('@stringResult')
            .pause(300)
            .clearValue('@stringInput')
            .setValue('@stringInput', 'M')
            .verify.valueContains('@stringInput', 'M')
            .click('@stringButton')
            .waitForElementPresent('@stringResult')
            .pause(300)

    },
    'Whats Palindrome': browser => {
        thisIsOdd

            .setValue('@palInput', 'civic')
            .verify.valueContains('@palInput', 'civic')
            .click('@palButton')
            .waitForElementPresent('@palResults')
            .pause(300)

    },
    'We are just adding': browser => {
        thisIsOdd

            .setValue('@sumIn1', '4')
            .verify.valueContains('@sumIn1', '4')
            .setValue('@sumIn2', '5')
            .verify.valueContains('@sumIn2', '5')
            .click('@sumButton')
            .waitForElementPresent('@sumResults')
            .pause(300)

            }

}