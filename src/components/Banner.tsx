type BannerProps = {
  imageSrc: string;
  aspectRatio?: string;
  alt?: string;
};

export function Banner({ imageSrc, aspectRatio = "1920/621", alt = "Banner" }: BannerProps) {
  return (
    <div
      className="relative shrink-0 w-full"
      style={{ aspectRatio }}
      data-name="banner"
    >
      <img
        alt={alt}
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imageSrc}
      />
    </div>
  );
}
