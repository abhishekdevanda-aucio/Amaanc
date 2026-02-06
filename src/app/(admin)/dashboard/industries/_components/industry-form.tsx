"use client"

import { useForm } from "@tanstack/react-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError,
    FieldContent,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Plus, Trash2, Save, ArrowLeft, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { createIndustry, updateIndustry } from "../_actions/actions"
import { Industry, iconMap } from "@/data/industries"
import { AssetPickerDialog } from "@/components/asset-picker-dialog"
import Link from "next/link"
import { useState } from "react"

// Zod Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    slug: z.string().min(2, "Slug must be at least 2 characters"),
    overview: z.string().min(10, "Overview must be at least 10 characters"),
    full_description: z.string().optional(),
    icon_name: z.string(),
    image_url: z.string().optional(),
    is_published: z.boolean(),
    features: z.array(z.string()),
    stats: z.array(
        z.object({
            label: z.string().min(1, "Label required"),
            value: z.string().min(1, "Value required"),
        })
    ),
    challenges: z.array(
        z.object({
            title: z.string().min(1, "Title required"),
            problem: z.string().min(1, "Problem required"),
            solution: z.string().min(1, "Solution required"),
        })
    ),
    tech_stack: z.array(z.string()),
    testimonials: z.array(
        z.object({
            quote: z.string().min(1, "Quote required"),
            author: z.string().min(1, "Author required"),
            role: z.string().min(1, "Role required"),
            company: z.string().min(1, "Company required"),
            image: z.string().optional(),
        })
    ),
})

type IndustryFormValues = z.infer<typeof formSchema>

interface IndustryFormProps {
    initialData?: Industry | null
}

