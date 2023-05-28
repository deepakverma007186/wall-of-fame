const NoMembers = () => {
  return (
    <>
      <div className="flex h-[60vh] w-full items-center justify-center gap-2">
        <div>
          <img
            src="/assets/ul_icon.png"
            alt="no-contact"
            className="w-[30px] object-contain"
          />
        </div>
        <h3 className="text-xl text-primary">Loading...</h3>
      </div>
    </>
  );
};

export default NoMembers;
