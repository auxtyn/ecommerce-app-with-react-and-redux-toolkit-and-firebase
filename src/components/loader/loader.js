import LoaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

const loader = () => {


  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={LoaderImg} alt="loaderImg" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default loader;
