export function Card({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="flex-col w-1/2 h-fit">
      <img loading="lazy" src={imageUrl} className="m-auto mb-6 rounded-md w-60 h-60" />
      <div>
        <h2 className="mb-1 text-4xl text-center font-extralight">{name}</h2>
        <h3 className="text-2xl text-center font-extralight">{description}</h3>
      </div>
    </div>
  );
}
