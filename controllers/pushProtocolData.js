import * as PushAPI from "@pushprotocol/restapi";
import { user } from "@pushprotocol/restapi";

export const getAllNotifications = async (userAddress)=>{
    const notifications = await PushAPI.user.getFeeds({
        user: `eip155:5:${userAddress}`, // user address in CAIP
        env: 'staging'
    });
    console.log(notifications);
    return notifications
}


export const getSpamNotifications = async (userAddress)=>{
    const spams = await PushAPI.user.getFeeds({
        user: `eip155:5:${userAddress}`, // user address in CAIP
        spam: true,
        env: 'staging'
    });
    console.log(spams);
    return spams
}


export const getSubscriptions = async (userAddress)=>{
    const subscriptions = await PushAPI.user.getSubscriptions({
        user: `eip155:5:${userAddress}`, // user address in CAIP
        env: 'staging'
      });
     
      console.log(subscriptions);
      return subscriptions
}

export const getUserPushProfile = async (userAddress)=>{
    const user = await PushAPI.user.get({
        account: userAddress,
        env: 'staging',
     });

     console.log(user)
     return user
}

export const getChats= async (userAddress)=>{
    const chats = await PushAPI.chat.chats({
        account: userAddress,
        env: 'staging',
    });

    console.log(chats)
    return chats
}

export const getChatRequests= async (userAddress)=>{

    const chats = await PushAPI.chat.requests({
        account: userAddress,
        env: 'staging',
    });

    console.log(chats)
    return chats
}

