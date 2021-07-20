const links = [
    {
      linkto: "/",
      text: 'Home',
    },
    {
      linkto: "/projects",
      text: 'Projects',
      missions: [
        {
          linkto: "/projects/missionmillion",
          text: 'Mission Million',
        },
        {
          linkto: "/projects/missionreddot",
          text: 'Mission Red Dot',
        },
        {
          linkto: "/projects/missionomega",
          text: 'Mission Digital Omega',
        }
      ]
    },
    {
      linkto: "/partners",
      text: 'Our Partners',
    },
    {
      linkto: "/events",
      text: 'Events',
    },
    {
      linkto: "/signin",
      text: 'SignIn',
      style: {fontWeight: 'bold'}
    },
  ];

  export default links;