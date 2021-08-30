// We dont need any more this due we call the view
// sap.ui.define([
//     "sap/m/Text"
// ], function( Text ) {
//     'use strict';
//     new Text({
//         text: "Hello UI5!"
//     }).placeAt("content");
//     //console.log("UI is ready to go!");
// });

// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
// 	"use strict";

// 	XMLView.create({
// 		viewName: "sap.ui.demo.walkthrough.view.App"
// 	}).then(function (oView) {
// 		oView.placeAt("content");
// 	});

// });

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

//************** ALTERNATIVA ojo no todos los navegadores soportaran ES6 en nuestro caso debemos 
// analizar el proyecto si será desplegado en navegadores actualizados o trabajaremos con versiones anteriores 
// por lo cual no podremos hacer uso de ES6 ********************** */

// const arrControl = [
//     "sap/m/Text"
// ];

// const initSAPUI5 = ( Text ) => { 
//     new Text({
//         text: "Hello UI5!"
//     }).placeAt("content");
// };

// sap.ui.define( arrControl, initSAPUI5 );

