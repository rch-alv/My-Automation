module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
 
        splitButton: '[name="evenOddButton"]',
        filterObjectButton: '[name="objectFilterButton"]',
        fiterStringButton: '#nameFilterButton',
        palindromeCheckButton: '[name="palindromeButton"]',
        sumAddButton: '[name="sumButton"]',

        evenOddText: '[name="evenOddInput"]',
        objectText: '[name="objectFilterInput"]',
        stringText: '#nameFilterInput',
        palinText: '[name="palindromeInput"]',
        sumText1: '[name="sumInput1"]',
        sumText2: '[name="sumInput2"]',

        oddResults: '[name="oddResults"]',
        evenResults: '[name="evenResults"]',

        objectInput: '[name="objectFilterInput"]',
        objectButton: {
            selector: '(//div/button[@name="objectFilterButton"])',
            locateStrategy: 'xpath',
        },
        objectResults: '[name="objectFilterResults"]',

        stringInput: '#nameFilterInput',
        stringButton: '#nameFilterButton',
        stringResult: {
            selector: '//div/span[@name="nameFilterResults"]',
            locateStrategy: 'xpath',
        },
        palInput: {
            selector: '//div/input[@name="palindromeInput"]',
            locateStrategy: 'xpath',
        },
        palButton: '[name="palindromeButton"]',
        palResults: '[name="palindromeResults"]',

        sumIn1: '[name="sumInput1"]',
        sumIn2: '[name="sumInput2"]',
        sumButton: {
            selector: '//div/button[@name="sumButton"]',
            locateStrategy: 'xpath',
        },
        sumResults: '[name="sumResults"]',
    }
}
