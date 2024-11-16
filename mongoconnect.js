const { MongoClient } = require('mongodb');

async function main(){

    const adminPass = encodeURIComponent("1T5:16rejoicemon")
    const myUri = "mongodb+srv://writekevind:" + adminPass + "@mafiaclustera.vlpjq.mongodb.net/?retryWrites=true&w=majority&appName=MafiaClusterA"

    const client = new MongoClient(myUri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);