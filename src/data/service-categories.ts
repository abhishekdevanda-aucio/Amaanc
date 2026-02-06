// Re-export from services.ts for backwards compatibility
// All service category functions are now in services.ts

export {
    getServiceCategories as getCategories,
    getCategoryBySlug,
    type ServiceCategory
} from "./services"
