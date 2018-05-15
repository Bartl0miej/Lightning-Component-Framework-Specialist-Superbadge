({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },

    onPlotMapMarker : function(component, event, helper) {
        let latitude = event.getParam("lat");
        let longitude = event.getParam("long");
        component.set("v.location", {'lat' : latitude, 'long' : longitude});
    }
})