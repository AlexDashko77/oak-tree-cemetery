import { observer } from "mobx-react-lite";
import store from "../../store/store";
import "./updateOrganizationNameModal.sass"
import Input from "../Input/Input";

const UpdateOrganizationNameModal = observer(() => {
  if (!store.isUpdateOpen) return null;

    const closeWindow = () => {
        store.changeState("isUpdateOpen", false)
    }

    const save = () => {
        store.updateCompany()
        closeWindow()
    }

  return (
    <div className="updateOrganizationName">
      <div className="updateOrganizationName__overlay" onClick={closeWindow}></div>
      <div className="updateOrganizationName__content">
        <h2 className="updateOrganizationName__title">Specify the Organization's name</h2>
        <Input onChange={(value) => store.changeState("nameOrg", value)} value={store.organizationData?.name || ""}/>
        <div className="updateOrganizationName__actions">
          <button className="updateOrganizationName__cancel" onClick={closeWindow}>Cancel</button>
          <button onClick={save} className="updateOrganizationName__confirm">Save changes</button>
        </div>
      </div>
    </div>
  );
});

export default UpdateOrganizationNameModal;
