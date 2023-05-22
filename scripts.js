let array = [];

function createArray() {
    const arrayLength = document.getElementById("arrayLengthInput").value;
    for (let i = 0; i < arrayLength; i++) {
        const element = prompt(`Enter element #${i+1}`);
        array.push(element);
    }
    document.getElementById("arrayContainer").style.display = "block";
    displayArray();
}

function displayArray() {
    const list = document.getElementById("arrayList");
    list.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = array[i];
        list.appendChild(listItem);
    }
}

function sortArray() {
    array.sort();
    displayArray();
}

function removeElements() {
    array.splice(1, 3);
    displayModifiedArray();
}

function displayModifiedArray() {
    const list = document.getElementById("modifiedList");
    list.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = array[i];
        list.appendChild(listItem);
    }
}
