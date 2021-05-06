import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import StudentsDetail from "../Partials/StudentDetails";

interface Istudent {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    description: string;
}

const StudentsVal = () => {
    const [students, setStudents] = useState([] as Istudent[]);
    const fetchStudentsLists = async () => {
        const ref = await axios.get("http://localhost:4000/students");
        console.log("my data", ref.data);
        setStudents(ref.data);
    }
    useEffect(
        () => {
            fetchStudentsLists();
        }, []
    )
    return (
        <div>
            <h1>Welcome to students List</h1>
            {students.map((student) => (
                <StudentsDetail detail={student} />
            ))}
        </div>
    )
}

export default StudentsVal
