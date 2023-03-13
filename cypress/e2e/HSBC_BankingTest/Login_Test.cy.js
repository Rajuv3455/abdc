
import LoginPage from "../../HSBC_PageObject/login"


describe('HSBC Banking Application', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.hsbc.co.in/')

    })

    it('HSBC Login Test Scenario', ()=>{

        const login = new LoginPage
        
        login.BankLogo()
        login.TitlePage()
        login.ClickLoginBtn()
        login.validateLogon()
        login.checkContinuebtn()
        login.userName()
        login.defaultCheckBox()
        login.validateTooltip()
        login.HeaderUserName()
        login.clickClosebtn()





    })



})