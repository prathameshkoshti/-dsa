const bubbleSort = array => {
    let sortedArray = [...array];
    try {
        if (sortedArray.length > 0) {
            for (let i = 0; i <= sortedArray.length - 1; i++) {
                for (let j = 0; j <= sortedArray.length - i - 1; j++) {
                    if (sortedArray[j] > sortedArray[j + 1]) {
                        let temp;
                        temp = sortedArray[j];
                        sortedArray[j] = sortedArray[j + 1];
                        sortedArray[j + 1] = temp;
                    }
                }
            }

            return sortedArray;
        }
        else {
            console.log('Not an array');
        }
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}

export default bubbleSort;