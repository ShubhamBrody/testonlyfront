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
          linkto: "/projects/missionreddot",
          text: 'Project Red Dot',
        },
        {
          linkto: "/projects/missionomega",
          text: 'Digital Omega',
        },
        {
          linkto: "/projects/missionmillion",
          text: 'Mission Million Books',
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