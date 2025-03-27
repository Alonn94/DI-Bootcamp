//Dashboard of days

const totalLeave = document.getElementById('total-leave-days');
const usedLeave = document.getElementById('used-leave-days');
const leaveBalance = document.getElementById('remaining-leave-balance');
const newRequestButton = document.getElementById('submit-new-request');

//Pending Request

const requestsTableBody= document.getElementById('requests-body');

//New Request   
const NewRequestType = document.getElementById('new-request-type');
const requestDateInput = document.getElementById('new-request-date');
const NewRequestDuration = document.getElementById('new-request-duration');
requestDateInput.valueAsDate = new Date();
const NewRequestDetails = document.getElementById('new-request-details');
const submitButton = document.getElementById('submit-new-request');


//Fetching for Dashboard & Pending Request
document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM is ready');
  try {
    const response = await fetch('http://localhost:4010/1');
    const data = await response.json();
    console.log(data);

    const overview = data.overview;
    const requests = data.requests;


        //dashboard days
    totalLeave.textContent = overview.total_leave;
    usedLeave.textContent = overview.used_leave;
    leaveBalance.textContent = overview.leave_balance;

        //Pending Request

    requestsTableBody.innerHTML='';
    requests.forEach(request => {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${request.id}</td>
      <td>${request.leave_type}</td>
      <td>${request.request_date}</td>
      <td>${request.duration}</td>
      <td>${request.status}</td>
      <td><button class="delete-btn" data-id="${request.id}">delete</button></td>
    
      `;
      requestsTableBody.appendChild(row);
    
      // Attach event listener to the delete button 

      const deleteButton = row.querySelector('.delete-btn');
      deleteButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const requestId = e.target.dataset.id;
        try {
          const response = await fetch(`http://localhost:4010/1`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: requestId })
          });
    
          const data = await response.json();
          console.log(data);
          if (response.ok) {
            console.log('Request deleted:', data);
            row.remove(); 
          } else {
            console.error('Request delete failed:', data);
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


//Submitting New Request


submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const duration = parseInt(NewRequestDuration.value);
    const LeaveBalance = parseInt(leaveBalance.textContent);
    if ( NewRequestDuration.value && NewRequestType.value === '') {
        alert('Please select a leave type');
        return;
    }
    if (duration > LeaveBalance) {
        alert (`You only have ${LeaveBalance} days remaining, please enter a shorter duration.`);
        return;
    }
    try {
        const response = await fetch('http://localhost:4010/1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                leave_type: NewRequestType.value,
                request_date: requestDateInput.value,
                duration: NewRequestDuration.value,
                request_details: NewRequestDetails.value,
            })
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            console.log('Request submitted:', data);
            NewRequestType.value = '';
            requestDateInput.valueAsDate = new Date();
            NewRequestDuration.value = '';
            NewRequestDetails.value = '';
            window.location.reload();
        } else {
            console.error('Request failed:', data);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
});









