// import React, { useState } from 'react'
// import { extractColumns } from '../utils/helper'
// import Select from 'react-select';
// import DataGridWithPadding from '../components/Form/DataGridWithPadding';
// import { DatePicker } from "antd";

const DATA = [
    {
        "id": 1,
        "name": "John Potter",
        "question": "What is Java?",
        "answer": "Java is a high-level, class-based, object-oriented programming language.",
        "remarks": "Answered correctly, but could elaborate more on JVM.",
        "timestamp": "2025-05-06T10:00:00Z"
    },
    {
        "id": 2,
        "name": "Tina Nichols",
        "question": "What is the use of the 'final' keyword in Java?",
        "answer": "It is used to declare constants, prevent method overriding and inheritance.",
        "remarks": "Concise and accurate.",
        "timestamp": "2025-05-01T10:05:00Z"
    },
    {
        "id": 3,
        "name": "Roy Goodwin",
        "question": "What is a Stream in Java?",
        "answer": "Stream is an abstraction to process collections in a functional style.",
        "remarks": "Correct and clear.",
        "timestamp": "2025-05-01T10:10:00Z"
    },
    {
        "id": 4,
        "name": "Brooke Hill",
        "question": "Explain the difference between ArrayList and LinkedList.",
        "answer": "ArrayList is backed by a dynamic array, while LinkedList uses a doubly linked list.",
        "remarks": "Good answer with correct comparison.",
        "timestamp": "2025-05-01T10:15:00Z"
    },
    {
        "id": 5,
        "name": "Laura Mann",
        "question": "What is the use of the 'final' keyword in Java?",
        "answer": "It is used to declare constants, prevent method overriding and inheritance.",
        "remarks": "Concise and accurate.",
        "timestamp": "2025-05-01T10:20:00Z"
    },
    {
        "id": 6,
        "name": "Timothy Perez",
        "question": "How does HashMap work internally?",
        "answer": "It uses a hash function to compute index and stores key-value pairs in buckets.",
        "remarks": "Missed mentioning handling collisions using chaining.",
        "timestamp": "2025-05-01T10:25:00Z"
    },
    {
        "id": 7,
        "name": "Amanda Hill",
        "question": "What is Java?",
        "answer": "Java is a high-level, class-based, object-oriented programming language.",
        "remarks": "Answered correctly, but could elaborate more on JVM.",
        "timestamp": "2025-05-01T10:30:00Z"
    },
    {
        "id": 8,
        "name": "Elizabeth Stewart",
        "question": "What is the use of the 'final' keyword in Java?",
        "answer": "It is used to declare constants, prevent method overriding and inheritance.",
        "remarks": "Concise and accurate.",
        "timestamp": "2025-05-01T10:35:00Z"
    },
    {
        "id": 9,
        "name": "Karen Jones",
        "question": "How does HashMap work internally?",
        "answer": "It uses a hash function to compute index and stores key-value pairs in buckets.",
        "remarks": "Missed mentioning handling collisions using chaining.",
        "timestamp": "2025-05-01T10:40:00Z"
    },
    {
        "id": 10,
        "name": "Samantha Martinez",
        "question": "What is Java?",
        "answer": "Java is a high-level, class-based, object-oriented programming language.",
        "remarks": "Answered correctly, but could elaborate more on JVM.",
        "timestamp": "2025-05-01T10:45:00Z"
    },
    {
        "id": 11,
        "name": "Ricky Murphy",
        "question": "Explain the difference between ArrayList and LinkedList.",
        "answer": "ArrayList is backed by a dynamic array, while LinkedList uses a doubly linked list.",
        "remarks": "Good answer with correct comparison.",
        "timestamp": "2025-05-01T10:50:00Z"
    },
    {
        "id": 12,
        "name": "Richard Carpenter",
        "question": "What is a Stream in Java?",
        "answer": "Stream is an abstraction to process collections in a functional style.",
        "remarks": "Correct and clear.",
        "timestamp": "2025-05-08T10:55:00Z"
    },
    {
        "id": 13,
        "name": "Pamela Knox",
        "question": "Explain the difference between ArrayList and LinkedList.",
        "answer": "ArrayList is backed by a dynamic array, while LinkedList uses a doubly linked list.",
        "remarks": "Good answer with correct comparison.",
        "timestamp": "2025-05-01T11:00:00Z"
    },
    {
        "id": 14,
        "name": "Ryan Patterson",
        "question": "What is Java?",
        "answer": "Java is a high-level, class-based, object-oriented programming language.",
        "remarks": "Answered correctly, but could elaborate more on JVM.",
        "timestamp": "2025-05-01T11:05:00Z"
    },
    {
        "id": 15,
        "name": "Sheena Swanson",
        "question": "What is a Stream in Java?",
        "answer": "Stream is an abstraction to process collections in a functional style.",
        "remarks": "Correct and clear.",
        "timestamp": "2025-05-01T11:10:00Z"
    },
    {
        "id": 16,
        "name": "Ronald Rice",
        "question": "What is a Stream in Java?",
        "answer": "Stream is an abstraction to process collections in a functional style.",
        "remarks": "Correct and clear.",
        "timestamp": "2025-05-01T11:15:00Z"
    },
    {
        "id": 17,
        "name": "Nicole Thompson",
        "question": "What is the use of the 'final' keyword in Java?",
        "answer": "It is used to declare constants, prevent method overriding and inheritance.",
        "remarks": "Concise and accurate.",
        "timestamp": "2025-05-01T11:20:00Z"
    },
    {
        "id": 18,
        "name": "Bridget Dawson",
        "question": "What is a Stream in Java?",
        "answer": "Stream is an abstraction to process collections in a functional style.",
        "remarks": "Correct and clear.",
        "timestamp": "2025-05-01T11:25:00Z"
    },
    {
        "id": 19,
        "name": "Kyle Finley",
        "question": "How does HashMap work internally?",
        "answer": "It uses a hash function to compute index and stores key-value pairs in buckets.",
        "remarks": "Missed mentioning handling collisions using chaining.",
        "timestamp": "2025-05-01T11:30:00Z"
    },
    {
        "id": 20,
        "name": "Sara Cameron",
        "question": "What is a Stream in Java?",
        "answer": "Stream is an abstraction to process collections in a functional style.",
        "remarks": "Correct and clear.",
        "timestamp": "2025-05-03T11:35:00Z"
    }
]


