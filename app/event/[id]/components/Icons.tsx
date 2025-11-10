import React from "react";
import Image from "next/image";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const InviteGuestIcon: React.FC<IconProps> = ({ className, style }) => (
  <Image
    src="/icons/invite-onclick-guest.svg"
    alt="Invite Guest"
    width={33}
    height={33}
    className={className}
    style={style}
  />
);

export const ShareEventIcon: React.FC<IconProps> = ({ className, style }) => (
  <Image
    src="/icons/share-onclick-event.svg"
    alt="Share Event"
    width={33}
    height={33}
    className={className}
    style={style}
  />
);

export const CountingIcon: React.FC<IconProps> = ({ className, style }) => (
  <Image
    src="/icons/counting-registration.svg"
    alt="Guest Count"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const CreatorIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/creator-onclick-icon.svg"
    alt="Creator Icon"
    width={16}
    height={16}
    className={className}
  />
);

export const GuestIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/guest-onclick-icon.svg"
    alt="Guest Icon"
    width={16}
    height={16}
    className={className}
  />
);

export const PublicIcon: React.FC<IconProps> = ({ className }) => (
  <Image
    src="/icons/public-onclick.svg"
    alt="Public Icon"
    width={24}
    height={24}
    className={className}
  />
);

export const FacebookIcon: React.FC<IconProps> = ({ className, style }) => (
  <Image
    src="/icons/facebook-onclick.svg"
    alt="Facebook"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const InstagramIcon: React.FC<IconProps> = ({ className, style }) => (
  <Image
    src="/icons/instagram-onclick.svg"
    alt="Instagram"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const XIcon: React.FC<IconProps> = ({ className, style }) => (
  <Image
    src="/icons/twitter-onclick.svg"
    alt="X"
    width={24}
    height={24}
    className={className}
    style={style}
  />
);

export const ProfileImage: React.FC<IconProps & { alt?: string }> = ({
  className,
  alt = "Profile Image",
}) => (
  <Image
    src="/icons/Profile-img.svg"
    alt={alt}
    width={48}
    height={48}
    className={className}
  />
);
