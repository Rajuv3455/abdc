

import creditCard from "../../HSBC_PageObject/creditcard"

describe('HSBC Banking Application', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.hsbc.co.in/')

    })


    
    it('HSBC Credit Card Flow', ()=>{

        const banking = new creditCard

        banking.mouseOverBanking()
        banking.clickcreditcard()
        banking.validateCreditCardtxt()
        banking.clickbtnApplyNow()
        banking.validateFourTypesCreditCard()
        banking.validateImgHsbcCashback()
        banking.validateHSBCCashbackCreditCard()
        banking.validateDifferentbtnofFirstcreditCard()
        banking.clickCompareCardbtn()
        banking.validateClosebtn()
        banking.valiadtetxtSelectCard()
        
        banking.validateChechbox()
        banking.clickBtnCompare()
        banking.addThirdCard()
        banking.clickRevovelnk()
        banking.againClickAddLnk()
        banking.clickClosebtnlnk()
       
        
        
        
       
        

    })







})