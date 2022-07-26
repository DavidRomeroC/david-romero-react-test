import { useAxios } from '../../hooks/useAxios';
import { useState } from 'react';
import { Wrappers } from './Wrappers';
import { Pagination } from './Pagination';
import { useNavigate } from 'react-router-dom';

export const EmployeesScreen = () => {

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(10)
    const { data, loading } = useAxios();

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    const handleForm = () => {
        navigate(`/employees/form`);
    }

    const handleUpload = () => {
        navigate(`/upload`);
    }

    return (
        <div className="employees__main-container">
            <p>Buscador de Empleados</p>
            <Wrappers data={data} loading={loading} indexOfFirstData={indexOfFirstData} indexOfLastData={indexOfLastData} />
            <Pagination dataPerPage={dataPerPage} totalGets={data.length} paginate={paginate} />
            <button className='btn-return' onClick={handleForm} >Agregar Empleado</button>
            <button className='btn-return' onClick={handleUpload} >Drag and drop</button>
        </div>
    )
}
