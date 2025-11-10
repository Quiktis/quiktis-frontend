import Image from "next/image";

export const InviteGuestIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <Image
    src="/icons/invite-onclick-guest.svg"
    alt="Invite Guest Icon"
    width={34}
    height={34}
    className={className}
    style={style}
  />
);

export const ShareEventIcon = ({ className }: { className?: string }) => (
  <Image
    src="/icons/share-onclick-event.svg"
    alt="Share Event Icon"
    width={33}
    height={33}
    className={className}
  />
);

export const FacebookIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <Image
    src="/icons/facebook-onclick.svg"
    alt="Facebook Icon"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const InstagramIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <Image
    src="/icons/instagram-onclick.svg"
    alt="Instagram Icon"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const XIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <Image
    src="/icons/twitter-onclick.svg"
    alt="X Icon"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const CreatorIcon = ({ className }: { className?: string }) => (
  <Image
    src="/icons/creator-onclick-icon.svg"
    alt="Creator Icon"
    width={16}
    height={16}
    className={className}
  />
);

export const GuestIcon = ({ className }: { className?: string }) => (
  <Image
    src="/icons/guest-onclick-icon.svg"
    alt="Guest Icon"
    width={16}
    height={16}
    className={className}
  />
);

export const PublicIcon = ({ className }: { className?: string }) => (
  <Image
    src="/icons/public-onclick.svg"
    alt="Public Icon"
    width={20}
    height={20}
    className={className}
  />
);

export const ProfileImage = ({
  className,
  alt,
}: {
  className?: string;
  alt?: string;
}) => (
  <Image
    src="/icons/Profile-img.svg"
    alt={alt ?? "Profile Image"}
    width={48}
    height={48}
    className={className}
  />
);
