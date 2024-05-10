import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy, CheckCheck, ShareIcon } from "lucide-react";
import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
} from "next-share";

const ShareSystem = ({ attraction }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const sharableURL = `https://wagquest.com/attraction/${attraction?.data?.slug.current}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sharableURL); // Remove the unnecessary object wrapper around sharableURL
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="">
          <ShareIcon className="w-4 h-4 mr-1" />
          <span className="hidden lg:block">Share</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Share this attraction with your friends!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <FacebookShareButton
            url={sharableURL}
            quote={attraction?.description}
            hashtag={"#wagquest"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={sharableURL} title={attraction?.name}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton
            url={sharableURL}
            subject={`Explore ${attraction?.name} on WagQuest!`}
            body="Check out this cool attraction I found on WagQuest!"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={sharableURL} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            {isCopied ? (
              <CheckCheck className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareSystem;
