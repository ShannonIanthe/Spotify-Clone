export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing
   // token: "BQB6c0xrbTanwEtkdpFVvNHverqIzu9f4qCLYWAsqxNqrRiYX2ZfAbDERhIzF-ywsju5DkcShlfNyimr9bYh5xoxf_9cn8-lWxE5-BqobClnFJLKtdFOdmaLJf7lgPfPLKolL2Pgd0tvGW5-T6zj1KrUqoa9"
};

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }

        default: 
        return state; 
}
}

export default reducer;