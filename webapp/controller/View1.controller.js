sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.MouriApp.mouri.controller.View1", {

		onInit: function() {
          var that = this;
            // var oModel = new JSONModel("model/Sample.json");
			// that.getView().setModel(oModel, "oModel1");
			var sTableModel = new JSONModel(jQuery.sap.getModulePath("com.MouriApp.mouri", "/model/Sample.json"));
            that.getView().setModel(sTableModel, "oModel1");

        },
		onCreate: function () {
            var that = this;
            // sap.ui.core.BusyIndicator.show(0);
            var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
            oRouter.navTo("Report",{
                "correctionId": "122345"
            });
        }
    
});
});