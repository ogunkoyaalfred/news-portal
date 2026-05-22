const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl overflow-hidden">
      <div className="h-52 bg-gray-200" />

      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
};

export default SkeletonCard;