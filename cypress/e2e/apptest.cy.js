describe('Pruebas de autenticación', () => {
    beforeEach(() => {
      // visita a la pagina de inicio
      cy.visit('http://localhost:5173');
    });
  
    it('Muestreo de las paginas de inicio, inicio de sesion y registro', () => {
      cy.visit('http://localhost:5173/');
      cy.wait(2000)
      cy.visit('http://localhost:5173/login');
      cy.wait(2000)
      cy.visit('http://localhost:5173/register');
      cy.wait(2000)
    });
  
    it('testapp', () => {
  
      cy.visit('http://localhost:5173/register'); // visita a la pagina de registro
      cy.wait(2000);
  
      cy.get('#root > div > form > div:nth-child(3) > input').type('usertest'); // nombre de usuario
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(4) > input').type('usertest50@mail.com'); // email
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(5) > input').type('@trainuP999'); // password
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(6) > input').type('@trainuP999'); // confirmation password
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(7) > input').type('20'); // edad
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(8) > div > input').type('171'); // talla
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(9) > div > input').type('72'); // peso
      cy.wait(2000);
      cy.get('#root > div > form > div:nth-child(10) > button').click(); // Ajusta el texto según tu aplicación
      cy.wait(2000);

      //Ingreso historico
      cy.get(':nth-child(2) > .d-flex > .img-fluid').click();  
      // Esperar 1 segundos
      cy.wait(1000);
      //Regresar rutina
      cy.get(':nth-child(1) > .d-flex > .img-fluid').click();  
      // Obtener el valor actual del número de rutinas completadas
      cy.get('.row > :nth-child(1) > h6').then(($currentValue) => {
      const currentValue = parseInt($currentValue.text());
      cy.wait(1000);
      cy.get('.btn').click();
      cy.wait(1000);    
      cy.get('#root > div > div > div.w-100 > button:nth-child(1)').click(); 
      // Esperar 1 segundos
      cy.wait(1000);       
      cy.get('#root > div > div:nth-child(1) > div.d-flex.justify-content-between.py-2.border-top > button:nth-child(1)').click(); 
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.text-center.mt-2 > button').click();
      cy.wait(1000);
      cy.get('#root > div > div > div.w-100 > button:nth-child(1)').click();
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.d-flex.justify-content-between.py-2.border-top > button:nth-child(2)').click(); 
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.text-center.mt-2 > button').click();
      cy.wait(1000);
      cy.get('#root > div > div > div.w-100 > button:nth-child(2)').click();
      cy.wait(1000);       
      cy.get('#root > div > div:nth-child(1) > div.d-flex.justify-content-between.py-2.border-top > button:nth-child(3)').click(); 
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.text-center.mt-2 > button').click();
      cy.wait(1000);
      cy.get('#root > div > div > div.w-100 > button:nth-child(3)').click();
      cy.wait(1000);       
      cy.get('#root > div > div:nth-child(1) > div.d-flex.justify-content-between.py-2.border-top > button:nth-child(4)').click(); 
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.text-center.mt-2 > button').click();
      cy.wait(1000);
      cy.get('#root > div > div > div.w-100 > button:nth-child(1)').click();
      cy.wait(1000);
      cy.get('#root > div > div > button.btn.btn-success.me-2').click();
      cy.wait(1000);
      cy.get('#intervaloInput').type('7');
      cy.wait(1000);
      cy.get('#root > div > div > div.modal.show.d-block.fade > div > div > div.modal-footer > button.btn.btn-primary').click();
      cy.wait(1000);
      cy.get('#root > div > div.container-fluid.bg-light.fixed-bottom.py-2.border.rounded > div > div:nth-child(2) > button > img').click();
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.overflow-auto.flex-grow-1.mb-20.container-fluid > div:nth-child(1) > div.d-flex.justify-content-end.mt-2 > button').click();
      cy.wait(1000);
      cy.get('#root > div > div:nth-child(1) > div.overflow-auto.flex-grow-1.mb-20.container-fluid > div:nth-child(1) > div.modal.fade.show > div > div > div.modal-footer > button.btn.btn-danger').click();
      cy.wait(1000);

      cy.visit('http://localhost:5173/');
      cy.wait(2000);
      //Validacion de cambio de datos
      //Ingresar al fragmento perfil
      cy.get(':nth-child(3) > .d-flex > .img-fluid').click();  
      // Esperar 1 segundos
      cy.wait(1000);
      // Click en edita perfil
      cy.get('#root > div > div:nth-child(1) > div.text-center.my-4 > div > a > img').click();  
      // Editar perfil
      cy.get('#root > div > div.border.p-3.rounded.container > form > div:nth-child(1) > input').clear().type("Edilson")
      cy.contains('Guardar').click();
      cy.wait(1000);

      //Hacer clic en el boton de perfil
      cy.get(':nth-child(3) > .d-flex > .img-fluid').click(); 
      cy.wait(2000);

      // Hacer clic en el botón de salida
      cy.get('.btn').click(); 
      cy.wait(1000);

      cy.url().should('eq', 'http://localhost:5173/login'); // Verifica que el usuario haya sido redirigido a la página de inicio de sesión
      
      cy.get('.user-info').should('not.exist'); // Verifica que el contexto de usuario esté null
    });
  }); 
});