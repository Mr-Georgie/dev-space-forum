import { Appwrite } from "appwrite";

const sdk = new Appwrite()

sdk
    .setEndpoint("http://8080-appwrite-integrationfor-ghw26ygqb0r.ws-eu43.gitpod.io/v1") // Your API Endpoint
    .setProject('626cf93661b59bdb8f3b') // Your project ID
;

const collectionId = "626cf9c5709e1b288e1e"
const questionsCollectionId = "626fdd0c71c45daab351"

export { sdk, collectionId, questionsCollectionId }
