({
    onFormSubmit : function(component, event, helper) {
        let typeId = event.getParam("formData");
        //let boatTypeId = typeId.boatTypeId;
        console.log('in boatSearch:' + typeId);
        let childComponent = component.find("searchResultComponent");
        childComponent.search(typeId);
    },

})