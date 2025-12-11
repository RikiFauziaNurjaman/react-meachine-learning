import React, { useState } from 'react'
import http from '../../api/apiClient'

const RpsPage = () => {
    const [form, setForm] = useState({
        file : null,
    })
    

    const handleChangeFile = (e) => {
        setForm({
            ...form,
            file : e.target.files[0],
        })
    }

    const [result, setResult] = useState({
        prediction : "",
        probability : 0,
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", form.file);

        const response = await http.post("/predict-rps", formData, {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        });
        console.log(response.data);

        setResult({
            prediction : response.data.data.prediction,
            probability : response.data.data.probability,
        })
    }
  return (
    <div className='container mx-auto space-y-4'>
        <h1>Prediksi Gunting Batu Kertas</h1>
        <form onSubmit={onSubmit}>
            <input type="file" onChange={handleChangeFile} className='file-input'/>
            <button type="submit" className='btn btn-primary'>Prediksi</button>
        </form>
        <div>
            <div>Hasil Prediksi : {result.prediction}</div>
            <div>Probabilitas : {result.probability}</div>
        </div>
    </div>
  )
}

export default RpsPage