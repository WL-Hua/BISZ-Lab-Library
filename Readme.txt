##图片尺寸调整说明

可用的图片属性
image.width
image.height
image.fit
image.position

图片适配方式
fit: "cover" 会填满指定尺寸，但图片边缘可能被裁剪。
fit: "contain" 会完整显示图片，但图片周围可能留有空白。

设置宽度和高度
image: {
  src: "images/prepared-slides.jpg",
  width: "220px",
  height: "150px",
  fit: "cover"
}

只设置宽度并保持图片比例
image: {
  src: "images/microscope.jpg",
  width: "280px",
  height: "auto"
}

设置图片裁切位置
position: "center center" 表示显示图片中间部分。
position: "30% 20%" 表示水平方向偏左、垂直方向偏上。

Materials 总图
materialsImage: {
  src: "images/gramstaining.png",
  width: "500px",
  height: "auto",
  fit: "contain"
},

Procedure 底部并列图片
procedureGallery: [
  { src: "images/fungi1.jpeg", alt: "Fungi cultivation photo 1" },
  { src: "images/fungi2.png", alt: "Fungi cultivation photo 2" }
],

逗号报错
多个材料或结果文字要放在方括号 [] 中，并用逗号分隔。图片对象使用花括号 {}，放在对应的 image 属性中。


{
    id: " ",
    grade: " ",
    title: " ",
    subject: "Biology ·",
    summary: " ",
    image: "",
    objective: " ",
    materials: ["","",""],
    materialsImage: {
      src: "images/ ",
      width: "400px",
      height: "auto",
      fit: "contain"
    },
    procedure: [
      " ",
      " ",
      {text: " ",image:{src:"images/ .png", width:"300px", height:"auto", fit:"contain"}},
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
  },

Results 包含文本，图片，表单
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