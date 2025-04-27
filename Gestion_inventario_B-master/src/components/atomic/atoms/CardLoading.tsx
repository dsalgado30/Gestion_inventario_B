import { Card, Skeleton } from "@heroui/react";

const CardLoading = () => {
  return (
    <Card className="max-w-[340px] w-full space-y-1 p-2" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-12 rounded-lg bg-secondary" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-secondary" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-secondary-300" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-full rounded-lg bg-secondary-200" />
        </Skeleton>
      </div>
    </Card>
  );
  };
  
  export default CardLoading;
  