// Sample invoice data
let invoices = [
    {
        id: 'RT3080',
        createdAt: '2021-08-19',
        paymentDue: '2021-08-19',
        description: 'Re-branding',
        paymentTerms: 1,
        clientName: 'Jensen Huang',
        clientEmail: 'jensenh@mail.com',
        status: 'paid',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '106 Kendell Street',
            city: 'Sharrington',
            postCode: 'NR24 5WQ',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'Brand Guidelines',
                quantity: 1,
                price: 1800.90,
                total: 1800.90
            }
        ],
        total: 1800.90
    },
    {
        id: 'XM9141',
        createdAt: '2021-08-21',
        paymentDue: '2021-09-20',
        description: 'Graphic Design',
        paymentTerms: 30,
        clientName: 'Alex Grim',
        clientEmail: 'alexgrim@mail.com',
        status: 'pending',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '84 Church Way',
            city: 'Bradford',
            postCode: 'BD1 9PB',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'Banner Design',
                quantity: 1,
                price: 156.00,
                total: 156.00
            },
            {
                name: 'Email Design',
                quantity: 2,
                price: 200.00,
                total: 400.00
            }
        ],
        total: 556.00
    },
    {
        id: 'RG0314',
        createdAt: '2021-09-24',
        paymentDue: '2021-10-01',
        description: 'Website Redesign',
        paymentTerms: 7,
        clientName: 'John Morrison',
        clientEmail: 'jm@myco.com',
        status: 'paid',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '79 Dover Road',
            city: 'Westhall',
            postCode: 'IP19 3PF',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'Website Redesign',
                quantity: 1,
                price: 14002.33,
                total: 14002.33
            }
        ],
        total: 14002.33
    },
    {
        id: 'RT2080',
        createdAt: '2021-10-11',
        paymentDue: '2021-10-12',
        description: 'Logo Concept',
        paymentTerms: 1,
        clientName: 'Alysa Werner',
        clientEmail: 'alysa@email.co.uk',
        status: 'pending',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '63 Warwick Road',
            city: 'Carlisle',
            postCode: 'CA20 2TG',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'Logo Sketches',
                quantity: 1,
                price: 102.04,
                total: 102.04
            }
        ],
        total: 102.04
    },
    {
        id: 'AA1449',
        createdAt: '2021-10-07',
        paymentDue: '2021-10-14',
        description: 'Re-branding',
        paymentTerms: 7,
        clientName: 'Mellisa Clarke',
        clientEmail: 'mellisa.clarke@example.com',
        status: 'pending',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '46 Abbey Row',
            city: 'Cambridge',
            postCode: 'CB5 6EG',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'New Logo',
                quantity: 1,
                price: 1532.33,
                total: 1532.33
            },
            {
                name: 'Brand Guidelines',
                quantity: 1,
                price: 2500.00,
                total: 2500.00
            }
        ],
        total: 4032.33
    },
    {
        id: 'TY9141',
        createdAt: '2021-10-01',
        paymentDue: '2021-10-31',
        description: 'Landing Page Design',
        paymentTerms: 30,
        clientName: 'Thomas Wayne',
        clientEmail: 'thomas@dc.com',
        status: 'pending',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '3964 Queens Lane',
            city: 'Gotham',
            postCode: 'NR24 5WQ',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'Web Design',
                quantity: 1,
                price: 6155.91,
                total: 6155.91
            }
        ],
        total: 6155.91
    },
    {
        id: 'FV2353',
        createdAt: '2021-11-05',
        paymentDue: '2021-11-12',
        description: 'Logo Re-design',
        paymentTerms: 7,
        clientName: 'Anita Wainwright',
        clientEmail: 'anita@email.com',
        status: 'paid',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '3 Hilltop Lane',
            city: 'Carshalton',
            postCode: 'SM5 2QB',
            country: 'United Kingdom'
        },
        items: [
            {
                name: 'Logo Re-design',
                quantity: 1,
                price: 3102.04,
                total: 3102.04
            }
        ],
        total: 3102.04
    }
];

// Load invoices from localStorage or use sample data
function loadInvoices() {
    const stored = localStorage.getItem('invoices');
    if (stored) {
        invoices = JSON.parse(stored);
    } else {
        saveInvoices();
    }
}

