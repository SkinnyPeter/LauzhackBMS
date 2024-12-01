import React from "react";

interface IconButtonLinkProps {
  text: string; // Texte affiché au centre du bouton
  iconUrl: string; // URL de l'image d'icône (dans /public)
  href: string; // URL pour le lien
  className?: string; // Classes CSS additionnelles
}

const IconButtonLink: React.FC<IconButtonLinkProps> = ({
  text,
  iconUrl,
  href,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`relative flex items-center justify-center w-[30rem] h-[30rem] text-center text-black font-bold text-4xl no-underline rounded-md overflow-hidden ${className}`}
    >
      {/* Icon en tant qu'image de fond */}
      <img
        src={iconUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        aria-hidden="true"
      />
      {/* Texte centré */}
      <span className="relative z-10 text-white text-6xl">{text}</span>
    </a>
  );
};

export default IconButtonLink;
