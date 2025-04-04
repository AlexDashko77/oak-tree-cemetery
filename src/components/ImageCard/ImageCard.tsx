import { observer } from 'mobx-react-lite'
import store from '../../store/store'
import Image from '../Image/Image'
import './imageCard.sass'

const ImageCard = observer(() => {
    const openModal = () => {
        store.changeState("isUploadModalOpen", true)
    }
    return (
        <div className='card'>
            <div className='card__header'>
                <span className='card__header-title'>Photos</span>
                <button onClick={openModal} className='card__header-add'>
                    <img src="/addPhoto.svg" alt="Add Photo"/>
                    Add
                </button>
            </div>
            <div className='card__content-img'>
            
                {store.photos.map((el) => {
                return <Image key={el.name} name={el.name} filepath={el.filepath}/>
              })}
             
            </div>
        </div>
    )
})

export default ImageCard