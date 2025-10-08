


interface labelProps {
    required?: boolean;
    className?: string;
}
export default function Label({ children, required, className }: { children: React.ReactNode } & labelProps) {
    return (
        <>
            <label className={className}>{children}{required && <span className="text-red-600 pl-1">*</span>}</label>
        </>
    )
}