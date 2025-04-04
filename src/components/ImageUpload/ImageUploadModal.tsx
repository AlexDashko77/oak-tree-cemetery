import "./imageUploadModal.sass";
import store from "../../store/store";
import { observer } from "mobx-react-lite";

const ImageUploadModal = observer(() => {
    const { isUploadModalOpen, preview, closeUploadModal, setImage } = store;

    if (!isUploadModalOpen) return null;
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setImage(e.dataTransfer.files[0]);
      }
    };
  
    return (
      <div className="image-upload-modal__overlay" onClick={closeUploadModal}>
        <div className="image-upload-modal__content" onClick={(e) => e.stopPropagation()}>
          <h2 className="image-upload-modal__title">Upload Photo</h2>
          <div className="image-upload-modal__file-upload-container" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
            <label className="image-upload-modal__custom-file-label">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <span>Select a file or drag it here</span>
            </label>
            {preview && <img src={preview} alt="Preview" className="image-upload-modal__preview" />}
          </div>
          <div className="image-upload-modal__content-btns">
            <button onClick={closeUploadModal} className="image-upload-modal__cancel-btn">Cancel</button>
            <button onClick={store.uploadImage} className="image-upload-modal__upload-btn">
                Load
            </button>
          </div>
        </div>
      </div>
    );
});

export default ImageUploadModal;
