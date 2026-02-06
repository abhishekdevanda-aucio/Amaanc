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
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import {
    ArrowLeft,
    Loader2,
    Plus,
    X,
    Lightbulb,
    Target,
    Wrench,
    Trash2,
} from "lucide-react"
import { createService } from "../_actions/create-service"
import { updateService } from "../_actions/update-service"
import { AssetPickerDialog } from "@/components/asset-picker-dialog"
import Link from "next/link"
import { useState } from "react"

// Zod Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    slug: z.string().min(2, "Slug must be at least 2 characters"),
    short_description: z.string().min(10, "Short description must be at least 10 characters"),
    description: z.string().min(20, "Description must be at least 20 characters"),
    icon: z.string().optional(),
    image_url: z.string().optional(),
    is_featured: z.boolean(),
    is_published: z.boolean(),
    display_order: z.number().min(0),
    features: z.array(z.string()),
    tech_stack: z.array(z.string()),
    problems: z.array(
        z.object({
            title: z.string().min(1, "Title required"),
            description: z.string().min(1, "Description required"),
        })
    ),
    solutions: z.array(
        z.object({
            title: z.string().min(1, "Title required"),
            description: z.string().min(1, "Description required"),
        })
    ),
})

type ServiceFormValues = z.infer<typeof formSchema>

interface Service {
    id: string
    slug: string
    name: string
    shortDescription: string
    description: string
    categoryId: string
    category?: { id: string; slug: string; name: string } | null
    icon: string
    imageUrl: string
    features: string[]
    problems: { title: string; description: string }[]
    solutions: { title: string; description: string }[]
    techStack: string[]
    isFeatured: boolean
    isPublished: boolean
    displayOrder: number
}

interface Category {
    id: string
    slug: string
    name: string
}

interface ServiceFormProps {
    initialData?: Service | null
    category: Category
}

