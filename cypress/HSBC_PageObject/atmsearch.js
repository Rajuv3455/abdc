
class atmSearch{
    atmLink="//nav[@aria-label='Main Footer Navigation']//ul[@class='footer-large']//li[@class='footer-large-item lg-3']//a[@href='/ways-to-bank/branches/']"
    branchAtm="//h1[normalize-space()='Branches & ATMs']"
    atmLocator="//span[normalize-space()='Branch & ATM Locator']"
    txtsearch="#searchInput"
    indiaLocator="#autocomplete-results>li"
    raghav="//h2[@class='_1521gYSzrNIMk9R-rS4Hur']"
    showmore="//button[normalize-space()='Show more results']"
    redTooltip="//span[@class='_1OVu0dKjGeodXsBo3rrQ-i'][normalize-space()='2']"
    instagram="//a[@class='social-image social-icon-instagram']"
    facebook="//a[@class='social-image social-icon-facebook']"
    twitter="//a[@class='social-image social-icon-twitter']"
    youtube="//a[@class='social-image social-icon-youtube']"
    btnLogon="//div[@aria-label='Log on options']//a[@role='button'][normalize-space()='Log On']"
    hsbclogo="//div[@class='header-logo lg-2']//a"
    privacyLink="//nav[@aria-label='Bottom Footer']//a[normalize-space()='Privacy Statement']"
    txtprivacy="//h1[normalize-space()='Privacy Statement']"
    
    
    clickAtmLink(){
    
        cy.xpath(this.atmLink).scrollIntoView({duration:3000})
        cy.xpath(this.atmLink).click()
        cy.url('https://www.hsbc.co.in/ways-to-bank/branches/').should('include','/ways-to-bank/branches/')
       
    }
    
    validateHeaderAtm(){
        cy.xpath(this.branchAtm).should('contain','Branches & ATMs')
    }
    
    clickAtmLocator(){
    
        cy.xpath(this.atmLocator).click()
    }
    
    typeIndia(){
        cy.get(this.txtsearch).type('India')
        
    }
    
    clickIndia(){
        cy.wait(3000);
        cy.get(this.indiaLocator).contains('India').click()
       
    }
    
    validateRaghavRoad(){
        
        cy.xpath(this.raghav).should('contain','Rajbhavan Road Branch')
    }
    
    clickShowResult(){
    
    cy.xpath(this.showmore).click()
    }
    
    vldtRedTooltip(){
    
    
        cy.xpath(this.redTooltip).should('be.visible')
    }
    
    checkInstagram(){
        cy.xpath(this.instagram).should('be.visible')
      
    }
    
    checkFacebook(){
        cy.xpath(this.facebook).should('be.visible')
    }
    
    checkTwitter(){
        cy.xpath(this.twitter).should('be.visible')
    }
    
    checkYoutube(){
        cy.xpath(this.youtube).should('be.visible')
    }
    
    ClickLoginBtn(){
    
        cy.xpath(this.btnLogon).click()
    
       }
    
    clickHsbcLogoValidateHomepage(){
    
        cy.xpath(this.hsbclogo).click()
    }
     clickPrivacyLink(){
        cy.xpath(this.privacyLink).scrollIntoView({duration:3000})
        cy.xpath(this.privacyLink).click()
     }
     validatePrivacyStatement(){
        cy.xpath(this.txtprivacy).should('contain','Privacy Statement')
     }
    
    
    
    
    
    
    
    }
    export default atmSearch;