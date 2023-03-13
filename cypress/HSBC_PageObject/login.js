class LoginPage {

    validateLogo="//div[@class='header-logo lg-2']//img[@alt='HSBC India Bank']"
    btnLogon="//div[@aria-label='Log on options']//a[@role='button'][normalize-space()='Log On']"
    hsbcLogon="//span[normalize-space()='Log On']"
    btnContinue="//div[@class='col-sm-12 btnContainer wrapped-in-block-space']"
    txtUsername="//input[@id='username']"
    checkBox="//input[@id='rememberMe']"
    tooltip="//span[@class='icon icon-circle-help-solid help-icon']"
    showUser="//span[normalize-space()='Username']"
    btnClose="//span[@class='icon icon-delete']"



   BankLogo(){

    cy.xpath(this.validateLogo).should('be.visible')
    

   }

   TitlePage(){
   
    cy.title().should('contain','HSBC India - Credit Cards, NRI Services, Saving and Deposit')

   }

   ClickLoginBtn(){

    cy.xpath(this.btnLogon).click()

   }

   validateLogon(){
    cy.xpath(this.hsbcLogon).should('contain','Log On')

   }

   checkContinuebtn(){

    cy.xpath(this.btnContinue).should('contain','Continue')

   }
 
   userName(){

    cy.xpath(this.txtUsername).type('raju123@gmail.com')
    cy.xpath(this.btnContinue).should('contain','Continue')

   }

   defaultCheckBox(){

    cy.xpath(this.checkBox).should('not.be','check')

   }

   validateTooltip(){

    cy.xpath(this.tooltip).should('be.visible')
    cy.xpath(this.tooltip).click()
   }

   HeaderUserName(){

    cy.xpath(this.showUser).should('contain','Username')
   }

   clickClosebtn(){

    cy.xpath(this.btnClose).should('be.visible')
    cy.xpath(this.btnClose).click()

   }





}

export default  LoginPage;