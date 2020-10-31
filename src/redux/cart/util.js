
export const remove = (items, toRemove) => {

    const idx = items.findIndex(item =>item.id === toRemove);
    console.log(idx)
}
export const inc = (items, newItem) => {
    if(!newItem) {
        return
    }
    const match = items.find(item =>item.id === newItem.id);

    if(match) {

        return items.map(item=>item.id===match.id?{...match, quantity:match.quantity+1}:item)
    }

    return [...items, newItem]

}
export const dec = (items, newItem) => {

    const match = items.find(item =>item.id === newItem.id);

    if(match.quantity > 1) {

        return items.map(item=>item.id===match.id?{...match, quantity:match.quantity-1}:item)
    }else {
        remove(items,newItem.id)
    }

}