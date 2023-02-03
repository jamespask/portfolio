export default {
  author: "James Pask",
  hero: {
    subtitle: "Head of Design at Connect Auto",
    description:
      "Building modern and flexible UI's by day. Leveraging technology to launch fully featured products by night.",
    cta: "View Projects",
  },
  products: {
    featured: [
      {
        name: "Aston Martin",
        medium: "Used Car Locator",
        summary: "####",
        copy: [
          "See millions of messages at a glance, without data leaving your computer.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://preowned.astonmartin.com/en_gb/",
          },
        },
        images: [
          "/doubletext/0.jpg",
          "/doubletext/1.jpg",
          "/doubletext/2.jpg",
          "/doubletext/3.jpg",
        ],
      },
      // {
      //   name: "ClimbList",
      //   medium: "React · Next.js",
      //   summary: "Construction is now in progress.",
      //   copy: [
      //     "Compare and track grades and pricing between gyms around the country.",
      //   ],
      //   links: {
      //     color: "#363636",
      //     primary: {
      //       name: "Learn more",
      //       url: "https://climblist.com/"
      //     }
      //   },
      //   images: [
      //     "/climblist/0.jpg",
      //     "/climblist/1.jpg",
      //   ]
      // }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Rolls-Royce Provenance UCL",
        description: "Design for the R-RMC Used Car Locator",
        link: {
          name: "Discover",
          url: "https://pre-owned.rolls-roycemotorcars.com/en_gb/",
        },
      },
      {
        name: "Bentley Certified UCL",
        description: "Design for the Bentley Used Car Locator",
        link: {
          name: "Discover",
          url: "#",
        },
      },
      {
        name: "Lamborghini ",
        description: "Design for the Lamborghini Selezione UCL",
        link: {
          name: "Discover",
          url: "https://preowned.lamborghini.com/en_gb/search",
        },
      },
    ],
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/connectauto",
        url: "http://www.connect.auto/",
        alt: "Connect Auto",
      },
    ],
  },
  footer: {
    tagline: "James Pask — London, United Kingdom",
    links: [
      {
        name: "Twitter",
        url: "#",
        fa: "fab fa-twitter", // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
      },
      {
        name: "Medium",
        url: "#",
        fa: "fab fa-medium",
      },
      {
        name: "Github",
        url: "#",
        fa: "fab fa-github",
      },
      {
        name: "Linkedin",
        url: "#",
        fa: "fab fa-linkedin",
      },
      {
        name: "Email",
        url: "#",
        fa: "fa fa-envelope",
      },
    ],
  },
};
