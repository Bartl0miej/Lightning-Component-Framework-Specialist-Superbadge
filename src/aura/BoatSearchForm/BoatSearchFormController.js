({
    doInit : function(component, event, helper) {
        let isEnabled = $A.get("e.force:createRecord");

        if (isEnabled) {
            component.set("v.createRecordEnabled", true);
        }

        let action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response) {
            let list = response.getReturnValue();
            component.set("v.boatTypes", list);
        });

        $A.enqueueAction(action);
    },

    createRecord : function(component, event, helper) {
        let boatType = component.get("v.boatType");
        console.log('boattypeId = ' + boatType.Id);
        let boatTypesList = component.get("v.boatTypes");
        for (let i = 0; i < boatTypesList.length; i++) {
            if (boatType === boatTypesList[i].Name) {
                boatType = boatTypesList[i].Id;
                break;
            }
        }
        console.log(boatType);
        if (boatType === "") {
            boatType = null;
        }
        let createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams( {
           "entityApiName" : "Boat__c",
           "defaultFieldValues" : {
               'BoatType__c' : boatType
           }
        });
        createRecordEvent.fire();
    },

    onFormSubmit : function(component, event, helper) {
        let boatType = component.get("v.boatType");
                console.log('boattypeId = ' + boatType.Id);
                let boatTypesList = component.get("v.boatTypes");
                for (let i = 0; i < boatTypesList.length; i++) {
                    if (boatType === boatTypesList[i].Name) {
                        boatType = boatTypesList[i].Id;
                        break;
                    }
                }
                console.log(boatType);
                if (boatType === "") {
                    boatType = null;
                }
        let sendFormEvent = component.getEvent("formsubmit");
        sendFormEvent.setParams({"formData" : boatType});
        console.log('form submit type id: ' + boatType);
        sendFormEvent.fire();
    }
})