import { Skeleton } from "@/components/ui/skeleton";

const TodoLoadingSkeleton = () => {
  return (
    <div className="flex justify-between items-center space-x-4 border px-3 py-5 rounded-md w-full">
      <div className="w-[15%] space-x-4 flex justify-between">
        <Skeleton className="size-5 rounded bg-gray-200" />
        <Skeleton className="flex-grow w-[80%] bg-gray-200" />
      </div>
      <Skeleton className="h-4 w-[10%] bg-gray-200" />
      <Skeleton className="h-4 w-[35%] bg-gray-200" />
      <Skeleton className="h-4 w-[8%] bg-gray-200" />
      <div className="w-[10%] space-x-8  flex justify-between items-center">
        <Skeleton className="h-4 w-[50%] bg-gray-200" />
        <Skeleton className="h-4 w-[50%] bg-gray-200" />
      </div>
    </div>
  );
};

export default TodoLoadingSkeleton;