// const Chat = () => {
//     const columns = extractColumns(DATA, ["timestamp", "id"], [{ field: "remarks", width: 300 }])
//     const [rows, setRows] = useState(DATA)
//     const [dateRange, setDateRange] = useState([]);
//     let filteredResults = rows
//     if (dateRange.length > 0) {
//         filteredResults = rows.filter((asset) => {
//             const od = asset.timestamp;
//             const assetDate = dayjs(od);
//             const [startDate, endDate] = dateRange.map((date) => dayjs(date));

//             return (
//                 assetDate.isValid() &&
//                 //@ts-ignore
//                 assetDate.isBetween(startDate, endDate, null, "[]")
//             );
//         });

//         return (
//             <div className='h-full w-full flex flex-col gap-2'>
//                 <div className="w-full flex gap-3">
//                     <Select
//                         closeMenuOnSelect={false}
//                         isMulti
//                         name="Select Name"
//                         placeholder="Select Name"
//                         className="basic-multi-select w-full"
//                         classNamePrefix="select"
//                     // options={FloorSizeOptions}
//                     // onChange={(selectedOptions) =>
//                     //     setFloorSize(
//                     //         selectedOptions?.map((option) => option.value) || []
//                     //     )
//                     // }


//                     />
//                     <div>
//                         <DatePicker.RangePicker
//                             className="custom-range-picker font-medium text-geeen-100 p-2 rounded-lg border-gray-300 hover:border-blue-500; w-full"
//                             placeholder={["Start Date", "End Date"]}
//                             onChange={(date, dateString) => {
//                                 console.log(date);
//                                 //@ts-ignore
//                                 setDateRange(dateString);
//                             }}
//                         /></div>
//                 </div>

//                 <DataGridWithPadding rows={filteredResults} columns={columns} />
//             </div>
//         )
//     }
// }

// export default Chat



import React, { useState } from 'react';
import { extractColumns } from '../utils/helper';
import Select from 'react-select';
import DataGridWithPadding from '../components/Form/DataGridWithPadding';
import { DatePicker } from "antd";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import Breadcrumbs from '../components/Breadcrumb/Breadcrumb';
import MyDatePicker from '../components/Form/MyDatePicker';

dayjs.extend(isBetween);


const Chat = () => {
    const columns = extractColumns(DATA, ["timestamp", "id", "name"], [{ field: "remarks", width: 300 }, { field: "name", width: 100 }]);
    const [rows, setRows] = useState(DATA);
    const [dateRange, setDateRange] = useState([]);
    const [name, setName] = useState([])

    console.log(name)

    let filteredResults = dateRange.length > 0
        ? rows.filter((asset) => {
            const assetDate = dayjs(asset.timestamp).startOf('day');
            const [startDate, endDate] = dateRange.map((date) => dayjs(date).startOf('day'));
            return assetDate.isValid() && assetDate.isBetween(startDate, endDate, null, '[]');
        })
        : rows;

    if (name) {
        filteredResults = filteredResults.filter((row) => row.name.includes(name))
    }

    return (
        <div className='h-full w-full flex flex-col gap-2'>
            <Breadcrumbs />
            <div className="w-full flex gap-3">
                <Select
                    isMulti={false}
                    onChange={(selectedOption) => {
                        const selectedValue = selectedOption?.value || "";
                        setName(selectedValue);
                    }}
                    closeMenuOnSelect={true}
                    placeholder="Select Name"
                    className="basic-multi-select w-full"
                    classNamePrefix="select"
                    options={[...new Set(rows.map((record) => record.name))].map((name) => ({
                        label: name,
                        value: name,
                    }))}

                />

                <div>
                    <MyDatePicker setDateRange={setDateRange} />
                </div>
            </div>
            <DataGridWithPadding rows={filteredResults} columns={columns} />
        </div>
    );
};

export default Chat;

