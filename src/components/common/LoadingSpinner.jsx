const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center 
                    bg-black/50 backdrop-blur-sm z-50">
      <div className="animate-spin rounded-full h-16 w-16 
                    border-4 border-[#DC2626]/30 border-t-[#DC2626]"></div>
      <p className="text-white mt-4 text-xl font-semibold tracking-wide">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;