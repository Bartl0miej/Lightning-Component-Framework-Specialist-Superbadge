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

        let plotMapEvent = $A.get("e.c:PlotMapMarker");
        let lat = theBoat.Geolocation__Latitude__s;
        let long = theBoat.Geolocation__Longitude__s;
        let label = theBoat.Name;
        let objId = theBoat.Id;
        plotMapEvent.setParams({
            "lat" : lat,
            "long" : long,
            "label" : label,
            "SObjectId" : objId
        });
        plotMapEvent.fire();
    }
})