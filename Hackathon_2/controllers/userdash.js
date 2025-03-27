import db from '../configuration/db.js';

export const getFullDashboard = async (req, res) => {
    try {
        const userId = 1;

        // Run both queries in parallel
        const [overview, requests] = await Promise.all([
            db.select('total_leave', 'used_leave', 'leave_balance')
                .from('r_employees')
                .where({ employee_id: userId }),

            db.select('id', 'leave_type', 'request_date', 'duration', 'request_details', 'status')
                .from('absence_requests')
                .where({ employee_id: userId })
        ]);

        if (overview.length === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(200).json({
            overview: overview[0],
            requests: requests 
        });

    } catch (err) {
        console.error('Error fetching dashboard data:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

export const SubmitNewRequest = async (req, res) => {
    const userId = 1;
    const { leave_type, request_date, duration, request_details } = req.body;
    
    try {
        const result = await db('absence_requests')
        .insert({ employee_id: userId, leave_type, request_date, duration, request_details })
        .returning('*');
    
        res.status(201).json(result[0]);
    
    } catch (err) {
        console.error('Error submitting new request:', err);
        res.status(500).json({ error: 'Server error' });
    }
};


export const DeleteRequest = async (req, res) => {
    const {id} = req.body;
    try {
        const result = await db('absence_requests')
            .where({id})
            .del()
            .returning('*');

        if (result.length > 0) {
            res.json({ message: 'Request deleted successfully' });
        } else {
            res.status(404).json({ error: 'Request not found' });
        }

    } catch (err) {
        console.error('Error deleting request:', err);
        res.status(500).json({ error: 'Server error' });
    }
}




// exports.updatePost = async (req, res) => {
//   const id = parseInt(req.params.id);
//   const { title, content } = req.body;
//   try {
//     const result = await db('posts').where({ id }).update({ title, content }).returning('*');
//     if (result.length > 0) {
//       res.json(result[0]);
//     } else {
//       res.status(404).json({ error: 'Post not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