export function IndustryForm({ initialData }: IndustryFormProps) {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("basic")
    const [newFeature, setNewFeature] = useState("")
    const [newTech, setNewTech] = useState("")

    // Default values
    const defaultValues: IndustryFormValues = initialData
        ? {
            name: initialData.name,
            slug: initialData.slug,
            overview: initialData.description,
            full_description: initialData.content || "",
            icon_name: initialData.icon || "Default",
            image_url: initialData.imageUrl || "",
            is_published: initialData.isPublished,
            features: initialData.features || [],
            stats: initialData.stats || [],
            challenges: initialData.challenges || [],
            tech_stack: initialData.techStack || [],
            testimonials: initialData.testimonials || [],
        }
        : {
            name: "",
            slug: "",
            overview: "",
            full_description: "",
            icon_name: "Default",
            image_url: "",
            is_published: false,
            features: [],
            stats: [],
            challenges: [],
            tech_stack: [],
            testimonials: [],
        }

    const form = useForm({
        defaultValues,
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                const formData = new FormData()
                Object.entries(value).forEach(([key, val]) => {
                    if (Array.isArray(val) || typeof val === "object") {
                        formData.append(key, JSON.stringify(val))
                    } else {
                        formData.append(key, String(val))
                    }
                })

                if (value.is_published) formData.set("is_published", "on")

                if (initialData) {
                    await updateIndustry(initialData.id, null, formData)
                    toast.success("Industry updated successfully")
                } else {
                    await createIndustry(null, formData)
                    toast.success("Industry created successfully")
                }
                router.push("/dashboard/industries")
            } catch (error) {
                console.error(error)
                toast.error("Something went wrong")
            }
        },
    })

    const handleCancel = () => {
        router.push("/dashboard/industries")
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}
        >
            <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/industries">
                            <Button variant="ghost" size="icon" type="button">
                                <ArrowLeft className="w-4 h-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                {initialData
                                    ? `Edit ${initialData.name}`
                                    : "Create Industry"}
                            </h1>
                            <p className="text-muted-foreground">
                                {initialData
                                    ? "Update an existing industry"
                                    : "Add a new industry to your platform"}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            type="button"
                            onClick={handleCancel}
                            disabled={form.state.isSubmitting}
                        >
                            Cancel
                        </Button>
                        <form.Subscribe
                            selector={(state) => state.isSubmitting}
                            children={(isSubmitting) => (
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    <Save className="mr-2 h-4 w-4" />
                                    {initialData
                                        ? "Update Industry"
                                        : "Create Industry"}
                                </Button>
                            )}
                        />
                    </div>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                        <TabsTrigger value="basic">Basic Info</TabsTrigger>
                        <TabsTrigger value="content">
                            Content & Tech
                        </TabsTrigger>
                        <TabsTrigger value="challenges">Challenges</TabsTrigger>
                        <TabsTrigger value="testimonials">
                            Testimonials
                        </TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>

                    {/* Basic Info Tab */}
                    <TabsContent value="basic" className="space-y-4 pt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>General Information</CardTitle>
                                <CardDescription>
                                    Core details about the industry vertical.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <form.Field
                                        name="name"
                                        children={(field) => {
                                            const isInvalid =
                                                field.state.meta.isTouched &&
                                                !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel
                                                        htmlFor={field.name}
                                                    >
                                                        Industry Name
                                                    </FieldLabel>
                                                    <Input
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) =>
                                                            field.handleChange(
                                                                e.target.value
                                                            )
                                                        }
                                                        aria-invalid={isInvalid}
                                                        placeholder="e.g. Finance"
                                                        autoComplete="off"
                                                    />
                                                    {isInvalid && (
                                                        <FieldError
                                                            errors={
                                                                field.state.meta
                                                                    .errors
                                                            }
                                                        />
                                                    )}
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="slug"
                                        children={(field) => {
                                            const isInvalid =
                                                field.state.meta.isTouched &&
                                                !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel
                                                        htmlFor={field.name}
                                                    >
                                                        Slug
                                                    </FieldLabel>
                                                    <Input
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) =>
                                                            field.handleChange(
                                                                e.target.value
                                                            )
                                                        }
                                                        aria-invalid={isInvalid}
                                                        placeholder="finance"
                                                        autoComplete="off"
                                                    />
                                                    <FieldDescription>
                                                        URL-friendly version
                                                        (e.g.,
                                                        &quot;finance&quot;)
                                                    </FieldDescription>
                                                    {isInvalid && (
                                                        <FieldError
                                                            errors={
                                                                field.state.meta
                                                                    .errors
                                                            }
                                                        />
                                                    )}
                                                </Field>
                                            )
                                        }}
                                    />
                                </div>

                                <form.Field
                                    name="icon_name"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field data-invalid={isInvalid}>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                >
                                                    Icon
                                                </FieldLabel>
                                                <Select
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onValueChange={(
                                                        value
                                                    ) => {
                                                        if (value !== null) {
                                                            field.handleChange(
                                                                value
                                                            )
                                                        }
                                                    }}
                                                >
                                                    <SelectTrigger
                                                        id={field.name}
                                                        aria-invalid={isInvalid}
                                                    >
                                                        <SelectValue placeholder="Select an icon" />
                                                    </SelectTrigger>
                                                    <SelectContent alignItemWithTrigger>
                                                        {Object.keys(iconMap).map(
                                                            (icon) => (
                                                                <SelectItem
                                                                    key={icon}
                                                                    value={icon}
                                                                >
                                                                    {icon}
                                                                </SelectItem>
                                                            )
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                                <FieldDescription>
                                                    Select an icon that
                                                    represents this industry
                                                </FieldDescription>
                                                {isInvalid && (
                                                    <FieldError
                                                        errors={
                                                            field.state.meta
                                                                .errors
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        )
                                    }}
                                />

                                <form.Field
                                    name="overview"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field data-invalid={isInvalid}>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                >
                                                    Overview (Short Description)
                                                </FieldLabel>
                                                <Textarea
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value
                                                        )
                                                    }
                                                    aria-invalid={isInvalid}
                                                    placeholder="Brief summary of the industry..."
                                                    rows={2}
                                                />
                                                {isInvalid && (
                                                    <FieldError
                                                        errors={
                                                            field.state.meta
                                                                .errors
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        )
                                    }}
                                />

                                <form.Field
                                    name="full_description"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field data-invalid={isInvalid}>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                >
                                                    Full Description
                                                </FieldLabel>
                                                <Textarea
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value
                                                        )
                                                    }
                                                    aria-invalid={isInvalid}
                                                    placeholder="Detailed description of the industry and our solutions..."
                                                    className="min-h-[150px]"
                                                />
                                                {isInvalid && (
                                                    <FieldError
                                                        errors={
                                                            field.state.meta
                                                                .errors
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        )
                                    }}
                                />

                                <form.Field
                                    name="image_url"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field data-invalid={isInvalid}>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                >
                                                    Hero Image
                                                </FieldLabel>
                                                <AssetPickerDialog
                                                    value={field.state.value || ""}
                                                    onSelect={(url) => field.handleChange(url)}
                                                    folder="industries"
                                                />
                                                <FieldDescription>
                                                    Select or upload a hero image for the industry page
                                                </FieldDescription>
                                                {isInvalid && (
                                                    <FieldError
                                                        errors={
                                                            field.state.meta
                                                                .errors
                                                        }
                                                    />
                                                )}
                                            </Field>
                                        )
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Content & Tech Tab */}
                    <TabsContent value="content" className="space-y-4 pt-4">
                        {/* Features */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Features</CardTitle>
                                <CardDescription>
                                    Add key features of this industry solution
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form.Field
                                    name="features"
                                    mode="array"
                                    children={(field) => (
                                        <>
                                            <div className="flex gap-2">
                                                <Input
                                                    placeholder="Add a feature..."
                                                    value={newFeature}
                                                    onChange={(e) =>
                                                        setNewFeature(
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter"
                                                        ) {
                                                            e.preventDefault()
                                                            if (
                                                                newFeature.trim()
                                                            ) {
                                                                field.pushValue(
                                                                    newFeature.trim()
                                                                )
                                                                setNewFeature(
                                                                    ""
                                                                )
                                                            }
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() => {
                                                        if (newFeature.trim()) {
                                                            field.pushValue(
                                                                newFeature.trim()
                                                            )
                                                            setNewFeature("")
                                                        }
                                                    }}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {field.state.value.map(
                                                    (
                                                        feature: string,
                                                        index: number
                                                    ) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="flex items-center gap-1"
                                                        >
                                                            {feature}
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-4 w-4 p-0 hover:bg-transparent"
                                                                onClick={() =>
                                                                    field.removeValue(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <X className="h-3 w-3" />
                                                            </Button>
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* Tech Stack */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tech Stack</CardTitle>
                                <CardDescription>
                                    Technologies used in this industry solution
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form.Field
                                    name="tech_stack"
                                    mode="array"
                                    children={(field) => (
                                        <>
                                            <div className="flex gap-2">
                                                <Input
                                                    placeholder="Add a technology..."
                                                    value={newTech}
                                                    onChange={(e) =>
                                                        setNewTech(
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter"
                                                        ) {
                                                            e.preventDefault()
                                                            if (newTech.trim()) {
                                                                field.pushValue(
                                                                    newTech.trim()
                                                                )
                                                                setNewTech("")
                                                            }
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() => {
                                                        if (newTech.trim()) {
                                                            field.pushValue(
                                                                newTech.trim()
                                                            )
                                                            setNewTech("")
                                                        }
                                                    }}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {field.state.value.map(
                                                    (
                                                        tech: string,
                                                        index: number
                                                    ) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="flex items-center gap-1"
                                                        >
                                                            {tech}
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-4 w-4 p-0 hover:bg-transparent"
                                                                onClick={() =>
                                                                    field.removeValue(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <X className="h-3 w-3" />
                                                            </Button>
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* Key Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Stats</CardTitle>
                                <CardDescription>
                                    Add statistics to highlight industry impact
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form.Field
                                    name="stats"
                                    mode="array"
                                    children={(field) => (
                                        <>
                                            {field.state.value.map(
                                                (
                                                    _stat: {
                                                        label: string
                                                        value: string
                                                    },
                                                    index: number
                                                ) => (
                                                    <div
                                                        key={index}
                                                        className="border rounded-md p-4 space-y-3"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <h4 className="font-medium">
                                                                Stat {index + 1}
                                                            </h4>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() =>
                                                                    field.removeValue(
                                                                        index
                                                                    )
                                                                }
                                                                className="h-8 w-8 text-destructive"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <form.Field
                                                                name={`stats[${index}].label`}
                                                                children={(
                                                                    subField
                                                                ) => {
                                                                    const isInvalid =
                                                                        subField
                                                                            .state
                                                                            .meta
                                                                            .isTouched &&
                                                                        !subField
                                                                            .state
                                                                            .meta
                                                                            .isValid
                                                                    return (
                                                                        <Field
                                                                            data-invalid={
                                                                                isInvalid
                                                                            }
                                                                        >
                                                                            <FieldLabel
                                                                                htmlFor={
                                                                                    subField.name
                                                                                }
                                                                            >
                                                                                Label
                                                                            </FieldLabel>
                                                                            <Input
                                                                                id={
                                                                                    subField.name
                                                                                }
                                                                                name={
                                                                                    subField.name
                                                                                }
                                                                                value={
                                                                                    subField
                                                                                        .state
                                                                                        .value
                                                                                }
                                                                                onBlur={
                                                                                    subField.handleBlur
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    subField.handleChange(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                aria-invalid={
                                                                                    isInvalid
                                                                                }
                                                                                placeholder="e.g. Growth"
                                                                            />
                                                                            {isInvalid && (
                                                                                <FieldError
                                                                                    errors={
                                                                                        subField
                                                                                            .state
                                                                                            .meta
                                                                                            .errors
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    )
                                                                }}
                                                            />
                                                            <form.Field
                                                                name={`stats[${index}].value`}
                                                                children={(
                                                                    subField
                                                                ) => {
                                                                    const isInvalid =
                                                                        subField
                                                                            .state
                                                                            .meta
                                                                            .isTouched &&
                                                                        !subField
                                                                            .state
                                                                            .meta
                                                                            .isValid
                                                                    return (
                                                                        <Field
                                                                            data-invalid={
                                                                                isInvalid
                                                                            }
                                                                        >
                                                                            <FieldLabel
                                                                                htmlFor={
                                                                                    subField.name
                                                                                }
                                                                            >
                                                                                Value
                                                                            </FieldLabel>
                                                                            <Input
                                                                                id={
                                                                                    subField.name
                                                                                }
                                                                                name={
                                                                                    subField.name
                                                                                }
                                                                                value={
                                                                                    subField
                                                                                        .state
                                                                                        .value
                                                                                }
                                                                                onBlur={
                                                                                    subField.handleBlur
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    subField.handleChange(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                aria-invalid={
                                                                                    isInvalid
                                                                                }
                                                                                placeholder="e.g. 50%"
                                                                            />
                                                                            {isInvalid && (
                                                                                <FieldError
                                                                                    errors={
                                                                                        subField
                                                                                            .state
                                                                                            .meta
                                                                                            .errors
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    field.pushValue({
                                                        label: "",
                                                        value: "",
                                                    })
                                                }
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <Plus className="mr-2 h-4 w-4" />
                                                Add Stat
                                            </Button>
                                        </>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Challenges Tab */}
                    <TabsContent value="challenges" className="space-y-4 pt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Industry Challenges</CardTitle>
                                <CardDescription>
                                    Define problems and solutions for this
                                    industry
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form.Field
                                    name="challenges"
                                    mode="array"
                                    children={(field) => (
                                        <>
                                            {field.state.value.map(
                                                (
                                                    _challenge: {
                                                        title: string
                                                        problem: string
                                                        solution: string
                                                    },
                                                    index: number
                                                ) => (
                                                    <div
                                                        key={index}
                                                        className="border rounded-md p-4 space-y-3"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <h4 className="font-medium">
                                                                Challenge{" "}
                                                                {index + 1}
                                                            </h4>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() =>
                                                                    field.removeValue(
                                                                        index
                                                                    )
                                                                }
                                                                className="h-8 w-8 text-destructive"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                        <form.Field
                                                            name={`challenges[${index}].title`}
                                                            children={(
                                                                subField
                                                            ) => {
                                                                const isInvalid =
                                                                    subField
                                                                        .state
                                                                        .meta
                                                                        .isTouched &&
                                                                    !subField
                                                                        .state
                                                                        .meta
                                                                        .isValid
                                                                return (
                                                                    <Field
                                                                        data-invalid={
                                                                            isInvalid
                                                                        }
                                                                    >
                                                                        <FieldLabel
                                                                            htmlFor={
                                                                                subField.name
                                                                            }
                                                                        >
                                                                            Title
                                                                        </FieldLabel>
                                                                        <Input
                                                                            id={
                                                                                subField.name
                                                                            }
                                                                            name={
                                                                                subField.name
                                                                            }
                                                                            value={
                                                                                subField
                                                                                    .state
                                                                                    .value
                                                                            }
                                                                            onBlur={
                                                                                subField.handleBlur
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                subField.handleChange(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            aria-invalid={
                                                                                isInvalid
                                                                            }
                                                                            placeholder="Challenge title"
                                                                        />
                                                                        {isInvalid && (
                                                                            <FieldError
                                                                                errors={
                                                                                    subField
                                                                                        .state
                                                                                        .meta
                                                                                        .errors
                                                                                }
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                )
                                                            }}
                                                        />
                                                        <form.Field
                                                            name={`challenges[${index}].problem`}
                                                            children={(
                                                                subField
                                                            ) => {
                                                                const isInvalid =
                                                                    subField
                                                                        .state
                                                                        .meta
                                                                        .isTouched &&
                                                                    !subField
                                                                        .state
                                                                        .meta
                                                                        .isValid
                                                                return (
                                                                    <Field
                                                                        data-invalid={
                                                                            isInvalid
                                                                        }
                                                                    >
                                                                        <FieldLabel
                                                                            htmlFor={
                                                                                subField.name
                                                                            }
                                                                        >
                                                                            Problem
                                                                        </FieldLabel>
                                                                        <Textarea
                                                                            id={
                                                                                subField.name
                                                                            }
                                                                            name={
                                                                                subField.name
                                                                            }
                                                                            value={
                                                                                subField
                                                                                    .state
                                                                                    .value
                                                                            }
                                                                            onBlur={
                                                                                subField.handleBlur
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                subField.handleChange(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            aria-invalid={
                                                                                isInvalid
                                                                            }
                                                                            placeholder="Describe the problem..."
                                                                            rows={
                                                                                2
                                                                            }
                                                                        />
                                                                        {isInvalid && (
                                                                            <FieldError
                                                                                errors={
                                                                                    subField
                                                                                        .state
                                                                                        .meta
                                                                                        .errors
                                                                                }
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                )
                                                            }}
                                                        />
                                                        <form.Field
                                                            name={`challenges[${index}].solution`}
                                                            children={(
                                                                subField
                                                            ) => {
                                                                const isInvalid =
                                                                    subField
                                                                        .state
                                                                        .meta
                                                                        .isTouched &&
                                                                    !subField
                                                                        .state
                                                                        .meta
                                                                        .isValid
                                                                return (
                                                                    <Field
                                                                        data-invalid={
                                                                            isInvalid
                                                                        }
                                                                    >
                                                                        <FieldLabel
                                                                            htmlFor={
                                                                                subField.name
                                                                            }
                                                                        >
                                                                            Solution
                                                                        </FieldLabel>
                                                                        <Textarea
                                                                            id={
                                                                                subField.name
                                                                            }
                                                                            name={
                                                                                subField.name
                                                                            }
                                                                            value={
                                                                                subField
                                                                                    .state
                                                                                    .value
                                                                            }
                                                                            onBlur={
                                                                                subField.handleBlur
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                subField.handleChange(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            aria-invalid={
                                                                                isInvalid
                                                                            }
                                                                            placeholder="Describe the solution..."
                                                                            rows={
                                                                                2
                                                                            }
                                                                        />
                                                                        {isInvalid && (
                                                                            <FieldError
                                                                                errors={
                                                                                    subField
                                                                                        .state
                                                                                        .meta
                                                                                        .errors
                                                                                }
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                )
                                                            }}
                                                        />
                                                    </div>
                                                )
                                            )}
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    field.pushValue({
                                                        title: "",
                                                        problem: "",
                                                        solution: "",
                                                    })
                                                }
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <Plus className="mr-2 h-4 w-4" />
                                                Add Challenge
                                            </Button>
                                        </>

                                    )}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Testimonials Tab */}
                    <TabsContent
                        value="testimonials"
                        className="space-y-4 pt-4"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Testimonials</CardTitle>
                                <CardDescription>
                                    Add client testimonials for this industry
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form.Field
                                    name="testimonials"
                                    mode="array"
                                    children={(field) => (
                                        <>
                                            {field.state.value.map(
                                                (
                                                    _testimonial: {
                                                        quote: string
                                                        author: string
                                                        role: string
                                                        company: string
                                                        image?: string
                                                    },
                                                    index: number
                                                ) => (
                                                    <div
                                                        key={index}
                                                        className="border rounded-md p-4 space-y-3"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <h4 className="font-medium">
                                                                Testimonial{" "}
                                                                {index + 1}
                                                            </h4>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() =>
                                                                    field.removeValue(
                                                                        index
                                                                    )
                                                                }
                                                                className="h-8 w-8 text-destructive"
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                        <form.Field
                                                            name={`testimonials[${index}].quote`}
                                                            children={(
                                                                subField
                                                            ) => {
                                                                const isInvalid =
                                                                    subField
                                                                        .state
                                                                        .meta
                                                                        .isTouched &&
                                                                    !subField
                                                                        .state
                                                                        .meta
                                                                        .isValid
                                                                return (
                                                                    <Field
                                                                        data-invalid={
                                                                            isInvalid
                                                                        }
                                                                    >
                                                                        <FieldLabel
                                                                            htmlFor={
                                                                                subField.name
                                                                            }
                                                                        >
                                                                            Quote
                                                                        </FieldLabel>
                                                                        <Textarea
                                                                            id={
                                                                                subField.name
                                                                            }
                                                                            name={
                                                                                subField.name
                                                                            }
                                                                            value={
                                                                                subField
                                                                                    .state
                                                                                    .value
                                                                            }
                                                                            onBlur={
                                                                                subField.handleBlur
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                subField.handleChange(
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            aria-invalid={
                                                                                isInvalid
                                                                            }
                                                                            placeholder="Client testimonial..."
                                                                            rows={
                                                                                3
                                                                            }
                                                                        />
                                                                        {isInvalid && (
                                                                            <FieldError
                                                                                errors={
                                                                                    subField
                                                                                        .state
                                                                                        .meta
                                                                                        .errors
                                                                                }
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                )
                                                            }}
                                                        />
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <form.Field
                                                                name={`testimonials[${index}].author`}
                                                                children={(
                                                                    subField
                                                                ) => {
                                                                    const isInvalid =
                                                                        subField
                                                                            .state
                                                                            .meta
                                                                            .isTouched &&
                                                                        !subField
                                                                            .state
                                                                            .meta
                                                                            .isValid
                                                                    return (
                                                                        <Field
                                                                            data-invalid={
                                                                                isInvalid
                                                                            }
                                                                        >
                                                                            <FieldLabel
                                                                                htmlFor={
                                                                                    subField.name
                                                                                }
                                                                            >
                                                                                Author
                                                                            </FieldLabel>
                                                                            <Input
                                                                                id={
                                                                                    subField.name
                                                                                }
                                                                                name={
                                                                                    subField.name
                                                                                }
                                                                                value={
                                                                                    subField
                                                                                        .state
                                                                                        .value
                                                                                }
                                                                                onBlur={
                                                                                    subField.handleBlur
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    subField.handleChange(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                aria-invalid={
                                                                                    isInvalid
                                                                                }
                                                                                placeholder="John Doe"
                                                                            />
                                                                            {isInvalid && (
                                                                                <FieldError
                                                                                    errors={
                                                                                        subField
                                                                                            .state
                                                                                            .meta
                                                                                            .errors
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    )
                                                                }}
                                                            />
                                                            <form.Field
                                                                name={`testimonials[${index}].role`}
                                                                children={(
                                                                    subField
                                                                ) => {
                                                                    const isInvalid =
                                                                        subField
                                                                            .state
                                                                            .meta
                                                                            .isTouched &&
                                                                        !subField
                                                                            .state
                                                                            .meta
                                                                            .isValid
                                                                    return (
                                                                        <Field
                                                                            data-invalid={
                                                                                isInvalid
                                                                            }
                                                                        >
                                                                            <FieldLabel
                                                                                htmlFor={
                                                                                    subField.name
                                                                                }
                                                                            >
                                                                                Role
                                                                            </FieldLabel>
                                                                            <Input
                                                                                id={
                                                                                    subField.name
                                                                                }
                                                                                name={
                                                                                    subField.name
                                                                                }
                                                                                value={
                                                                                    subField
                                                                                        .state
                                                                                        .value
                                                                                }
                                                                                onBlur={
                                                                                    subField.handleBlur
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    subField.handleChange(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                aria-invalid={
                                                                                    isInvalid
                                                                                }
                                                                                placeholder="CEO"
                                                                            />
                                                                            {isInvalid && (
                                                                                <FieldError
                                                                                    errors={
                                                                                        subField
                                                                                            .state
                                                                                            .meta
                                                                                            .errors
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    )
                                                                }}
                                                            />
                                                            <form.Field
                                                                name={`testimonials[${index}].company`}
                                                                children={(
                                                                    subField
                                                                ) => {
                                                                    const isInvalid =
                                                                        subField
                                                                            .state
                                                                            .meta
                                                                            .isTouched &&
                                                                        !subField
                                                                            .state
                                                                            .meta
                                                                            .isValid
                                                                    return (
                                                                        <Field
                                                                            data-invalid={
                                                                                isInvalid
                                                                            }
                                                                        >
                                                                            <FieldLabel
                                                                                htmlFor={
                                                                                    subField.name
                                                                                }
                                                                            >
                                                                                Company
                                                                            </FieldLabel>
                                                                            <Input
                                                                                id={
                                                                                    subField.name
                                                                                }
                                                                                name={
                                                                                    subField.name
                                                                                }
                                                                                value={
                                                                                    subField
                                                                                        .state
                                                                                        .value
                                                                                }
                                                                                onBlur={
                                                                                    subField.handleBlur
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    subField.handleChange(
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                aria-invalid={
                                                                                    isInvalid
                                                                                }
                                                                                placeholder="Acme Inc."
                                                                            />
                                                                            {isInvalid && (
                                                                                <FieldError
                                                                                    errors={
                                                                                        subField
                                                                                            .state
                                                                                            .meta
                                                                                            .errors
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    )
                                                                }}
                                                            />
                                                            <form.Field
                                                                name={`testimonials[${index}].image`}
                                                                children={(
                                                                    subField
                                                                ) => {
                                                                    const isInvalid =
                                                                        subField
                                                                            .state
                                                                            .meta
                                                                            .isTouched &&
                                                                        !subField
                                                                            .state
                                                                            .meta
                                                                            .isValid
                                                                    return (
                                                                        <Field
                                                                            data-invalid={
                                                                                isInvalid
                                                                            }
                                                                        >
                                                                            <FieldLabel
                                                                                htmlFor={
                                                                                    subField.name
                                                                                }
                                                                            >
                                                                                Avatar
                                                                            </FieldLabel>
                                                                            <AssetPickerDialog
                                                                                value={subField.state.value || ""}
                                                                                onSelect={(url) => subField.handleChange(url)}
                                                                                folder="industries/testimonials"
                                                                            />
                                                                            {isInvalid && (
                                                                                <FieldError
                                                                                    errors={
                                                                                        subField
                                                                                            .state
                                                                                            .meta
                                                                                            .errors
                                                                                    }
                                                                                />
                                                                            )}
                                                                        </Field>
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    field.pushValue({
                                                        quote: "",
                                                        author: "",
                                                        role: "",
                                                        company: "",
                                                        image: "",
                                                    })
                                                }
                                                variant="outline"
                                                className="w-full"
                                            >
                                                <Plus className="mr-2 h-4 w-4" />
                                                Add Testimonial
                                            </Button>
                                        </>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Settings Tab */}
                    <TabsContent value="settings" className="space-y-4 pt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Visibility Settings</CardTitle>
                                <CardDescription>
                                    Control how this industry appears on your
                                    site
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form.Field
                                    name="is_published"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched &&
                                            !field.state.meta.isValid
                                        return (
                                            <Field
                                                orientation="horizontal"
                                                data-invalid={isInvalid}
                                                className="flex-row items-center justify-between rounded-lg border p-4"
                                            >
                                                <FieldContent>
                                                    <FieldLabel
                                                        htmlFor={field.name}
                                                    >
                                                        Publish Status
                                                    </FieldLabel>
                                                    <FieldDescription>
                                                        Make this industry
                                                        visible on the public
                                                        website.
                                                    </FieldDescription>
                                                </FieldContent>
                                                <Switch
                                                    id={field.name}
                                                    name={field.name}
                                                    checked={field.state.value}
                                                    onCheckedChange={
                                                        field.handleChange
                                                    }
                                                    aria-invalid={isInvalid}
                                                />
                                            </Field>
                                        )
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}
