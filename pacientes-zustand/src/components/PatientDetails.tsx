import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import  {usePatientStore} from "../store"
import { toast } from "react-toastify";

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error('Paciente Eliminado Correctamente');
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID"data={patient.id} />
        <PatientDetailItem label="Nombre"data={patient.name} />
        <PatientDetailItem label="Propietario"data={patient.caretaker} />
        <PatientDetailItem label="Email"data={patient.email} />
        <PatientDetailItem label="Fecha"data={patient.date.toString()} />
        <PatientDetailItem label="Sintomas"data={patient.symptoms} />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button 
              onClick={() => getPatientById(patient.id)}
              type="button"
              className="bg-indigo-600 text-white px-10 py-2 hover:bg-indigo-700 font-bold uppercase rounded-md hover:cursor-pointer">
                  Editar
            </button>

            <button 
              onClick={handleClick}
              type="button"
              className="bg-red-600 text-white px-10 py-2 hover:bg-red-700 font-bold uppercase rounded-md hover:cursor-pointer">
                  Eliminar
            </button>
        </div>
    </div>
  )
}