// Save invoices to localStorage
function saveInvoices() {
    localStorage.setItem('invoices', JSON.stringify(invoices));
}

// DOM Elements
const invoiceListView = document.getElementById('invoiceListView');
const invoiceDetailView = document.getElementById('invoiceDetailView');
const invoiceList = document.getElementById('invoiceList');
const filterBtn = document.getElementById('filterBtn');
const filterMenu = document.getElementById('filterMenu');
const btnNewInvoice = document.getElementById('btnNewInvoice');
const btnBack = document.getElementById('btnBack');
const btnEdit = document.getElementById('btnEdit');
const btnDelete = document.getElementById('btnDelete');
const btnMarkPaid = document.getElementById('btnMarkPaid');
const btnSave = document.getElementById('btnSave');
const btnCancel = document.getElementById('btnCancel');
const btnAddItem = document.getElementById('btnAddItem');
const invoiceForm = document.getElementById('invoiceForm');
const invoiceSummary = document.getElementById('invoiceSummary');
const deleteModal = document.getElementById('deleteModal');
const btnConfirmDelete = document.getElementById('btnConfirmDelete');
const btnCancelDelete = document.getElementById('btnCancelDelete');

let currentInvoice = null;
let isEditMode = false;
let activeFilters = ['all'];

// Initialize app
function init() {
    loadInvoices();
    loadTheme();
    renderInvoiceList();
    attachEventListeners();
}

// Load theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
}

// Attach event listeners
function attachEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);

    // Filter dropdown
    filterBtn.addEventListener('click', () => {
        filterMenu.classList.toggle('active');
        filterBtn.classList.toggle('active');
    });

    // Close filter menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter-dropdown')) {
            filterMenu.classList.remove('active');
            filterBtn.classList.remove('active');
        }
    });

    // Filter checkboxes
    const filterCheckboxes = filterMenu.querySelectorAll('input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.value === 'all') {
                if (e.target.checked) {
                    filterCheckboxes.forEach(cb => {
                        if (cb.value !== 'all') cb.checked = false;
                    });
                    activeFilters = ['all'];
                }
            } else {
                document.querySelector('input[value="all"]').checked = false;
                activeFilters = Array.from(filterCheckboxes)
                    .filter(cb => cb.checked && cb.value !== 'all')
                    .map(cb => cb.value);

                if (activeFilters.length === 0) {
                    document.querySelector('input[value="all"]').checked = true;
                    activeFilters = ['all'];
                }
            }
            renderInvoiceList();
        });
    });

    // New invoice button
    btnNewInvoice.addEventListener('click', createNewInvoice);

    // Back button
    btnBack.addEventListener('click', showListView);

    // Edit button
    btnEdit.addEventListener('click', () => {
        isEditMode = true;
        showInvoiceForm();
    });

    // Delete button
    btnDelete.addEventListener('click', () => {
        document.getElementById('deleteInvoiceId').textContent = `#${currentInvoice.id}`;
        deleteModal.classList.add('active');
    });

    // Mark as paid button
    btnMarkPaid.addEventListener('click', markAsPaid);

    // Save button
    btnSave.addEventListener('click', saveInvoice);

    // Cancel button
    btnCancel.addEventListener('click', () => {
        if (currentInvoice) {
            showInvoiceSummary();
        } else {
            showListView();
        }
    });

    // Add item button
    btnAddItem.addEventListener('click', addNewItem);

    // Delete modal buttons
    btnConfirmDelete.addEventListener('click', confirmDelete);
    btnCancelDelete.addEventListener('click', () => {
        deleteModal.classList.remove('active');
    });

    // Close modal when clicking outside
    deleteModal.addEventListener('click', (e) => {
        if (e.target === deleteModal) {
            deleteModal.classList.remove('active');
        }
    });
}

