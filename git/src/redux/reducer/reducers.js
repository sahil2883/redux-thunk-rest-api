export const Show = (state = { data: [] }, action) => {
    switch (action.type) {
        case "SHOW":
            return {
                data: action.payload
            }
        default: return state;
    }
}


export const Add = (state = { product: [] }, action) => {
    switch (action.type) {
        case "ADD":
            const id = action.payload.val.id
            const Index = state.product.findIndex((e) => e.val.id === id)
            if (Index >= 0) {
                 state.product[Index].qty +=1
            } else {
                const temp = { ...action.payload, qty: 1 }
                return {
                    product: [...state.product, temp]
                }
            }
        default: return state;
    }
}