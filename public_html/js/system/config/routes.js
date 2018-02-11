/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var anyAuthenticationPromise = function (sessionService) {
    return sessionService.anyAuthenticationPromise();
};
var authenticationAdministratorPromise = function (sessionService) {
    return sessionService.authenticationPromise(1);
};
var authenticationEmpleadoPromise = function (sessionService) {
    return sessionService.authenticationPromise(2);
};


trolleyes.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/login', {templateUrl: 'js/system/shared/login.html', controller: 'LoginController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/profile', {templateUrl: 'js/system/shared/profile.html', controller: 'ProfileController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/logout', {templateUrl: 'js/system/shared/logout.html', controller: 'LogoutController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/home', {templateUrl: 'js/system/shared/home.html', controller: 'HomeController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/license', {templateUrl: 'js/system/shared/license.html', controller: 'LicenseController', resolve: {auth: anyAuthenticationPromise}});
        $routeProvider.when('/passchange', {templateUrl: 'js/system/shared/passchange.html', controller: 'PasschangeController', resolve: {auth: anyAuthenticationPromise}});
        //------------
        $routeProvider.when('/usuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'UsuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/usuario/1/xtipousuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'UsuarioXtipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------ 2
        $routeProvider.when('/usuario/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'UsuarioView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/usuario/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/usuario/2/xtipousuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'UsuarioXtipousuarioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        
        //-----------
        $routeProvider.when('/tipousuario/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipousuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipousuarioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipousuario/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------ 2
        $routeProvider.when('/tipousuario/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipousuarioView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/tipousuario/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipousuarioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        
        
        //--
        $routeProvider.when('/tipopago/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipopagoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'TipopagoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/tipopago/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'TipopagoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //------------ 2
        $routeProvider.when('/tipopago/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'TipopagoView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/tipopago/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'TipopagoPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        
        
        
        //-----------
        $routeProvider.when('/factura/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'FacturaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/factura/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'FacturaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
         //----------- 2
        $routeProvider.when('/factura/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'FacturaView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/factura/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'FacturaPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/factura/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/factura/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'FacturaEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/factura/2/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'FacturaRemove2Controller', resolve: {auth: authenticationEmpleadoPromise}});
      
        //--------       
        $routeProvider.when('/cliente/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ClienteView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClientePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ClienteRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/xtipopago/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClienteXtipopagoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/xtipopago/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteXtipopagoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/cliente/1/xtipopago/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteXtipopagoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-------- 2      
        $routeProvider.when('/cliente/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ClienteView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClientePList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ClienteRemove2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/xtipopago/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ClienteXtipopagoPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/xtipopago/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteXtipopagoNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/cliente/2/xtipopago/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ClienteXtipopagoEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
       
        
        
        
        //--------       
        $routeProvider.when('/servicio/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ServicioRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xfactura/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioXfacturaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xfactura/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXfacturaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xfactura/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXfacturaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xcliente/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioXclientePList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xcliente/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXclienteNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xcliente/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXclienteEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioXusuarioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXusuarioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/servicio/1/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXusuarioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-------- 2      
        $routeProvider.when('/servicio/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'ServicioView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'ServicioRemove2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xfactura/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioXfacturaPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xfactura/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXfacturaNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xfactura/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXfacturaEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xcliente/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioXclientePList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xcliente/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXclienteNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xcliente/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXclienteEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xusuario/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'ServicioXusuarioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xusuario/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXusuarioNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/servicio/2/xusuario/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'ServicioXusuarioEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});

        //--------       
        $routeProvider.when('/sesion/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SesionView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SesionPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'SesionRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/xservicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SesionXservicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/xservicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionXservicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/sesion/1/xservicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionXservicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-------- 2
        $routeProvider.when('/sesion/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'SesionView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SesionPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'SesionRemove2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/xservicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'SesionXservicioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/xservicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionXservicioNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/sesion/2/xservicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'SesionXservicioEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        
       
        //--------       
        $routeProvider.when('/boceto/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'BocetoView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'BocetoPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'BocetoRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/xservicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'BocetoXservicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/xservicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoXservicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/boceto/1/xservicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoXservicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //-------- 2      
        $routeProvider.when('/boceto/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'BocetoView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'BocetoPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'BocetoRemove2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/xservicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'BocetoXservicioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/xservicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoXservicioNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/boceto/2/xservicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'BocetoXservicioEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});

        
        
        //--------       
        $routeProvider.when('/galeria/1/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GaleriaView1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GaleriaPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GaleriaRemove1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/xservicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GaleriaXservicioPList1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/xservicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaXservicioNew1Controller', resolve: {auth: authenticationAdministratorPromise}});
        $routeProvider.when('/galeria/1/xservicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaXservicioEdit1Controller', resolve: {auth: authenticationAdministratorPromise}});
        //--------   2     
        $routeProvider.when('/galeria/2/view/:id', {templateUrl: 'js/system/shared/app/view.html', controller: 'GaleriaView2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/plist/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GaleriaPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/new/:id?', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/edit/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/remove/:id', {templateUrl: 'js/system/shared/app/remove.html', controller: 'GaleriaRemove2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/xservicio/plistx/:id/:page?/:rpp?', {templateUrl: 'js/system/shared/app/plist.html', controller: 'GaleriaXservicioPList2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/xservicio/newx/:id', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaXservicioNew2Controller', resolve: {auth: authenticationEmpleadoPromise}});
        $routeProvider.when('/galeria/2/xservicio/editx/:id/:xid', {templateUrl: 'js/system/shared/app/newedit.html', controller: 'GaleriaXservicioEdit2Controller', resolve: {auth: authenticationEmpleadoPromise}});

       
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