// Render invoice list
function renderInvoiceList() {
    const filteredInvoices = activeFilters.includes('all')
        ? invoices
        : invoices.filter(inv => activeFilters.includes(inv.status));

    document.getElementById('invoiceCount').textContent = filteredInvoices.length;

    if (filteredInvoices.length === 0) {
        invoiceList.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 48px;">No invoices found</p>';
        return;
    }

    invoiceList.innerHTML = filteredInvoices.map(invoice => `
        <div class="invoice-card" data-id="${invoice.id}">
            <div class="invoice-id"><span>#</span>${invoice.id}</div>
            <div class="invoice-date">Due ${formatDate(invoice.paymentDue)}</div>
            <div class="invoice-client">${invoice.clientName}</div>
            <div class="invoice-amount">$ ${formatAmount(invoice.total)}</div>
            <span class="status-badge ${invoice.status}">${invoice.status}</span>
        </div>
    `).join('');

    // Add click event to each invoice card
    document.querySelectorAll('.invoice-card').forEach(card => {
        card.addEventListener('click', () => {
            const invoiceId = card.dataset.id;
            showInvoiceDetail(invoiceId);
        });
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

// Format amount
function formatAmount(amount) {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Show invoice detail
function showInvoiceDetail(invoiceId) {
    currentInvoice = invoices.find(inv => inv.id === invoiceId);
    if (!currentInvoice) return;

    isEditMode = false;
    invoiceListView.style.display = 'none';
    invoiceDetailView.style.display = 'block';

    // Update detail header
    document.getElementById('detailStatusBadge').className = `status-badge ${currentInvoice.status}`;
    document.getElementById('detailStatusBadge').textContent = currentInvoice.status;

    // Show/hide mark as paid button
    btnMarkPaid.style.display = currentInvoice.status === 'paid' ? 'none' : 'block';

    showInvoiceSummary();
}

// Show invoice summary (view mode)
function showInvoiceSummary() {
    invoiceForm.style.display = 'none';
    invoiceSummary.style.display = 'block';

    document.getElementById('invoiceId').textContent = currentInvoice.id;

    // Populate summary
    document.getElementById('summaryFromAddress').innerHTML = `
        ${currentInvoice.senderAddress.street}<br>
        ${currentInvoice.senderAddress.city}<br>
        ${currentInvoice.senderAddress.postCode}<br>
        ${currentInvoice.senderAddress.country}
    `;

    document.getElementById('summaryInvoiceDate').textContent = formatDate(currentInvoice.createdAt);
    document.getElementById('summaryPaymentDue').textContent = formatDate(currentInvoice.paymentDue);
    document.getElementById('summaryClientName').textContent = currentInvoice.clientName;

    document.getElementById('summaryToAddress').innerHTML = `
        ${currentInvoice.clientAddress.street}<br>
        ${currentInvoice.clientAddress.city}<br>
        ${currentInvoice.clientAddress.postCode}<br>
        ${currentInvoice.clientAddress.country}
    `;

    document.getElementById('summaryEmail').textContent = currentInvoice.clientEmail;

    // Populate items table
    const itemsBody = document.getElementById('summaryItemsBody');
    itemsBody.innerHTML = currentInvoice.items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$ ${formatAmount(item.price)}</td>
            <td>$ ${formatAmount(item.total)}</td>
        </tr>
    `).join('');

    document.getElementById('summaryTotalAmount').textContent = `$ ${formatAmount(currentInvoice.total)}`;
}

// Show invoice form (edit mode)
function showInvoiceForm() {
    invoiceForm.style.display = 'block';
    invoiceSummary.style.display = 'none';

    if (currentInvoice) {
        document.getElementById('formTitle').innerHTML = `Edit #<span id="invoiceId">${currentInvoice.id}</span>`;

        // Populate form fields
        document.getElementById('billFromStreet').value = currentInvoice.senderAddress.street;
        document.getElementById('billFromCity').value = currentInvoice.senderAddress.city;
        document.getElementById('billFromPostCode').value = currentInvoice.senderAddress.postCode;
        document.getElementById('billFromCountry').value = currentInvoice.senderAddress.country;

        document.getElementById('clientName').value = currentInvoice.clientName;
        document.getElementById('clientEmail').value = currentInvoice.clientEmail;
        document.getElementById('billToStreet').value = currentInvoice.clientAddress.street;
        document.getElementById('billToCity').value = currentInvoice.clientAddress.city;
        document.getElementById('billToPostCode').value = currentInvoice.clientAddress.postCode;
        document.getElementById('billToCountry').value = currentInvoice.clientAddress.country;

        document.getElementById('invoiceDate').value = currentInvoice.createdAt;
        document.getElementById('paymentTerms').value = currentInvoice.paymentTerms;
        document.getElementById('projectDescription').value = currentInvoice.description;

        // Populate items
        renderItems(currentInvoice.items);
    }
}

// Render items in form
function renderItems(items) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = items.map((item, index) => `
        <div class="item-row" data-index="${index}">
            <input type="text" class="item-name" placeholder="Item Name" value="${item.name}">
            <input type="number" class="item-quantity" placeholder="0" value="${item.quantity}" min="1">
            <input type="number" class="item-price" placeholder="0.00" value="${item.price}" step="0.01" min="0">
            <div class="item-total">$ ${formatAmount(item.total)}</div>
            <button type="button" class="btn-delete-item" data-index="${index}">
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55556H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"/>
                </svg>
            </button>
        </div>
    `).join('');

    // Add event listeners to item inputs
    document.querySelectorAll('.item-quantity, .item-price').forEach(input => {
        input.addEventListener('input', updateItemTotal);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll('.btn-delete-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            deleteItem(index);
        });
    });
}

// Update item total
function updateItemTotal(e) {
    const row = e.target.closest('.item-row');
    const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
    const price = parseFloat(row.querySelector('.item-price').value) || 0;
    const total = quantity * price;
    row.querySelector('.item-total').textContent = `$ ${formatAmount(total)}`;
}

// Add new item
function addNewItem() {
    const itemList = document.getElementById('itemList');
    const newIndex = itemList.children.length;

    const newItem = document.createElement('div');
    newItem.className = 'item-row';
    newItem.dataset.index = newIndex;
    newItem.innerHTML = `
        <input type="text" class="item-name" placeholder="Item Name" value="">
        <input type="number" class="item-quantity" placeholder="0" value="1" min="1">
        <input type="number" class="item-price" placeholder="0.00" value="0.00" step="0.01" min="0">
        <div class="item-total">$ 0.00</div>
        <button type="button" class="btn-delete-item" data-index="${newIndex}">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55556H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"/>
            </svg>
        </button>
    `;

    itemList.appendChild(newItem);

    // Add event listeners
    newItem.querySelectorAll('.item-quantity, .item-price').forEach(input => {
        input.addEventListener('input', updateItemTotal);
    });

    newItem.querySelector('.btn-delete-item').addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.dataset.index);
        deleteItem(index);
    });
}

