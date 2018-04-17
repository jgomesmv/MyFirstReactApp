import * as MessageTypes from './messageTypes'

export interface SearchFiles {
    type: MessageTypes.SEARCH_FILES;
}

export type Action = SearchFiles;

export function searchFiles(): SearchFiles {
    return {
        type: MessageTypes.SEARCH_FILES
    }
}