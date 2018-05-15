public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [SELECT Name FROM BoatType__c];
    }
}