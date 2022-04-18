export const createBoard = (board) => {
    if(localStorage.getItem("boards") == null){
        var boards = []; 
        boards.push(board);
        localStorage.setItem("boards", JSON.stringify(boards));
    }else{
        var boards = JSON.parse(localStorage.getItem("boards"));
        boards.push(board);
        localStorage.setItem("boards", JSON.stringify(boards));
    }
    localStorage.setItem("board", JSON.stringify(board));
}

export const getBoardById = (boardId) => {
    if(localStorage.getItem("boards") == null){
        return null;
    }
    var boards = JSON.parse(localStorage.getItem("boards"));
    for(var i = 0; i < boards.length; i++){
        if(boards[i].id === boardId){
            return boards[i];
        }
    }
    return null;
}

export const getBoardsByUserId = (userId) => {
    if(localStorage.getItem("boards") == null){
        return [];
    }
    var boards = JSON.parse(localStorage.getItem("boards"));
    var boardsByUserId = [];
    for(var i = 0; i < boards.length; i++){
        if(boards[i].userId === userId){
            boardsByUserId.push(boards[i]);
        }
    }
    return boardsByUserId;
}

export const getAllBoards = () => {
    if(localStorage.getItem("boards") == null){
        return [];
    }
    var boards = JSON.parse(localStorage.getItem("boards"));
    return boards;
}

export const deleteBoard = (boardId) => {
    if(localStorage.getItem("boards") == null){
        return;
    }
    var boards = JSON.parse(localStorage.getItem("boards"));
    for(var i = 0; i < boards.length; i++){
        if(boards[i].id === boardId){
            boards.splice(i, 1);
            localStorage.setItem("boards", JSON.stringify(boards));
            return;
        }
    }
}