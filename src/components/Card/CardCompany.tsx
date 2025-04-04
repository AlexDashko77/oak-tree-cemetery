import { useState } from 'react'
import './card.sass'
import Dropdown from '../Dropdown/Dropdown'
import DropdownWithCheckboxes from '../DropdownWithCheckboxes/DropdownWithCheckboxes'
import Input from '../Input/Input'
import store from '../../store/store'
import { observer } from 'mobx-react-lite'

const CardCompany = observer(() => {

    const [isEdit, setIsEdit] = useState(false)

    const openEdit = () => {
        setIsEdit(true)
    }
    const closeEdit = () => {
        setIsEdit(false)
    }
    const save = () => {
        store.updateCompany()
        closeEdit()
    }
    return (
        <div className='card'>
            <div className='card__header'>
                <span className='card__header-title'>Company Details</span>
                {!isEdit ? <>
                <button onClick={openEdit} className='card__header-change'>
                    <img src="/change.svg" alt="Change" className='change' />
                    Edit
                </button>
               </> : 
                <div className='card__header-btns'>
                    <button onClick={save} className='card__header-save'>
                        <img src="/save.svg" alt="Save" />
                        Save changes
                        </button>
                    <button onClick={closeEdit} className='card__header-cancel'>
                        <img src="/cancel.svg" alt="Cancel" />
                        Cancel
                        </button>
                </div>
                }
            </div>
            <div className='card__content'>
                {!isEdit ? <>
                    <div className='card__row'>
                        <span className='card__label'>Agreement:</span>
                        <span className='card__value'>{store.organizationData?.contract?.no} <span className='card__value-devide'>/</span> {store.organizationData?.contract?.issue_date.slice(0,10)}</span>
                    </div>
                    <div className='card__row'>
                        <span className='card__label'>Business entity:</span>
                        <span className='card__value'>{store.organizationData?.businessEntity}</span>
                    </div>
                    <div className='card__row'>
                        <span className='card__label'>Company type:</span>
                        <span className='card__value'>{store.companyType}</span>
                    </div>
                </> : 
                <div className='card__edit'>
                    <div className='card__row'>
                        <div className='card__block-1'>
                        <span className='card__label'>Agreement:</span>
                        <div className='card__input'>
                            <Input onChange={(value) => store.changeState("agreement", value)} value={store.organizationData?.contract?.no || ""}/>
                        </div>
                        </div>
                        <div className='card__block-2'>
                        <span className='card__label-date'>Date:</span>
                            <div className='card__input'><Input onChange={(value) => store.changeState("date", value)} value={store.organizationData?.contract?.issue_date.slice(0,10) || ""}/></div>
                        </div>
                      
                    </div>
                    <div className='card__row'>
                        <span className='card__label'>Business entity:</span>
                        <Dropdown onChange={(value) => store.changeState("bussinessEntity",value)} value={store.organizationData?.businessEntity || ""}/>
                    </div>
                    <div className='card__row'>
                        <span className='card__label'>Company type:</span>
                        <DropdownWithCheckboxes onChange={(value) => store.changeState("companyType", value)}/>
                    </div>
                </div>
                }
            </div>
        </div>
    )
})

export default CardCompany