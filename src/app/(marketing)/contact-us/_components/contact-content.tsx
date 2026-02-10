import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function ContactContent() {
    return (
        <section className="container px-4 mx-auto pb-24 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
                {/* Left Column: Info */}
                <div className="lg:col-span-5 flex flex-col h-full transform transition-all duration-500 hover:translate-x-1">
                    <ContactInfo />
                </div>

                {/* Right Column: Form Card */}
                <div className="lg:col-span-7 flex flex-col h-full">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
