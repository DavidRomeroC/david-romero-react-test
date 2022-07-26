
export const Pagination = ({ dataPerPage, totalGets, paginate }: any) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalGets / dataPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pagination__container">
            {pageNumbers.map(num => (
                <li key={num}>
                    <a  onClick={() => paginate(num) } href={`/employees#${num}`}>
                        {num}
                    </a>
                </li>
            ))}
        </nav>
    )
}
