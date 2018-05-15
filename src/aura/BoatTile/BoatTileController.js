({
    onBoatClick : function(component, event, helper) {
        let evt = component.getEvent('BoatSelect');
        let theId = component.get("v.boat");
        theId = theId.Id;
        console.log('theId = ' + theId);
        evt.setParams({"boatId" : theId});
        evt.fire();
    }
})