// Delete item
function deleteItem(index) {
    const itemList = document.getElementById('itemList');
    const items = Array.from(itemList.children);

    if (items.length > 1) {
        items[index].remove();

        // Reindex remaining items
        Array.from(itemList.children).forEach((item, newIndex) => {
            item.dataset.index = newIndex;
            item.querySelector('.btn-delete-item').dataset.index = newIndex;
        });
    } else {
        alert('Invoice must have at least one item');
    }
}

// Create new invoice
function createNewInvoice() {
    const newId = generateInvoiceId();
    const today = new Date().toISOString().split('T')[0];

    currentInvoice = {
        id: newId,
        createdAt: today,
        paymentDue: today,
        description: '',
        paymentTerms: 30,
        clientName: '',
        clientEmail: '',
        status: 'draft',
        senderAddress: {
            street: '19 Union Terrace',
            city: 'London',
            postCode: 'E1 3EZ',
            country: 'United Kingdom'
        },
        clientAddress: {
            street: '',
            city: '',
            postCode: '',
            country: ''
        },
        items: [
            {
                name: '',
                quantity: 1,
                price: 0,
                total: 0
            }
        ],
        total: 0
    };

    isEditMode = true;
    invoiceListView.style.display = 'none';
    invoiceDetailView.style.display = 'block';

    // Hide detail header for new invoice
    document.querySelector('.detail-header').style.display = 'none';

    document.getElementById('formTitle').innerHTML = `New Invoice`;
    showInvoiceForm();

    // Populate form with new invoice data
    document.getElementById('billFromStreet').value = currentInvoice.senderAddress.street;
    document.getElementById('billFromCity').value = currentInvoice.senderAddress.city;
    document.getElementById('billFromPostCode').value = currentInvoice.senderAddress.postCode;
    document.getElementById('billFromCountry').value = currentInvoice.senderAddress.country;

    document.getElementById('clientName').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('billToStreet').value = '';
    document.getElementById('billToCity').value = '';
    document.getElementById('billToPostCode').value = '';
    document.getElementById('billToCountry').value = '';

    document.getElementById('invoiceDate').value = today;
    document.getElementById('paymentTerms').value = 30;
    document.getElementById('projectDescription').value = '';

    renderItems(currentInvoice.items);
}

