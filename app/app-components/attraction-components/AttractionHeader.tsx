import SaveSystem from "./SaveSystem";
import ShareSystem from "./ShareSystem";

const AttractionHeader = ({ attraction }: any) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between lg:mb-4">
      <div className="mb-4 md:mb-0">
        <h1 className="flex items-center mb-2 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
          {attraction?.data?.title}
        </h1>
        <p className="hidden text-sm text-gray-700 lg:block md:text-base">
          {attraction?.data?.overview}
        </p>
      </div>
      <div className="hidden gap-3 lg:flex md:gap-4">
        <ShareSystem attraction={attraction} />
        <SaveSystem />
      </div>
    </header>
  );
};

export default AttractionHeader;
