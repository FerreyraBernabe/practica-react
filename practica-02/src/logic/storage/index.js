export function initStorage(newBoard, newTurn) 
{
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));
}

export function initStorageFromLocalStorage({board, turn})
{
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));
}

export const getItem = (itemName) => JSON.parse(window.localStorage.getItem(itemName));

export function resetGameStorage()
{
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}