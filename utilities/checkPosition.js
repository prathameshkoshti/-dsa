const checkPosition = (position, element) => {
    if(position !== null) {
        console.log(`Element ${element} found at position: ${position}`);
    }
    else {
        console.log(`Element ${element} not found in the array.`);
    }
}

export default checkPosition;