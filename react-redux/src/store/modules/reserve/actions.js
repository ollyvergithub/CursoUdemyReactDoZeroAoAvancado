export const addReserve = (trip) =>{
    return {
        type: "ADD_RESERVE",
        trip
    }
}

export const removeReserve = (id) => {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}