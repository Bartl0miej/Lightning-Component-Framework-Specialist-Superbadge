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
        let boat = component.get("v.boat");
        let BoatReviews = component.find("BoatReviews");
        if (typeof BoatReviews != 'undefined') {
            BoatReviews.refresh();
        }
    },

    onBoatReviewAdded : function(component, event, helper) {
        component.find('tabs').set("v.selectedTabId", "boatreviewtab");
        let BoatReviews = component.find("BoatReviews");
        BoatReviews.refresh();
    }
})