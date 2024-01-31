import { Routes } from "../../App"
import { NavbarInitial } from "../NavbarInitial"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
   
function ResizableDiv() {
    return (
        <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[100vh] max-w-full rounded-lg border "
      >
        <ResizablePanel defaultSize={18}>
          <div className="flex h-full items-center justify-center p-6 bg-[#363062] border-none">
            <NavbarInitial/>
          </div>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <Routes/>            
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }

export { ResizableDiv }