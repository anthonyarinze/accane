type Props = {
  header: string;
  about: string;
  images?: string[];
};

const WhoWeAre = ({ header, about, images }: Props) => {
  return (
    <section>
      <div className="h-44 w-4/6 mx-auto flex items-center font-semibold flex-col justify-evenly text-center my-10">
        <h3 className="font-bold md:text-3xl italic">{header}</h3>
        <p>{about}</p>
      </div>
      {images && (
        <div className="w-full mb-10 flex flex-wrap justify-center">
          {images.map((image: string, index: number) => (
            <img
              src={image}
              key={index}
              className="w-[220px] md:w-[400px] rounded-sm h-auto mb-4 mx-2 lg:mx-4"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;
