import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Input } from "./ui/input"

export function DialogComponent({btnName, walletsImage, btnDesc, placeholder}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <div className="text-white">{btnName}</div> */}
        {/* <Button variant="outline">Edit Profile</Button> */}
        <div className="flex items-center gap-2 md:gap-4 px-4 py-2 rounded-lg hover:bg-primary-gradient hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer">
            <Image
                src={walletsImage}
                alt="wallets Image"
                className="cursor-pointer w-8 md:w-12"
            />
            <h2 className="text-sm md:text-nm font-bold cursor-pointer">
                {btnName}
            </h2>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{btnName}</DialogTitle>
          <DialogDescription className="pt-5">
            {btnDesc}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <Input className="min-w-full" placeholder="Enter ID" />
            <Input type="password" className="min-w-full" placeholder="Enter Password" />
        </div>
      </DialogContent>
    </Dialog>
  )
}