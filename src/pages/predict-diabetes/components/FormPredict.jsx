import { useState } from "react";
import http from "../../../api/apiClient";

function FormPredict({ isLoading, setLoading, setPredictResult }) {
  const [form, setForm] = useState({
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0,
    Age: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      const response = await http.post("/predict", form);
      const { data, _meta } = response.data;
      console.log(data);
      setForm({
        Pregnancies: 0,
        Glucose: 0,
        BloodPressure: 0,
        SkinThickness: 0,
        Insulin: 0,
        BMI: 0,
        DiabetesPedigreeFunction: 0,
        Age: 0,
      });
    } catch (error) {
      console.error("Terjadi kesalahan!", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Pregnaises</legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.Pregnancies}
              onChange={handleChange}
              name="Pregnancies"
              placeholder="Pregnancies"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Glucose</legend>
            <input
              type="number"
              className="input"
              min={0}
              value={form.Glucose}
              onChange={handleChange}
              max={10}
              name="Glucose"
              placeholder="Glucose"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">BloodPressure </legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.BloodPressure}
              onChange={handleChange}
              name="BloodPressure"
              placeholder="BloodPressure"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">SkinThickness </legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.SkinThickness}
              onChange={handleChange}
              name="SkinThickness"
              placeholder="SkinThickness"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Insulin</legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.Insulin}
              onChange={handleChange}
              name="Insulin"
              placeholder="Insulin"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">BMI</legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.BMI}
              onChange={handleChange}
              name="BMI"
              placeholder="BMI"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              DiabetesPedigreeFunction
            </legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.DiabetesPedigreeFunction}
              onChange={handleChange}
              name="DiabetesPedigreeFunction"
              placeholder="DiabetesPedigreeFunction"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Age</legend>
            <input
              type="number"
              className="input"
              min={0}
              max={10}
              value={form.Age}
              onChange={handleChange}
              name="Age"
              placeholder="Age"
            />
          </fieldset>
          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading ? "Sedang Berpikir" : "Lakukan Prediksi"}
          </button>
        </div>
      </form>
    </>
  );
}

export default FormPredict;
