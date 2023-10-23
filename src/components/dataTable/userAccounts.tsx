import {DataGrid, GridColDef, GridToolbar,} from "@mui/x-data-grid";
import RateReviewIcon from '@mui/icons-material/RateReview';
import DeleteIcon from '@mui/icons-material/Delete';
import {FC, useState} from "react";
import {Box, Button} from "@mui/material";
import EditUser from "../modals/editUser.tsx";
import {IUser} from "../../types/Types.ts";
import DeleteUser from "../modals/deleteUser.tsx";

const initialUser: IUser = {
    id: null,
    name: '',
    lastName: '',
    img: '',
    email: '',
    phone: '',
    createdAt: '',
    verified: false,
    fullName: '',
    address: '',
    title: '',
    briefJobDescription: '',
    compensationType: '',
    methodOfPayment: '',
    compensationSchedule: '',
    fullNameOfSupervisor: '',
    lastPaymentDate: '',
}

type Props = {
    columns: GridColDef[];
    rows: object[];
};

const UserAccounts: FC<Props> = ({columns, rows}) => {
    const [openEditAccountModal, setOpenEditAccountModal] = useState(false)
    const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false)
    const [user, setUser] = useState(initialUser)
    const handleAccount = (user: IUser, type: string) => {
        type === 'delete'
            ? setOpenDeleteAccountModal(true)
            : setOpenEditAccountModal(true)
        setUser(user)
    }

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <div className='flex justify-between items-center '>
                    <Button
                        className='mr-[15px]'
                        onClick={() => handleAccount(params.row, 'edit')}
                    >
                        <RateReviewIcon/>
                    </Button>

                    <Button
                        onClick={() => handleAccount(params.row, 'delete')}
                    >
                        <DeleteIcon/>
                    </Button>
                </div>
            );
        },
    };

    return (
        <div className="dataTable">
            <Box
                className='mb-[40px] xxl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[700px] md:max-w-[600px] sm:max-w-[500px]'
            >
                <DataGrid
                    className='bg-[white] p-[20px] overflow-auto'
                    rows={rows}
                    columns={[...columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{toolbar: GridToolbar}}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: {debounceMs: 500},
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />
            </Box>
            {
                (openEditAccountModal && user) &&
                <EditUser
                    user={user}
                    modalOpen={openEditAccountModal}
                    setModalOpen={setOpenEditAccountModal}
                />
            }
            {
                (openDeleteAccountModal && user.id) &&
                <DeleteUser
                    userId={user.id}
                    modalOpen={openDeleteAccountModal}
                    setModalOpen={setOpenDeleteAccountModal}
                />
            }
        </div>
    )
};

export default UserAccounts;