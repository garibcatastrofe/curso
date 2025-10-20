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
    <div className="w-2/3 bg-green-700 h-fit">
      <h3>{name}</h3>
      <p>{description}</p>
      <img loading='lazy' src={urlImage} />
    </div>
  );
}
