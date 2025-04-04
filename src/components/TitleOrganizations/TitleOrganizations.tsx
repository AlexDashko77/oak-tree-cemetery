import { observer } from 'mobx-react-lite'
import store from '../../store/store'
import './titleOrganizations.sass'

const TitleOrganizations = observer(() => {

    const openRemove = () => {
        store.changeState("isRemoveOpen", true)
    }
    const openUpdate = () => {
        store.changeState("isUpdateOpen", true)
    }

    return (
        <div className="titleOrganizations">
            <div className='titleOrganizations__back'>
            <img  src="/back.svg" alt="Back" />
            </div>
            <span className="titleOrganizations__text">{store.organizationData?.name}</span>
            <div className='titleOrganizations__btns'>
                <button onClick={openUpdate} className='titleOrganizations__btns-change'>
                    <img src="/change.svg" alt="Change" />
                </button>
                <button onClick={openRemove} className='titleOrganizations__btns-remove'>
                    <img src="/remove.svg" alt="Remove" />
                </button>
            </div>
        </div>
    )
})

export default TitleOrganizations