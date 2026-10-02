import Image from "next/image";

type AttireIllustrationProps = {
  className?: string;
};

export function WomensAttire({ className }: AttireIllustrationProps) {
  return (
    <Image
      className={className}
      src="/illustrations/womens-garden-attire-faceless.png"
      width={1774}
      height={887}
      sizes="(max-width: 760px) calc(100vw - 48px), 680px"
      alt="Soft watercolor outfit ideas: a cornflower V-neck dress, blush flutter-sleeve wrap dress, buttercup tiered dress, sage halter dress, and lavender dress with a tied waist."
    />
  );
}

export function MensAttire({ className }: AttireIllustrationProps) {
  return (
    <Image
      className={className}
      src="/illustrations/mens-garden-attire-faceless.png"
      width={1774}
      height={887}
      sizes="(max-width: 760px) calc(100vw - 48px), 680px"
      alt="Soft watercolor outfit ideas: cornflower, blush, sage, buttercup, and lavender long-sleeved collared shirts with tailored trousers, leather belts, and dress shoes."
    />
  );
}
