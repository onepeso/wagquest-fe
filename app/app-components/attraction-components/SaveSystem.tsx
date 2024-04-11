import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

const SaveSystem = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline"> Save </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Feature Coming Soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SaveSystem;
