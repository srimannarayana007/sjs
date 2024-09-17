// Counter to keep track of the number of logged items
let logCounter = 0;

// Function to update the status box with the current count
function updateStatus() {
    const statusBox = document.getElementById('status');
    statusBox.textContent = Total Items Added: ${logCounter};
}

// Logger object with a method to log event details
const Logger = {
    
    logEvent: function (event, description, loggerName,carname,company ) {
        logCounter++; // Increment the counter each time an event is logged
        updateStatus(); // Update the status with the new count
        
        const logList = document.getElementById('logList');
        const listItem = document.createElement('li');
        listItem.textContent = `Event:${event.type},Description: ${description}, item: ${loggerName},name: ${carname},company: ${company} `;
        logList.appendChild(listItem);

        // Alert message to indicate which method was used
        alert`(Logged using ${loggerName}: ${description})`;
    }
};

// Context objects for different buttons
const context1 = { loggerName: 'Logger 1' };
const context2 = { loggerName: 'Logger 2' };
const context3 = { loggerName: 'Logger 3' };

// Bound logEvent method using bind
const boundLogEvent3 = Logger.logEvent.bind(context3, { type: 'click' }, 'using bind  method', 'Car','Thar', 'Mahendra');

// Event listeners for the buttons
document.getElementById('button1').addEventListener('click', function (event) {
    // Using call method
    Logger.logEvent.call(context1, event, 'using call  method', 'Bus','Delux','Ashok leyland');
});

document.getElementById('button2').addEventListener('click', function (event) {
    // Using apply method
    Logger.logEvent.apply(context2, [event, 'Using apply method', 'Truck','SuperAce','TATA']);
});

document.getElementById('button3').addEventListener('click', function () {
    // Using the bound method created with bind
    boundLogEvent3();
});