export function ServiceForm({ initialData, category }: ServiceFormProps) {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("basic")
    const [newFeature, setNewFeature] = useState("")
    const [newTech, setNewTech] = useState("")

    // Default values
    const defaultValues: ServiceFormValues = initialData
        ? {
            name: initialData.name,
            slug: initialData.slug,
            short_description: initialData.shortDescription || "",
            description: initialData.description,
            icon: initialData.icon || "",
            image_url: initialData.imageUrl || "",
            is_featured: initialData.isFeatured,
            is_published: initialData.isPublished,
            display_order: initialData.displayOrder || 0,
            features: initialData.features || [],
            tech_stack: initialData.techStack || [],
            problems: initialData.problems || [],
            solutions: initialData.solutions || [],
        }
        : {
            name: "",
            slug: "",
            short_description: "",
            description: "",
            icon: "",
            image_url: "",
            is_featured: false,
            is_published: false,
            display_order: 0,
            features: [],
            tech_stack: [],
            problems: [],
            solutions: [],
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

                // Add category info
                formData.append("category_id", category.id)
                formData.append("category_slug", category.slug)

                if (value.is_featured) formData.set("is_featured", "on")
                if (value.is_published) formData.set("is_published", "on")

                if (initialData) {
                    await updateService(initialData.id, null, formData)
                    toast.success("Service updated successfully")
                } else {
                    await createService(null, formData)
                    toast.success("Service created successfully")
                }
                router.push(`/dashboard/services/${category.slug}`)
            } catch (error) {
                console.error(error)
                toast.error("Something went wrong")
            }
        },
    })

    const handleCancel = () => {
        router.push(`/dashboard/services/${category.slug}`)
    }

    // Auto-generate slug from name
    const generateSlug = (name: string) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim()
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
                        <Link href={`/dashboard/services/${category.slug}`}>
                            <Button variant="ghost" size="icon" type="button">
                                <ArrowLeft className="w-4 h-4" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                {initialData
                                    ? `Edit ${initialData.name}`
                                    : "Create Service"}
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">{category.name}</Badge>
                                <p className="text-sm text-muted-foreground">
                                    {initialData
                                        ? "Update an existing service"
                                        : "Add a new service to this category"}
                                </p>
                            </div>
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
                                    {initialData ? "Update" : "Create"} Service
                                </Button>
                            )}
                        />
                    </div>
                </div>

                {/* Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="w-full justify-start overflow-x-auto">
                        <TabsTrigger value="basic">Basic Info</TabsTrigger>
                        <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="problems">Challenges</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>

                    {/* Basic Info Tab */}
                    <TabsContent value="basic" className="space-y-4 pt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Information</CardTitle>
                                <CardDescription>
                                    Core details about the service
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Name */}
                                <form.Field name="name">
                                    {(field) => (
                                        <Field>
                                            <FieldLabel>Name *</FieldLabel>
                                            <FieldContent>
                                                <Input
                                                    value={field.state.value}
                                                    onChange={(e) => {
                                                        field.handleChange(e.target.value)
                                                        // Auto-generate slug if empty
                                                        if (!form.state.values.slug || form.state.values.slug === generateSlug(field.state.value.slice(0, -1))) {
                                                            form.setFieldValue("slug", generateSlug(e.target.value))
                                                        }
                                                    }}
                                                    onBlur={field.handleBlur}
                                                    placeholder="e.g., Salesforce Consultancy"
                                                />
                                            </FieldContent>
                                            {field.state.meta.errors[0] && (
                                                <FieldError>{field.state.meta.errors[0]?.message}</FieldError>
                                            )}
                                        </Field>
                                    )}
                                </form.Field>

                                {/* Slug */}
                                <form.Field name="slug">
                                    {(field) => (
                                        <Field>
                                            <FieldLabel>Slug *</FieldLabel>
                                            <FieldDescription>
                                                URL-friendly identifier: /services/{category.slug}/{field.state.value || "your-slug"}
                                            </FieldDescription>
                                            <FieldContent>
                                                <Input
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    onBlur={field.handleBlur}
                                                    placeholder="e.g., salesforce"
                                                />
                                            </FieldContent>
                                            {field.state.meta.errors[0] && (
                                                <FieldError>{field.state.meta.errors[0]?.message}</FieldError>
                                            )}
                                        </Field>
                                    )}
                                </form.Field>

                                {/* Short Description */}
                                <form.Field name="short_description">
                                    {(field) => (
                                        <Field>
                                            <FieldLabel>Short Description *</FieldLabel>
                                            <FieldDescription>
                                                Brief summary shown on cards and listings
                                            </FieldDescription>
                                            <FieldContent>
                                                <Textarea
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    onBlur={field.handleBlur}
                                                    placeholder="Strategic implementation and optimization of Salesforce clouds."
                                                    rows={2}
                                                />
                                            </FieldContent>
                                            {field.state.meta.errors[0] && (
                                                <FieldError>{field.state.meta.errors[0]?.message}</FieldError>
                                            )}
                                        </Field>
                                    )}
                                </form.Field>

                                {/* Image */}
                                <form.Field name="image_url">
                                    {(field) => (
                                        <Field>
                                            <FieldLabel>Service Image</FieldLabel>
                                            <FieldDescription>
                                                Hero image for the service page
                                            </FieldDescription>
                                            <FieldContent>
                                                <div className="flex gap-2">
                                                    <Input
                                                        value={field.state.value}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        placeholder="Select an image..."
                                                        className="flex-1"
                                                        readOnly
                                                    />
                                                    <AssetPickerDialog
                                                        value={field.state.value || ""}
                                                        onSelect={(url) => field.handleChange(url)}
                                                    />
                                                </div>
                                            </FieldContent>
                                        </Field>
                                    )}
                                </form.Field>

                                {/* Icon */}
                                <form.Field name="icon">
                                    {(field) => (
                                        <Field>
                                            <FieldLabel>Icon Name</FieldLabel>
                                            <FieldDescription>
                                                Identifier for the service icon (e.g., salesforce, ai)
                                            </FieldDescription>
                                            <FieldContent>
                                                <Input
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    onBlur={field.handleBlur}
                                                    placeholder="e.g., salesforce"
                                                />
                                            </FieldContent>
                                        </Field>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Tech Stack Tab */}
                    <TabsContent value="tech-stack" className="space-y-4 pt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Wrench className="size-5" />
                                    Tech Stack
                                </CardTitle>
                                <CardDescription>
                                    Technologies and tools used in this service
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form.Field name="tech_stack">
                                    {(field) => (
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {field.state.value.map((tech, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="outline"
                                                        className="gap-1 pr-1"
                                                    >
                                                        {tech}
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-4 w-4 hover:bg-transparent"
                                                            onClick={() => {
                                                                const newTechs = [...field.state.value]
                                                                newTechs.splice(index, 1)
                                                                field.handleChange(newTechs)
                                                            }}
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-2">
                                                <Input
                                                    value={newTech}
                                                    onChange={(e) => setNewTech(e.target.value)}
                                                    placeholder="Add a technology..."
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            e.preventDefault()
                                                            if (newTech.trim()) {
                                                                field.handleChange([...field.state.value, newTech.trim()])
                                                                setNewTech("")
                                                            }
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => {
                                                        if (newTech.trim()) {
                                                            field.handleChange([...field.state.value, newTech.trim()])
                                                            setNewTech("")
                                                        }
                                                    }}
                                                >
                                                    <Plus className="size-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Content Tab */}
                    <TabsContent value="content" className="space-y-4 pt-4">
                        {/* Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Full Description</CardTitle>
                                <CardDescription>
                                    Detailed description for the service page
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form.Field name="description">
                                    {(field) => (
                                        <Field>
                                            <FieldContent>
                                                <Textarea
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    onBlur={field.handleBlur}
                                                    placeholder="Transform your customer relationships with our comprehensive Salesforce expertise..."
                                                    rows={6}
                                                />
                                            </FieldContent>
                                            {field.state.meta.errors[0] && (
                                                <FieldError>{field.state.meta.errors[0]?.message}</FieldError>
                                            )}
                                        </Field>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>

                        {/* Features */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lightbulb className="size-5" />
                                    Features
                                </CardTitle>
                                <CardDescription>
                                    Key capabilities and features of this service
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form.Field name="features">
                                    {(field) => (
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {field.state.value.map((feature, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="gap-1 pr-1"
                                                    >
                                                        {feature}
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-4 w-4 hover:bg-transparent"
                                                            onClick={() => {
                                                                const newFeatures = [...field.state.value]
                                                                newFeatures.splice(index, 1)
                                                                field.handleChange(newFeatures)
                                                            }}
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </Button>
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-2">
                                                <Input
                                                    value={newFeature}
                                                    onChange={(e) => setNewFeature(e.target.value)}
                                                    placeholder="Add a feature..."
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            e.preventDefault()
                                                            if (newFeature.trim()) {
                                                                field.handleChange([...field.state.value, newFeature.trim()])
                                                                setNewFeature("")
                                                            }
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => {
                                                        if (newFeature.trim()) {
                                                            field.handleChange([...field.state.value, newFeature.trim()])
                                                            setNewFeature("")
                                                        }
                                                    }}
                                                >
                                                    <Plus className="size-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Problems & Solutions Tab */}
                    <TabsContent value="problems" className="space-y-4 pt-4">
                        {/* Problems */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="size-5" />
                                    Problems We Solve
                                </CardTitle>
                                <CardDescription>
                                    Common challenges clients face that this service addresses
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form.Field name="problems">
                                    {(field) => (
                                        <div className="space-y-4">
                                            {field.state.value.map((problem, index) => (
                                                <div key={index} className="border rounded-md p-4 space-y-3">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-medium">Problem {index + 1}</h4>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 text-destructive"
                                                            onClick={() => {
                                                                const newProblems = [...field.state.value]
                                                                newProblems.splice(index, 1)
                                                                field.handleChange(newProblems)
                                                            }}
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Field>
                                                            <FieldLabel>Title</FieldLabel>
                                                            <Input
                                                                value={problem.title}
                                                                onChange={(e) => {
                                                                    const newProblems = [...field.state.value]
                                                                    newProblems[index] = { ...newProblems[index], title: e.target.value }
                                                                    field.handleChange(newProblems)
                                                                }}
                                                                placeholder="Problem title"
                                                            />
                                                        </Field>
                                                        <Field>
                                                            <FieldLabel>Description</FieldLabel>
                                                            <Textarea
                                                                value={problem.description}
                                                                onChange={(e) => {
                                                                    const newProblems = [...field.state.value]
                                                                    newProblems[index] = { ...newProblems[index], description: e.target.value }
                                                                    field.handleChange(newProblems)
                                                                }}
                                                                placeholder="Describe the problem..."
                                                                rows={2}
                                                            />
                                                        </Field>
                                                    </div>
                                                </div>
                                            ))}
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="w-full"
                                                onClick={() => {
                                                    field.handleChange([
                                                        ...field.state.value,
                                                        { title: "", description: "" }
                                                    ])
                                                }}
                                            >
                                                <Plus className="size-4 mr-2" />
                                                Add Problem
                                            </Button>
                                        </div>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>

                        {/* Solutions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lightbulb className="size-5" />
                                    Our Solutions
                                </CardTitle>
                                <CardDescription>
                                    How this service solves the problems above
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form.Field name="solutions">
                                    {(field) => (
                                        <div className="space-y-4">
                                            {field.state.value.map((solution, index) => (
                                                <div key={index} className="border rounded-md p-4 space-y-3">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-medium">Solution {index + 1}</h4>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            size="icon"
                                                            className="h-8 w-8 text-destructive"
                                                            onClick={() => {
                                                                const newSolutions = [...field.state.value]
                                                                newSolutions.splice(index, 1)
                                                                field.handleChange(newSolutions)
                                                            }}
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <Field>
                                                            <FieldLabel>Title</FieldLabel>
                                                            <Input
                                                                value={solution.title}
                                                                onChange={(e) => {
                                                                    const newSolutions = [...field.state.value]
                                                                    newSolutions[index] = { ...newSolutions[index], title: e.target.value }
                                                                    field.handleChange(newSolutions)
                                                                }}
                                                                placeholder="Solution title"
                                                            />
                                                        </Field>
                                                        <Field>
                                                            <FieldLabel>Description</FieldLabel>
                                                            <Textarea
                                                                value={solution.description}
                                                                onChange={(e) => {
                                                                    const newSolutions = [...field.state.value]
                                                                    newSolutions[index] = { ...newSolutions[index], description: e.target.value }
                                                                    field.handleChange(newSolutions)
                                                                }}
                                                                placeholder="Describe the solution..."
                                                                rows={2}
                                                            />
                                                        </Field>
                                                    </div>
                                                </div>
                                            ))}
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="w-full"
                                                onClick={() => {
                                                    field.handleChange([
                                                        ...field.state.value,
                                                        { title: "", description: "" }
                                                    ])
                                                }}
                                            >
                                                <Plus className="size-4 mr-2" />
                                                Add Solution
                                            </Button>
                                        </div>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Settings Tab */}
                    <TabsContent value="settings" className="space-y-4 pt-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Service Settings</CardTitle>
                                <CardDescription>
                                    Control visibility and ordering
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Display Order */}
                                <form.Field name="display_order">
                                    {(field) => (
                                        <Field>
                                            <FieldLabel>Display Order</FieldLabel>
                                            <FieldDescription>
                                                Lower numbers appear first in listings
                                            </FieldDescription>
                                            <FieldContent>
                                                <Input
                                                    type="number"
                                                    min={0}
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(parseInt(e.target.value) || 0)}
                                                    onBlur={field.handleBlur}
                                                />
                                            </FieldContent>
                                        </Field>
                                    )}
                                </form.Field>

                                {/* Featured */}
                                <form.Field name="is_featured">
                                    {(field) => (
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_featured" className="cursor-pointer">
                                                    Featured Service
                                                </Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Featured services appear on the homepage
                                                </p>
                                            </div>
                                            <Switch
                                                id="is_featured"
                                                checked={field.state.value}
                                                onCheckedChange={field.handleChange}
                                            />
                                        </div>
                                    )}
                                </form.Field>

                                {/* Published */}
                                <form.Field name="is_published">
                                    {(field) => (
                                        <div className="flex items-center justify-between p-4 border rounded-lg">
                                            <div className="space-y-0.5">
                                                <Label htmlFor="is_published" className="cursor-pointer">
                                                    Published
                                                </Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Published services are visible on the website
                                                </p>
                                            </div>
                                            <Switch
                                                id="is_published"
                                                checked={field.state.value}
                                                onCheckedChange={field.handleChange}
                                            />
                                        </div>
                                    )}
                                </form.Field>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </form>
    )
}
