using {incident.mgmt.db as db} from '../db/schema';

service IncidentService {
    @odata.draft.enabled
    entity Incidents as projection on db.Incidents{
        *
    } actions {
        function getCurrentStatus(Title1: String) returns String;
        action ChangeUrgencytoHigh() returns String;
    };
    
    // action CloseIncident();

    @readonly
    entity Customers as projection on db.Customers;
}

extend projection IncidentService.Customers with {
    firstName || ' ' || lastName as name : String
}
