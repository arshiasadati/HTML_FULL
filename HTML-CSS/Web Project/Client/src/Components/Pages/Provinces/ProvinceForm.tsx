import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'
type FormInput ={
    title : String
}

function ProvinceForm() {
    const [formData , setFormData] = useState<FormInput>({
        title : ""
    })

    async function addProvince() {
        console.log(formData)
        axios.post("http://localhost:3000/Provinces/addProvince",formData)
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id , value } = e.target;
        setFormData({ ...formData , [id] : value})
    }

  return (
        <form onSubmit={addProvince}>
        <div className="form-row align-items-center">
            <div className="col-auto">
            <label className="sr-only" htmlFor="title">Province Name</label>
            <input type="text" className="form-control mb-2" id="title" placeholder="Province" onChange={handleTitleChange}></input>
            </div>
            </div>
            <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
        </form>
  )
}

export default ProvinceForm