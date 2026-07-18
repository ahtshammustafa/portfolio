import { img, sub, video } from "framer-motion/client";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Fieldwork", link: "#locations" },
  { name: "Education", link: "#education" },
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
      title: "Earth Science, Remote Sensing and GIS Development",
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
      img: "/projs/coastal.png",
      iconLists: ["/hecRas.png", "/ArcGIS-Pro.png", "/gee.png"],
      link: "https://storymaps.arcgis.com/stories/fa7b5148add54d0f9b3ad36bcce96835",
    },
    {
      id: 2,
      title: "Comparison of Machine Learning Classifiers",
      des: "To Assess Landscape Dynamics and Impact on Land Surface Temperature, Topography, and Socio‑Economic Variables",
      img: "/projs/lst.png",
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
      img: "/projs/electoral.png",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png", "python.png", "erdas.png"],
      link: "NovemberUpdated.pdf",
    },
    {
      id: 5,
      title: "Deriving 10-Meter Land Surface Temperature",
      des: "Using Sentinel-2, SRTM, and Landsat in Google Earth Engine",
      img: "/lst.jpg",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png"],
      link: "https://github.com/ahtshammustafa/GoogleEarthEngine/blob/main/lst10m",
    },
    {
      id: 6,
      title: "Drought Mapping using Vegetation Condition Index",
      des: "using Google Earth Engine and ArcGIS Pro",
      img: "/projs/droughts.png",
      iconLists: ["/ArcGIS-Pro.png", "/gee.png"],
      link: "https://github.com/ahtshammustafa/GoogleEarthEngine/blob/main/droughtMapping",
    },
    {
      id: 7,
      title: "SAR-Optical Flood Segmentation Framework - 2025 Pakistan Floods",
      des: "A pixel-level flood segmentation architecture combining U-Net decoders with ResNet-50, DenseNet-121, and EfficientNet-B0 encoders, fusing Sentinel-1 SAR, Sentinel-2 optical imagery, and DEM-derived hydrogeomorphological indices (slope, TWI, HAND), aligned to the Sen1Floods11 benchmark.",
      img: "/projs/sarfloods.png",
      iconLists: ["/python.png", "/gee.png"],
      link: "",
    },
    {
      id: 8,
      title: "Multi-Sensor Flood Scene Classification (SEN12-FLOOD)",
      des: "Fine-tuned four deep learning backbones (ResNet-50, DenseNet-121, EfficientNet-B0, ViT) on fused SAR/optical imagery for 2022 Pakistan floods scene classification, combined via soft-voting and stacking ensembles, reaching 95.6% test accuracy.",
      img: "/projs/sarfloods.png",
      iconLists: ["/python.png"],
      link: "",
    },
    {
      id: 9,
      title: "Landslide Susceptibility Mapping, Azad Kashmir",
      des: "Used GeoAI and Deep Learning (U-Net, ResNet, ConvLSTM) with AHP/Fuzzy Logic spatial MCDA on geotechnical and multi-source Earth observation data. Executed repeat-pass InSAR time-series analysis to trace slope acceleration boundaries and quantify active landslide displacements.",
      img: "/projs/lanslide.png",
      iconLists: ["/python.png", "/gee.png", "/ArcGIS-Pro.png"],
      link: "",
    },
    {
      id: 10,
      title: "Mangla Watershed Runoff & AMC Modeling",
      des: "Developed a Google Earth Engine algorithm fusing MODIS LULC and USDA soil data to automate AMC maps and SCS-CN hydrological modeling for 2005-2015 runoff, validating CHIRPS, GPM, and TRMM outputs against ground metrics (CHIRPS reaching up to 90% accuracy).",
      img: "/projs/mangla.png",
      iconLists: ["/gee.png", "/python.png"],
      link: "",
    },
    {
      id: 11,
      title: "Jhelum River Basin Flood Susceptibility Mapping",
      des: "Modelled flood susceptibility using ASTER GDEM data in ArcMap via an optimized geo-morphometric ranking approach, evaluating basin gradient, relief, bedrock geology, and sub-basin area to inform government risk reduction strategies.",
      img: "/projs/jhelum.png",
      iconLists: ["/ArcGIS-Pro.png"],
      link: "",
    },
    {
      id: 12,
      title: "Pakistan Flood Monitoring Dashboard",
      des: "Led development of a full-stack flood monitoring dashboard using React, Leaflet.js, and Node.js to ingest real-time WAPDA telemetry and automate Sentinel-1 SAR processing, with PostgreSQL/PostGIS and GeoServer pipelines streaming live discharge analytics and emergency alerts.",
      img: "/projs/flood-dashboard.png",
      iconLists: ["/re.svg", "/l.png", "/geoserver.png"],
      link: "",
    },
    {
      id: 13,
      title: "Badswat Glacier Debris Flow Hazard Assessment",
      des: "Modelled and simulated Badswat Glacier debris flow hazard assessment using the RAMMS model and HEC-RAS.",
      img: "/projs/badswat.png",
      iconLists: ["/ras.png", "/ramms.webp"],
      link: "",
    },
    {
      id: 15,
      title: "Himalayan Landscape Dynamics: LULC & LST Analysis (2002-2026)",
      des: "Analyzed twenty-four years of Himalayan landscape dynamics using SVM classification on Landsat imagery to map LULC changes against split-window algorithm retrieved LST. Modeled strong LST-NDVI correlations (R² up to 0.87) to quantify glacier decline (6.37%) and barren expansion (6.47%).",
      img: "/projs/himalayan.png",
      iconLists: ["/python.png", "/gee.png"],
      link: "",
    },
    {
      id: 16,
      title: "Kohat City Urban LULC & LST Analysis (1998-2018)",
      des: "Analyzed LULC dynamics and LST for Kohat City using multi-temporal Landsat imagery, quantifying a 55% built-up expansion and a 4.6°C increase in mean LST, demonstrating the direct impact of urban growth on microclimate.",
      img: "/projs/kohat.png",
      iconLists: ["/gee.png", "/ArcGIS-Pro.png"],
      link: "/projs/kohat.png",
    },
    {
      id: 17,
      title: "Peshawar Groundwater Quality Assessment via Landsat 8 & Hyperspectral Data",
      des: "Evaluated the impact of urbanization and agricultural land-use change on Peshawar's groundwater by classifying multi-temporal Landsat images and analyzing 217 tube well samples across 7 parameters, correlating anthropogenic pollution with a 14% rise in methemoglobinemia and elevated UTI/peptic ulcer cases.",
      img: "/projs/water-quality.png",
      iconLists: ["/ArcGIS-Pro.png", "/python.png"],
      link: "/projs/water-quality.png",
    },
    {
      id: 18,
      title: "Aedes Albopictus Distribution Modeling, Rawalpindi",
      des: "Constructed high-resolution bioclimatic and LULC datasets from satellite data to model Aedes albopictus mosquito distribution using the MaxEnt algorithm, identifying roadside green patches, winter temperatures, and household waste practices as primary risk factors.",
      img: "/projs/health.png",
      iconLists: ["/python.png"],
      link: "",
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
      name: "QGIS",
      img: "/qgis.png",
      nameImg: "/qgis.svg",

    },
    {
      id: 2,
      name: "ENVI",
      img: "/envi.png",
      nameImg: "/envi.svg",
    },
    {
      id: 3,
      name: "Google Earth Engine",
      img: "/gee.png",
      nameImg: "/gee.svg",
    },
    {
      id: 4,
      name: "OpenLayers",
      img: "/ol.png",
      nameImg: "/ol.svg",
    },
    {
      id: 5,
      name: "ArcGIS Pro",
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
      name: "Leaflet",
      img: "/l.png",
      nameImg: "/leaflet.svg",
    },
    {
      id: 11,
      name: "geoserver.",
      img: "/geoserver.png",
      nameImg: "/geoserver.svg",
    },
    {
      id: 12,
      name: "React",
      img: "/re.svg",
      nameImg: "/react.svg",
    },
    {
      id: 13,
      name: "next",
      img: "/next.svg",
      nameImg: "/nextname.svg",
    },
    {
      id: 14,
      name: "HEC-RAS",
      img: "/ras.png",
      nameImg: "/ras.svg",
    },
    {
      id: 15,
      name: "RAMMS",
      img: "/ramms.webp",
      nameImg: "/ramms.svg",
    },
    {
      id: 16,
      name: "C#",
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
      title: "Assistant Research Officer",
      subtitle: "(Government of Pakistan - Ministry of Defense · Jan 2024 - Present)",
      desc: "Numerical modeling for disaster management, photogrammetry, slope mapping, terrain analysis, and infrastructure mapping using SPOT, Pleiades, PRSS, RADAR, and LIDAR datasets. Conducted drone and land surveys for advanced hydrological modelling and post-landslide/flood impact assessment. Led development of web applications (Flood Monitoring, Spatial Data Analytics, Object Detection, and AI Agents Dashboards) for geospatial data analysis and visualization.",
      className: "md:col-span-2",
      thumbnail: "/gop.png",
    },
    {
      id: 2,
      title: "Research Assistant",
      subtitle: "(National University of Sciences and Technology, Islamabad · Jan 2023 - Dec 2023)",
      desc: "Mapped extreme weather events (floods, landslides, and heatwaves) using remote sensing and artificial intelligence techniques. Performed numerical modeling and simulations for coastal inundation vulnerability and flood hazard evaluations.",
      className: "md:col-span-2",
      thumbnail: "/nust.png",
    },
    {
      id: 3,
      title: "Junior Geologist | Remote Sensing Analyst",
      subtitle: "(Chinar Mineral Processing Mills · Apr 2020 - May 2022)",
      desc: "Identified and evaluated exploration opportunities across small- and large-scale deposits, including Pakistan's largest placer gold mining project, developing and executing exploration programs through successive project stages. Integrated geophysical, geochemical, and geological datasets using Bruker XRF S1 Titan, Horiba LA350 Particle Size Analyzer, and Konica Minolta Spectrophotometer CM 600D for sample characterization and grade assessment. Explored polymetallic (Cu-Pb-Ag-Au) deposits at Gilgit Kargah, chromite deposits at Allai and Sapat Complex, lead-antimony deposits in Chitral, and rare earth element enrichment in carbonatite-alkaline igneous complexes. Assessed placer gold deposits along the Gilgit (0.5-1 g/t) and Indus (2-4 g/t) Rivers, and structurally controlled quartz veins bearing Pb-Sb-Au-Ag in the Chitral Complex.",
      className: "md:col-span-2",
      thumbnail: "/chinar.png",
    },
    {
      id: 4,
      title: "Remote Sensing and GIS Intern",
      subtitle: "(Pakistan Council of Research in Water Resources · Jan 2021 - Aug 2021)",
      desc: "Identified groundwater potential zones using GIS/Remote Sensing techniques and AHP. Conducted water quality testing, surveying, and mapping for environmental assessments, and prepared comprehensive reports based on survey findings and analysis.",
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