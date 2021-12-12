module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Okay!',
    createdAt: new Date(Date.UTC(2019, 3, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'M E',
    },
    sent: true,
    received: true,
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Yeah, I will',
    createdAt: new Date(Date.UTC(2019, 3, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'S T',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "the latest message.",
    createdAt: new Date(Date.UTC(2019, 3, 30, 17, 20, 0)),
    system: true,
  },
];