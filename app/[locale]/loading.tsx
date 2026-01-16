export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FCFAFA]">
            <div className="space-y-8 text-center">
                {/* Logo Skeleton */}
                <div className="mx-auto h-16 w-16 animate-pulse rounded-lg bg-stone-200" />

                {/* Text Skeleton */}
                <div className="space-y-3">
                    <div className="mx-auto h-8 w-48 animate-pulse rounded bg-stone-200" />
                    <div className="mx-auto h-4 w-32 animate-pulse rounded bg-stone-200" />
                </div>

                {/* Spinner */}
                <div className="flex justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-200 border-t-[#C5A358]" />
                </div>
            </div>
        </div>
    );
}
