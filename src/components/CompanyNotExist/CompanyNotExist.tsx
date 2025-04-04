import './companyNotExist.sass'

const CompanyNotExist = () => {
    return (
        <div className="companyNotExist">
                <h2 className="companyNotExist__title">Company not found</h2>
                <button className="companyNotExist__create">
                    Create Company
                </button>
            </div>
    )
}

export default CompanyNotExist