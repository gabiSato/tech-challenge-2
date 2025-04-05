interface FeatureCardProps {
  image: React.ElementType;
  title: string;
  description: string;
}

export default function FeatureCard({
  image,
  title,
  description,
}: FeatureCardProps) {
  const ImageComponent = image;

  return (
    <div className="max-w-[282px] flex flex-col gap-16 items-center">
      <ImageComponent className="h-56" />

      <h3 className="text-lg-bold text-green-200">{title}</h3>

      <p className="text-sm text-neutral-500 text-center">{description}</p>
    </div>
  );
}
