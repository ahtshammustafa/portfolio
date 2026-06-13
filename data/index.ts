import { img, sub, video } from "framer-motion/client";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/UpdatedResume_AhtshamM.pdf", download: true, target: "_blank" },
  { name: "Certifications", link: "/Ahtsham_Certifications.pdf", download: true, target: "_blank" },
  { name: "Refrees", link: "#testimonials" },
];
  
  export const gridItems = [
    {
      id: 1,
      title: "Ability and desire to explore hidden treasures of earth, learn new skills and improve existing ones",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Geospatial Data Analysis and Visualization",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Spatial Data Science and GIS Development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Passionate about Geology and Geospatial Data Science",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Simulating Coastal Inundation Vulnerability and Impact Assessment",
      des: "To evaluate vulnerability in various coastal areas, communities, and infrastructure along the part of Indus river delta.",
      img: "/p1.svg",
      iconLists: ["/hecRas.png", "/ArcGIS-Pro.png", "/gee.png"],
      link: "https://storymaps.arcgis.com/stories/fa7b5148add54d0f9b3ad36bcce96835",
    },
    {
      id: 2,
      title: "Comparison of Machine Learning Classifiers",
      des: "To Assess Landscape Dynamics and Impact on Land Surface Temperature, Topography, and Socio‑Economic Variables",
      img: "/geoai-banner-fg.png",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png", "python.png"],
      link: "https://code.earthengine.google.com/?accept_repo=users/ahtshamm214/lulc",
    },
    {
      id: 3,
      title: "Efficient mapping of flood hazards",
      des: "Using drones and aerial imaging techniques: State of the Art and shortcomings",
      img: "/floods.jpg",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png", "python.png"],
      link: "https://code.earthengine.google.com/?accept_repo=users/ahtshamm214/lulc",
    },
    {
      id: 4,
      title: "Delimitation of Electoral Boundaries",
      des: "During inter census period: A hybrid approach integrating remote sensingand census data",
      img: "/delimit.jpg",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png", "python.png", "erdas.png"],
      link: "NovemberUpdated.pdf",
    },
    {
      id: 4,
      title: "Deriving 10-Meter Land Surface Temperature",
      des: "Using Sentinel-2, SRTM, and Landsat in Google Earth Engine",
      img: "/lst.jpg",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png"],
      link: "https://github.com/ahtshammustafa/GoogleEarthEngine/blob/main/lst10m",
    },
    {
      id: 4,
      title: "Drought Mapping using Vegetation Condition Index",
      des: "using Google Earth Engine and ArcGIS Pro",
      img: "/droughts.jpg",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png"],
      link: "https://github.com/ahtshammustafa/GoogleEarthEngine/blob/main/droughtMapping",
    },
  ];

  export const testimonials = [
    {
      quote: "Collaborating with Ahtsham was rewarding, as his professionalism, responsiveness, and dedication to research in machine learning for landscape dynamics, along with his enthusiasm for remote sensing and GIS programming, make him an excellent addition to any team seeking rigorous analysis and innovation.",
      name: "Dr. Javed Iqbal",
      title: "MS Thesis Supervisor (Professor - IGIS NUST)",
      img: "/drjaved.png",
    },
    {
      quote:
        "Having taught Ahtsham in Advanced Remote Sensing and Urban Remote Sensing, and co-supervised his research, I saw firsthand his exceptional analytical abilities and dedication. His technical skills in image processing and urban analysis were impressive, and he consistently demonstrated a strong commitment to producing high-quality work. Ahtsham would be a valuable asset to any research or professional team.",
      name: "Dr. Ejaz Hussain",
      title: "Associate Dean (Professor - IGIS NUST)",
      img: "/drejaz.png",
    },
    {
      quote:
        "I have known Mr. Ahtsham for the last 8 years in the capacity of his instructor in Economic Geology and Field Excursions. Ahtsham's work in the field of geology and remote sensing, particularly in mineral exploration and geospatial data analysis, has been impressive. His ability to integrate advanced technologies and methodologies into his research has set him apart as a leader in the field, and I have no doubt that he will continue to excel in his future endeavors.",
      name: "Syed Nohman Gilani",
      title: "Lead Geologist at Chinar Group of Companies",
      img: "/geo10.jpg",
    },
    {
      quote:
        "I had the pleasure of teaching Ahtsham during his Master's studies, where his aptitude for Advanced Programming, Geodatabases, and Web GIS, combined with his critical thinking and practical application of complex concepts, set him apart as a top student. His drive to innovate in geospatial fields will make him a valuable asset in any professional or academic setting.",
      name: "Dr. Ali Tahir",
      title: "HOD Department Of RS & GIS (Associate Professor - IGIS NUST)",
      img: "/drali.png",
    },
    {
      quote:
        "Teaching Ahtsham in Natural Hazards and Disaster Management was rewarding, as his strong analytical skills, curiosity, and expertise in geology, GIS, and remote sensing enabled him to excel in hazard assessment and risk management, making him a strong candidate for roles in resilience planning and disaster mitigation.",
      name: "Dr. Salman Atif",
      title: "Associate Professor - IGIS NUST",
      img: "/drsalman.png",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "ArcGIS suite",
      img: "/qgis.png",
      nameImg: "/qgis.svg",
   
    },
    {
      id: 2,
      name: "appwrite",
      img: "/envi.png",
      nameImg: "/envi.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/gee.png",
      nameImg: "/gee.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/ol.png",
      nameImg: "/ol.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/ArcGIS-Pro.png",
      nameImg: "/arcgispro.svg",
    },
    {
      id: 6,
      name: "Python",
      img: "/python.png",
      nameImg: "/python.svg",
    },
    {
      id: 7,
      name: "javascript",
      img: "/js.png",
      nameImg: "/js.svg",
    },
    {
      id: 8,
      name: "erdas",
      img: "/erdas.png",
      nameImg: "/erdas.svg",
    },
    {
      id: 9,
      name: "Global Mapper",
      img: "/gmp.png",
      nameImg: "/gmp.svg",
    },
    {
      id: 10,
      name: "docker.",
      img: "/l.png",
      nameImg: "/leaflet.svg",
    },
    {
      id: 10,
      name: "geoserver.",
      img: "/geoserver.png",
      nameImg: "/geoserver.svg",
    },
    {
      id: 10,
      name: "React",
      img: "/re.svg",
      nameImg: "/react.svg",
    },
    {
      id: 10,
      name: "next",
      img: "/next.svg",
      nameImg: "/nextname.svg",
    },
    {
      id: 11,
      name: "ras",
      img: "/ras.png",
      nameImg: "/ras.svg",
    },
    {
      id: 11,
      name: "ramms",
      img: "/ramms.webp",
      nameImg: "/ramms.svg",
    },
    {
      id: 11,
      name: "cs",
      img: "/cs.png",
      nameImg: "/cs.svg",
    },
  ];
  
  export const MyEducation = [
    {
      id: 1,
      title: "MS Remote Sensing and GIS",
      subtitle: "(2021 - 2023)",
      desc: "National University of Sciences and Technology, Islamabad, Pakistan",
      className: "md:col-span-2",
      thumbnail: "/nust.png",
    },
    {
      id: 2,
      title: "BS Geology",
      subtitle: "(2016 - 2020)",
      desc: "The University of Azad Jammu and Kashmir, Muzaffarabad, Pakistan",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/uajk.png",
    },
  ];
  export const workExperience = [
    {
      id: 1,
      title: "Research Officer",
      subtitle: "(Government of Pakistan - Ministry of Defence)",
      desc: "Lead in the development of data visualization and spatial data analysis applications using ArcGIS JS API, ASP.NET, PostgreSQL, ArcGIS Server, Openlayers and Leaflet.",
      className: "md:col-span-2",
      thumbnail: "/gop.png",
    },
    {
      id: 2,
      title: "GIS Officer",
      subtitle: "(Army Land Management Cell - Ministry of Defence)",
      desc: "Contributed in the Development of Pakistan Army Land Information and Management Sytem using leaflet, geoserver and PostgreSQL",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/gop.png",
    },
    {
      id: 3,
      title: "Research Associate",
      subtitle: "(National University of Sciences and Technology)",
      desc: "Spatial Data Analysis using different datasets, Numerical Modelling and Simulations, Reporting and Documentation",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/nust.png",
    },
    {
      id: 3,
      title: "Assistant Manager GIS",
      subtitle: "(Defense Housing Authority)",
      desc: "Cadastral Mapping, Surveying, Led in the Development of Land Information and Management Systems, Reporting and Documentation",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/DHA.png",
    },
    {
      id: 4,
      title: "Senior GIS Analyst",
      subtitle: "(Chinar Mines and Minerals)", 
      desc: "Digital Image Processing, Land Use and Land Cover Mapping, Watersheds, Runoff Estimation, and Mineral Mapping using Hyperspectral (Hype‑rion) Imagery, and Drone Imagery Processing",
      className: "md:col-span-2",
      thumbnail: "/chinar.png",
    },
    {
      id: 3,
      title: "Management Trainee Officer",
      subtitle: "(Frontier Works Organization)",
      desc: "Mineral Exploration, Geological Mapping, and Geophysical Surveys",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/fwo.png",
    },
    {
      id: 4,
      title: "Intern",
      subtitle: "(Pakistan Council of Research in Water Resources)",
      desc: "Water Quality Analysis, Soil Sampling, and Analysis and Geological Mapping",
      className: "md:col-span-2",
      thumbnail: "/pcrwr.png",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/ahtshammustafa",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/AhtshamMustafa9",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/ahtshammustafaawan/",
    },
    {
      id: 3,
      img: "/yt.svg",
      link: "https://www.youtube.com/channel/UCiLHDf1Bzj7nxHHDbgJlcng",
    },
  ];