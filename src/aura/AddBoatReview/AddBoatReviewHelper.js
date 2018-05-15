({
    onInit : function(component, event) {
        component.find('service').getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function(response) {
               let bReview = component.get("v.boatReview");
               let rError = component.get("v.recordError");
               let boat = component.get("v.boat");
               if (rError || bReview == null) {
                   console.log('Error with intializing: ' + error);
               } else {
                   component.set("v.boatReview.Boat__c", boat.Id);
                   component.set("v.boatReviewRecord.Boat__c", boat.Id);
               }
            })
        );
    }
})