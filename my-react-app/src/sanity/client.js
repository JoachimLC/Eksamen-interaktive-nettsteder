
import { createClient } from '@sanity/client';

const options ={
    projectId: "zk7w65tv",
    dataset: "production"
}
 

const client = createClient({
    ...options,
    apiVersion: "2021-08-31",
    useCdn: true
})

export default client;