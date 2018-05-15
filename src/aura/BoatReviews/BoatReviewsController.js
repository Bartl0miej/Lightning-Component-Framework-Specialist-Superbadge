({
    doInit : function(component, event, helper) {
        helper.onInit(component, event);
    },

    onUserInfoClick : function(component, event, helper) {
        let userId = event.currentTarget.getAttribute("data-userid");
        let navEvent = $A.get("e.force:navigateToSObject");
        navEvent.setParams({"recordId" : userId});
        navEvent.fire();
    },

    refresh : function(component, event, helper) {
        this.doInit;
    }
})