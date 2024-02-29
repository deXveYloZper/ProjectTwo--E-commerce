const spaceXVehicles = [
    {
      title: "Falcon 9",
      description: "A reliable, reusable rocket designed for the transport of payloads and humans to Earth orbit and beyond.",
      image: "link_to_falcon_9_image",
      additionalInfo: {
        height: "70 m / 229.6 ft",
        diameter: "3.7 m / 12 ft",
        payloadToLEO: "22,800 kg / 50,265 lb",
        payloadToGTO: "8,300 kg / 18,300 lb",
        payloadToMars: "4,020 kg / 8,860 lb"
      }
    },
    {
      title: "Falcon Heavy",
      description: "The most powerful operational rocket in the world, capable of carrying large payloads to orbit and supporting deep space missions.",
      image: "link_to_falcon_heavy_image",
      additionalInfo: {
        height: "70 m / 229.6 ft",
        diameter: "12.2 m / 39.9 ft",
        payloadToLEO: "63,800 kg / 140,660 lb",
        payloadToGTO: "26,700 kg / 58,860 lb",
        payloadToMars: "16,800 kg / 37,040 lb"
      }
    },
    {
      title: "Dragon Spacecraft",
      description: "A spacecraft capable of carrying up to 7 passengers to and from Earth orbit, with the ability to return significant amounts of cargo to Earth.",
      image: "link_to_dragon_spacecraft_image",
      additionalInfo: {
        height: "8.1 m / 26.7 ft",
        diameter: "4 m / 13 ft",
        launchPayloadMass: "6,000 kg / 13,228 lbs",
        returnPayloadMass: "3,000 kg / 6,614 lbs"
      }
    },
    {
      title: "Starship",
      description: "Designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond, Starship is the world’s most powerful launch vehicle ever developed.",
      image: "link_to_starship_image",
      additionalInfo: {
        height: "121 m / 397 ft",
        diameter: "9 m / 29.5 ft",
        payloadCapacity: "100 – 150 t (fully reusable)"
      }
    }
  ];
const fireflyVehicles = [
    {
      title: "Alpha",
      description: "Affordable and flexible launch services for a variety of missions, with the highest payload performance in its class.",
      image: "link_to_alpha_image",
      additionalInfo: {
        payloadLEO: "1,030 KG",
        overallLength: "29.48 m",
        propulsion: "LOX / RP–1"
      }
    },
    {
      title: "MLV (Medium Launch Vehicle)",
      description: "A collaboration with Northrop Grumman, targeting medium-lift market needs with significant payload capacity.",
      image: "link_to_mlv_image",
      additionalInfo: {
        overallLength: "55.7 m",
        payloadFairing: "5.2 m",
        propulsion: "LOX / RP–1"
      }
    },
    {
      title: "Blue Ghost Lunar Lander",
      description: "Annual missions to the Moon with customizable services for various lunar exploration and technology goals.",
      image: "link_to_blue_ghost_image",
      additionalInfo: {
        height: "2 m",
        payloadMassToSurface: "150 kg",
        trunkVolume: "37 m³"
      }
    },
    {
      title: "Elytra Dawn",
      description: "Rapid on-orbit services including hosting, rideshare, and delivery in LEO and beyond.",
      image: "link_to_elytra_dawn_image",
      additionalInfo: {
        orbits: "Optimized for LEO",
        payloadAccommodations: "Up to 12U",
        launchCapacity: "Up to 1 MT"
      }
    }
  ];
const blueOriginVehicles = [
    {
      title: "New Glenn",
      description: "A reusable rocket by Blue Origin designed for a wide range of missions, including carrying crew and cargo to orbit and beyond. It features a powerful first stage with seven BE-4 engines and a versatile second stage for efficient space operations.",
      firstStage: {
        height: "57.5 meters",
        propulsion: "7 BE-4 engines",
        thrust: "550,000 lbf each",
        reusability: "Designed for a minimum of 25 flights"
      },
      secondStage: {
        height: "23.4 meters",
        propulsion: "2 BE-3U engines",
        thrust: "160,000 lbf each"
      },
      payloadFairing: {
        diameter: "7 meters",
        volume: "Twice the payload volume of any five-meter class commercial launch system"
      },
      performance: {
        toLEO: "Over 45 metric tons",
        toGTO: "Over 13 metric tons"
      }
    },
    {
      title: "New Shepard",
      description: "A reusable suborbital rocket system designed for space tourism, capable of taking astronauts and research payloads past the Kármán line. It features a crew capsule with large windows for expansive space views.",
      rocketHeight: "18 meters",
      approximateAltitude: "307,000 feet",
      spacecraftCapacity: "Up to six passengers",
      spacecraftVolume: "530 cubic feet",
      notableFeatures: {
        crewCapsule: "Largest windows ever flown in space",
        engine: "BE-3, throttleable for controlled landing"
      },
      environmentalMeasures: {
        sustainability: "99% reusable dry mass",
        propulsionByproduct: "Water vapor"
      }
    }
  ];
