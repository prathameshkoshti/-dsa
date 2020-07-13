const binarySearch = (array, element, low, high) => {
    try {
        if (high >= low) {
            const mid = parseInt((low + high ) / 2);
            if (array[mid] === element) return mid + 1;
            else if (element > array[mid]) return binarySearch(array, element, mid + 1, high);
            else return binarySearch(array, element, low, mid - 1);
        }
        return -1;
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
}

export default binarySearch;