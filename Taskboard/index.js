document.addEventListener('DOMContentLoaded', () => {
    const columns = {
        todo: document.getElementById('todo-list'),
        process: document.getElementById('process-list'),
        done: document.getElementById('done-list')
    };

    // Initialize draggable elements and add buttons
    function initializeDraggable() {
        const items = document.querySelectorAll('.list li');
        items.forEach(item => {
            item.draggable = true;
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
        });
    }

    // Create new list item with text, update, and delete buttons
    function createListItem(text) {
        const li = document.createElement('li');
        li.id = text;
        
        const span = document.createElement('span');
        span.classList.add('item-text');
        span.textContent = text;
        
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.classList.add('update');
        updateButton.addEventListener('click', () => updateItem(li, span));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteItem(li));

        li.appendChild(span);
        li.appendChild(updateButton);
        li.appendChild(deleteButton);
        
        return li;
    }

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
    }

    function handleDragEnd(event) {
        event.target.classList.remove('dragging');
    }

    
    function handleDragOver(event) {
        event.preventDefault();
    }

    
    function handleDrop(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain');
        const item = document.getElementById(id);
        event.target.appendChild(item);
        saveToLocalStorage();
    }
    function updateItem(li, span) {
        const newText = prompt('Update item text:', span.textContent);
        if (newText) {
            span.textContent = newText;
            li.id = newText;
            saveToLocalStorage();
        }
    }
    function deleteItem(li) {
        li.remove();
        saveToLocalStorage();
    }

    function saveToLocalStorage() {
        const lists = {
            todo: Array.from(columns.todo.children).map(item => item.querySelector('.item-text').textContent),
            process: Array.from(columns.process.children).map(item => item.querySelector('.item-text').textContent),
            done: Array.from(columns.done.children).map(item => item.querySelector('.item-text').textContent)
        };
        localStorage.setItem('todoLists', JSON.stringify(lists));
    }

    function loadFromLocalStorage() {
        const lists = JSON.parse(localStorage.getItem('todoLists'));
        if (lists) {
            Object.keys(lists).forEach(key => {
                lists[key].forEach(text => {
                    const li = createListItem(text);
                    columns[key].appendChild(li);
                });
            });
            initializeDraggable();
        }
    }

    document.getElementById('add-item').addEventListener('click', () => {
        const itemText = prompt('Enter item text:');
        if (itemText) {
            const li = createListItem(itemText);
            columns.todo.appendChild(li);
            initializeDraggable();
            saveToLocalStorage();
        }
    });


    Object.values(columns).forEach(column => {
        column.addEventListener('dragover', handleDragOver);
        column.addEventListener('drop', handleDrop);
    });
    
    loadFromLocalStorage();
});
