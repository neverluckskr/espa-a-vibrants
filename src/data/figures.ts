import { avatars } from "./avatars";

export type Figure = {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  avatar?: string;
};

export const figures: Figure[] = [
  {
    id: "alfonso-xiii",
    name: "Альфонсо XIII",
    role: "Король Іспанії",
    period: "1886-1931",
    description:
      "Монарх, чиє правління супроводжувалося політичною нестабільністю; зрікся після проголошення Другої республіки.",
    avatar: avatars.alfonso,
  },
  {
    id: "miguel-primo-de-rivera",
    name: "Мігель Прімо де Рівера",
    role: "Воєнний диктатор",
    period: "1923-1930",
    description:
      "Очолював військову диктатуру, що намагалася навести порядок, призупинила конституцію й змінила політичний ландшафт Іспанії.",
    avatar: avatars.migeli,
  },
  {
    id: "niceto-alcala-zamora",
    name: "Нісето Алькала-Самора",
    role: "Президент Республіки",
    period: "1931-1936",
    description:
      "Поміркований політик і перший президент Другої республіки, який намагався поєднати реформи з посиленням політичної напруги.",
    avatar: avatars.niseto,
  },
  {
    id: "manuel-azana",
    name: "Мануель Асанья",
    role: "Прем'єр-міністр і президент",
    period: "1936-1939",
    description:
      "Республіканський лідер, що просував світські реформи й очолював уряд у перші роки Громадянської війни.",
    avatar: avatars.manuel,
  },
  {
    id: "francisco-largo-caballero",
    name: "Франсіско Ларго Кабальєро",
    role: "Соціалістичний лідер і прем'єр-міністр",
    period: "1936-1937",
    description:
      "Профспілковий діяч і соціаліст, який очолював уряд Республіки на початку Громадянської війни.",
    avatar: avatars.francisco,
  },
  {
    id: "juan-negrin",
    name: "Хуан Негрін",
    role: "Прем'єр-міністр",
    period: "1937-1939",
    description:
      "Вів Республіку через останні роки війни, зосередившись на підтримці військових зусиль і міжнародної допомоги.",
    avatar: avatars.juan,
  },
  {
    id: "francisco-franco",
    name: "Франсіско Франко",
    role: "Націоналістичний генерал",
    period: "1936-1975",
    description:
      "Очолив націоналістичні сили до перемоги й правив Іспанією як диктатор до смерті, кардинально змінивши політику країни.",
    avatar: avatars.franco,
  },
  {
    id: "dolores-ibarruri",
    name: "Долорес Ібаррурі",
    role: "Комуністична лідерка й промовиця",
    period: "1930s onward",
    description:
      'Яскравий голос Республіки, відома пристрасними промовами та гаслом "¡No pasarán!", що стало символом спротиву фашизму.',
    avatar: avatars.dolores,
  },
];
