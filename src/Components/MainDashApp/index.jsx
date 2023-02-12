import AppHeader from "../AppHeader";
import PageContent from "../PageContent";
import SideMenu from "../SideMenu";


function MainDashApp() {
    return (
      <div>
        
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideMenu />
          <PageContent />
          </div>
     </div>
    );
  }
  export default MainDashApp;