
import Header from "./sections/header/header";
import Filter from "./sections/filter/filter";
import Important from "./sections/important/important";
import New from "./sections/new/new";
import Latest from "./sections/latest/latest";
import EmailSection from "./sections/emailSection/emailSection";
  import axios from 'axios';
const News = async () => {



  const response = await axios.get('https://hesnical.com/wp-json/wp/v2/posts', {
    params: {
      categories: 1, // شناسه دسته
      per_page: 10,  // تعداد پست‌ها
    }
  });

  const posts = await response.data;
  return (
    <>
      <div className="px-[6%]">
        <Header />
        <Filter />
        <New />
        <Important />
        <Latest posts={posts}/>
      </div>{" "}
      <EmailSection/>
    </>
  );
};
export default News;
