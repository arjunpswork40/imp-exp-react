import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import Search from "./Search/Search";

const Sidebar = ({ handleChange,handleInputChange, query }) => {


  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <p>Import/Export</p>
        </div>
        <Search query={query} handleInputChange={handleInputChange} />
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
