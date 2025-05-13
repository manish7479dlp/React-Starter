import React, { useEffect, useState } from 'react';
import MyDataGrid from '../components/Form/MyDataGrid';
import MyModel from '../components/MyModel';
import { DATA } from '../data';
import { extractColumns } from '../utils/helper';
import MyChat from '../components/MyChat';
import Breadcrumbs from '../components/Breadcrumb/Breadcrumb';
import KPI from '../components/KPI';

import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdFeedback, MdErrorOutline } from "react-icons/md";
import { IoToday } from "react-icons/io5";
import MyDatePicker from '../components/Form/MyDatePicker';
import { Input } from '@mui/joy';
import ChatPromptChart from '../components/ChatPromptChart';


const KPI_DATA = [
    {
        title: "Hits per Month",
        value: 12345,
        icon: <IoCalendarNumberSharp className="text-white text-3xl" />,
    },
    {
        title: "Hits per Day",
        value: 466545,
        icon: <IoToday className="text-white text-3xl" />,
    },
    {
        title: "Feedback per Day",
        value: 98763,
        icon: <MdFeedback className="text-white text-3xl" />,
    },
    {
        title: "Errors per Day",
        value: 434,
        icon: <MdErrorOutline className="text-white text-3xl" />,
    },
];


const Overview = () => {
    const [kpiData, setKpiData] = useState(KPI_DATA)
    const [searchtext, setsearchtext] = useState("")
    return (
        <div className='h-full flex flex-col gap-2'>
            <Breadcrumbs />
            <div className='flex gap-10'>
                {
                    kpiData.map((kpi, idx) => {
                        return < KPI key={idx} title={kpi.title} value={kpi.value} icon={kpi.icon} />
                    })
                }
            </div>

            <div className='h-full overflow-auto flex gap-2 flex-col'>
                <div className='w-[550px]'>
                    <ChatPromptChart />
                </div>

                <div className='flex flex-col gap-2'>
                    <Filter />
                    <Table />
                </div>
            </div>
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

const Filter = ({ searchtext, setsearchtext = () => { } }) => {
    return (
        <div className='w-full flex gap-2'>
            <Input
                placeholder="Search..."
                variant="soft"
                className="w-full"
                onChange={(e) => {
                    setsearchtext(e.target.value);
                }}
                value={searchtext}
            />
            <div className='w-[550px]'>
                <MyDatePicker />
            </div>
        </div>
    )
}

