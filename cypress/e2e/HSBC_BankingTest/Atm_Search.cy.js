

import atmSearch from "../../HSBC_PageObject/atmsearch"


describe('HSBC Banking Application', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.hsbc.co.in/')

    })



    it('HSBC ATM Search Test Scenario', ()=>{

        const search = new atmSearch
        
        search.clickAtmLink()
        search.validateHeaderAtm()
        search.clickAtmLocator()
        search.typeIndia()
        search.clickIndia()
        search.validateRaghavRoad()
        search.clickShowResult()
        search.vldtRedTooltip()
        search.checkInstagram()
        search.checkFacebook()
        search.checkTwitter()
        search.checkYoutube()
        search.ClickLoginBtn()
        search.clickHsbcLogoValidateHomepage()
        search.clickPrivacyLink()
        search.validatePrivacyStatement()
       
        

    })

 


})