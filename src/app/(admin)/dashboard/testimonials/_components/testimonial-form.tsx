"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Star } from "lucide-react"
import { Testimonial } from "@/data/testimonials"
import { useState } from "react"

interface TestimonialFormProps {
    testimonial?: Testimonial
    action: (prevState: any, formData: FormData) => Promise<any> | any
    mode: "create" | "edit"
}

export function TestimonialForm({ testimonial, action, mode }: TestimonialFormProps) {
    const [state, formAction, isPending] = useActionState(action, null)
    const [rating, setRating] = useState(testimonial?.rating ?? 5)
    const [hoveredRating, setHoveredRating] = useState(0)

    return (
        <form action={formAction} className="space-y-6">
            {/* Hidden rating field */}
            <input type="hidden" name="rating" value={rating} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main content */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Testimonial Content</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="quote">Quote *</Label>
                                <Textarea
                                    id="quote"
                                    name="quote"
                                    defaultValue={testimonial?.quote}
                                    placeholder="The client's testimonial quote..."
                                    rows={5}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="author">Author Name *</Label>
                                    <Input
                                        id="author"
                                        name="author"
                                        defaultValue={testimonial?.author}
                                        placeholder="Sarah Chen"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="title">Job Title *</Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        defaultValue={testimonial?.title}
                                        placeholder="Director, VP of Technology..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Company *</Label>
                                <Input
                                    id="company"
                                    name="company"
                                    defaultValue={testimonial?.company}
                                    placeholder="Global Financial Services"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="image_url">Author Photo URL</Label>
                                <Input
                                    id="image_url"
                                    name="image_url"
                                    defaultValue={testimonial?.imageUrl ?? ""}
                                    placeholder="/images/testimonials/author.webp"
                                />
                                <p className="text-xs text-muted-foreground">Avatar/headshot of the author. Leave blank to show initials.</p>
                            </div>

                            <div className="space-y-2">
                                <Label>Rating</Label>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="cursor-pointer transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`h-6 w-6 transition-colors ${star <= (hoveredRating || rating)
                                                    ? "fill-amber-400 text-amber-400"
                                                    : "text-muted-foreground/30"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                    <span className="ml-2 text-sm text-muted-foreground">{rating}/5</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar settings */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="is_published">Published</Label>
                                    <p className="text-xs text-muted-foreground">Visible on /testimonials page</p>
                                </div>
                                <Switch
                                    id="is_published"
                                    name="is_published"
                                    defaultChecked={testimonial?.isPublished ?? true}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label htmlFor="is_featured">Featured</Label>
                                    <p className="text-xs text-muted-foreground">Shown on homepage (max 3)</p>
                                </div>
                                <Switch
                                    id="is_featured"
                                    name="is_featured"
                                    defaultChecked={testimonial?.isFeatured ?? false}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="display_order">Display Order</Label>
                                <Input
                                    id="display_order"
                                    name="display_order"
                                    type="number"
                                    defaultValue={testimonial?.displayOrder ?? 0}
                                    min={0}
                                />
                                <p className="text-xs text-muted-foreground">Lower numbers appear first.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Button type="submit" disabled={isPending} className="w-full">
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                {mode === "create" ? "Creating..." : "Saving..."}
                            </>
                        ) : (
                            mode === "create" ? "Create Testimonial" : "Save Changes"
                        )}
                    </Button>
                </div>
            </div>

            {state && typeof state === "object" && "error" in state && (
                <p className="text-sm text-destructive">{String((state as { error: string }).error)}</p>
            )}
        </form>
    )
}
