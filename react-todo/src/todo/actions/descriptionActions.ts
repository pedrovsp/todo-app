export const CHANGE_DESC_INPUT = 'CHANGE_DESC_INPUT';

export const changeDescription = (event: string) => {
    return {
        type: CHANGE_DESC_INPUT,
        payload: event
    }
}


