({
    doInit : function(component, event, helper) {
        helper.onSearch(component);
    },

/*    search : function(component, event, helper) {
        let args = event.getParam('arguments');
        let typeId = args.boatTypeId;
        component.set("v.boatTypeId", typeId);
        helper.onSearch(component);
        *//*console.log('tajp ajdi: ' + typeId);*//*
        component.get("c.doSearch");

    },*/

    doSearch : function(component, event, helper) {
        console.log('in do search method');
        let args = event.getParam('arguments');
        let typeId = args.boatTypeId;
        component.set("v.boatTypeId", typeId);
        console.log('tajp ajdi: ' + typeId);


        //component.get("v.boatTypeId");
        helper.onSearch(component);
    },

    onBoatSelect : function(component, event, helper) {
        let passedId = event.getParam('boatId');
        component.set("v.selectedBoatId", passedId);
    }
})