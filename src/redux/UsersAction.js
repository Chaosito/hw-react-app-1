export const SetUser = (user) => {
    return {
        type: "SetUser",
        payload: {
            id: user.id,
            name: user.name
        }
    }
}

export const UnsetUser = () => {
    return {
        type: "UnsetUser",
        payload: {
            id:null,
            name: null
        }
    }
}
