
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { IconPlus } from "@tabler/icons-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CaseStudyForm } from "./case-study-form"

export function CaseStudyDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <IconPlus className="mr-2 size-4" /> Add Case Study
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add New Case Study</DialogTitle>
                    <DialogDescription>
                        Showcase a client success story.
                    </DialogDescription>
                </DialogHeader>
                <CaseStudyForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}
