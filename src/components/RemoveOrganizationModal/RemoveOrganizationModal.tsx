import { observer } from "mobx-react-lite";
import store from "../../store/store";
import "./removeOrganizationModal.sass"

const RemoveOrganizationModal = observer(() => {
  if (!store.isRemoveOpen) return null;

    const closeWindow = () => {
        store.changeState("isRemoveOpen", false)
    }

    const removeCompany = () => {
        store.deleteCompany()
        closeWindow()
    }

  return (
    <div className="removeOrganizationModal">
      <div className="removeOrganizationModal__overlay" onClick={closeWindow}></div>
      <div className="removeOrganizationModal__content">
        <div className="removeOrganizationModal__info">
            <h2 className="removeOrganizationModal__title">Remove the Organization?</h2>
            <p className="removeOrganizationModal__text">Are you sure you want to remove this Organozation?</p>
        </div>
        <div className="removeOrganizationModal__actions">
          <button className="removeOrganizationModal__cancel" onClick={closeWindow}>No</button>
          <button onClick={removeCompany} className="removeOrganizationModal__confirm">Yes, remove</button>
        </div>
      </div>
    </div>
  );
});

export default RemoveOrganizationModal;
