let array = [];
function displayArray() {
    const arrayDisplay = document.getElementById('display');
    arrayDisplay.innerHTML = ''; 

    array.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'array-item';
        itemDiv.textContent = item;
        arrayDisplay.appendChild(itemDiv);
    });


    arrayDisplay.style.display = array.length ? 'block' : 'none';
}

function addArrays() {
    const element = document.getElementById('element').value;
    if (element) {
        array.push(element);
    
        document.getElementById('element').value = ''; 
        displayArray();
        document.getElementById("message").textContent = `Added ${element} to array.`;
    } else {
        alert("Please enter a valid element!");
    }
}

function push() {
    const element = prompt("Write element to push in array..");
    if (element) {
        array.push(element);
        displayArray();
        document.getElementById("message").textContent = "Push() array method adds element to the end.";
    }
}

function pop() {
    const removedElement = array.pop();
    displayArray();
    document.getElementById("message").textContent = removedElement ? `Pop() removed: ${removedElement}` : "Array is empty.";
}

function shift() {
    const removedElement = array.shift();
    displayArray();
    document.getElementById("message").textContent = removedElement ? `Shift() removed: ${removedElement}` : "Array is empty.";
}

function unshift() {
    const element = prompt("Write element to unshift in array..");
    if (element) {
        array.unshift(element);
        displayArray();
        document.getElementById("message").textContent = "Unshift() array method adds element to the start.";
    }
}

function splice() {
    const index = parseInt(prompt("Enter index to splice:"));
    const count = parseInt(prompt("Enter number of elements to remove:"));
    const spliceArray = array.splice(index, count);
    alert("Removed items: " + spliceArray);
    displayArray();
}

function slice() {
    const start = parseInt(prompt("Enter start index:"));
    const end = parseInt(prompt("Enter end index:"));
    const slicedArray = array.slice(start, end);
    alert(`Sliced Array: { ${slicedArray.join(', ')} }`);
}

function restart() {
    array = [];
    document.getElementById('element').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('display').innerHTML = '';
    displayArray();
}
