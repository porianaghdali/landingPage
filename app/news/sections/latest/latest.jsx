import LatestCard from "../../components/latestCard";
import { loading } from "../../svg";
import moment from "moment-jalaali";

const Latest = ({ posts }) => {
  const convertToJalali = (date) => moment(date).format("jYYYY/jMM/jDD");

  const stripHtml = (html) => html.replace(/<[^>]+>/g, "");

  return (
    <div className="grid gap-4">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">آخرین اخبار</p>
      </div>

      {!posts?.length ? (
        <p>هیچ خبری موجود نیست.</p>
      ) : (
        <div className="grid grid-cols-4 gap-8">
          {posts.map((item, key) => (
            <LatestCard
              key={key}
              title={item.title.rendered}
              date={convertToJalali(item.date)}
              description={stripHtml(item.excerpt.rendered)}
            />
          ))}
        </div>
      )}

      {posts?.length > 0 && (
        <div className="flex justify-center">
          <button className="flex gap-2 mt-20 mb-10 cursor-pointer">
            <span className="animate-spin">{loading}</span>
            مشاهده بیشتر
          </button>
        </div>
      )}
    </div>
  );
};

export default Latest;
