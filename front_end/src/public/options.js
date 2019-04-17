const options = {
  result: [
    { text: "", value: "None", key: "blank" },
    { text: "Won", value: "won", key: "Won" },
    { text: "Loss", value: "loss", key: "Loss" },
    { text: "Draw", value: "draw", key: "Draw" },
    { text: "Leave/Disconnect", value: "leave", key: "Leave" }
  ],
  heros: [
    { text: "Tank", value: "", key: "Tank" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B1"
    },
    { text: "D.Va", value: ["Dva", "Tank"], key: "D.Va" },
    { text: "Orisa", value: ["Orisa", "Tank"], key: "Orisa" },
    { text: "Reinhardt", value: ["Reinhardt", "Tank"], key: "Reinhardt" },
    { text: "Roadhog", value: ["Roadhog", "Tank"], key: "Roadhog" },
    { text: "Winston", value: ["Winston", "Tank"], key: "Winston" },
    {
      text: "Wrecking Ball",
      value: ["Wrecking Ball", "Tank"],
      key: "Wrecking Ball"
    },
    { text: "Zarya", value: ["Zarya", "Tank"], key: "Zarya" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B2"
    },
    { text: "Damage", value: "", key: "Damage" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B3"
    },
    { text: "Ashe", value: ["Ashe", "Damage"], key: "Ashe" },
    { text: "Bastion", value: ["Bastion", "Damage"], key: "Bastion" },
    { text: "Doomfist", value: ["Doomfist", "Damage"], key: "Doomfist" },
    { text: "Genji", value: ["Genji", "Damage"], key: "Genji" },
    { text: "Hanzo", value: ["Hanzo", "Damage"], key: "Hanzo" },
    { text: "Junkrat", value: ["Junkrat", "Damage"], key: "Junkrat" },
    { text: "McCree", value: ["Mccree", "Damage"], key: "McCree" },
    { text: "Mei", value: ["Mei", "Damage"], key: "Mei" },
    { text: "Pharah", value: ["Pharah", "Damage"], key: "Pharah" },
    { text: "Reaper", value: ["Reaper", "Damage"], key: "Reaper" },
    {
      text: "Soldier: 76",
      value: ["Soldier:76", "Damage"],
      key: "Soldier: 76"
    },
    { text: "Sombra", value: ["Sombra", "Damage"], key: "Sombra" },
    { text: "Symmetra", value: ["Symmetra", "Damage"], key: "Symmetra" },
    { text: "Torbjörn", value: ["Torbjorn", "Damage"], key: "Torbjörn" },
    { text: "Tracer", value: ["Tracer", "Damage"], key: "Tracer" },
    { text: "Widowmaker", value: ["Widowmaker", "Damage"], key: "Widowmaker" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B4"
    },
    { text: "Support", value: "", key: "Support" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B5"
    },
    { text: "Ana", value: ["Ana", "Support"], key: "Ana" },
    { text: "Baptiste", value: ["Baptiste", "Support"], key: "Baptiste" },
    { text: "Brigitte", value: ["Brigitte", "Support"], key: "Brigitte" },
    { text: "Lúcio", value: ["Lucio", "Support"], key: "Lúcio" },
    { text: "Mercy", value: ["Mercy", "Support"], key: "Mercy" },
    { text: "Moira", value: ["Moira", "Support"], key: "Moira" },
    { text: "Zenyatta", value: ["Zenyatta", "Support"], key: "Zenyatta" }
  ],
  party: [
    { text: "", value: "" },
    { text: 1, value: 1 },
    { text: 2, value: 2 },
    { text: 3, value: 3 },
    { text: 4, value: 4 },
    { text: 5, value: 5 },
    { text: 6, value: 6 }
  ],
  maps: [
    { text: "Assault Maps", value: "", key: "Assault Maps" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B1"
    },

    { text: "Hanamura", value: ["Hanamura", "Assault"], key: "Hanamura" },
    {
      text: "Horizon Lunar Colony",
      value: ["Horizon Lunar Colony", "Assault"],
      key: "Horizon Lunar Colony"
    },
    { text: "Paris", value: ["Paris", "Assault"], key: "Paris" },
    {
      text: "Temple of Anubis",
      value: ["Temple of Anubis", "Assault"],
      key: "Temple of Anubis"
    },
    {
      text: "Volskaya Industries",
      value: ["Volskaya Industries", "Assault"],
      key: "Volskaya Industries"
    },

    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B2"
    },
    { text: "Hybrid Maps", value: "", key: "Hybrid Maps" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B3"
    },
    {
      text: "Blizzard World",
      value: ["Blizzard World", "Hybrid"],
      key: "Blizzard World"
    },
    {
      text: "Eichenwalde",
      value: ["Eichenwalde", "Hybrid"],
      key: "Eichenwalde"
    },
    { text: "Hollywood", value: ["Hollywood", "Hybrid"], key: "Hollywood" },
    { text: "King's Row", value: ["Kings Row", "Hybrid"], key: "King's Row" },
    { text: "Numbani", value: ["Numbani", "Hybrid"], key: "Numbani" },

    { text: "Escort Maps", value: "", key: "Escort Maps" },

    { text: "Dorado", value: ["Dorado", "Escort"], key: "Dorado" },
    { text: "Junkertown", value: ["Junkertown", "Escort"], key: "Junkertown" },
    { text: "Rialto", value: ["Rialto", "Escort"], key: "Rialto" },
    { text: "Route 66", value: ["Route 66", "Escort"], key: "Route 66" },
    {
      text: "Watchpoint: Gibraltar",
      value: ["Gibraltar", "Escort"],
      key: "Watchpoint: Gibraltar"
    },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B4"
    },
    { text: "Control Maps", value: "", key: "Control Maps" },
    {
      text:
        "______________________________________________________________________________________________________________________________",
      value: "",
      key: "B5"
    },
    { text: "Busan", value: ["Busan", "Control"], key: "Busan" },
    { text: "Ilios", value: ["Ilios", "Control"], key: "Ilios" },
    {
      text: "Lijiang Tower",
      value: ["Lijiang Tower", "Control"],
      key: "Lijiang Tower"
    },
    { text: "Nepal", value: ["Nepal", "Control"], key: "Nepal" },
    { text: "Oasis", value: ["Oasis", "Control"], key: "Oasis" }
  ]
};

export default options;
