import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomPagination from 'components/common/CustomPagination';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'description',
    headerName: 'Description',
    // flex: 1.5,
    width: 200,
  },
  {
    field: 'due',
    headerName: 'Due',
    // type: 'date',
    // flex: 1,
    width: 200,
  },
  {
    field: 'overdue',
    headerName: 'Overdue',
    // type: 'date',
    // flex: 1,
    width: 200,
  },
  {
    field: 'notify',
    headerName: 'Notify',
    // flex: 1,
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    // flex: 1,
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    description: 'Urgent Safety Recall',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'David Demo',
    status: 'Completed',
  },
  {
    id: 2,
    description: 'Maintenance Checkup',
    due: '12/04/2022',
    overdue: '15/04/2022',
    notify: 'John Smith',
    status: 'In Progress',
  },
  {
    id: 3,
    description: 'Oil Change',
    due: '18/04/2022',
    overdue: '20/04/2022',
    notify: 'Emma Johnson',
    status: 'Pending',
  },
  {
    id: 4,
    description: 'Tire Replacement',
    due: '25/04/2022',
    overdue: '27/04/2022',
    notify: 'Sophia Brown',
    status: 'Pending',
  },
  {
    id: 5,
    description: 'Brake Inspection',
    due: '30/04/2022',
    overdue: '02/05/2022',
    notify: 'James Wilson',
    status: 'Scheduled',
  },
  {
    id: 6,
    description: 'Annual Health Checkup',
    due: '10/05/2022',
    overdue: '12/05/2022',
    notify: 'Emily Taylor',
    status: 'Scheduled',
  },
  {
    id: 7,
    description: 'Dentist Appointment',
    due: '15/05/2022',
    overdue: '18/05/2022',
    notify: 'Michael Brown',
    status: 'In Progress',
  },
  {
    id: 8,
    description: 'Home Maintenance',
    due: '20/05/2022',
    overdue: '22/05/2022',
    notify: 'Olivia Martinez',
    status: 'Pending',
  },
  {
    id: 9,
    description: 'Grocery Shopping',
    due: '25/05/2022',
    overdue: '27/05/2022',
    notify: 'Daniel Johnson',
    status: 'Completed',
  },
  {
    id: 10,
    description: 'Travel Planning',
    due: '30/05/2022',
    overdue: '01/06/2022',
    notify: 'Ava Wilson',
    status: 'Pending',
  },
  {
    id: 11,
    description: 'Financial Audit',
    due: '05/06/2022',
    overdue: '08/06/2022',
    notify: 'Noah Garcia',
    status: 'Scheduled',
  },
  {
    id: 12,
    description: 'Project Deadline',
    due: '10/06/2022',
    overdue: '12/06/2022',
    notify: 'Isabella Smith',
    status: 'In Progress',
  },
];

const Reminder = () => {
  return (
    <Paper sx={{ width: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={(theme) => ({
          p: theme.spacing(2, 2.5, 1.75, 2.5),
        })}
      >
        <Typography variant="h4" color="common.black">
          Reminder
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={(theme) => ({
            p: theme.spacing(0.75, 1.5),
            borderRadius: 1.5,
          })}
        >
          <Typography variant="body1" component="span">
            +&nbsp;
          </Typography>
          Add New
        </Button>
      </Stack>

      <Box sx={(theme) => ({ width: 1, px: theme.spacing(2.5) })}>
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          slots={{
            pagination: CustomPagination,
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default Reminder;