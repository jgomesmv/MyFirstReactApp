import { Action } from './actions';
import { SEARCH_FILES } from './messageTypes';

export function searchFiles(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case SEARCH_FILES:
        return { ...state, files: state.files };
  }

  return state;
}