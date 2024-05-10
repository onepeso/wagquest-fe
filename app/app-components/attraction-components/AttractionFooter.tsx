const AttractionFooter = ({ attraction }: any) => {
  return (
    <>
      <footer className="md:hidden sticky bottom-0 bg-white border-t-2 h-full z-100 p-5 flex items-center gap-2">
        <p className="font-extrabold text-base">Explore the Prices: </p>
        <p className="text-base font-bold text-main">
          ${attraction?.data?.prices?.lowestPrice} - $
          {attraction?.data?.prices?.highestPrice}
        </p>
      </footer>
    </>
  );
};

export default AttractionFooter;
