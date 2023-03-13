
class creditCard{
    
    txtbankmenu="//ul[@class='row']//span[@class='header-main-navigation-title'][normalize-space()='Banking']"
    creditcardLink="//ul[@class='row']//h2[@class='doormat-heading'][normalize-space()='Credit Cards']"
    txtcredit='.A-TYP38L-RW-ALL'
    
    btnapplynow="//a[@id='listing_intro_button_1']//span[@aria-hidden='true'][normalize-space()='Apply now']"
    txtHsbcCashback="//h2[normalize-space()='HSBC Cashback Credit Card']"
    fourtypecredit="//h2[@class='A-LNKND38L-RW-ALL text-container text ']"
    imgHsbcCashback="//h2[@class='A-LNKND38L-RW-ALL text-container text ']"
    txtHsbcCashbak="//h2[normalize-space()='HSBC Cashback Credit Card']"
    btncomparecard="//a[@id='listing_main_button_1']//span[contains(text(),'Compare cards')]"
    btnFindoutMore="//a[@id='listing_main_button_2']//span[@aria-hidden='true'][normalize-space()='Find out more']"
    btnApplynow="//a[@id='listing_main_button_3']//span[@aria-hidden='true'][normalize-space()='Apply now']"
    btnClose="//button[@class='close-button']"
    txtSelectCard="//h2[@id='title-pp_tools_productComparator_4']"

    checkboxfirst="//span[@id='label-pp_tools_productComparator_6']"
    checkboxsecond="//span[@id='label-pp_tools_productComparator_8']"
    btncompare="//span[normalize-space()='Compare']"
    addCardlnk="//div[@class='product-select-container']//div[3]//a[1]//span[1]"
    checkboxthird="//span[@id='label-pp_tools_productComparator_10']"

    firstrmvlnk="//a[@data-product-type='cashback-credit-card']//span[@aria-hidden='true'][normalize-space()='Remove card']"
    addCardlnkscnd="//span[normalize-space()='Add card']"
    closebtnlnk="//button[@class='close-button']"
    addagaincard=':nth-child(3) > .A-TYPS7R-RW-DEV > [aria-hidden="true"]'
    
    
    


    mouseOverBanking(){

        cy.xpath(this.txtbankmenu).trigger('mouseover').click()
     
    }
    
    clickcreditcard(){
        
      
        // cy.xpath(this.creditcardLink).should('contain','Credit Cards')
        cy.xpath(this.creditcardLink).click()
        
       
       
    }

    validateCreditCardtxt(){
        // cy.get(this.txtcredit).contains('Credit cards')
        //  cy.xpath("//h1[contains(.,'Credit cards')]")
        cy.get(this.txtcredit).should('contain','Credit cards')

    }

   clickbtnApplyNow(){

    cy.xpath(this.btnapplynow).should('be.visible')
    cy.xpath(this.btnapplynow).invoke('removeAttr','target').click()
    
   }

   validateFourTypesCreditCard(){
    cy.xpath(this.fourtypecredit).should('contain','Credit Card')
  
   }


   validateImgHsbcCashback(){
    cy.xpath(this.imgHsbcCashback).should('be.visible')
   
   }

   validateHSBCCashbackCreditCard(){
    cy.xpath(this.txtHsbcCashback).should('contain','HSBC Cashback Credit Card')
   }

   validateDifferentbtnofFirstcreditCard(){
    cy.xpath(this.btncomparecard).should('be.visible')
    cy.xpath(this.btnFindoutMore).should('be.visible')
    cy.xpath(this.btnapplynow).should('be.visible')
   }

   clickCompareCardbtn(){
    cy.xpath(this.btncomparecard).click()
   }

   validateClosebtn(){
    cy.xpath(this.btnClose).should('be.visible')
   }

   valiadtetxtSelectCard(){

    cy.xpath(this.txtSelectCard).contains('Select cards to compare')
   }
   
   validateChechbox(){

    cy.xpath(this.checkboxfirst).click()
    cy.xpath(this.checkboxsecond).click()
    

   }

   clickBtnCompare(){

    cy.xpath(this.btncompare).click()
   }


   
   addThirdCard(){

    cy.xpath(this.addCardlnk).click()
    cy.xpath(this.checkboxthird).click()
    cy.xpath(this.btncompare).click()


   }
   validateThreeRmvlnk(){


   }

   clickRevovelnk(){
    
    cy.xpath(this.firstrmvlnk).click()
   }

   againClickAddLnk(){

   
    cy.get(this.addagaincard).click()

   
   }

   clickClosebtnlnk(){
    cy.xpath(this.closebtnlnk).click()

   }





    
    }
    export default creditCard;