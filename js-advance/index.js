// Initialize item count
let itemCount = 0;

// Update the status display
function updateStatus(method) {
    const statusBox = document.getElementById('status');
    statusBox.textContent = `Status: ${itemCount} item(s) added using ${method}`;
}

// Logger object to handle logging of cart actions
const CartLogger = {
    addItem: function (description, method) {
        const cartList = document.getElementById('cartList');
        const listItem = document.createElement('li');
        listItem.textContent = description;
        cartList.appendChild(listItem);
        
        // Update the item count and status
        itemCount++;
        updateStatus(method);
        
        // Alert the action performed
        alert(`Item added using ${method}`);
    }
};

// Contexts for different actions
const callContext = { method: 'call' };
const applyContext = { method: 'apply' };
const bindContext = { method: 'bind' };

// Create a bound version of addItem using bind method
const boundAddItem = CartLogger.addItem.bind(bindContext, 'Item: Bound Method', 'bind');

// Event listeners for each button
document.getElementById('btnCall').addEventListener('click', function () {
    // Using call to add an item
    CartLogger.addItem.call(callContext, 'Item: Call Method', 'call');
});

document.getElementById('btnApply').addEventListener('click', function () {
    // Using apply to add an item
    CartLogger.addItem.apply(applyContext, ['Item: Apply Method', 'apply']);
});

document.getElementById('btnBind').addEventListener('click', function () {
    // Using the pre-bound method created with bind
    boundAddItem();
});

// Event listener for submit button
document.getElementById('submitBtn').addEventListener('click', function () {
    alert('Submitted items: ' + itemCount);
    itemCount = 0;
    document.getElementById('cartList').innerHTML = '';
    updateStatus('none');
});