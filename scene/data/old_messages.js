module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      "Will you join us?",
    createdAt: new Date(Date.UTC(2019, 3, 30, 16, 50, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "We organized an activity",
    createdAt: new Date(Date.UTC(2019, 3, 30, 16, 50, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "old message.",
    createdAt: new Date(Date.UTC(2019, 3, 30, 16, 50, 0)),
    system: true
  }
];