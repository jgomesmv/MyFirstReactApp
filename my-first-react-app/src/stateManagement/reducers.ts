import { Action } from './actions';
import { SEARCH_FILES } from './messageTypes';

export function quickSearchHandleAction(state: IQuickSearchState, action: Action): IQuickSearchState {
  switch (action.type) {
    case SEARCH_FILES:
        return { ...state, files: state.files };
    default:
        return { ...state };
  }
}