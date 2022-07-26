import { Employee } from '../../interfaces/types';


export const Wrappers = ({ data, loading, indexOfLastData, indexOfFirstData }: any) => {

    const currentPages = data.slice(indexOfFirstData, indexOfLastData);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className='wrapper__container'>
            {
                currentPages.map((m: Employee) => (
                    <li key={m.id}>
                        <span>Nombre: {m.last_name} Apellido: {m.name} Cumpleaños: {m.birthday}</span>
                    </li>
                ))
            }
        </ul>
    )
}
