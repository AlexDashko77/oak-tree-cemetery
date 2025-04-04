import { useEffect } from "react"
import CardCompany from "./components/Card/CardCompany"
import CardContact from "./components/Card/CardContact"
import ImageCard from "./components/ImageCard/ImageCard"
import RemoveOrganizationModal from "./components/RemoveOrganizationModal/RemoveOrganizationModal"
import SideBar from "./components/Sidebar/Sidebar"
import TitleOrganizations from "./components/TitleOrganizations/TitleOrganizations"
import UpdateOrganizationNameModal from "./components/UpdateOrganizationNameModal/UpdateOrganizationNameModal"
import store from "./store/store"
import CompanyNotExist from "./components/CompanyNotExist/CompanyNotExist"
import { observer } from "mobx-react-lite"
import ImageUploadModal from "./components/ImageUploadModal/ImageUploadModal"

const App = observer(() => {
  useEffect(() => {
    store.getData()
    store.getContacts()

  }, [])
  
  return (
    <>
    <RemoveOrganizationModal/>
    <UpdateOrganizationNameModal/>
    <ImageUploadModal/>
    <div className="wrapper">
      <SideBar/>
      {store.isCompanyExist ?
      <>
        <div>
        <TitleOrganizations/>
       <div className="content">
          <CardCompany/>
          <CardContact/>
          <ImageCard/>
       </div>
      </div>
      </>
      :
      <>
        <CompanyNotExist/>
      </>  
    }
      <div></div>
    </div>
    </>
  )
})

export default App
