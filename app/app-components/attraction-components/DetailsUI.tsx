import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DetailsUI = ({ attraction }) => {
  return (
    <>
      <Alert>
        <AlertTitle className="font-bold">Dive into the details</AlertTitle>
        <AlertDescription>
          This is where you'll find an in-depth breakdown of what makes this
          particular location special and unique.
        </AlertDescription>
      </Alert>
      {attraction?.details?.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {attraction?.details?.map((detail, index) => (
            <li key={index} className="flex">
              <strong className="mr-1">{detail.name}:</strong>
              <span>{detail.description}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">No details available for this attraction.</p>
      )}
    </>
  );
};

export default DetailsUI;
