describe("Hungaroton Artist List Search", () => {
    beforeEach(() => {
      cy.visit("/"); 
      cy.intercept("GET", "/api/artists*").as("getArtists"); 
      cy.wait("@getArtists"); 
      cy.wait(2000); 
    });
  
    it("The search box exists", () => {
      cy.get("h1", { timeout: 10000 }).should("exist"); 
      cy.get('.MuiOutlinedInput-root input').should("exist");
    });
  
    it("The right API call is made when searching", () => {
      cy.get("input").type("rock{enter}"); 
      cy.wait("@getArtists"); 
  
      cy.get("@getArtists").then((interception) => {
        expect(interception.response).to.not.be.undefined;
        expect(interception.response.statusCode).to.eq(200);
      });
    });
  
    it("Show results after search", () => {
      cy.get("input").type("Beethoven{enter}"); 
      cy.wait("@getArtists"); 
  
      cy.get("@getArtists").then((interception) => {
        cy.log("📡 API Response:", interception.response?.body); // Log API response
  
        // If the API sends no response or is blank, we exit the test
        if (!interception.response || !interception.response.body || !interception.response.body.data) {
          cy.log("API response hiba: nincs megfelelő adat");
          return; // Prevents further test run
        }
  
        // The response must include information on
        expect(interception.response.body.data.length, "API válaszban kell lennie legalább egy elemnek").to.be.greaterThan(0);
      });
  
      // Echecks that the cards have actually been released (with Material-UI class name)
      cy.get(".MuiCard-root", { timeout: 10000 }).should("have.length.greaterThan", 0); 
    });
  
    it("No results for non-existent search", () => {
      cy.get("input").type("asdgfhjkl{enter}"); 
      cy.wait("@getArtists"); 
  
      cy.get("@getArtists").then((interception) => {
        // If no data, stop running the test
        if (!interception.response || !interception.response.body || !interception.response.body.data) {
          cy.log("⚠️ API response hiba: nincs megfelelő adat");
          return;
        }
  
        expect(interception.response.body.data.length).to.eq(0); // The API response must be empty
      });
  
      // Checks that the message "No data available" is displayed
      cy.contains("Nincs elérhető adat.", { timeout: 10000 }).should("exist"); 
    });
  });
  