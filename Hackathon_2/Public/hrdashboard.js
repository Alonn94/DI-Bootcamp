const requestsTableBody = document.getElementById('admin-requests-body');

// Fetching for Dashboard & Pending Request
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM is ready');
    try {
        const response = await fetch('http://localhost:4010/admin/requests');
        const data = await response.json();
        console.log(data);

        const requests = data;

        // Render all requests
        requestsTableBody.innerHTML = '';
        requests.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.employee_id}</td>
                <td>${request.leave_type}</td>
                <td>${request.request_date}</td>
                <td>${request.duration}</td>
                <td>${request.request_details}</td>
                <td>${request.status}</td>
                <td><button class="reject-btn" data-id="${request.id}">reject</button></td>
                <td><button class="approve-btn" data-id="${request.id}">approve</button></td>
            `;
            requestsTableBody.appendChild(row);

            const ApproveButton = row.querySelector('.approve-btn');
            ApproveButton.addEventListener('click', async (e) => {
                e.preventDefault();
                const requestId = e.target.dataset.id;
                try {
                    const response = await fetch(`http://localhost:4010/admin/requests`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: requestId, status: 'approved' })
                    });

                    const data = await response.json();
                    console.log(data);
                    if (response.ok) {
                        console.log('Request approved:', data);
                        row.remove();
                    } else {
                        console.error('Request approval failed:', data);
                    }
                } catch (error) {
                    console.error('Network error:', error);
                }
            });

            const RejectButton = row.querySelector('.reject-btn');
            RejectButton.addEventListener('click', async (e) => {
                e.preventDefault();
                const requestId = e.target.dataset.id;
                try {
                    const response = await fetch(`http://localhost:4010/admin/requests`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: requestId , status: 'rejected' })
                    });

                    const data = await response.json();
                    console.log(data);
                    if (response.ok) {
                        console.log('Request rejected:', data);
                        row.remove();
                    } else {
                        console.error('Request reject failed:', data);
                    }
                } catch (error) {
                    console.error('Network error:', error);
                }
            });
        });

    } catch (error) {
        console.error('Network error:', error);
    }
});

