import { FC } from 'react'
import './image.sass'
import store from '../../store/store'
import { IImage } from '../../interfaces/interfaces'



const Image: FC<IImage> = ({filepath, name}) => {
    const deleteImg = () => {
        store.deleteImage(name)
    }
    return (
        <div className='image'>
            <img className='image__img' src={filepath} alt="Photo" />
            <div onClick={deleteImg} className='image__trash'>
                <img src="/imageRemove.svg" alt="Image Remove" />
            </div>
        </div>
    )
}

export default Image