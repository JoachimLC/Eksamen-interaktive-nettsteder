import client from "./client";
import imageUrlBuilder from '@sanity/image-url'


export const getAllUsers = async () => {
    const users = await client.fetch(
      `*[_type == "user"]{
        _id,
        name,
        age,
        gender,
        "imageUrl": image.asset->url,
        previousPurchases[]->,
        wishlist[]->
      }`
    );
    return users;
  };
  
export const getAllEvents = async () => {
    const events = await client.fetch(
      `*[_type == "event"]{
        _id,
        title,
        apiId
      }`
    );
    return events;
  };

  export const getEventById = async (eventId) => {
    const event = await client.fetch(
      `*[_type == "event" && apiId == $eventId]{
        _id,
        title,
        apiId
      }`,
      {eventId}
    );
    return event;
  };

  export const getUsersByEventId = async (eventId) => {
    const users = await client.fetch(
      `*[_type == "user" && ($eventId in previousPurchases[]->apiId || $eventId in wishlist[]->apiId)]{
        _id,
        name,
        age,
        gender,
        "imageUrl": image.asset->url,
        previousPurchases[]->,
        wishlist[]->
      }`,
      {eventId}
    );
    return users;
  };
 
