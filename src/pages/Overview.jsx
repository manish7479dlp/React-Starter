import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumb/Breadcrumb';
import MyDataGrid from '../components/Form/MyDataGrid';
import { IconButton } from '@mui/material';
import MyModel from '../components/MyModel';
import Chat from '../components/Chat';
import { DATA } from '../data';



const Overview = () => {
    // return <div>Overview Page</div>;
    return (
        <div className='h-full flex flex-col gap-2'>
            <Table />
        </div>
    )
};

export default Overview;

const Table = () => {
    const [rows, setRows] = useState(DATA)

    function extractColumns(data, excludedColumns = [], customWidths = []) {
        const columns = new Set();

        // Helper function to capitalize first letter
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // Convert customWidths array to a map for fast lookup
        const widthMap = new Map();
        customWidths.forEach(({ field, width }) => {
            widthMap.set(field, width);
        });

        // Collect all unique keys that aren't excluded
        data.forEach(entry => {
            Object.keys(entry).forEach(key => {
                if (!excludedColumns.includes(key)) {
                    columns.add(key);
                }
            });
        });

        // Map keys to column definitions with widths or flex
        const columnDefinitions = Array.from(columns).map(key => {
            const definition = {
                field: key,
                headerName: capitalize(key)
            };

            if (widthMap.has(key)) {
                definition.width = widthMap.get(key);
            } else {
                definition.flex = 1;
            }

            return definition;
        });

        return columnDefinitions;
    }


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






    const [columns, setColumns] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [chatData, setChatData] = useState([])
    const title = "All Chats"

    const handleShowChat = (row) => {
        console.log(row)
        setOpenModal((pre) => !pre)
        setChatData(row.chat)
    }

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
    return (
        <>
            <MyDataGrid rows={rows} columns={columns} />
            <MyModel openModal={openModal} setOpenModal={setOpenModal} title={title} RENDER_COMPONENT={<Chat chatData={chatData} />} />

        </>
    )
}







