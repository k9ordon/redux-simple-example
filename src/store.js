import { createStore } from 'redux';
import { Item_Reducer } from './reducer';

let initialState = {
    Items: [{
        id: 123,
        title: "yolo1"
    }, {
        id: 234,
        title: "yolo2"
    }],
    list: {
        selectedId: false
    }
};

let emptyReducer = function(state, action) {
    return state
};

export let store = createStore(Item_Reducer, initialState);
