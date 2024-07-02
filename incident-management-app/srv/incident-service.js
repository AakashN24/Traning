const cds = require('@sap/cds')

module.exports = async function () {

    const db = await cds.connect.to('db') // connect to database service
    const { Incidents, Customers } = db.entities         // get reflected definitions

    this.before('CREATE', 'Incidents', (req) => {
        console.log('this.before(CREATE,Incidents) is triggered');
        console.log(req.data);
        if (req.data.urgencyCode == null) {
            req.data.urgencyCode = req.data.urgency_code;
        }
        add();
    })

    this.on('ChangeUrgencytoHigh', async (req) => {
        console.log('ChangeUrgencytoHigh is triggered');
        console.log(req.params);
        // console.log(req.data);
        const n = await UPDATE(Incidents).set({ urgencyCode: 'H', urgency_code: 'H' }).where({ ID: req.params[0].ID })
        req.notify('Status Changed to High');
        add();
    })

    this.on('getCurrentStatus', async (req) => {
        console.log('getCurrentStatus is triggered');
        console.log(req.params);
        const query = await SELECT(Incidents).where({ ID: req.params[0].ID });

        console.log('query', query);

        return query[0].status_code;

    });

    function add() {

    };

}