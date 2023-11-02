import ModuleList from "../Modules/ModuleList";
import ButtonMenu from "../Modules/ButtonMenu";
import StatusElement from "../Home/StatusElement";

function Home() {
  return (
    <div className="container-fluid row">
      <div className="col-12 col-lg-9">
        <div className="row pe-3">
          <ButtonMenu />
        </div>
        <div className="row pe-3">
          <hr />
        </div>
        <div className="row pe-3">
          <ModuleList />
        </div>
      </div>
      <div className="col-lg-3 d-none d-lg-block ps-3">
        <StatusElement />
      </div>
    </div>
  );
}

export default Home;
