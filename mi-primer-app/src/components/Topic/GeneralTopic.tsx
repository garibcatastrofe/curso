export function GeneralTopic({
  name,
  description,
  urlImage,
}: {
  name: string;
  description: string;
  urlImage: string;
}) {
  return (
    <div className="w-2/3 h-fit">
      <h3 className="mb-3 text-3xl font-light text-start">{name}</h3>
      <p className="mb-4 text-xl text-start font-extralight">{description}</p>
      <img
        className="mb-6 w-96 max-h-[32rem] object-contain object-center rounded-2xl"
        loading="lazy"
        src={urlImage}
        alt=""
      />
    </div>
  );
}
