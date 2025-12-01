import alfonso from "@/assets/alfonso.jpg";
import migeli from "@/assets/migeli.jpeg";
import niseto from "@/assets/niseto.jpg";
import manuel from "@/assets/manuel.jpg";
import francisco from "@/assets/francisco.jpg";
import juan from "@/assets/juan.jpg";
import franco from "@/assets/franco.jpg";
import dolores from "@/assets/dolores.jpg";

export const avatars = {
  alfonso,
  migeli,
  niseto,
  manuel,
  francisco,
  juan,
  franco,
  dolores,
} as const;

export type AvatarKey = keyof typeof avatars;
