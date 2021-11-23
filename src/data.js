let feelings = [
  {
    name: "Apathetic",
    number: 1995,
    amount: "$9,500",
    due: "07/22/2003",
    group: "Disconnection",
    needMet: false
  },
  {
    name: "Jolly",
    number: 2000,
    amount: "$9,500",
    due: "07/22/2003",
    group: "Happy",
    needMet: true
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
  }
];

export function getFeelings() {
  return feelings;
}

export function getFeeling(number) {
  return feelings.find(
      feeling => feeling.number === number
  );
}

export function deleteFeeling(number) {
  feelings = feelings.filter(
    feeling => feeling.number !== number
  );
}