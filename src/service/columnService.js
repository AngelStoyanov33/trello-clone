export const createColumn = (column) => {
    if(localStorage.getItem("columns") == null) {
        var columns = [];
        columns.push(column);
        localStorage.setItem("columns", JSON.stringify(columns));
    } else {
        var columns = JSON.parse(localStorage.getItem("columns"));
        columns.push(column);
        localStorage.setItem("columns", JSON.stringify(columns));
    }
}

export const getAllColumnsByBoardId = (boardId) => {
    if(localStorage.getItem("columns") == null) {
        return [];
    }
    var columns = JSON.parse(localStorage.getItem("columns"));
    var columnsByBoardId = [];
    for(var i = 0; i < columns.length; i++) {
        if(columns[i].boardId === boardId) {
            columnsByBoardId.push(columns[i]);
        }
    }
    return columnsByBoardId;
}

export const deleteColumn = (columnId) => {
    if(localStorage.getItem("columns") == null) {
        return;
    }
    var columns = JSON.parse(localStorage.getItem("columns"));
    for(var i = 0; i < columns.length; i++) {
        if(columns[i].columnId === columnId) {
            columns.splice(i, 1);
            localStorage.setItem("columns", JSON.stringify(columns));
            return;
        }
    }
}

