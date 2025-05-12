import React, { useEffect, useState } from 'react';
import MyDataGrid from '../components/Form/MyDataGrid';
import MyModel from '../components/MyModel';
import { DATA } from '../data';
import { extractColumns } from '../utils/helper';
import MyChat from '../components/MyChat';
import DashboardStats from '../components/Test';

const Overview = () => {
    return (
        <div className='h-full flex flex-col gap-2'>
            {/* <DashboardStats /> */}
            <Table />
        </div>
    )
};

export default Overview;

const Table = () => {
    const [rows, setRows] = useState(DATA)
    const [columns, setColumns] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [chatData, setChatData] = useState([])
    const [title, setTitle] = useState()

    useEffect(() => {
        // Example usage
        const excluded = ["id", "chat"];
        const customWidths = [
            { field: 'id', width: 10 },
            { field: 'role', width: 120 }
        ];

        const initialColumns = extractColumns(DATA, excluded, customWidths);
        setColumns(initialColumns)
    }, [])

    useEffect(() => {
        const filedName = "chats"
        setColumns((preColumns) => {
            // Check if the "actions" column already exists
            if (preColumns.some((column) => column.field === filedName)) {
                return preColumns;
            }
            return [
                ...preColumns,
                {
                    field: filedName,
                    headerName: "Chats",
                    width: "300",
                    renderCell: (params) => (
                        <p
                            style={{ textDecoration: "underline", color: "blue" }}
                            onClick={() => handleShowChat(params.row)}
                            className="hover:cursor-pointer"
                        >
                            SHOW CHATS
                        </p>
                    ),
                },
            ];
        });
    }, []);

    const handleShowChat = (row) => {
        const dtitle = `Chats of ${row?.name}`
        setTitle(dtitle)
        setOpenModal((pre) => !pre)
        setChatData(row.chat)
    }

    return (
        <>
            <MyDataGrid rows={rows} columns={columns} />
            <MyModel openModal={openModal} setOpenModal={setOpenModal} title={title} RENDER_COMPONENT={<MyChat chatData={chatData} />} />

        </>
    )
}










