import { Coins } from "../coinsModel";

//17. the state saves within it the data we want 
//to share with all the app
export class CoinState{
    coins:Coins[]=[]; 
    //18. 
    //what did we download ? 50 what ? 
    //50 coins. Of type : Coins[] array = 
    //undefined array (to not have problems);
    //this resets the state.
    //we use models. 
}
//19. What actions do we want to give ? 
//update, reset, delete
export enum coinsActionType{
    coinsUpdate = "coinsUpdate",
    coinsReset = "coinsReset",
    coinDelete = "coinDelete", //delte a coin not in use
}

//III in theory below. 
//20. how the action will be for less bugs
export interface coinsAction{
    type:coinsActionType;
    payload?:any; //?: because payload is optional
}

//IV in theory
//21. functions for dispatching coins
export function coinsUpdate(coins:Coins[]):coinsAction{
    return {type: coinsActionType.coinsUpdate , payload:coins}
}
//22. 
export function coinsDelete(coinName:string):coinsAction{
    return {type: coinsActionType.coinDelete, payload: coinName};
}
//23.
export function coinReset(){
    return {type: coinsActionType.coinsReset, payload:null};
}

//V in theory 24. reducer
//function coinReducer that receives to it the currentState
//that is :coinState = new coinState, and receives into it action of type : 
//coinsAction) at the end we return : coinState. 
export function coinReducer(currentState:CoinState = new CoinState, action:coinsAction):CoinState{
    const newState = {...currentState}; 
    //25. We want a state of ours first of all. 
    //Not to work on the current one. 
    //With spread operator we copy it fully.

    //26. switch of action.type (we always receive an action and type)
    //now focusing on the type Update
                          //type Delete and type Reset
    switch(action.type){
        case coinsActionType.coinsUpdate:
            newState.coins = action.payload;
        break;

        case coinsActionType.coinDelete: //using filter, no slice
            newState.coins = newState.coins.filter(item=>item.name !== action.payload)
        break;

        case coinsActionType.coinsReset:
            newState.coins = []; //27. Where is the array located ? 
                                 //in the newState = empty array []
                                 //This resets the array
        break;
    }

    return newState;
}

//VI n theory, 28. Create store.ts to concentrate all reducers