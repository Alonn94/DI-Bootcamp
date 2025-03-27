import db from '../configuration/db.js';

// fetching all absence requests
export const getAllRequests = async (req, res) => {
    try {
        const requests = await db('absence_requests')
            .select(
                'id',
                'employee_id',
                'leave_type',
                'request_date',
                'duration',
                'request_details',
                'status'
            )
            .where({ status: 'Pending' })
            .orderBy('request_date', 'desc');

        res.status(200).json(requests);

    } catch (error) {
        console.error('Error fetching all requests:', error);
        res.status(500).json({ error: 'Failed to fetch requests' });
    }
};


export const updateRequestStatus = async (req, res) => {
  const { id, status } = req.body;
  try {
    const updated = await db('absence_requests')
      .where({ id })
      .update({ status });

    if (updated) {
      res.status(200).json({ message: 'Status updated successfully' });
    } else {
      res.status(404).json({ error: 'Request not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update request status' });
  }
    if (status === 'approved') {
      try {
        const request = await db('absence_requests')
          .select(['employee_id', 'duration'])
          .where({ id })
          .first();

        if (request) {
          await db('r_employees')
            .where({ employee_id: request.employee_id })
            .update({
              leave_balance: db.raw('leave_balance - ?', [request.duration]),
              used_leave: db.raw('used_leave + ?', [request.duration]),
            });
        }
      } catch (error) {
        console.error('Error updating employee leave balance:', error);
        res.status(500).json({ error: 'Failed to update employee leave balance' });
        return;
      }
    }
  };