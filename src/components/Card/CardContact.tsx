import { useState } from 'react'
import './card.sass'
import Input from '../Input/Input'
import { observer } from 'mobx-react-lite'
import store from '../../store/store'
import { checkEmail, formatPhoneNumber } from '../../utils/utils'

const CardContacts = observer(() => {
    const [isEdit, setIsEdit] = useState(false)

    const openEdit = () => {
        setIsEdit(true)
    }
    const closeEdit = () => {
        setIsEdit(false)
    }

    const save = () => {        
        if(checkEmail(store.email) && store.phone.length === 11) {
            store.updateContact()
            closeEdit()
        } else {
            alert("Email incorrect format or phone number length must be 11")
        }
    }

    return (
        <div className='card'>
            <div className='card__header'>
                <span className='card__header-title'>Contacts</span>
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
                    <span className='card__label'>Responsible person:</span>
                    <span className='card__value'>{store.contacts?.firstname} {store.contacts?.lastname}</span>
                </div>
                <div className='card__row'>
                    <span className='card__label'>Phone number:</span>
                    <span className='card__value'>{formatPhoneNumber(store.contacts?.phone || "")}</span>
                </div>
                <div className='card__row'>
                    <span className='card__label'>E-mail:</span>
                    <span className='card__value'>{store.contacts?.email}</span>
                </div>
               </> : 
               <div className='card__edit'>
                 <div className='card__row'>
                    <span className='card__label'>Responsible person:</span>
                    <Input onChange={(value) => store.changeState("person", value)} value={store.contacts?.firstname + " " + store.contacts?.lastname}/>
                </div>
                <div className='card__row'>
                    <span className='card__label'>Phone number:</span>
                    <Input onChange={(value) => store.changeState("phone", value)} value={store.contacts?.phone || ""}/>
                </div>
                <div className='card__row'>
                    <span className='card__label'>E-mail:</span>
                    <Input type='email' onChange={(value) => store.changeState("email", value)} value={store.contacts?.email || ""}/>
                </div> 
               </div>
               }
            </div>
        </div>
    )
})

export default CardContacts