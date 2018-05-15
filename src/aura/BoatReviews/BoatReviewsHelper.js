({
    onInit : function(component, event) {
        let action = component.get("c.getAll");
        let theBoat = component.get("v.boat");
        action.setParams({"boatId" : theBoat.Id});
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                let listOfReviews = response.getReturnValue();
                component.set("v.boatReviews", listOfReviews);
            } else {
                console.log("Handled gracefully: " + state);
            }
        });


        $A.enqueueAction(action);
    }
})