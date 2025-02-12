import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import './Popup/PopupMsg.css'

const GetAllUsers = () => {
    const [registrations, setRegistrations] = useState(null);
    function exportTableToExcel(tableId, filename = 'Data') {
        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.getElementById(tableId);
        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

        filename = filename ? filename + '.xls' : 'excel_data.xls';

        downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

            downloadLink.download = filename;

            downloadLink.click();
        }
    }

    const handleClick = async (e) => {
        const myTable = document.getElementById('myTable');
        let buttons = document.getElementById('buttons');
        e.preventDefault();
        try {
            const res = await axios.get(`https://composit2024backend.onrender.com/admin/getAllUsers`)
            const regUsers = res.data
            setRegistrations(regUsers)
        } catch (err) {
            //console.log(err)
            setRegistrations(err)
        }
    };
    return (
        <div className='getAllUsers'>
            <h2>REGISTRATIONS COMPOSIT 2023</h2>
            <button className="btn-modal btn-primary" onClick={handleClick}>Get All Registrations</button>
            <table id="myTable">
            <tr>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>REG ID</td>
                        <td>EMAIL</td>
                        <td>DEPARTMENT</td>
                        <td>INSTITUTION</td>
                        <td>REF ID</td>
                        <td>CONTACT</td>
                        <td>ADDRESS</td>
                        {/* <td>GENDER</td> */}
                        {/* <td>Reg Date</td> */}
                    </tr>
            {registrations?.map((element, i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{element.name}</td>
                        <td>{element.regID}</td>
                        <td>{element.email}</td>
                        <td>{element.department}</td>
                        <td>{element.institution}</td>
                        <td>{element.refId}</td>
                        <td>{element.contact}</td>
                        <td>{element.address}</td>
                        {/* <td>{element.gender}</td> */}
                        {/* <td>{element.createdAt}</td> */}
                    </tr>
                ))}
            </table>
            {/* <button class="btn-modal btn-primary" onClick={exportTableToExcel('myTable', 'ALL REGISTRATIONS')}>Download as Excel
                File</button> */}
        </div>
    )
}

export default GetAllUsers
