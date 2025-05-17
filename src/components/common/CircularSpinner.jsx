const CircularSpinner = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-solid rounded-full"></div>
          <div className="w-16 h-16 border-4 border-blue-600 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </div>
    );
  };