const rocketLabVehicles = [
    {
      title: "Electron",
      description: "A lightweight, reusable orbital-class rocket designed for the precise delivery of small satellites to orbit. Features the world's first 3D-printed, electric-pump-fed rocket engine, the Rutherford, and a unique Kick Stage for deploying payloads into multiple orbits.",
      image: "link_to_electron_image",
      additionalInfo: {
        height: "18 m / 59 ft",
        diameter: "1.2 m / 3.9 ft",
        stages: "2 + Kick Stage",
        wetMass: "13,000 kg / 28,660 lb",
        payloadToLEO: "300 kg / 661 lb",
        structure: "Carbon Composite",
        propellant: "LOX / Kerosene",
        firstStage: {
          engines: "9 Sea-level Rutherford",
          liftOffThrust: "190 kN (43,000 lbf)",
          peakThrust: "224 kN (56,000 lbf)",
          isp: "311 seconds"
        },
        secondStage: {
          engine: "Single Vacuum Rutherford",
          totalThrust: "25.8 kN (5,800 lbf)",
          isp: "343 seconds"
        },
        kickStage: {
          features: [
            "Deployment of payloads at multiple planes/inclinations",
            "Higher altitude deployment",
            "Hosted payload support",
            "Multiple trajectory changes",
            "Sustained low altitude orbits",
            "Deorbiting payloads to eliminate space debris"
          ]
        },
        reusability: "Electron is the only reusable orbital-class small rocket."
      }
    },
    {
        title: "Neutron",
        description: "Rocket Lab's Neutron is designed for a range of missions including mega constellation deployment, deep space exploration, and human spaceflight, featuring a reusable design and the new Archimedes Engine.",
        additionalInfo: {
          height: "43 m / 141 ft",
          diameter: "7m",
          fairingDiameter: "5m",
          payloadToLEO: "13,000 kg",
          liftOffMass: "480,000 kg",
          propellant: "LOX / Methane",
          firstStage: {
            engines: "9 Archimedes",
            liftOffThrust: "6,800 kN",
            peakThrust: "7,300 kN"
          },
          secondStage: {
            engine: "Single Vacuum Archimedes",
            vacuumThrust: "890 kN"
          }
        }
      }      
  ];
  
const allRockets = [spaceXVehicles,fireflyVehicles,blueOriginVehicles,rocketLabVehicles]
// Creating a new array 'firstRockets' by mapping over 'allRockets', which contains arrays for each company. 
// This extracts the first item (rocket) from each company's array to feature in the slider.
const firstRockets = allRockets.map(companyVehicles => companyVehicles[0])

function generateHeroSLider(rockets){
    const sliderWrapper = document.getElementById("sliderWrapper")

    rockets.forEach(rocket=>{
        const sliderItem = document.createElement("div");
        sliderItem.classList.add("sliderItem")

        sliderItem.innerHTML =
        `
        <img src="${rocket.image}" alt="" class="sliderImg" width="600" height="600">
        <div class="sliderBg"></div>
        <h1 class="sliderTitle">${rocket.title}</h1>
        <h2 class="sliderDesc">${rocket.description}</h2>
        <h2 class="sliderPrice">${rocket.additionalInfo?.height}</h2>
        <button class="sliderButton">BUY NOW</button>
        `;
        sliderWrapper.appendChild(sliderItem)
    })
}
generateHeroSLider(firstRockets)


const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
         // Find the current slider item based on index
         const currentSliderItem = wrapper.children[index];
         // Within that item, find the .sliderBg element
         const innerCircle = currentSliderItem.querySelector(".sliderBg");
        //changing the background colors based on the index
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"]
        innerCircle.style.backgroundColor = colors[index % colors.length]

    })
})