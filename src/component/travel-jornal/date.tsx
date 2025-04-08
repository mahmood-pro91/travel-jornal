// Define the type for our travel journal entries
interface TravelJournalEntry {
    id: number;
    img: {
      src: string;
      alt: string;
    };
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    description: string;
  }
  
  // Create the array of travel journal entries
  const travelJournal: TravelJournalEntry[] = [
    {
      id: 1,
      img: {
        src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        alt: "Mount Fuji with cherry blossoms"
      },
      title: "Mount Fuji",
      country: "Japan",
      googleMapsLink: "https://maps.app.goo.gl/HNnJXwgxSPCRWRQR9",
      dates: "January 12 - January 24, 2024",
      description: "Mount Fuji is Japan's tallest peak, standing at 3,776 meters. This iconic snow-capped volcano is considered one of Japan's three sacred mountains and offers breathtaking views from its summit."
    },
    {
      id: 2,
      img: {
        src: "https://images.unsplash.com/photo-1565967511849-76a60a516170",
        alt: "Sydney Opera House at sunset"
      },
      title: "Sydney Opera House",
      country: "Australia",
      googleMapsLink: "https://maps.app.goo.gl/UiAZjY5tVdNRsKXs9",
      dates: "March 3 - March 15, 2024",
      description: "The Sydney Opera House is a multi-venue performing arts center and architectural masterpiece located in Sydney Harbour. Its distinctive sail-shaped shells make it one of the most recognizable buildings in the world."
    },
    {
      id: 3,
      img: {
        src: "https://images.unsplash.com/photo-1525874684015-58379d421a52",
        alt: "Geirangerfjord surrounded by mountains"
      },
      title: "Geirangerfjord",
      country: "Norway",
      googleMapsLink: "https://maps.app.goo.gl/2JzJuUUDVFnLn5Lx6",
      dates: "May 10 - May 22, 2024",
      description: "The Geirangerfjord is a UNESCO World Heritage site known for its spectacular waterfalls and steep mountainsides. The narrow fjord is surrounded by some of the steepest mountains on the west coast of Norway."
    },
    {
      id: 4,
      img: {
        src: "https://images.unsplash.com/photo-1555899434-94d1368aa7af",
        alt: "Machu Picchu ancient ruins"
      },
      title: "Machu Picchu",
      country: "Peru",
      googleMapsLink: "https://maps.app.goo.gl/3JaKtJAPPJfJHbJz5",
      dates: "June 5 - June 15, 2024",
      description: "Machu Picchu is an ancient Incan citadel set high in the Andes Mountains. Built in the 15th century and later abandoned, this UNESCO World Heritage site is famous for its sophisticated dry-stone walls and panoramic views."
    },
    {
      id: 5,
      img: {
        src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        alt: "Venice canals with gondolas"
      },
      title: "Venice",
      country: "Italy",
      googleMapsLink: "https://maps.app.goo.gl/iLpS1jFQCNrKVwUG6",
      dates: "July 20 - August 1, 2024",
      description: "Venice is a city built on water, known for its winding canals, historic architecture, and romantic gondola rides. The city comprises more than 100 small islands in a lagoon in the Adriatic Sea."
    },
    {
      id: 6,
      img: {
        src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        alt: "Northern Lights over Iceland"
      },
      title: "Reykjavik",
      country: "Iceland",
      googleMapsLink: "https://maps.app.goo.gl/HTXtvNJKyXNSGQes9",
      dates: "September 12 - September 25, 2024",
      description: "Reykjavik is Iceland's coastal capital and largest city, known for the stunning northern lights, geothermal hot springs, and dramatic volcanic landscapes. It's the perfect base for exploring Iceland's natural wonders."
    },
    {
      id: 7,
      img: {
        src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
        alt: "Santorini white buildings and blue domes"
      },
      title: "Santorini",
      country: "Greece",
      googleMapsLink: "https://maps.app.goo.gl/WrGs8RidEW5Jfxmy5",
      dates: "October 3 - October 17, 2024",
      description: "Santorini is a stunning Greek island known for its white-washed buildings with blue domes, dramatic cliffs, and spectacular sunsets. The island is actually a giant volcano caldera, offering unique black sand beaches and incredible views."
    },
    {
      id: 8,
      img: {
        src: "https://images.unsplash.com/photo-1546412414-e1885259563a",
        alt: "Taj Mahal at sunrise"
      },
      title: "Taj Mahal",
      country: "India",
      googleMapsLink: "https://maps.app.goo.gl/Wvmk2jfWvNR3q9pJ8",
      dates: "November 5 - November 15, 2024",
      description: "The Taj Mahal is an ivory-white marble mausoleum in the Indian city of Agra. Built by Emperor Shah Jahan in memory of his wife, this UNESCO World Heritage site is considered the greatest architectural achievement in Indo-Islamic architecture."
    },
    {
      id: 9,
      img: {
        src: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f",
        alt: "Grand Canyon vista"
      },
      title: "Grand Canyon",
      country: "United States",
      googleMapsLink: "https://maps.app.goo.gl/Mb5UpTjMGJTTvYcZ9",
      dates: "April 2 - April 10, 2024",
      description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona. About 277 miles long, up to 18 miles wide and over a mile deep, this natural wonder offers breathtaking vistas and hiking opportunities."
    },
    {
      id: 10,
      img: {
        src: "https://images.unsplash.com/photo-1528702748617-c64d49f918af",
        alt: "Safari in Serengeti National Park"
      },
      title: "Serengeti National Park",
      country: "Tanzania",
      googleMapsLink: "https://maps.app.goo.gl/TMVGQbgXDGFZqEHx5",
      dates: "February 15 - February 28, 2024",
      description: "The Serengeti is a vast ecosystem in east-central Africa, spanning northern Tanzania and extending to southwestern Kenya. Famous for its annual migration of over 1.5 million wildebeest and thousands of gazelles and zebras, it offers one of the world's most impressive wildlife experiences."
    }
  ];
  
  export default travelJournal;