const ContainerModal = ({ children, classes }) => {
  return (
    <div
      className={`w-full h-screen fixed bg-bg_black center_flex text-white z-50 ${classes}`}
    >
      {children}
    </div>
  );
};

export default ContainerModal;
