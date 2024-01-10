const ClerkLayout = ({ children }: {
    children: React.ReactNode;
  }) => {
    return (
      <div className="h-full flex justify-center items-center mt-20 pt-20">
        {children}
      </div>
    );
  };
  
  export default ClerkLayout;