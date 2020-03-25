const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class Item {
  constructor(name, location, startTime, endTime, months) {
    this.name = name;
    this.location = location;
    this.startTime = startTime;
    this.endTime = endTime;
    this.months = months;
  }

  availableToday() {
    var currentDate = new Date();
    return this.months.includes(currentDate.getMonth());
  }

  availableNow() {
    if (!this.availableToday()) {
      return false;
    }

    var currentDate = new Date();

    var startDate = new Date();
    var endDate = new Date();

    if (this.startTime > this.endTime) {
      endDate.setDate(currentDate.getDay() + 1);
    }

    startDate.setHours(this.startTime);
    endDate.setHours(this.endTime);

    return currentDate <= endDate && currentDate >= startDate;
  }

  monthsAvailable() {
    return this.months.map(month => monthNames[month]).join(", ")
  }

}

var FISH = [
  new Item("Bitterling", "River", 0, 24, [0, 1, 2, 10, 11]),
  new Item("Pale chub", "River", 9, 16, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("{{TableContent|type=fish", "160", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Dace", "River", 16, 9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Carp", "Pond", 0, 24, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Koi", "Pond", 16, 9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Goldfish", "Pond", 0, 24, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Pop-eyed goldfish", "Pond", 9, 16, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Ranchu goldfish", "Pond", 9, 16, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Killifish", "Pond", 0, 24, [3, 4, 5, 6, 7]),
  new Item("Crawfish", "Pond", 0, 24, [3, 4, 5, 6, 7, 8]),
  new Item("Soft-shelled turtle", "River", 16, 9, [7, 8]),
  new Item("Snapping turtle", "River", 21, 4, [3, 4, 5, 6, 7, 8, 9]),
  new Item("Tadpole", "Pond", 0, 24, [2, 3, 4, 5, 6]),
  new Item("Frog", "Pond", 0, 24, [4, 5, 6, 7]),
  new Item("Freshwater goby", "River", 16, 9, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Loach", "River", 0, 24, [2, 3, 4]),
  new Item("Catfish", "Pond", 16, 9, [4, 5, 6, 7, 8, 9]),
  new Item("Giant snakehead", "Pond", 9, 16, [5, 6, 7]),
  new Item("Bluegill", "River", 9, 16, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Yellow perch", "River", 0, 24, [0, 1, 2, 9, 10, 11]),
  new Item("Black bass", "River", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Tilapia", "River", 0, 24, [5, 6, 7, 8, 9]),
  new Item("Pike", "River", 0, 24, [8, 9, 10, 11]),
  new Item("Pond smelt", "River", 0, 24, [0, 1, 11]),
  new Item("Sweetfish", "River", 0, 24, [6, 7, 8]),
  new Item("Cherry salmon", "River (Clifftop)  Pond", 16, 9, [
    2,
    3,
    4,
    5,
    8,
    9,
    10
  ]),
  new Item("Char", "River (Clifftop)  Pond", 16, 9, [2, 3, 4, 5, 8, 9, 10]),
  new Item("Golden trout", "River (Clifftop)", 16, 9, [2, 3, 4, 8, 9, 10]),
  new Item("Stringfish", "River (Clifftop)", 16, 9, [0, 1, 2, 11]),
  new Item("Salmon", "River (Mouth)", 0, 24, [8]),
  new Item("King salmon", "River (Mouth)", 0, 24, [8]),
  new Item("Mitten crab", "River", 16, 9, [8, 9, 10]),
  new Item("Guppy", "River", 9, 16, [3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Nibble fish", "River", 9, 16, [4, 5, 6, 7, 8]),
  new Item("Angelfish", "River", 16, 9, [4, 5, 6, 7, 8, 9]),
  new Item("Betta", "River", 9, 16, [4, 5, 6, 7, 8, 9]),
  new Item("Neon tetra", "River", 9, 16, [3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("{{TableContent|type=fish", "800", 0, 24, [0, 5, 6, 7, 8, 9, 10]),
  new Item("Piranha", "River", 9, 16, [5, 6, 7, 8]),
  new Item("Arowana", "River", 16, 9, [5, 6, 7, 8]),
  new Item("Dorado", "River", 4, 21, [5, 6, 7, 8]),
  new Item("Gar", "Pond", 16, 9, [5, 6, 7, 8]),
  new Item("Arapaima", "River", 16, 9, [5, 6, 7, 8]),
  new Item("Saddled bichir", "River", 21, 4, [5, 6, 7, 8]),
  new Item("Sturgeon", "River (Mouth)", 0, 24, [0, 1, 2, 8, 9, 10, 11]),
  new Item("Sea butterfly", "Sea", 0, 24, [0, 1, 2, 11]),
  new Item("Seahorse", "Sea", 0, 24, [3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Clownfish", "Sea", 0, 24, [3, 4, 5, 6, 7, 8]),
  new Item("Surgeonfish", "Sea", 0, 24, [3, 4, 5, 6, 7, 8]),
  new Item("Butterfly fish", "Sea", 0, 24, [3, 4, 5, 6, 7, 8]),
  new Item("Napoleonfish", "Sea", 4, 21, [6, 7]),
  new Item("Zebra turkeyfish", "Sea", 0, 24, [3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Blowfish", "Sea", 18, 4, [0, 1, 10, 11]),
  new Item("Puffer fish", "Sea", 0, 24, [6, 7, 8]),
  new Item("Anchovy", "Sea", 4, 21, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Horse mackerel", "Sea", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Barred knifejaw", "Sea", 0, 24, [2, 3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Sea bass", "Sea", 0, 24, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Red snapper", "Sea", 0, 24, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Dab", "Sea", 0, 24, [0, 1, 2, 3, 9, 10, 11]),
  new Item("Olive flounder", "Sea", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Squid", "Sea", 0, 24, [0, 1, 2, 3, 4, 5, 6, 7, 11]),
  new Item("Moray eel", "Sea", 0, 24, [7, 8, 9]),
  new Item("Ribbon eel", "Sea", 0, 24, [5, 6, 7, 8, 9]),
  new Item("Tuna", "Pier", 0, 24, [0, 1, 2, 3, 10, 11]),
  new Item("Blue marlin", "Pier", 0, 24, [0, 1, 2, 3, 6, 7, 8, 10, 11]),
  new Item("Giant trevally", "Pier", 0, 24, [4, 5, 6, 7, 8, 9]),
  new Item("Mahi-mahi", "Pier", 0, 24, [4, 5, 6, 7, 8, 9]),
  new Item("Ocean sunfish", "Sea", 4, 21, [6, 7, 8]),
  new Item("Ray", "Sea", 4, 21, [7, 8, 9, 10]),
  new Item("Saw shark", "Sea", 16, 9, [5, 6, 7, 8]),
  new Item("Hammerhead shark", "Sea", 16, 9, [5, 6, 7, 8]),
  new Item("Shark|Great white shark", "Sea", 16, 9, [5, 6, 7, 8]),
  new Item("Whale shark", "Sea", 0, 24, [5, 6, 7, 8]),
  new Item("Suckerfish", "Sea", 0, 24, [5, 6, 7, 8]),
  new Item("Football fish", "Sea", 16, 9, [0, 1, 2, 10, 11]),
  new Item("Oarfish", "Sea", 0, 24, [0, 1, 2, 3, 4, 11]),
  new Item("Barreleye", "Sea", 21, 4, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Coelacanth", "Sea (Raining)", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ])
];

var BUGS = [
  new Item("Common butterfly", "Flying", 4, 19, [
    0,
    1,
    2,
    3,
    4,
    5,
    8,
    9,
    10,
    11
  ]),
  new Item("Yellow butterfly", "Flying", 4, 19, [2, 3, 4, 5, 8, 9]),
  new Item("Tiger butterfly", "Flying", 4, 19, [2, 3, 4, 5, 6, 7, 8]),
  new Item("Peacock butterfly", "Flying by rare flowers", 4, 19, [2, 3, 4, 5]),
  new Item("Common bluebottle", "Flying", 4, 19, [3, 4, 5, 6, 7]),
  new Item("Paper kite butterfly", "Flying", 8, 19, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Great purple emperor", "Flying", 4, 19, [4, 5, 6, 7]),
  new Item("Monarch butterfly", "Flying", 4, 17, [8, 9, 10]),
  new Item("Emperor butterfly", "Flying", 17, 8, [0, 1, 2, 5, 6, 7, 8, 11]),
  new Item("Agrias butterfly", "Flying", 8, 17, [3, 4, 5, 6, 7, 8]),
  new Item("Rajah Brooke's birdwing", "Flying", 8, 17, [
    0,
    1,
    3,
    4,
    5,
    6,
    7,
    8,
    11
  ]),
  new Item("Queen Alexandra's birdwing", "Flying", 8, 16, [4, 5, 6, 7, 8]),
  new Item("Moth", "Flying by light", 19, 4, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Atlas moth", "On Trees", 19, 4, [3, 4, 5, 6, 7, 8]),
  new Item("Madagascan sunset moth", "Flying", 8, 16, [3, 4, 5, 6, 7, 8]),
  new Item("Long locust", "Hopping", 8, 19, [3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Migratory locust", "Hopping", 8, 19, [7, 8, 9, 10]),
  new Item("Rice grasshopper", "Hopping", 8, 19, [7, 8, 9, 10]),
  new Item("Grasshopper", "Hopping", 8, 17, [6, 7, 8]),
  new Item("Cricket", "Hopping", 17, 8, [8, 9, 10]),
  new Item("Bell cricket", "Hopping", 17, 8, [8, 9]),
  new Item("Mantis", "On Flowers", 8, 17, [2, 3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Orchid mantis", "On flowers (White)", 8, 17, [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ]),
  new Item("Honeybee", "Flying", 8, 17, [2, 3, 4, 5, 6]),
  new Item("Wasp", "Shake tree", 0, 24, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  new Item("Brown cicada", "On Trees", 8, 17, [6, 7]),
  new Item("Robust cicada", "On Trees", 8, 17, [6, 7]),
  new Item("Giant cicada", "On Trees", 8, 17, [6, 7]),
  new Item("Walker cicada", "On Trees", 8, 17, [7, 8]),
  new Item("Evening cicada", "On Trees", 4, 20, [6, 7]),
  new Item("Cicada shell", "On Trees", 0, 24, [6, 7]),
  new Item("Red dragonfly", "Flying", 8, 19, [8, 9]),
  new Item("Darner dragonfly", "Flying", 8, 17, [3, 4, 5, 6, 7, 8, 9]),
  new Item("Banded dragonfly", "Flying", 8, 17, [4, 5, 6, 7, 8, 9]),
  new Item("Damselfly", "Flying", 0, 24, [0, 1, 10, 11]),
  new Item("Firefly", "Flying", 19, 4, [5]),
  new Item("Mole cricket", "Underground", 0, 24, [0, 1, 2, 3, 4, 10, 11]),
  new Item("Pondskater", "On Ponds and Rivers", 8, 19, [4, 5, 6, 7, 8]),
  new Item("Diving beetle", "On Ponds and Rivers", 8, 19, [4, 5, 6, 7, 8]),
  new Item("Giant water bug", "On Ponds and Rivers", 19, 8, [3, 4, 5, 6, 7, 8]),
  new Item("Stinkbug", "On flowers", 0, 24, [2, 3, 4, 5, 6, 7, 8, 9]),
  new Item("Man-faced stink bug", "On flowers", 19, 8, [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]),
  new Item("Ladybug", "On flowers", 8, 17, [2, 3, 4, 5, 9]),
  new Item("Tiger beetle", "On the ground", 0, 24, [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  new Item("Jewel beetle", "On Trees", 0, 24, [3, 4, 5, 6, 7]),
  new Item("Violin beetle", "On a tree stump", 0, 24, [4, 5, 8, 9, 10]),
  new Item("Citrus Long-horned Beetle", "On a tree stump", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Rosalia batesi beetle", "On a tree stump", 0, 24, [4, 5, 6, 7, 8]),
  new Item("Blue weevil beetle", "?", 0, 24, [6, 7]),
  new Item("Dung beetle", "On ground", 0, 24, [0, 1, 11]),
  new Item("Earth-boring Dung Beetle", "On Ground", 0, 24, [6, 7, 8]),
  new Item("Scarab beetle", "On Tree", 23, 8, [6, 7]),
  new Item("Drone beetle", "On Tree", 0, 24, [5, 6, 7]),
  new Item("Goliath beetle", "On Tree (Palm)", 17, 8, [5, 6, 7, 8]),
  new Item("Saw stag", "On Trees", 0, 24, [6, 7]),
  new Item("Miyama stag", "On Trees", 0, 24, [6, 7]),
  new Item("Giant stag", "On Trees", 23, 8, [6, 7]),
  new Item("Rainbow stag", "On Trees", 19, 8, [5, 6, 7, 8]),
  new Item("Cyclommatus stag", "On Trees", 17, 8, [6, 7]),
  new Item("Golden stag", "On Trees", 17, 8, [6, 7]),
  new Item("Giraffe stag", "On Trees", 17, 8, [6, 7]),
  new Item("Horned dynastid", "On Trees", 17, 8, [6, 7]),
  new Item("Horned atlas", "On Trees", 17, 8, [6, 7]),
  new Item("Horned elephant", "On Trees", 17, 8, [6, 7]),
  new Item("Horned hercules", "On Trees", 17, 8, [6, 7]),
  new Item("Walking stick", "Shaking Tree", 4, 20, [6, 7, 8, 9, 10]),
  new Item("Walking leaf", "Under Trees Disguised as Leafs", 0, 24, [6, 7, 8]),
  new Item("Bagworm", "Shaking tree", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Ant", "On rotten food", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Hermit crab", "Beach disguised as shells", 19, 8, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Wharf roach", "On beach rocks", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Fly", "On trash items", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Mosquito", "Flying", 17, 4, [5, 6, 7, 8]),
  new Item("Flea", "Villager's Heads", 0, 24, [3, 4, 5, 6, 7, 8, 9, 10]),
  new Item("Snail", "On rocks (Rain)", 0, 24, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Pill bug", "Hit a rock", 23, 16, [0, 1, 2, 3, 4, 5, 8, 9, 10, 11]),
  new Item("Centipede", "Hit a rock", 16, 23, [0, 1, 2, 3, 4, 5, 8, 9, 10, 11]),
  new Item("Spider", "Shaking tree", 19, 8, [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]),
  new Item("Tarantula", "On the ground", 19, 4, [0, 1, 2, 3, 10, 11]),
  new Item("Scorpion", "On the ground", 19, 4, [4, 5, 6, 7, 8, 9])
];

export var FISH;
export var BUGS;
