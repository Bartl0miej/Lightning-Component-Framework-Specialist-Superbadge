({
    onBoatSelected : function(component, event, helper) {
        let theId = event.getParam('boat');
        //component.set("v.boat", theId);
        theId = theId.Id;
        component.set("v.id", theId);
        let srv = component.find('service');
        srv.reloadRecord();
    },

    onRecordUpdated : function(component, event, helper) {

    }
})