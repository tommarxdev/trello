"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormSubmitProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
};

export const FormSubmit = ({
    children,
    className,
    disabled,
    variant
}: FormSubmitProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
        disabled={pending || disabled}
        type="submit"
        variant={variant}
        size="sm"
        className={cn(className)}
        >
            {children}
        </Button>
    );
};

