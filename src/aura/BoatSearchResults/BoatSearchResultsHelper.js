({
    onSearch : function(component) {
        let action = component.get("c.getBoats");
        let boatTypeIdh = component.get("v.boatTypeId");
        if (boatTypeIdh == null || boatTypeIdh == "") {
            boatTypeIdh = '';
        }
        action.setParams({"boatTypeId" : boatTypeIdh});
        action.setCallback(this, function(response) {
            let list = response.getReturnValue();
            component.set("v.boats", list);
        })

        $A.enqueueAction(action);
    }
})