import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Search from "@/components/Search";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";
import ColorModeToggle from "@/components/ColorModeToggle";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <div className="flex items-center gap-4">
          <ColorModeToggle />
          <form
            action={async () => {
              "use server";

              await signOutUser();
            }}
          >
            <Button type="submit" className="sign-out-button">
              <Image
                src="/assets/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6"
              />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};
export default Header;
