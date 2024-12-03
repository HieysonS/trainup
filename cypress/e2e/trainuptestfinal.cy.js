describe('Vista la pagina de inicio', () => {
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

  it('Funcionamiento de la aplicacion TRAIN UP', () => {

    cy.visit('http://localhost:5173/register'); // visita a la pagina de registro
    cy.wait(2000);
    
    // Registro de datos para la aplicacion
    cy.get('#root > div > form > div:nth-child(3) > input').type('testeando ando'); // nombre de usuario
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(4) > input').type('test100@mail.com'); // email
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(5) > input').type('@trainuP999'); // password
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(6) > input').type('@trainuP999'); // confirmation password
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(7) > input').type('2002-08-06'); // fecha nacimiento
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(8) > div > input').type('176'); // talla
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(9) > div > input').type('72'); // peso
    cy.wait(2000);
    cy.get('#root > div > form > div:nth-child(10) > button').click(); // Ajusta el texto según tu aplicación
    cy.wait(2000);

    // CREACION DE RUTINAS
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div > div > div:nth-child(2) > div > div > button:nth-child(2)').click({ force: true }); // Selección de nivel intermedio
    cy.wait(2000);
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div > div > div:nth-child(3) > div > button').click(); // Iniciar rutina
    cy.wait(2000);
    cy.get('#root > div > div > div:nth-child(3) > button:nth-child(1)').click(); // Seleccion del objetivo - Perder peso
    cy.wait(2000);

    // CREAR RUTINA PERSONALIZADA
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div > div > div:nth-child(2) > div > div > button.btn.btn-primary').scrollIntoView().should('be.visible').click({ force: true });  //Seleccion de rutina personalizada
    cy.wait(2000);
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div > div > div:nth-child(3) > div > button').click(); // Iniciar rutina
    cy.wait(2000);
    cy.get('#root > div > div > div:nth-child(3) > button:nth-child(3)').click(); // Seleccion del objetivo - Aumentar musculo
    cy.wait(2000);

    // VER RUTINAS CREADAS
    cy.get('#root > div > div.navbar.navbar-expand-lg.navbar-light.bg-light.shadow-sm.fixed-top > div > div.d-flex.justify-content-center.align-items-center.w-100 > button:nth-child(2) > img').click(); // Boton de ver todas las rutinas
    cy.wait(2000);

    // ELEGIR UNA RUTINA Y ENTRENAR
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div.row.g-4 > div:nth-child(1) > div').click();
    cy.wait(2000);
    cy.get('#root > div > div:nth-child(2) > button').click(); // Iniciar rutina
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div.d-flex.justify-content-center.py-3 > button.btn.btn-outline-info.mx-2 > img').click(); // Aumentar 20s
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div.d-flex.justify-content-center.py-3 > button.btn.btn-outline-warning.mx-2 > img').click(); // Omitir
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div > button > img').click(); // Finalizar rutinas
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div.d-flex.justify-content-center.py-3 > button.btn.btn-outline-warning.mx-2 > img').click(); // Omitir
    cy.wait(12000);
    cy.get('#root > div > div > div.text-center > div.d-flex.justify-content-center.py-3 > button.btn.btn-outline-warning.mx-2 > img').click(); // Omitir
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div > button > img').click(); // Finalizar rutinas
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div.d-flex.justify-content-center.py-3 > button.btn.btn-outline-warning.mx-2 > img').click(); // Omitir
    cy.wait(2000);
    cy.get('#root > div > div > div.text-center > div > button > img').click(); // Finalizar rutinas


    // ELIMINAR RUTINAS CREADAS
    cy.get('#root > div > div.navbar.navbar-expand-lg.navbar-light.bg-light.shadow-sm.fixed-top > div > div.d-flex.justify-content-center.align-items-center.w-100 > button:nth-child(2)').click(); // Boton de eliminar
    cy.wait(2000);
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div.row.g-4 > div:nth-child(1) > div > div.d-flex.justify-content-end.mt-2 > button').click();
    cy.wait(2000);
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div.row.g-4 > div:nth-child(1) > div > div.modal.fade.show > div > div > div.modal-footer > button.btn.btn-danger').click(); // Confirmar eliminar
    

    // EDITAR PERFIL DEL USUARIO
    cy.get('#root > div > div.navbar.navbar-expand-lg.navbar-light.bg-light.shadow-sm.fixed-top > div > div.d-flex.justify-content-center.align-items-center.w-100 > button:nth-child(3) > img').click(); // Ir a perfil
    cy.wait(2000);
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div > div.col-md-4.text-center > div > a > img').click(); // boton editar datos
    cy.wait(2000);
    cy.get('#root > div > div > div.col-lg-4.col-md-8 > div > form > div:nth-child(1) > input').clear(); // Borrar nombre de usuario
    cy.wait(2000);
    cy.get('#root > div > div > div.col-lg-4.col-md-8 > div > form > div:nth-child(1) > input').type('Eduardo'); // Añadir nuevo nombre de usuario
    cy.wait(2000);
    cy.get('#root > div > div > div.col-lg-4.col-md-8 > div > div.text-center.mt-2 > button').click(); // Guardar nuevos datos
    cy.get('#root > div > div > div.col-lg-4.col-md-8 > div > div.text-center.mt-2 > a').click();

    
    // LOGUOT DE LA APLICACION
    //Hacer clic en el boton de perfil
    cy.get('#root > div > div.navbar.navbar-expand-lg.navbar-light.bg-light.shadow-sm.fixed-top > div > div.d-flex.justify-content-center.align-items-center.w-100 > button.d-flex.flex-column.align-items-center.text-decoration-none.text-dark.fw-bold > img').click(); 
    cy.wait(2000);
    cy.get('#root > div > div.navbar.navbar-expand-lg.navbar-light.bg-light.shadow-sm.fixed-top > div > div.d-flex.justify-content-center.align-items-center.w-100 > button:nth-child(3)').click();

    // Hacer clic en el botón de salida
    cy.get('#root > div > div.flex-grow-1.p-3 > div > div > div.col-md-4.text-center > button').click(); 
    cy.wait(1000);

    cy.url().should('eq', 'http://localhost:5173/login'); // Verifica que el usuario haya sido redirigido a la página de inicio de sesión
    
    cy.get('.user-info').should('not.exist'); // Verifica que el contexto de usuario esté null
  });
});