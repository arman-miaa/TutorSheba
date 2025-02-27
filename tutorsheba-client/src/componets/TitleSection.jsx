

const TitleSection = ({title,subtitle}) => {
  return (
    <div className="py-8">
      <h3 className="text-[36px] font-bold text-center">{title}</h3>
      <h6 className="text-2xl text-[#66789c] text-center">{subtitle}</h6>
    </div>
  );
}

export default TitleSection