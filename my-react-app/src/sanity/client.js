
import { createClient } from '@sanity/client';

const options ={
    projectId: "gfn9w7ca",
    dataset: "production"
}
 

const client = createClient({
    ...options,
    apiVersion: "2021-08-31",
    useCdn: true
})

export default client;