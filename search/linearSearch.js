const linearSearch = (array, element) => {
    try {
        for(let i = 0; i < array.length; i++) {
            if(array[i] == element) {
                return i + 1;
            }
        }
        return null;
    }
    catch(error) {
        console.error(`Error: ${error}`);
    }
}

export default linearSearch;