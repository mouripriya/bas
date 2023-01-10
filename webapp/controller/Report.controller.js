sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/core/library'
], function ( Controller,JSONModel,coreLibrary) {
    "use strict";
    var ValueState = coreLibrary.ValueState;

    return Controller.extend("com.MouriApp.mouri.controller.Report", {

        

        onInit: function () {
            jQuery.sap.require("jquery.sap.storage");
            var that = this;     
            
            var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            oRouter.getRoute("Report").attachPatternMatched(that._onObjectMatched, that);
        },
        _onObjectMatched:function(oEvent){
            // alert("Welcome");
        }
	});
});