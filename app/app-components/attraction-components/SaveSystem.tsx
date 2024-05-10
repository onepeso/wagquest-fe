import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

const SaveSystem = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <HeartIcon className="w-4 h-4 mr-1" />
            <span className="hidden lg:block">Save</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Feature Coming Soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SaveSystem;
