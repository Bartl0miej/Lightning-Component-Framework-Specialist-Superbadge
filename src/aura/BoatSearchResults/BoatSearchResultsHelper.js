({
    onSearch : function(component) {
        let action = component.get("c.getBoats");
        action.setParams({"boatTypeId" : ''});
        action.setCallback(this, function(response) {
            let list = response.getReturnValue();
            component.set("v.boats", list);
        })

        $A.enqueueAction(action);
    }
})