
import Header from "./sections/header/header";
import Filter from "./sections/filter/filter";
import Important from "./sections/important/important";
import New from "./sections/new/new";
import Latest from "./sections/latest/latest";
import EmailSection from "./sections/emailSection/emailSection";

const News = () => {

 
  return (
    <>
      <div className="px-[6%]">
        <Header />
        <Filter />
        <New />
        <Important />
        <Latest/>
      </div>{" "}
      <EmailSection/>
    </>
  );
};
export default News;
