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

  it('Registro de un usuario', () => {

    cy.visit('http://localhost:5173/register'); // visita a la pagina de registro
    cy.wait(2000);

    cy.get('#root > div > form > div:nth-child(3) > input').type('messi'); // nombre de usuario
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(4) > input').type('messi@mail.com'); // email
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(5) > input').type('@trainuP999'); // password
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(6) > input').type('@trainuP999'); // confirmation password
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(7) > input').type('20'); // edad
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(8) > input').type('1.76'); // talla
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(9) > input').type('75'); // peso
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(10) > button').click(); // Ajusta el texto según tu aplicación
    cy.wait(2000);

    //Hacer clic en el boton de perfil
    cy.get(':nth-child(3) > .d-flex > .img-fluid').click(); 
    cy.wait(2000);

    // Hacer clic en el botón de salida
    cy.get('.btn').click(); 
    cy.wait(1000);

    cy.url().should('eq', 'http://localhost:5173/login'); // Verifica que el usuario haya sido redirigido a la página de inicio de sesión
    
    cy.get('.user-info').should('not.exist'); // Verifica que el contexto de usuario esté null
  });

  it('inicio de sesion', () => {

    cy.visit('http://localhost:5173/login'); // visita a la pagina de login
    cy.wait(2000);

    cy.get('#exampleInputEmail1').type('angel@mail.com'); // Ingresar el correo electrónico
    cy.wait(1000);

    cy.get('#exampleInputPassword1').type('@trainuP999'); // Ingresar la contraseña
    cy.wait(1000);

    // Hacer clic en el botón de inicio de sesión
    cy.get('.signin > :nth-child(5)').click();  // Ajusta el texto según tu aplicación
     cy.wait(2000);

    //Hacer clic en el boton de perfil
    cy.get(':nth-child(3) > .d-flex > .img-fluid').click(); 
    cy.wait(2000);

    // Hacer clic en el botón de salida
    cy.get('.btn').click(); 
    cy.wait(1000);

    cy.url().should('eq', 'http://localhost:5173/login'); // Verifica que el usuario haya sido redirigido a la página de inicio de sesión
    
    cy.get('.user-info').should('not.exist'); // Verifica que el contexto de usuario esté null
  });

  it('Creación de rutina, Edicion de Rutina, Validación de Datos, Finalización de rutina, verificación de cambio de datos', () => {
    // Ingresar el correo electrónico
    cy.get('#exampleInputEmail1') // Asegúrate de que el selector sea correcto
      .type('angel@mail.com'); // Cambia esto según tus datos de prueba
    // Esperar 1 segundos
    cy.wait(1000);
    // Ingresar la contraseña
    cy.get('#exampleInputPassword1') // Asegúrate de que el selector sea correcto
      .type('@trainuP999'); // Cambia esto según tus datos de prueba
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
    //Ingresar al fragmento perfil
    cy.get(':nth-child(3) > .d-flex > .img-fluid').click();

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