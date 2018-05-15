({
    doInit : function(component, event, helper) {
        let avai = $A.get("e.force:navigateToSObject");
        if (avai) {
            component.set("v.showFullDetails", true);
        }
    },

    onFullDetails : function(component, event, helper) {
        let navEvent = $A.get("e.force:navigateToSObject");
        let boatId = component.get("v.boat.Id");
        navEvent.setParams({"recordId" : boatId});
        navEvent.fire();
    },
})