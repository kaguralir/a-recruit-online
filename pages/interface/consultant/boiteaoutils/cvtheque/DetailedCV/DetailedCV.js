import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




function DetailedCV() {
    let { id } = useParams();
    console.log(id);

    const [cvById, setCVById] = useState("");


    useEffect(() => {
        axios.get(`${api}/getCVbyId/${id}`).then((response) => {
            setCVById(response.data);
        });
    }, [id]);

    return (
        <div >
            <div >
                <div >
                    {" "}
                    {cvById.searched_job1}
                </div>
                <div >
                    {" "}
                    {cvById.job_location1}
                </div>
                <div >
                    {" "}
                    {cvById.job_field1}
                </div>
                <div >
                    {" "}
                    {cvById.experience1}
                </div>
                <div >
                    {" "}
                    {cvById.studies_level}
                </div>
                <div >
                    {" "}
                    {cvById.last_graduation}
                </div>
                <div >
                    {" "}
                    {cvById.availability_job}
                </div>
                <div >
                    {" "}
                    {cvById.cv_pdf}
                </div>
                <div >
                    {" "}
                    {cvById.cv_video}
                </div>
                <div >
                    {" "}
                    {cvById.motivation_pdf}
                </div>
                <div >
                    {" "}
                    {cvById.motivation_video}
                </div>
            </div>
        </div>
    );
}

export default DetailedCV;
