describe('Edición de Rutina', () => { 
  beforeEach(() => {
    // Aquí podrías visitar la página de edición de rutina
    cy.visit('http://localhost:5173'); // Asegúrate de que esta ruta sea correcta
  });

  it('Creación de rutina, Edicion de Rutina, Validación de Datos, Finalización de rutina, verificación de cambio de datos', () => {
    // Ingresar el correo electrónico
    cy.get('#exampleInputEmail1') // Asegúrate de que el selector sea correcto
      .type('joses@gmail.com'); // Cambia esto según tus datos de prueba
    // Esperar 1 segundos
    cy.wait(1000);
    // Ingresar la contraseña
    cy.get('#exampleInputPassword1') // Asegúrate de que el selector sea correcto
      .type('.Ture123456'); // Cambia esto según tus datos de prueba
    // Esperar 1 segundos
    cy.wait(1000);
    // Hacer clic en el botón de inicio de sesión
    cy.get('.signin > :nth-child(5)').click();  // Ajusta el texto según tu aplicación
    // Esperar 1 segundos
    cy.wait(1000);
    //Ingreso historico
    cy.get(':nth-child(2) > .d-flex > .img-fluid').click();  
    // Esperar 1 segundos
    cy.wait(1000);
    //Regresar rutina
    cy.get(':nth-child(1) > .d-flex > .img-fluid').click();  
    // Obtener el valor actual del número de rutinas completadas
    cy.get('.row > :nth-child(1) > h6').then(($currentValue) => {
    const currentValue = parseInt($currentValue.text());
    // Esperar 1 segundos
    cy.wait(1000);
    //Creas rutina 
    cy.get('.btn').click();
    // Esperar 1 segundos
    cy.wait(1000);    
     //Ingreso historico
    cy.get(':nth-child(2) > .d-flex > .img-fluid').click(); 
    // Esperar 1 segundos
    cy.wait(1000);       
    //Ingreso editar
    cy.get(':nth-child(1) > .justify-content-end > .btn-warning').click(); // Ajusta el texto según tu aplicación
    // Esperar 1 segundos
    cy.wait(1000);    
    // Hacer clic en el elemento <select>
    cy.get(':nth-child(1) > .form-control').select('difícil');
    // Esperar 1 segundos
    cy.wait(1000);
    // Hacer clic en el elemento correspondiente y modificar su valor a 9
    cy.get(':nth-child(2) > .form-control') // Asegúrate de que este selector apunte al campo de entrada correcto
      .clear() // Limpiar el valor actual
      .type('1'); // Ingresar el nuevo valor
      // Esperar 1 segundos
      cy.wait(1000);
    //Guardar
    cy.get('.btn-success').click();
    // Esperar 1 segundos
    cy.wait(1000);
    //Ingreso historico
    cy.get(':nth-child(2) > .d-flex > .img-fluid').click();  
    // Esperar 1 segundos
    cy.wait(1000);
    // Valida que el elemento tenga el valor que cambio en la base de datos intesidad cambio a 10
    cy.get('.border > :nth-child(3) > .text-secondary').should('have.text', 'cada 10 días');
    // Esperar 1 segundos
    cy.wait(1000);
    // Valida que el elemento tenga el valor que cambio en la base de datos nivel es dificil 
    cy.get(':nth-child(2) > .text-secondary').should('have.text', 'alta');
    // Esperar 1 segundos
    cy.wait(1000);
    // Valida que el elemento tenga el valor de 15 porque elegimos dificil
    cy.get(':nth-child(4) > .text-secondary').should('have.text', '15 minutos');
    // Esperar 1 segundos
    cy.wait(1000);
    // Valida que el elemento tenga el valor de 15 porque elegimos dificil
    cy.get('.btn-warning').click();
    // Esperar 1 segundos
    cy.wait(1000);
    //Finalizar rutina
    cy.get('.mb-3 > .btn').click();
    // Esperar 1 segundos
    cy.wait(1000);
    //Seleccionaar el boton finalizar
    cy.get('.modal-footer > .btn-danger').click();
    // Esperar 1 segundos
    cy.wait(1000);
    //Rutinas
    cy.get(':nth-child(1) > .d-flex > .img-fluid').click();
    // Esperar 1 segundos
    cy.wait(1000);
    //Validacion de cambio de datos
    // Verificar que el número de rutinas completadas haya aumentado en 1
    cy.get('.row > :nth-child(1) > h6').should('have.text', (currentValue + 1).toString());
    // Esperar 1 segundos
    cy.wait(1000);
    //Ingreso historico
    cy.get(':nth-child(2) > .d-flex > .img-fluid').click(); 
  });
  });
});
