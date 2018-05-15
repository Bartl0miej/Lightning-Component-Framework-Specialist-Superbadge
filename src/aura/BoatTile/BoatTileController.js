({
    onBoatClick : function(component, event, helper) {
        let evt = component.getEvent('BoatSelect');
        let theId = component.get("v.boat");
        theId = theId.Id;
        console.log('theId = ' + theId);
        evt.setParams({"boatId" : theId});
        evt.fire();

        let boatSelectedEvent = $A.get("e.c:BoatSelected");
        let theBoat = component.get("v.boat");
        boatSelectedEvent.setParams({"boat" : theBoat});
        boatSelectedEvent.fire();
    }
})