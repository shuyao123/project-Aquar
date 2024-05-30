import React, { useState } from 'react';



const AnimalStar = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(1);

  const showAnimal = (id) => {
    setSelectedAnimal(id);
  };


  const animalData = [
    {
      id: 1,
      name: '海豹',
      image: './images/seal.jpg',
      description:
        '海豹是成紡錘體型、四肢特化成鰭狀的哺乳類動物，頭圓頸短，沒有外耳廓，因為牠們的臉部長的像豹，從而得名，以區別於鰭足亞目其他兩個科（海獅科、海象科）的動物。最大的海豹是象海豹，這種海豹雄性有一個鼻囊，可以自由伸縮，也因此而得名。海豹出生時長著一層絨毛保暖，長大後才會換上適合游泳的剛毛。'
    },
    {
      id: 2,
      name: '白鯨',
      image: './images/white whale.jpg',
      description:
        '白鯨又稱貝魯卡鯨，為一角鯨科白鯨屬的唯一物種，以多變化的叫聲與豐富的臉部表情聞名，早期的捕鯨者稱之為「海中金絲雀」。白鯨廣泛分布於北極與亞北極地區，自古以來牠們一直是北極地區人類社會的重要商品，為當地原住民提供了食物、燃油、皮革等物資。',
    },
    {
      id: 3,
      name: '海馬',
      image: './images/seahorse.jpg',
      description:
        '海馬是脊索動物尾鰭完全退化，脊椎則演化到如猴子尾巴一樣的捲纏尾，可捲曲來鉤住任何突出物體，以固定身體位置。海馬在水中的游動方式也不同於一般魚類，它們幾乎總是昂立著身體，依靠小而幾乎透明的魚鰭的扇動，它們可以任意上下左右移動，但速度緩慢。通常海馬憑藉身上體色的偽裝及硬化成皮狀的皮膚以逃避掠食者。體色在幼年時和成年差異很大。',
    },
    {
      id: 4,
      name: '海龜',
      image: './images/sea ​​turtle.jpg',
      description:
        '海龜是海洋龜類的總稱，所有龜鱉目動物中唯一生活在海洋的物種，分布範圍十分不平均 ，分布於除北冰洋外的全球海域中。背上有殼，其花紋較一般陸龜頭或河龜複雜，殼的外型是扁平流線形，它的腳不為船槳狀。 海龜的演化歷史相當之悠久，可追尋到七千五百萬年前的白堊紀時期，當時海龜是肉食性的，這類海龜稱為古海龜，據北美的考古化石發現，古海龜的體型長達3.5公尺，與汽車一般大小，且外殼有明顯的節骨狀。',
    },
    {
      id: 5,
      name: '魟魚',
      image: './images/Stingray.jpg',
      description:
        '魟魚的身軀非常柔軟，牠們躲避掠奪者的最佳方式，就是拍動邊緣柔軟的胸鰭，將沙子埋在身體上加以偽裝。如果魟魚感覺威脅逼近時，便會上下甩動具有毒刺的尾巴，可以將敵人打得遍體鱗傷，所以在接近魟魚時必須小心謹慎。魟魚的食物以底棲的魚類、甲殼類及軟體動物為主。',
    },
    {
      id: 6,
      name: '海豚',
      image: './images/dolphin.jpg',
      description:
        '海豚廣泛生活於世界各大洋大陸架附近的淺海區，在內海及江河入海口附近的鹹淡水中也有分布，個別種類見於內陸河流。通常喜歡群居，捕食魚類、烏賊等。牠們的軀幹呈紡錘形，皮膚光滑無毛，身體矯健而靈活，善於跳躍和潛泳，是在水中行動最迅速的哺乳動物。擁有發達的聲納系統，活動時主要依靠回聲定位功能，在水中和空氣中均有極好的聽力。鼻孔在頭頂上，用於出水換氣。體型從1公尺長、30公斤重（侏海豚）到9.5公尺長、14噸重（虎鯨）不等，形態特徵也各不相同。',
    },

  ];

  const selectedAnimalData = animalData.find((animal) => animal.id === selectedAnimal);

  return (
    <>

      <div className='blackBg'>
        <div className='bgImg'></div>

        <div className="container allanimalstar mobile-only">
          <div className="myTitle">
            <p>動物明星</p>
          </div>

          <div className="animal  " id="imageArea">
            <div className="image-slider ">
              {animalData.map((animal) => (
                <img
                  key={animal.id}
                  src={animal.image}
                  width="150"
                  height="150"
                  alt={animal.name}
                  className={`rounded-circle  ${animal.id === selectedAnimal ? 'selected' : ''}`}
                  onClick={() => showAnimal(animal.id)}
                />
              ))}
            </div>
          </div>

          <div className="container text-center">
            <table className="table">
              <tr>
                <td className="my-animal">
                  <img src={selectedAnimalData.image} className="animal-img-fluid" alt={selectedAnimalData.name} />
                </td>
              </tr>
              <tr>
                <td className="animal-intro " id="animalInfo">
                  {selectedAnimalData.description}
                </td>
              </tr>
            </table>
          </div>

        </div>
      </div>

    </>
  );
};

export default AnimalStar;
