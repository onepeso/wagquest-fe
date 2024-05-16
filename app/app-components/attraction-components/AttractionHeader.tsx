import SaveSystem from "./SaveSystem";
import ShareSystem from "./ShareSystem";

const AttractionHeader = ({ attraction }: any) => {
  return (
    <header className="flex md:items-center justify-between lg:mb-4">
      <div className="mb-4 md:mb-0">
        <h1 className="flex items-center mb-2 text-gray-900 text-xl scroll-m-20 md:text-3xl font-extrabold tracking-tight lg:text-4xl">
          {attraction?.title}
        </h1>
        <p className="hidden text-gray-700 lg:block leading-7 [&not(:first-child)]:mt-6">
          {attraction?.overview}
        </p>
      </div>
      <div className="gap-3 flex ">
        <ShareSystem attraction={attraction} />
        <SaveSystem />
      </div>
    </header>
  );
};

export default AttractionHeader;
