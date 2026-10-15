const experiments = [
  {
    id: "microscopy",
    grade: "G6",
    title: "Introduction to Microscopy",
    subject: "Biology · Microscopy",
    summary: "Learn the basic operation of a microscope and observe prepared slides.",
    image: { src: "images/microscopy.png", fit: "cover" , position: "50% 60%"},
    objective: "Complete the introduction to microscopy investigation and record clear observations and conclusions.",
    materials: [{ text: "Microscope" }, { text: "Prepared slides" ,image: {
      src: "images/microscope.jpeg",
      width: "300px",
      height: "200px",
      fit: "contain"
    }}],
    procedure: [
      "Set up the microscope and adjust the light source.",
      "Place a prepared slide on the stage and begin with the lowest magnification.",
      "Adjust the focus, observe the specimen and record your findings."
    ],
    CleaningTips: [
      "Turn the objective lens to lower magnification and unplug the microscope after use.",
      "Wrap up the wires to the microscope arms.",
      "Put the microscope in the assigned storage area and return slides to the box."],
    note:["12 microscopes are available for use in the lab.",
          "Be careful when handling the glass slides."]
  },
  {
    id: "heart-rate-lab",
    grade: "G6",
    title: "Heart Rate Lab",
    subject: "Biology · Human Body",
    summary: "Use a timer to measure and record heart rate as directed by the teacher.",
    image: "",
    objective: "Investigate heart rate using the class timers.",
    materials: ["Stopwatch or timer (one per student; at least 24 timers)"],
    procedure: [
      "Use the timer as directed by the teacher to measure and record heart rate."
    ],
    cleaningTips: ["Return each timer to its designated place."],
    note: "The lab book says to press the middle button, then the right and left buttons to cancel the alarm."
  },
  {
    id: "chicken-wing-dissection",
    grade: "G6",
    title: "Chicken Wing Dissection",
    subject: "Biology · Skeletal System",
    summary: "Observe the skin, muscles and bones structure in a chicken wing.",
    image: { src: "images/wingsdemo.png", fit: "contain" },
    objective: "Observe the structure of a chicken wing and have visual understanding of the skeletal system.",
    materials: ["Chicken wing", "Dissection tray", "Scissors", "Tweezers","Table cloth"],
    procedure: [
      {"text": "Observe the outside of the chicken wing.",
        image: {src:"images/wing-dissection2.jpeg", width: "300px", height: "200px", fit: "contain"}
      },
      {"text": "Remove the skin by lifting up the skin and cut it open with scissors.",
        "image": {src:"images/wing-dissection.png", width: "300px", height: "200px", fit: "contain"}},
    ],
    cleaningTips: [
      "Lab Tech collects the tweezers and scissors for cleaning.",
      "Students should dispose of the chicken wing in the table clothes.",
    ],
    note: "Each pair get one chicken wing."
  },
  {
    id: "bacterial-culture-g6",
    grade: "G6",
    title: "Bacterial Culture",
    subject: "Biology · Microbiology",
    summary: "Collect environmental samples and observe changes in bacterial colonies.",
    image: "",
    objective: "Complete the bacterial culture investigation and record clear observations and conclusions.",
    materials: ["Petri dishes", "Swabs", "Markers","A beaker of water"],
    procedure: [
      "Each student get 4 swabs and a petri dish.",
      "Each student should label a petri dish with their name and the sample source.",
      "Tape the swab with water.",
      "Use a swab to collect environmental sample.",
      "Transfer the sample to a labelled petri dish.",
      "Hand in to teacher for incubation and observe the changes in bacterial colonies after 2 days."
    ],
    cleaningTips: [
      "Do not open sealed culture plates; hand them to lab staff for disposal.",
      "Disinfect work surfaces after the experiment.",
      "Wash hands thoroughly."
    ],
    note: ["Cultures should be handled and disposed of only by authorised personnel.",
      "Incubated at 37°C for 2 days, put a thermometer in the incubator to check the temperature."
    ]
  },
  {
    id: "heart-dissection",
    grade: "G6",
    title: "Heart Dissection",
    subject: "Biology · Cardiovascular System",
    summary: "Explore the external and internal structures of a heart.",
    image: "",
    objective: "Identify the main heart structures and relate them to blood circulation.",
    materials: ["Pig heart for students", "Dissection tray", "Scalpel", "Gloves","2 Cow heart for demo"],
    procedure: [
      { text: "Observe the external shape and major blood vessels.\nExplore the blood vessels with fingers." },
      { text: "Follow the teacher demonstration to open the heart safely.", image: {src:"images/heart.png", width: "300px", height: "auto", fit: "contain"}},
      { text: "Identify the structures inside the heart." }
    ],
    cleaningTips: [
      "Dispose of the specimen according to laboratory instructions.",
      "Clean and disinfect the dissection tray and tools.",
      "Remove gloves safely and wash hands thoroughly."
    ],
    note: "Only handle the specimen and sharp tools under teacher supervision."
  },
  {
    id: "lung-dissection",
    grade: "G6",
    title: "Lung Dissection (Demo only)",
    subject: "Biology · Respiratory System",
    summary: "Explore the structure of the lungs and the airway.",
    image: "",
    objective: "Identify the main lung structures and explain how air reaches the alveoli.",
    materials: ["Pig Lung","Bumper","Plastic Box"],
    procedure: [
      "Observe the shape of the lungs and trachea.",
      "Plug the trachea with a bumper and blow air into the lungs.",
      "Observe the inflation of the lungs and the airway structure."
    ],
    results: [{text:"The trachea branches into bronchi, which further divide into smaller bronchioles, leading to the alveoli where gas exchange occurs.",
        image:{src:"images/pig-lung1.png", width:"300px", height:"auto", fit:"contain"}},
        {video:{src:"video/lungfulldemo.mp4", width:"300px"}, 
      text:"The lungs inflate when air is blown into the trachea, demonstrating how air reaches the alveoli."},
      ],

    cleaningTips: [
      "Wipe the blood droppings on the floor or cart with paper towels.",
    ],
    note: "One lung for dssection to check the structure and one lung for air blow. Only handle by teacher."
  },
  {
    id: "brain-dissection",
    grade: "G6",
    title: "Brain Dissection (Demo only)",
    subject: "Biology · Nervous System",
    summary: "Observe the structures of a brain.",
    image: "",
    objective: "Identify major brain regions and relate their structures to nervous-system functions.",
    materials: ["Brain specimen", "Dissection tray", "Scalpel", "Gloves"],
    procedure: [
      "Observe the outer surface and major divisions of the brain.",
      "Follow the teacher demonstration to examine a sectioned sample.",
      {text:"Identify the cerebrum, cerebellum and brain stem.",image:{src:"images/brain.png", width:"300px", height:"auto", fit:"contain"}},
    ],
    cleaningTips: [
      "Dispose of the specimen according to laboratory instructions.",
      "Clean and disinfect the dissection tray and tools.",
      "Remove gloves safely and wash hands thoroughly."
    ],
    note: ["This is a teacher-led demonstration; handle specimens only with permission. \n Do Not get the freezeing brain!\nGet the FRESH one!"]
  },
  {
    id: "bacterial-culture-g7",
    grade: "G7",
    title: "Bacterial Culture",
    subject: "Biology · Bacteria and Archaea",
    summary: "Learn about how bacteria grow and develop.",
    image: "",
    objective: "Observe and describe differences in colony appearance.",
    materials: ["Pre-made culture plates", "Swabs", "Gloves","Beaker of water"],
    procedure: [
      {text:"Get a pre-made culture plate and label it with your name on the lid and label the sample name at the bottom.",
        image:{src:"images/G7-baterialprocedure.png", width:"300px", height:"auto", fit:"contain"}
      },

      "Get two swabs and tape them with water.",
      "Swab the surface of the sample and transfer it to the labelled culture plate.",
      "Hand in to teacher for incubation and observe the changes in bacterial colonies after 2 days."
    ],
    cleaningTips: [
      "Wash hands thoroughly after the activity.",
      "Hand back to teacher for disposal of the culture plates."
    ],
    note: "Culture plates must remain sealed and be handled only as instructed by the teacher."
  },
  {
    id: "gram-staining-g7",
    grade: "G7",
    title: "Gram Staining",
    subject: "Biology · Bacteria and Archaea",
    summary: "Use Gram staining to observe differences in bacterial cell walls.",
    image: "",
    objective: "Understand the Gram staining process and identify Gram-positive and Gram-negative bacteria.",
    materials: ["Slides", "Microscope", "Gram staining reagents kit (Crystal violet,Iodine,Alcohol,Safranin)", "Lighter", "Marker", "Microscope oil (if needed)"],
    materialsImage: {
      src: "images/gramstaining.png",
      width: "300px",
      height: "auto",
      fit: "contain"
    },
    procedure: [
      "Prepare yogurt solution. Add 5ml yogurt to 100ml water in a beaker and mix well.(For whole class)",
      "Put a drop of yogurt solution on a slide and use lighter to heat fix the sample.",
      {text:"Stain the slide by following the steps in the graph below (remember to rinse the slide with water between each step)",
        image:{src:"images/gramstaining-proceudre.png", width:"400px", height:"auto", fit:"contain"}},
      "Record the observed colours and complete the results table."
    ],
    cleaningTips: [
      "Return the slide and microscope to the designated area.",
      "Clean the work surface as instructed.",
      "Wash hands after the activity."
    ],
    note: "Step1-2 is done by lab teacher for whole class.\n Students should work in tray in case of any spills."
  },
  {
    id: "fungi-planting",
    grade: "G7",
    title: "Fungi Cultivation",
    subject: "Biology · Fungi",
    summary: "Observe fungal growth.",
    image: "",
    objective: "Monitor fungal growth and record environmental factors affecting development.",
    materials: ["Mushroom growing kit", "Spray bottle","Humidifier"],
    procedure: [
      "Set up the mushroom growing kit in a suitable location.",
      "Keep the growing medium moist.",
      "Observe the mature mushrooms and dispose of the kit as instructed."
    ],
    procedureGallery: [
      { src: "images/fungi1.jpeg", alt: "Fungi cultivation photo 1" },
      { src: "images/fungi2.png", alt: "Fungi cultivation photo 2" }
    ],
    results: [{text:"Different Fungi need different temperatures.",
      image:{ src: "images/fungi3.png", alt: "Fungi cultivation results" }}],
    cleaningTips: [
      "Do not open kits unnecessarily to avoid spore spread.",
      "Follow disposal instructions for spent kits.",
      "Sanitise hands after handling."
    ],
    note: "<strong>DO NOT LEAVE THE KIT TO LONG WHEN MUSHROOMS ARE READY</strong>. \n Harvest them promptly to avoid overgrowth and spore release."
  },
  {
    id: "photosynthesis-starch",
    grade: "G7",
    title: "Photosynthesis: Starch Test",
    subject: "Biology · Photosynthesis",
    summary: "Use iodine to test leaf starch and investigate photosynthesis.",
    image: "",
    objective: "Test leaves for starch to demonstrate photosynthesis activity.",
    materials: ["Green&white -border geranium Leaves", "95% Ethanol", "Iodine", "Petri dishes","Droppers",],
    materialsImage: {
      src: "images/geraniummaterials.png",
      width: "400px",
      height: "auto",
      fit: "contain"
    },
    procedure: [
      "Cut the enough amount of green and white leaves from the geranium plant a day before the experiment.",
      "Use a beaker of Ethanol to boil the leaves until the chlorophyll is removed. Make sure change the ethanol if it turns green.",
      {text: "Rinse the leaves in water to soften them.",image:{src:"images/geraniumprocedure.png", width:"300px", height:"auto", fit:"contain"}},
      "Students will do in pairs, each pair get one green leaf and one white leaf.",
      "Add iodine and compare the colour change in each area."
    ],
    results: [
      "The green areas of the leaf will turn blue-black, indicating the presence of starch and photosynthesis activity.",
      "The white areas will not change colour, indicating no starch production in those areas.",
      {image:{src:"images/geraniumresult.png", width:"300px", height:"auto", fit:"contain"}}
    ],
    cleaningTips: [
      "Throw away used leaves in the bio-hazard bin.",
      "Clean dishes and work surfaces after testing.",
      "Wash hands after the activity."
    ],
    note: " Eight elements need 12 pots of green leaves and 12 pots of white leaves.\n Teacher will perform heating steps."
  },{
    id: "peanut-planting",
    grade: "G7",
    title: "Peanut Planting",
    subject: "Biology · Plants",
    summary: "Plant peanuts and observe their growth.",
    image: "",
    objective: "Learn about plant growth and the conditions necessary for germination.",
    materials: ["peanut","plastic bottle","water","tissue"],
  
    procedure: [
      "Use wet tissue to wrap the peanut and put in a ziplock bag. Put in to 37 degree incubator for 7 days.",
      {text: "Transfer the peanut to a plastic bottle with water. Observe the growth of the peanut plant.",
        image:{src:"images/peanutplanting.png", width:"400px", height:"auto", fit:"contain"}},
    ],
    results: [
      {text:"Two weeks later.",image:{src:"images/peanutplanting-result.png", width:"400px", height:"auto", fit:"contain"}}
    ],
    cleaningTips: [
      "Dispose of plant waste in to bin or bring home."
    ],
    note: "The peanut planting experiment is a long-term observation. \n Students should monitor the growth and record observations regularly."
  },
  {
    id: "flower-dissection",
    grade: "G7",
    title: "Flower Dissection",
    subject: "Biology · Plant Structures",
    summary: "Dissect a flower and identify structures.",
    image: "",
    objective: "Identify flower parts and relate structure.",
    materials: [
      {
        text: "Lily flower",
        images: [
          { src: "images/lily1.png", alt: "Lily flower 1" },
          { src: "images/lily2.png", alt: "Lily flower 2", caption: "After 2weeks" }
        ]
      },
      "Scalpel",
      "Scissors",
      "Tweezers",
      "Dissection tray"
    ],
    materialsImage: {
      src: "images/flowerdissectionmaterial.png",
      width: "400px",
      height: "auto",
      fit: "contain"
    },
    procedure: [
      "Observe the morphology from the top, side and bottom views.",
      "Separate the sepals, petals, stamens and carpel with forceps/hands.",
      "Identify the structures of Stamens and pistil.",
      "Cut the ovary and examine its structure.",

    ],
    cleaningTips: [
      "Collect plant waste in the designated bin.",
      "Rinse and return reusable tools.",
      "Wash hands after handling plant material."
    ],
    note: "Purchase fresh flowers 10days before the experiment. \n Get a demo for teacher. \n Be aware of allergies to pollen or plant material."
  },
  {
    id: "animals dissection",
    grade: "G7",
    title: "Frog & Mouse dissection",
    subject: "Biology · Classification of Vertebrates",
    summary: "Observe the internal structures of a frog and mouse. Understand the anatomy and physiology of these animals.",
    image: {src:'images/frogmouse.png', fit: 'cover',position: '30% 95%'},
    objective: "Understand the anatomy and physiology of the Vertebrates, amphibians.",
    materials: ["Mouse [冷冻小白鼠] (each pair has one)","Frog [林蛙] (each pair has one)","dissection tray","scalpel","scissors","tweezers","gloves"],
    
    procedure: [
      " Defrost the frog and mouse in a refrigerator for 24 hours before dissection.",
      "Put specimens on the dissection tray",
      "observe the external features of the frog and mouse.",
      "Use scissors to make a mid-ventral incision and open the body cavity."
    ],
    results: [
      "Observe the internal organs and identify their functions.",
      
    ],
    cleaningTips: [
      "Throw away the specimens in the bio-hazard bin.",
    ],
    note: " Bad smell with the defrosted specimens. \n Teacher will demonstrate the dissection steps. \n Students should wear gloves and follow safety instructions."
  },
  {
    id: "food-tests",
    grade: "G7",
    title: "Food Tests",
    subject: "Biology · Chemistry of Life",
    summary: "Test food samples for starch, protein and reducing sugars.",
    image: "",
    objective: "Identify macromolecules in food using chemical tests and record results.",
    materials: [
      "Beaker A: corn starch",
      "Beaker B: milk",
      "Beaker C: glucose solution",
      "Beaker D: water",
      "Reagent1: benedict' solution",
      "Reagent2-1: NaOH",
      "Reagent2-2: CuSO4",
      "Reagent3: Iodine"
    ],
    materialsImage: {
      src: "images/foodtest-materials.png",
      width: "400px",
      height: "auto",
      fit: "contain"
    },
    procedure: [
      "1ml sample for each well, 0.5ml reagent for each well",
      "3ml sample for each test tube, 2ml benedict 'solution for each test tube"
    ],
    results: [{text:"The results of the starch & protein tests are as follows:",
      image:{src:"images/foodtest-result.png", width:"400px", height:"auto", fit:"contain"}},
      {text:"The results of the reducing sugar test are as follows:", image:{src:"images/foodtest-result2.png", width:"400px", height:"auto", fit:"contain"}}],
    cleaningTips: [
      "Dispose of reagent waste as instructed.",
      "Clean and dry test tubes and equipment.",
      "Wash hands after the experiment."
    ],
    note: "Do not taste reagents or samples; follow safety instructions."
  },
  {
    id: "water-properties",
    grade: "G8",
    title: "Properties of Water",
    subject: "Biology",
    summary: "Explore adhesion, surface tension and capillary action through stations.",
    image: "",
    objective: "Investigate surface tension and adhesion using simple stations.",
    materials: ["Slides", "Coins", "Pipettes", "Water","beaker","paper clips","perti dish","tweezers","dropper","wax paper"],
    materialsImage: [{src: "images/water-properties-materials1.png", width: "300px", height: "auto", fit: "contain",alt:"Water properties materials 1"},
      {src: "images/water-properties-materials2.png", width: "300px", height: "auto", fit: "contain",alt:"Water properties materials 2"}],
    procedure: [
      { heading: "Station 1: Water as glue" },
      {
        text: "Drop a few drops of water onto the slides, put them together, and then try to pull the wet slides apart.",
        image: { src: "images/water-properties-station1.png", width: "300px", height: "auto", fit: "contain" }
      },
      { heading: "Station 2: Float paper clip" },
      {
        text: "Fill a clean petri dish with water. Using a plastic fork, gently try to float a clean, dry paperclip on the surface of the water.",
        image: { src: "images/water-properties-station2.png", width: "200px", height: "auto", fit: "contain" }
      },
      { heading: "Station 3: Drops on a penny" },
      { text: "Using a pipette, slowly drop water (count the drops!) onto the surface of the coin and record how many it took to overflow.",
        image: { src: "images/water-properties-station3.png", width: "300px", height: "auto", fit: "contain" }
      },
      { heading: "Station 4: Drops on glass & wax paper" },
      { text: "drop water on the material.",
        image: { src: "images/water-properties-station4.png", width: "300px", height: "auto", fit: "contain" }
      },
      { heading: "Station 5: Climbing Water" },
      {text:"Clip the paper on the clip and put the edge of paper in the water. Observe the water moving up the paper.",
        image: { src: "images/water-properties-station5.png", width: "200px", height: "auto", fit: "contain" }
      },
      {heading: "Station 6: Sand vs Water-Specific Heat Capacity" },
        "Place equal volumes of water and sand into separate containers.", 
          {text:"Insert a thermometer into each container and record the starting temperature."
            ,image:{src:"images/water-properties-station6.png", width:"300px", height:"auto", fit:"contain"}},
          "Place both containers under the same heat lamp for 10 minutes.",
           "Record the final temperature of each sample."
    ],
    cleaningTips: [
      "Throw away used paper towels and pour the water to the sink.",
      "Dry everything. Wipe away spilled liquids promptly.",
      "Return equipment to stations."
    ],
    note: "Station6 only for demo. \n Check the bunsen burner regularly to avoid automatic shut off."
  },
  {
    id: "catalase-potato",
    grade: "G8",
    title: "Catalase(Potato)-pH & Temperature",
    subject: "Biology · Enzymes",
    summary: "Investigate how temperature and pH affect catalase activity.",
    image: "",
    objective: "Compare enzyme activity under different conditions and record foam height.",
    materials: ["Potato mash", "Test tubes", "Hydrogen peroxide", "Water","Sodium carbonate","Hot water bath","Ice bath"],
    materialsImage: {src: "images/potatocatalase-v1materials.png", width: "400px", height: "auto", fit: "contain"},
    procedure: [
      "Cut potato into pieces. Use a blender to smash it.",
      "Label the paper cup with the material name. Pour the material into a paper cup.",
      "Label the test tubes using the tape and marker pen by numbering them 1 - 6.",
	  "Use a measuring spoon to measure 2.5 ml of blended potato and add it to each test tube.",
	  "Use a measuring cylinder to measure 5 ml of water and add it to test tube 1.",
	  "Use a measuring cylinder to measure 5 ml of hydrogen peroxide and add it to test tube 2.",
	  "Use a stopwatch and allow the mixtures to sit for 2 minutes.",
	  "Use a ruler to measure any foam that is produced and record it in the table below.",
	  "Use a measuring spoon to measure 1 ml of baking soda and add it to test tube 3.",
	  "Use a dropper to add 5 drops of vinegar to test tube 4.",
	  "Use a measuring cylinder to measure 5 ml of hydrogen peroxide and add it to test tube 3 and 4. Let it sit for 2 minutes.",
	  "Use a ruler to measure any foam that is produced.",
	  "Place test tube 5 in the ice water bath.",
	  "Place test tube 6 in the hot water bath.",
	  "Use a stopwatch and allow both mixtures to sit for 2 minutes.",
	  "Use a measuring cylinder to measure 5 ml of hydrogen peroxide and add it to test tube 5 and 6. Let it sit for two minutes.",
	  "Remove both test tubes from the water baths.",
	  "Use a ruler to measure the height of any foam that was produced and record it in the table below.",
	  "Empty the contents of all test tubes in the bowl provided."

    ],
    procedureGallery: [
      { src: "images/potatocatalase-v1procedure.png",width:"600px", height:"auto", alt: "Catalase potato experiment photo 1" }
    ],
    results: [
      {text:"The results of the catalase activity under different conditions are as follows:",
        image:{src:"images/potatocatalase-v1results.png", width:"400px", height:"auto", fit:"contain"}}
    ],
    cleaningTips: ["Dispose the test tubes."
    
    ],
    note: "Step1-2 done by lab tech."
  },
  {
    id: "catalase-potato-version2",
    grade: "G8",
    title: "Catalase(Potato), Temperature",
    subject: "Biology · Enzymes",
    summary: "Investigate how temperature affect catalase activity.",
    image: "",
    objective: "Compare enzyme activity under different conditions and record foam height and learn about the control groups and experimental design..",
    materials: ["Potato mash", "Test tubes", "Hydrogen peroxide", "Water","Hot water bath","Ice bath"],
    materialsImage: {src: "images/potatocatalase-v2materials.png", width: "400px", height: "auto", fit: "contain"},
    procedure: [
      "Add 0.5 ml of hydrogen peroxide to each test tube. Label each test tube with its temperature and each cap with the group number.",
      {
        text: "Place the test tubes in their corresponding conditions for 5 minutes.",
        table: {
          headers: ["Test Tube", "Temperature / Condition"],
          rows: [
            ["Test Tube 1", "0°C — ice bath 🧊"],
            ["Test Tube 2", "24°C (room temperature) — test tube rack at your table"],
            ["Test Tube 3", "24°C (room temperature) — test tube rack at your table"],
            ["Test Tube 4", "24°C (room temperature) — test tube rack at your table"],
            ["Test Tube 5", "40°C — 40°C water bath"],
            ["Test Tube 6", "60°C — 60°C water bath"]
          ]
        },
        image: {src:"images/potatocatalase-v2procedure.png", width:"300px", height:"auto", fit:"contain"}
      },
      {
        text: "Add the following to each test tube:",
        table: {
          headers: ["Test Tube", "Addition"],
          rows: [
            ["Test Tube 1", "1 ml fresh potato mash"],
            ["Test Tube 2", "1 ml boiled potato mash"],
            ["Test Tube 3", "1 ml fresh potato mash"],
            ["Test Tube 4", "1 mL <strong>water</strong>"],
            ["Test Tube 5", "1 ml fresh potato mash"],
            ["Test Tube 6", "1 ml fresh potato mash"]
          ]
        }
      },
      "Put test tube back to treatment place for 5mins.",
      "Measure the height of the foam."
    ],
   
    results: [
      {text:"The results of the catalase activity under different conditions are as follows:",
        image:{src:"images/potatocatalase-v2results.png", width:"400px", height:"auto", fit:"contain"}}
    ],
    cleaningTips: ["Dispose the test tubes."
    
    ],
    note: "Step1-2 done by lab tech."
  },
   {
    id: "G8-cell-size",
    grade: "G8",
    title: "Cell Size and Diffusion",
    subject: "Biology · Cells",
    summary: "Use agar cubes to model diffusion and the surface-area-to-volume ratio.",
    image: "",
    objective: "Investigate how agar cube size affects diffusion distance and surface-area-to-volume ratio.",
    materials: ["Agar powder", "Water", "pH indicator", "Sodium hydroxide (optional)", "Vinegar", "Timer", "Ruler", "Knife", "Beakers"],
    materialsImage: {src: "images/cellsize-materials.png", width: "300px", height: "auto", fit: "contain"},
    procedure: [
      {text:"The teacher prepares the agar cubes. Use 1000ml beaker with 12g agar powder + 700ml boiling water heated to the solution turn as the pic show.",
        image:{src:"images/cellsize-procedure-agar.jpeg", width:"300px", height:"auto", fit:"contain"}},

      {text:"Prepare the indicator solution by mixing the pH indicator with water for bromothymol blue, sodium hydroxide solution for phenolphthalein in a 25ml test tube.",
        image:{src:"images/cellsize-procedure-phindicator.jpeg", width:"300px", height:"auto", fit:"contain"}},

      "Bring the beaker to room temperature and add indicator solution to the agar solutions. Mix them thoroughly.",

      "Pour the agar solution into the model, it should full fill one set. Let it cool and solidify for 30 minutes.",

      { heading: "Students will perform the following steps:" },
      {
        text: "Each group get 2 agar cubes. Use a knife to cut the cubes into different sizes (1cm, 2cm, 3cm).",
        image: { src: "images/G8-cellsizeprocedure1.jpeg", width: "300px", height: "auto", fit: "contain" }
      },
      {
        text: "Place the cubes in a beaker with 50ml vinegar for 15 minutes. Observe the color change in the cubes.",
        image: { src: "images/G8cellsize-procedure2.jpeg", width: "300px", height: "auto", fit: "contain",position:"50% 20%" }
      },
      "Calculate the surface-area-to-volume ratio for each cube size and analyze the results."
    ],
    results: [
      {
        text: "The results of the diffusion experiment are as follows:",
        table: {
          headers: [
            "Cube side (cm)",
            "Surface area (cm²)",
            "Volume (cm³)",
            "SA:V ratio",
            "Undiffused length (cm)",
            "Diffusion extent (cm)",
            "Undiffused volume (cm³)",
            "Penetrated volume (cm³)",
            "Penetration (%)"
          ],
          rows: [
            ["3", "54", "27", "2:1", "2.8", "0.20", "21.952", "5.048", "18.70%"],
            ["2", "24", "8", "3:1", "1.6", "0.40", "4.096", "3.904", "48.80%"],
            ["1", "6", "1", "6:1", "0.0", "1.00", "0", "1", "100.00%"]
          ]
        }
      },
      {
        image: {
          src: "images/cellsize-results1.png",
          alt: "Agar cubes before adding vinegar",
          width: "300px",
          height: "auto",
          fit: "contain",
          caption: "Before adding vinegar"
        }
      },
      {
        image: {
          src: "images/cellsize-results2.png",
          alt: "Agar cubes after adding vinegar",
          width: "300px",
          height: "auto",
          fit: "contain",
          caption: "After adding vinegar"
        }
      }
    ],
    cleaningTips: [
      "Dispose of agar and tissues.",
      "Wipe the tray and any liquid spills.",
      {text: "Should be look at like the pic after cleaning.",
        image:{src:"images/cellsize-cleanup.jpeg", width:"400px", height:"auto", fit:"contain"}
      }
    ],
    note: ""
  },
  {
    id: "osmosis-potato",
    grade: "G8",
    title: "Osmosis: Potato Experiment",
    subject: "Biology · Cells",
    summary: "Compare the effect of salt solutions on potato tissue.",
    image: "",
    objective: "Measure mass changes to demonstrate osmosis effects.",
    materials: ["Potato core", "Salt", "Beakers", "Balance","Stirring rod","Water","Graduated cylinders","Each tray will have 4 beakers with label on, one marker, one cup with salt, one cup with potato, a tweezer, a spatula, two balance, two weighing boats, a stirring rod."],
    materialsImage: {src: "images/G8-osmosispotatomaterials.png", width: "400px", height: "auto", fit: "contain"},
    procedure: [
      "Use core barker to cut potato cores to 2 cm cylinders.",
      "Prepare the 50ml of labelled salt solutions. Measure mass of salt according to the concentration of the solution and add to the beakers.",
      "Measure the initial mass of potato core and place them in the solutions.",
      "Leave the potato cores in the solutions for 30 minutes.",
      "Measure them again and compare the changes in mass."
    ],
    results: [
      {text:"The results of the osmosis experiment are as follows:",
        table: {
          headers: ["Solution", "Initial Mass (g)", "Mass after 10 mins(g)", "Mass after 20 mins(g)", "Change Rate in Mass"],
          rows: [
            ["0% Salt", "2.09", "2.13", "2.16", "7.00%"],
            ["5% Salt", "2.11", "2.02","1.87", "-24.00%"], 
            ["10% Salt", "1.97", "1.78", "1.64", "-33.00%"], 
            ["20% Salt", "2.16", "1.96","1.80", "-36.00%"]
          ]},
          image:{src:"images/G8-osmosispotatoresults.png", width:"400px", height:"auto", fit:"contain"},
           },
         ],
    cleaningTips: [
      "Dispose of solutions per lab rules.",
      "Clean balances and surfaces after use.",
      "Wash hands thoroughly."
    ],
    note: "Students make their own salt solution."
  },
  {
    id: "beetroot-membrane-permeability",
    grade: "G8",
    title: "Membrane Permeability: Beetroot Practical",
    subject: "Biology · Cell Membranes",
    summary: "Investigate how temperature affects beetroot cell membrane permeability.",
    image: "",
    objective: "Compare pigment leakage from beetroot at different temperatures using a colorimeter.",
    materials: ["Beetroot", "No. 4 cork borer", "Hot-water bath", "Ice bath", "Test tubes", "Colorimeter", "Cuvettes or test chambers"],
    procedure: [
      {text: "Use the cork borer to cut beetroot cylinders 2 cm long.",
        image: {src:"images/beetrootprocedure1.png", width:"300px", height:"auto", fit:"contain"}
      },
      "Add 5 ml of water to labelled test tubes and place them at 0°C, 20°C, 40°C and 60°C for 10 minutes.",
      "Rinse the cylinders in a beaker of water.",
      {text: "Place a beetroot cylinder into each test tube labelled with its temperature and leave for 15 minutes.",
        image: {src:"images/beetrootprocedure2.png", width:"300px", height:"auto", fit:"contain"}
      },
      {text: "Pour each sample liquid into a cuvette. Using the colorimeter, select 560 nm and position the clear sides of the cuvette in the light path.",
        image: {src:"images/beetrootprocedure3.png", width:"300px", height:"auto", fit:"contain"}
      },
      "Collect absorbance data for 1 minute, until the reading is stable."
    ],
    results: [
      {
        text: "See the table below for the results:",
        table: {
          headers: ["Temperature", "Absorbance"],
          rows: [
            ["0°C", "0.021855"],
            ["20°C", "0.069471"],
            ["40°C", "0.192902"],
            ["60°C", "0.946125"]
          ]
        }
      },
         ],
    cleaningTips: [
      "Dispose of beetroot and sample liquids as instructed.",
      "Rinse the cuvettes and return the colorimeter equipment.",
      "Clean the work area and wash hands."
    ],
    note: "Use the hot-water bath and cork borer under teacher supervision."
  },
  {
    id: "leaf-disk",
    grade: "G8",
    title: "Leaf Disk Experiment",
    subject: "Biology · Photosynthesis",
    summary: "Observe leaf disks floating as photosynthesis produces oxygen.",
    image: "",
    objective: "Use leaf disks to compare photosynthesis rates under different conditions.",
    materials: ["Spinach leaves", 'Hole punch', "Syringe", "Bicarbonate solution", "Light source"],
    procedure: [
      "Prepare the 0.5% CO₂ solution. Add 10ml diluted dish soap(稀释到没有泡泡) and stir gently until fully dissolved.", 
      "Use a hole punch to cut 20 leaf disks from spinach leaves. Avoid major veins.", 
      "Place the leaf disks into a syringe and add a small amount of solution.",
      "Gently pull the plunger to remove air from the disks until they sink.", 
      "Pour 10 leaf disks into a cup containing the 0.2% sodium bicarbonate (CO₂) solution.", "6. Pour another 10 leaf disks into a second cup containing 100 mL pure water.", 
      "Place both cups under the same lamp, ensuring they are the same distance from the light source so that both receive equal light intensity.", 
      "Start the timer.", 
      "Record the number of leaf disks floating at 1-minute intervals for 10 minutes."

    ],
    cleaningTips: [
      "Dispose of leaf waste properly.",
      "Rinse syringes and return equipment.",
      "Wash hands after the experiment."
    ],
    note: " https://www.youtube.com/watch?v=gCHW7f88bAc&t=17s&pp=ygUKbGVhZiBhc3NheQ%3D%3D "
  },
  {
    id: "simulated-blood-type",
    grade: "G8",
    title: "Simulated Blood Type Test",
    subject: "Biology · Genetics",
    summary: "Use simulated samples and antibodies to practise blood typing.",
    image: "",
    objective: "Determine simulated blood types using agglutination reactions.",
    materials: ["Type A --- NaCl",
      "Type B ---- Na2SO4",
      "Type AB ---- mix of NaCl and Na2SO4",
      "Type O  ---- water",
      "Anti-A ----	AgNO3",
      "Anti-B	----  BaCl2",
    "droppers","test paper (black rubbish bag)"],
    materialsImage: {src: "images/simluatedbloodtest-materials.png", width: "400px", height: "auto", fit: "contain"},
    procedure: ["All the testing sample are solution (no accurate concentration). Dissolve them if it’s powder.",
          "Add red and few green food color to make blood sample look like blood.",
    "Get a black background (Just black rubbish bin bag) to have a drop of all blood type sample.",
    "Drop Antibodies with the samples to check the blood type.",
    "If anti-A turn white means the sample is A type, same for B type. If react with both antibodies means that is  AB type. Otherwise there is a O type.",
    {heading:"Students procedure"},
    "Get each station dropper bottle of each blood sample, and dropper bottle with antibodies.",
      "Get a test paper (Just black rubbish bin bag) to have a drop of all blood type sample.",
      "Drop Antibodies with the samples to check the blood type.",
      "Observe the color change of the sample."
   ],
   results: [
      {
        text: "The results of the simulated blood type test are as follows:\nEmma-O; Mia-AB; Noah-B; Liam-A",
        image: { src: "images/simulatedbloodtest-result.png", width: "400px", height: "auto", fit: "contain" }
      }
   ],
    cleaningTips: [
      "Wipe off the liquid from the test paper.",
      "Throw away used test paper and gloves in the bio-hazard bin.",
    ],
    note: "This uses simulated reagents only; not real blood."
  },
 
  {
    id: "ruler-drops",
    grade: "Honor Biology",
    title: "Ruler Drops",
    subject: "Biology · Experimental Design",
    summary: "Focus on experimental design and early practice with calculaing and graping data.",
    image: "",
    objective: "Carry out the ruler-drop activity as demonstrated by the teacher.",
    materials: ["Ruler (one per pair)"],
    procedure: [
      "Work in pairs; each pair receives one ruler.",
      "Each pair should decide who is student number 1 and who is student number 2.",
      "Student number 1 will hold the ruler near the end (highest number) and let it hang down. Student number 2 should put their hand at the bottom of the ruler and be ready to grab the ruler (however, they should not be touching the ruler).",
      "Student number 1 will drop the ruler sometime within the next 5 seconds and student number 2 must try to catch the ruler as fast as they can after it is dropped.",
      "Record the level (inches or centimeters) at which they catch the ruler (see table below for conversion into reaction time). Test the student 5 times (varying the time of dropping the ruler within the 5 second “drop-zone” so they cannot guess when the ruler will fall).",
      "Repeat steps 1-4 with student # 2 switching hands.",
      "Repeat steps 1-5 with student #1 catching the ruler and student #2 dropping.",


    ],
    cleaningTips: ["Return the ruler to the designated tray."],
    note: "The lab book lists the activity title and pair setup but does not include further procedure details."
  }, 
  {
    id: "lactase-enzyme",
    grade: "Honor Biology",
    title: "Lactase Enzyme Experiment",
    subject: "Biology · Enzymes",
    summary: "Compare the effect of lactase on milk and different sugars.",
    image: "",
    objective: "Observe the effect of lactase and controls using Benedict's reagent.",
    materials: ["Milk", "Lactase", "Sugar samples", "Benedict's reagent"],
    procedure: [
      "Label tubes A to G and add the assigned treatments.",
      "Add Benedict's solution to each tube.",
      "Heat the tubes in a water bath and record each colour change."
    ],
    cleaningTips: [
      "Dispose of reagent waste safely.",
      "Clean test tubes and equipment.",
      "Wash hands after the experiment."
    ],
    note: "Heat is involved; use caution and teacher supervision."
  },
  {
    id: "mcmush-happy-meal-food-tests",
    grade: "Honor Biology",
    title: "Mcmush Happy Meal Food Tests",
    subject: "Biology · Food Tests",
    summary: "Test Happy Meal food slurry for monosaccharides, polysaccharides, proteins and lipids.",
    image: "",
    objective: "Use indicator reagents to test food samples and record the results.",
    materials: ["McDonald's Happy Meal food samples", "Blender", "Benedict's reagent", "Lugol's iodine", "Sudan III reagent", "Biuret solution 1 (NaOH)", "Biuret solution 2 (CuSO₄)", "24-well plates", "Test tubes and racks", "Water bath", "Glucose solution", "Starch solution", "Egg-white solution", "Vegetable oil", "Distilled water", "Markers"],
    procedure: [
      { heading: "Monosaccharide Test" },
      { text: "Place about 3 ml each of glucose solution, distilled water and food slurry into separate labelled test tubes." },
      { text: "Add 1 ml of Benedict's solution to each tube. Mix gently by holding the closed tube and flicking it." },
      { text: "Place the tubes in a water bath for 5 minutes, then record the colour in the data table." },
      { heading: "Polysaccharide Test" },
      { text: "Place about 1 ml each of starch solution, distilled water and food slurry into separate wells. Use separate droppers to avoid mixing samples." },
      { text: "Add 10 drops of Lugol's iodine solution to each well. Observe and record the results." },
      { heading: "Protein Test" },
      { text: "Place about 1 ml each of egg-white solution, distilled water and food slurry into separate wells." },
      { text: "Slowly add about 1 ml of Biuret solution 1 (NaOH) and 0.5 ml of Biuret solution 2 (CuSO₄) to each well. Mix carefully, observe and record the results." },
      { heading: "Lipid Test" },
      { text: "Place about 2 ml each of vegetable oil, distilled water and food slurry into separate wells." },
      { text: "Add 0.5 ml of Sudan III solution to each well. Observe and record the results." }
    ],
    cleaningTips: [
      "Dispose of food samples and reagent waste as instructed.",
      "Clean the well plates, test tubes and work surfaces.",
      "Wash hands after the activity."
    ],
    note: "Handle reagents under teacher supervision. The lab book specifies that iodine and Sudan solution should be placed in dropper bottles."
  },
{
    id: "osmosis-Experiment",
    grade: "Honor Biology",
    title: "Osmosis and diffusion with dialysis tubing",
    subject: "Biology · Cell Biology",
    summary: "Investigate the movement of water across a selectively permeable membrane.",
    image: "",
    objective: "Observe the effects of osmosis and diffusion using dialysis tubing as a model for cell membranes.",
    materials: ["Starch Solution","Glucose Solution","Iodine Solution", "Stirring Rod", 
      "250ml Beakers","Balance (electronic)","Dialysis tubing (assume that it behaves just like the membranes of RBCs)","dropppers","clips"],
    materialsImage: {
      src: "images/osmosis-dialysis-materials.jpeg",
      width: "400px",
      height: "auto",
      fit: "contain"
    },
    procedure: [
      "Seal the dialysis tubing with the clip and fill it with starch solution and glucose solution (50/50 for each).",
      {text: "Seal the other end of the tubing.",image:{src:"images/osmosis-dialysis-procedure.jpeg", width:"200px", height:"auto", fit:"contain"}},
      "Weigh the dialysis tubing and record the initial mass.",
      {text: "Pour 150ml of iodine solution into a beaker (iodine solution will prepared by lab tech) and place the dialysis tubing in it.",image:{src:"images/osmosis-dialysis-iodine.jpeg", width:"200px", height:"auto", fit:"contain"}},
      "After 20 minutes, remove the dialysis tubing and weigh it again.",
      "Record the final mass and observe any colour changes in the solution inside the tubing.",
      
    ],
    results: [
      "Color change in the dialysis tubing vairous from the concentration of the starch and iodine solution.",
      {image:{src:"images/osmosis-dialysis-results1.jpeg", alt:"Osmosis and diffusion with dialysis tubing results", width:"300px", height:"auto", fit:"contain",caption:"20mins later"}},
      {image:{src:"images/osmosis-dialysis-results2.jpeg", alt:"Osmosis and diffusion with dialysis tubing results", width:"300px", height:"auto", fit:"contain",caption:"2 hours later"}},
    ],
    cleaningTips: [
      "Pour the iodine solution down the sink and rinse the beaker with <strong>distilled water</strong>.",
      "Dispose of the dialysis tubing and  Put everything back to the tray.",
    ],
    note: " Eight elements need 12 pots of green leaves and 12 pots of white leaves.\n Teacher will perform heating steps."
  },
  {
    id: "algae-beads",
    grade: "Honor Biology",
    title: "Algae Immobilisation Beads",
    subject: "Biology · Photosynthesis",
    summary: "Create immobilised algae beads using sodium alginate and calcium chloride.",
    image: "",
    objective: "Produce and collect algae beads for further investigation.",
    materials: ["Sodium alginate", "Algae suspension", "Calcium chloride", "Droppers"],
    procedure: [
      "Mix the algae suspension with sodium alginate.",
      "Drop the mixture into chilled calcium chloride solution.",
      "Filter and collect the algae beads for the planned investigation."
    ],
    cleaningTips: [
      "Dispose of chemical waste per lab instructions.",
      "Clean and store droppers and filters.",
      "Wash hands after handling solutions."
    ],
    note: "Handle chemicals carefully and follow disposal rules."
  },
  {
    id: "dna-extraction",
    grade: "Honor Biology",
    title: "Strawberry DNA Extraction",
    subject: "Biology · Molecular Biology",
    summary: "Extract and observe white strands of DNA from strawberries.",
    image: "",
    objective: "Extract DNA using household reagents and visualise the strands.",
    materials: ["Strawberries", "Salt/NaCl", "Dish soap", "Meat tenderizer", "Filter"],
    procedure: [
      "Mash the strawberries and mix them with the extraction solution.",
      "Filter the mixture to separate the liquid from the solids.",
      "Add chilled alcohol and collect the white DNA strands."
    ],
    cleaningTips: [
      "Dispose of fruit waste in the organic bin.",
      "Clean and return filters and utensils.",
      "Wash hands thoroughly after the activity."
    ],
    note: "Do not pour fruit waste into sinks; follow lab disposal rules."
  },  
  {
    id: "cell-size",
    grade: "AP Biology",
    title: "Cell Size and Diffusion",
    subject: "Biology · Cells",
    summary: "Use agar cubes to model diffusion and the surface-area-to-volume ratio.",
    image: "",
    objective: "Investigate how agar cube size affects diffusion distance and surface-area-to-volume ratio.",
    materials: ["Agar powder", "Water", "pH indicator", "Sodium hydroxide (optional)", "Vinegar", "Timer", "Ruler", "Knife", "Beakers"],
    procedure: [
      "Cut agar into 3 cubes. Each with side lengths of less than 1.5cm. Start with the largest.", 
      "Add 50mL of white vinegar to three separate 100mL beakers.",
      "Simultaneously drop the cubes each into their own beaker and start the stopwatch.",
      "Observe the cubes as the vinegar diffuses.",
      "Record the time when the cube has fully diffused (changed color)." ,
      "Document the total time of diffusion for each cube.",
    "Record your data and the data for all the cubes in the entire class. Calculate the mean, standard deviation, and standard error of the mean.",
  ],
    cleaningTips: [
      "Dispose of agar waste as instructed.",
      "Clean cutting tools and surfaces.",
      "Wash hands after handling hot solutions."
    ],
    note: "Hot agar must be prepared by the teacher. Confirm the intended agar concentration because the source lists two different preparation amounts."
  },
  
  {
    id: "osmosis-sucrose-lab",
    grade: "AP Biology",
    title: "Osmosis Lab: Sucrose and Plant Cores",
    subject: "Biology · Cell Transport",
    summary: "Compare mass changes in potato cores and carrot cubes across sucrose concentrations.",
    image: "",
    objective: "Investigate how sucrose concentration affects osmosis in potato and carrot tissue.",
    materials: ["1.0 M sucrose stock solution (about 200 ml)", "Six containers", "50 ml and 10 ml graduated cylinders", "Pipettes", "Wax pencil or labelling tape", "Pre-cut potato cores", "Carrot cubes", "Forceps", "Electronic balance (0.01 g)", "Ruler", "Aluminium foil", "Weighing boat"],
    procedure: [
      {
        text: "Prepare 20 ml of each sucrose concentration using the 1.0 M stock solution and water.",
        table: {
          headers: ["Sucrose concentration", "1.0 M stock", "Water"],
          rows: [
            ["0.0 M", "0 ml", "20 ml"],
            ["0.2 M", "4 ml", "16 ml"],
            ["0.4 M", "8 ml", "12 ml"],
            ["0.6 M", "12 ml", "8 ml"],
            ["0.8 M", "16 ml", "4 ml"],
            ["1.0 M", "20 ml", "0 ml"]
          ]
        }
      },
      "Label six containers: 0.0 M, 0.2 M, 0.4 M, 0.6 M, 0.8 M and 1.0 M.",
      "Measure and record the initial mass of the potato cores and carrot cubes.",
      "Place potato and carrot tissue into each corresponding solution, making sure both are fully submerged.",
      "Cover the containers with foil and leave them in a rack at room temperature for about 24 hours.",
      "On Day 2, remove the tissue, measure its mass and calculate the mass change."
    ],
    cleaningTips: [
      "Discard the cups, foil, weighing boats and plant tissue as instructed.",
      "Rinse the graduated cylinders and wipe the balance.",
      "Return the sucrose stock solution and equipment."
    ],
    note: "The lab book refers to both plastic cups and test tubes; use the six containers supplied for the class."
  },
  {
    id: "catalase-temperature-AP",
    grade: "AP Biology",
    title: "Catalase: temperature and effect on enzyme activity",
    subject: "Biology · Enzymes",
    summary: "Investigate how temperature and pH affect catalase activity.",
    image: "",
    objective: "Compare enzyme activity under different conditions and record foam height.",
    materials: ["Potato mash", "Test tubes", "Hydrogen peroxide", "Water","Hot water bath","Ice bath"],
    materialsImage: {src: "images/potatocatalase-v2materials.png", width: "400px", height: "auto", fit: "contain"},
    procedure: [
      "Add 0.5 ml of hydrogen peroxide to each test tube. Label each test tube with its temperature and each cap with the group number.",
      {
        text: "Place the test tubes in their corresponding conditions for 5 minutes.",
        table: {
          headers: ["Temperature", "Condition"],
          rows: [
            ["0°C", "Ice bath"],
            ["20°C", "Test tube rack on your table"],
            ["40°C", "40°C water bath"],
            ["60°C", "60°C water bath"]
          ]
        },
        image: {src:"images/potatocatalase-v2procedure.png", width:"300px", height:"auto", fit:"contain"}
      },
      "After 5 minutes, add 1 ml of potato mash to each test tube.",
      "Put test tube back to treatment place for 5mins.",
      "Measure the height of the foam."
    ],
   
    results: [
      {text:"The results of the catalase activity under different conditions are as follows:",
        image:{src:"images/potatocatalase-v2results.png", width:"400px", height:"auto", fit:"contain"}}
    ],
    cleaningTips: ["Dispose the test tubes."
    
    ],
    note: "Dispose the blue cap test tubes."
  },
  {
    id: "yeast-respiration",
    grade: "AP Biology",
    title: "Yeast Respiration",
    subject: "Biology · Cellular Respiration",
    summary: "Compare yeast respiration under different sugar and temperature conditions.",
    image: "",
    objective: "Measure respiration indicators under different sugar and temperature treatments.",
    materials: ["Dry yeast", "Sugar samples", "Measuring cylinders", "Incubation water baths"],
    procedure: [
      "Prepare the yeast with the assigned sugar and temperature condition.",
      "Incubate each setup for the planned time.",
      "Compare the results and relate them to cellular respiration."
    ],
    cleaningTips: [
      "Dispose of cultures per lab rules.",
      "Clean incubation equipment and surfaces.",
      "Wash hands after handling cultures."
    ],
    note: "Do not leave cultures unattended overnight unless instructed."
  },
  {
    id: "fruit-ripening",
    grade: "AP Biology",
    title: "Fruit Ripening and Ethylene",
    subject: "Biology · Plant Hormones",
    summary: "Compare starch changes in bananas during ripening.",
    image: "",
    objective: "Observe changes in starch content and ripening indicators under different storage conditions.",
    materials: ["Bananas", "Sealable bags", "Iodine solution"],
    procedure: [
      "Place bananas in the assigned storage conditions.",
      "Record changes in colour, texture and ripeness.",
      "Use iodine to compare the starch content of the samples."
    ],
    cleaningTips: [
      "Dispose of banana samples per instructions.",
      "Clean sampling tools and surfaces.",
      "Wash hands after handling fruit."
    ],
    note: "Store samples as instructed to avoid spoilage."
  },
  
  {
    id: "biotech-pipetting-practice",
    grade: "Capstone",
    title: "Pipetting Practice",
    subject: "Biotechnology · Laboratory Skills",
    summary: "Practise using a 2–20 µl micropipette with coloured water.",
    image: "",
    objective: "Practise accurate micropipette handling and liquid transfer.",
    materials: ["2–20 µl micropipette (one per student or group)", "Pipette tips", "Red-coloured water"],
    procedure: [
      "Fit a clean pipette tip onto the 2–20 µl micropipette.",
      "Practise aspirating and dispensing the coloured water as demonstrated by the teacher."
    ],
    cleaningTips: [
      "Discard used pipette tips in the designated waste container.",
      "Return micropipettes and wash bottles to the assigned area."
    ],
    note: "The lab book lists the equipment and coloured water but does not specify target volumes; follow the teacher's instructions."
  },
  {
    id: "biotech-solution-practice",
    grade: "Capstone",
    title: "Solution Preparation Practice",
    subject: "Biotechnology · Laboratory Skills",
    summary: "Practise preparing a saline solution and checking its conductivity.",
    image: "",
    objective: "Practise weighing, dissolving and making a solution up to volume.",
    materials: ["Sodium chloride supplied in a test tube (listed as 3 g in the lab book)", "100 ml volumetric flask", "Balance", "Wash bottle with water", "250 ml and 100 ml beakers", "Dropper", "Funnel", "Glass rod", "Vernier conductivity probe (teacher use)"],
    procedure: [
      "Dissolve the supplied sodium chloride in water and prepare the 5% saline solution in the volumetric flask, following the teacher's directions.",
      "Make the solution up to the required volume and mix thoroughly.",
      "The teacher checks the prepared solution with a Vernier conductivity probe; the lab book gives a target reading of 8000–8300."
    ],
    cleaningTips: [
      "Rinse the volumetric flask, beakers, funnel and glass rod.",
      "Return the conductivity probe to the teacher and wipe the work area."
    ],
    note: "The lab book lists 3 g sodium chloride and a 100 ml flask alongside a 5% target. Confirm the salt mass and final volume with the teacher before preparing the solution, because those quantities do not match a 5% w/v solution."
  },
  {
    id: "open-day-food-test",
    grade: "Open Day",
    title: "Food Test",
    subject: "Food Tests",
    summary: "Explore four food tests for starch, lipids, protein and reducing sugars.",
    image: "",
    objective: "Test food samples for starch, lipids, protein and reducing sugars, and compare the results.",
    materials: ["Food samples [Potato(starch), oil(lipids), Egg/Milk(protein), Glucose solution(reducing sugars)]", "Iodine solution", "Ethanol", "Water", "Biuret reagent (copper sulfate and sodium hydroxide)", "Benedict's reagent", "Water bath"],
    procedure: [
      { heading: "Starch Test" },
      { text: "Place a small amount of food sample on the test surface." },
      { text: "Add a few drops of iodine solution." },
      { text: "Look for a blue-black colour and record the result." },
      { heading: "Lipid Test" },
      { text: "Mix the food sample with ethanol." },
      { text: "Add samples (oil, nuts/water) and mix gently." },
      { text: "Look for a cloudy white emulsion." },
      { heading: "Protein Test" },
      { text: "Place a small amount of food sample in the test wells." },
      { text: "Add the Biuret reagent." },
      { text: "Look for a violet colour and record the result." },
      { heading: "Reducing Sugar Test" },
      { text: "Mix the food sample with Benedict's solution." },
      { text: "Heat the mixture in a water bath." },
      { text: "Record any colour change from blue to green, yellow, orange or red." }
    ],
    results: [
      "Starch reacts with iodine, turning blue-black. This test shows the presence of complex carbohydrates.",
      "Fats dissolve in ethanol but form an emulsion in water, giving a cloudy appearance.",
      "The purple color indicates the presence of peptide bonds in proteins.",
      "Reducing sugars reduce the copper(II) ions in Benedict's solution, causing a color change.",
      {
        image: {
          src: "images/openday.png",
          width: "300px",
          height: "auto",
          fit: "contain"
        }
      }
    ],
    cleaningTips: [
      "Dispose of food samples and chemical waste as instructed.",
      "Dispose of heated reagents per lab rules.",
      "Cool and clean equipment after use.",
      "Clean test surfaces and equipment after the demonstrations.",
      "Wash hands after handling chemicals."
    ],
    note: [
      "Keep iodine away from eyes and mouth.",
      "Ethanol is flammable; keep away from open flames.",
      "Handle reagents under supervision.",
      "Use caution with hot water baths and reagents."
    ]
  }
];

const procedureImages = {};
