sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'incidentmanagementapp/test/integration/FirstJourney',
		'incidentmanagementapp/test/integration/pages/IncidentsList',
		'incidentmanagementapp/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('incidentmanagementapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);