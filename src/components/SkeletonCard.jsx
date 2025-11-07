const SkeletonCard = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-[#EAEAEA] p-3"
        >
          <div className="w-full h-52 skeleton rounded-xl mb-3"></div>
          <div className="h-4 w-3/4 skeleton rounded mb-2"></div>
          <div className="h-4 w-1/2 skeleton rounded mb-3"></div>
          <div className="h-6 w-1/3 skeleton rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;