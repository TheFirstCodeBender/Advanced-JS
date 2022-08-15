// fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        removeItemsFromList();
    }
};

removeItemsFromList();


// to fix this we can use setTimeout to remove the recursive function from the call stack to prevent stack overflow
// and move ot to be handled by the web api and eventually moved to the callbac queue.

function removeItemsFromListA() {
    var item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList(), 0);
    }
};

removeItemsFromListA();

// alternatively you can turn the function to a async function

async function removeItemsFromListAsync() {
    var item = await list.pop();

    if (item) {
        removeItemsFromListAsync();
    }
}