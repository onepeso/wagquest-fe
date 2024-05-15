const AttractionFooter = ({ attraction }: any) => {
  return (
    <>
      <footer className="md:hidden sticky bottom-0 bg-white border-t-2 h-full z-100 p-5 flex items-center gap-2">
        <p className="font-extrabold text-base">Explore the Prices: </p>
        <p className="text-lg text-main font-semibold">
          {attraction?.prices?.lowestPrice === 0 &&
          attraction?.prices?.highestPrice === 0 ? (
            "Free"
          ) : (
            <span>
              ${attraction?.prices?.lowestPrice} - $
              {attraction?.prices?.highestPrice}
            </span>
          )}
        </p>
      </footer>
    </>
  );
};

export default AttractionFooter;
