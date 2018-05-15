({
    doInit : function(component, event, helper) {
        helper.onInit(component, event);
    },

    onSave : function(component, event, helper) {
        let boatId = component.get("v.boat");
        boatId = boatId.Id;
        component.set("v.boatReview.Boat__c", boatId);
        component.find("service").saveRecord(function (response) {
            if (response === "SUCCESS") {
                let rToast = $A.get("e.force:showToast");
                if (rToast) {
                    rToast.setParams({
                        "title" : "Saved Review",
                        "message" : "Boat Review Saved"
                    });
                    rToast.fire();
                } else {
                    alert("Boat Review Saved")
                }
            }
            let boatReviewAddedEvent = component.getEvent("BoatReviewAdded");
            boatReviewAddedEvent.fire();
            helper.onInit(component, event);
        });
    },

    onRecordUpdated : function(component, event, helper) {

    }
})