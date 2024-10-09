describe('Pruebas de autenticación', () => {
  beforeEach(() => {
    // Visitar la página de inicio de sesión antes de cada prueba
    cy.visit('http://localhost:5173/updateuser'); // Ajusta la URL según tu aplicación
  });

  it('debería permitir la salida exitosa del usuario', () => {
    // Ingresar el correo electrónico
    cy.get('#exampleInputEmail1') // Asegúrate de que el selector sea correcto
      .type('isac@gmail.com'); // Cambia esto según tus datos de prueba
 // Esperar 2 segundos
    cy.wait(1000);
      
    // Ingresar la contraseña
    cy.get('#exampleInputPassword1') // Asegúrate de que el selector sea correcto
      .type('.Isac123456'); // Cambia esto según tus datos de prueba
 // Esperar 2 segundos
    cy.wait(1000);
    // Hacer clic en el botón de inicio de sesión
    cy.get('.signin > :nth-child(5)').click();  // Ajusta el texto según tu aplicación
     // Esperar 2 segundos
     cy.wait(2000);
    //Hacer clic en el boton de perfil
    cy.get(':nth-child(3) > .d-flex > .img-fluid').click(); 
     // Esperar 2 segundos
     cy.wait(2000);
   // Hacer clic en el botón de salida
     cy.get('.btn').click(); 
     // Esperar 2 segundos
     cy.wait(1000);
   // Verifica que el usuario haya sido redirigido a la página de inicio de sesión
    cy.url().should('eq', 'http://localhost:5173/login'); // Ajusta según tu ruta de inicio de sesión
    // Asegúrate de que no haya elementos que representen al usuario en la UI
  cy.get('.user-info').should('not.exist'); // Cambia el selector según tu aplicación
 // Verifica que el contexto de usuario esté null

  });
 
  });