// Generate random invoice ID
function generateInvoiceId() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter1 = letters.charAt(Math.floor(Math.random() * letters.length));
    const letter2 = letters.charAt(Math.floor(Math.random() * letters.length));
    const numbers = Math.floor(1000 + Math.random() * 9000);
    return `${letter1}${letter2}${numbers}`;
}

// Calculate payment due date
function calculatePaymentDue(invoiceDate, paymentTerms) {
    const date = new Date(invoiceDate);
    date.setDate(date.getDate() + parseInt(paymentTerms));
    return date.toISOString().split('T')[0];
}

// Save invoice
function saveInvoice() {
    // Collect form data
    const formData = {
        senderAddress: {
            street: document.getElementById('billFromStreet').value,
            city: document.getElementById('billFromCity').value,
            postCode: document.getElementById('billFromPostCode').value,
            country: document.getElementById('billFromCountry').value
        },
        clientName: document.getElementById('clientName').value,
        clientEmail: document.getElementById('clientEmail').value,
        clientAddress: {
            street: document.getElementById('billToStreet').value,
            city: document.getElementById('billToCity').value,
            postCode: document.getElementById('billToPostCode').value,
            country: document.getElementById('billToCountry').value
        },
        createdAt: document.getElementById('invoiceDate').value,
        paymentTerms: parseInt(document.getElementById('paymentTerms').value),
        description: document.getElementById('projectDescription').value,
        items: []
    };

    // Collect items
    const itemRows = document.querySelectorAll('.item-row');
    itemRows.forEach(row => {
        const name = row.querySelector('.item-name').value;
        const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
        const price = parseFloat(row.querySelector('.item-price').value) || 0;
        const total = quantity * price;

        if (name) {
            formData.items.push({ name, quantity, price, total });
        }
    });

    // Validate
    if (!formData.clientName || !formData.clientEmail || formData.items.length === 0) {
        alert('Please fill in all required fields and add at least one item');
        return;
    }

    // Calculate total
    formData.total = formData.items.reduce((sum, item) => sum + item.total, 0);

    // Calculate payment due
    formData.paymentDue = calculatePaymentDue(formData.createdAt, formData.paymentTerms);

    // Update or create invoice
    if (currentInvoice && invoices.find(inv => inv.id === currentInvoice.id)) {
        // Update existing invoice
        const index = invoices.findIndex(inv => inv.id === currentInvoice.id);
        invoices[index] = { ...invoices[index], ...formData };
        currentInvoice = invoices[index];
    } else {
        // Create new invoice
        const newInvoice = {
            id: currentInvoice.id,
            status: 'pending',
            ...formData
        };
        invoices.push(newInvoice);
        currentInvoice = newInvoice;
    }

    saveInvoices();

    // Show detail header again
    document.querySelector('.detail-header').style.display = 'flex';

    // Update detail view
    document.getElementById('detailStatusBadge').className = `status-badge ${currentInvoice.status}`;
    document.getElementById('detailStatusBadge').textContent = currentInvoice.status;
    btnMarkPaid.style.display = currentInvoice.status === 'paid' ? 'none' : 'block';

    showInvoiceSummary();
}

// Mark invoice as paid
function markAsPaid() {
    if (currentInvoice) {
        const index = invoices.findIndex(inv => inv.id === currentInvoice.id);
        invoices[index].status = 'paid';
        currentInvoice.status = 'paid';
        saveInvoices();

        document.getElementById('detailStatusBadge').className = `status-badge paid`;
        document.getElementById('detailStatusBadge').textContent = 'paid';
        btnMarkPaid.style.display = 'none';
    }
}

// Confirm delete
function confirmDelete() {
    if (currentInvoice) {
        invoices = invoices.filter(inv => inv.id !== currentInvoice.id);
        saveInvoices();
        deleteModal.classList.remove('active');
        showListView();
    }
}

// Show list view
function showListView() {
    currentInvoice = null;
    isEditMode = false;
    invoiceListView.style.display = 'block';
    invoiceDetailView.style.display = 'none';
    document.querySelector('.detail-header').style.display = 'flex';
    renderInvoiceList();
}

// Initialize the app
init();
