describe('Edición de Perfil', () => { 
  beforeEach(() => {
    // Aquí podrías visitar la página de edición de rutina
    cy.visit('http://localhost:5173'); // Asegúrate de que esta ruta sea correcta
  });

  it('debería permitir la salida exitosa del usuario', () => {
    // Ingresar el correo electrónico
    cy.get('#exampleInputEmail1') // Asegúrate de que el selector sea correcto
      .type('manuel@gmail.com'); // Cambia esto según tus datos de prueba
 // Esperar 2 segundos
    cy.wait(1000);
      
    // Ingresar la contraseña
    cy.get('#exampleInputPassword1') // Asegúrate de que el selector sea correcto
      .type('Jmgc292827@'); // Cambia esto según tus datos de prueba
 // Esperar 2 segundos
    cy.wait(1000);
    // Hacer clic en el botón de inicio de sesión
    cy.get('.signin > :nth-child(5)').click();  // Ajusta el texto según tu aplicación
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton perfil
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //Boton cancelar
     cy.get('.btn-warning').click();
     //hacer clic a perfil
     cy.wait(1000);
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('manuel'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('Jmgc292827@'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('28'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('1.71'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('69'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     cy.wait(2000);
     //////////////////////////////////////////////////////////////
     /////////////////////////////////////////////////////////////
     /////////////////////////DATOS ERRONEO//////////////////////
     ////////////////Valiar ingreso de nombre///////////////////
     //////////////////////////////////////////////////////////
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('123455'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('Jmgc292827@'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('28'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('1.71'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('69'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     ////////////////////////////////////////////////////////////
     ///////////////////Valiar Contraseña///////////////////////
     //////////////////////////////////////////////////////////
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('manuel'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('123456789'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('28'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('1.71'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('69'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     cy.wait(3000);
     cy.get('.btn-warning').click();
     ////////////////////////////////////////////////////////////
     ////////////////Valiar edad menor//////////////////////////
     //////////////////////////////////////////////////////////
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('manuel'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('Jmgc292827@'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('15'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('1.71'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('69'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     cy.wait(3000);
     cy.get('.btn-warning').click();
      ////////////////////////////////////////////////////////////
     ////////////////Valiar edad mayor//////////////////////////
     //////////////////////////////////////////////////////////
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('manuel'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('Jmgc292827@'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('101'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('1.71'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('69'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     cy.wait(3000);
     cy.get('.btn-warning').click();
     ////////////////////////////////////////////////////////////
     ////////////////Valiar edad maxima//////////////////////////
     //////////////////////////////////////////////////////////
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('manuel'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('Jmgc292827@'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('100'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('1.71'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('69'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     cy.wait(3000);
     ////////////////////////////////////////////////////////////
     /////////////////////Valiar pesa///////////////////////////
     //////////////////////////////////////////////////////////
     cy.get(':nth-child(3) > .d-flex > .img-fluid').click();
     // Esperar 2 segundos
     cy.wait(1000);
     //hacer clic al boton editar
     cy.get('.position-absolute').click();
     cy.wait(1000);
     //selecionar el nombre
     cy.get(':nth-child(1) > .form-control')
     .clear() // Limpiar el valor actual
     .type('manuel'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la contraseña
     cy.get(':nth-child(2) > .form-control')
     .clear() // Limpiar el valor actual
     .type('Jmgc292827@'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(3) > .form-control')
     .clear() // Limpiar el valor actual
     .type('23'); // Ingresar el nuevo valor
     cy.wait(1000);
     //selecionar la edad
     cy.get(':nth-child(4) > .form-control')
     .clear() // Limpiar el valor actual
     .type('179222'); // Ingresar el nuevo valor
     cy.wait(1000);
     cy.get(':nth-child(5) > .form-control')
     .clear() // Limpiar el valor actual
     .type('232342'); // Ingresar el nuevo valor
     cy.wait(2000);
     cy.get('.btn-success').click();
     cy.wait(3000);
     

  });

});