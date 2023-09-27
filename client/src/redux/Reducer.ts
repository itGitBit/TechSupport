
import { AppState } from "./AppState";

import { Action } from "./Action";
import { ActionType } from "./ActionType";

let appState = new AppState();
export const reduce = (oldAppState: AppState = appState, action: Action): AppState => {
    const newState = { ...oldAppState };
    switch (action.type) {
        // case ActionType. :
    }
    return newState;
}