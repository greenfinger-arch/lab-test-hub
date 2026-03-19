export const mentalWeatherData = {
  isReady: false,
  title: "당신의 '마음 날씨'는 오늘 몇 도인가요? 멘탈 기상청",
  subTitle: "비가 와도 괜찮아요. 곧 갤 거니까요. 당신의 오늘을 진단해 드립니다.",
  mainImg: "https://images.unsplash.com/photo-1514933651103-315bc5d5d051?w=800", // 구름 사이로 비치는 따스한 햇살
  questions: [
    {
      q: "오늘 아침, 눈을 떴을 때 당신의 마음은 어떤 빛깔이었나요?",
      img: "https://images.unsplash.com/photo-1495195129352-aec325b55b65?w=600",
      a: [
        { text: "아직 안개가 덜 걷힌 듯 몽롱하고 무거운 잿빛", type: "misty" },
        { text: "그래도 오늘을 살아보자고 다짐하는 은은한 미색", type: "sunny-interval" }
      ]
    },
    {
      q: "누군가 당신에게 '요즘 어때?'라고 묻는다면, 가장 먼저 떠오르는 대답은?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "\"조금 지치네, 아무 생각 없이 쉬고 싶어.\"", type: "rainy" },
        { text: "\"그럭저럭 잘 버티고 있어. 나쁘지 않아.\"", type: "sunny-interval" }
      ]
    },
    {
      q: "지금 당신의 마음속에 불어오는 바람의 세기는 어떤가요?",
      img: "https://images.unsplash.com/photo-1470252649358-96bf51886cb3?w=600",
      a: [
        { text: "작은 소리에도 가슴이 철렁하는 날카로운 칼바람", type: "stormy" },
        { text: "스치듯 지나가는 나른하고 부드러운 미풍", type: "sunny-interval" }
      ]
    },
    {
      q: "오늘 하루 중 가장 행복했던(혹은 평온했던) 순간은 언제였나요?",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
      a: [
        { text: "따뜻한 차 한 잔이나 맛있는 음식을 먹을 때", type: "sunny-interval" },
        { text: "모든 일을 끝내고 침대에 가만히 누웠을 때", type: "misty" }
      ]
    },
    {
      q: "만약 내일의 날씨를 당신이 정할 수 있다면, 어떤 하늘을 보고 싶나요?",
      img: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=600",
      a: [
        { text: "구름 한 점 없이 눈부시게 푸른 고탄성 하늘", type: "clear-sky" },
        { text: "차분하게 마음을 가라앉혀 줄 촉촉한 밤비", type: "rainy" }
      ]
    }
  ],
  results: {
    "clear-sky": {
      name: "습도 0%, '청명한 가을 하늘' 상태",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      desc: "당신의 마음 온도는 아주 쾌적한 24°C군요! 적당한 활력과 평온함이 균형을 이루고 있습니다. 지금의 맑은 기운을 주변 사람들에게도 나눠주세요. 당신의 밝은 에너지가 누군가에게는 오늘의 햇살이 될 수 있습니다.",
      affiliateLink: "https://link.coupang.com/a/vitamins-energy-booster", 
      ctaText: "이 맑은 기운 그대로! 멀티 비타민 세트"
    },
    "sunny-interval": {
      name: "구름 조금 뒤 맑음, '나른한 오후 3시' 상태",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
      desc: "가끔 구름이 끼긴 하지만 대체로 맑은 상태입니다. 조금 피곤할 순 있어도 스스로를 잘 돌보고 계시네요. 무리하게 햇볕을 내려고 애쓰지 않아도 괜찮아요. 흐르면 흐르는 대로, 자연스럽게 피어날 당신의 미소를 응원합니다.",
      affiliateLink: "https://link.coupang.com/a/premium-herbal-tea-assortment", 
      ctaText: "나를 위한 작은 사치, 프리미엄 허브차 세트"
    },
    "misty": {
      name: "한 치 앞이 안 보이는, '새벽 안개' 상태",
      img: "https://images.unsplash.com/photo-1485236715598-c885138a29ec?w=600",
      desc: "지금은 조금 답답하고 막막한 기분이 드실 거예요. 하지만 기억하세요, 안개는 해가 뜨면 가장 먼저 사라지는 법입니다. 방향이 보이지 않을 땐 무리해서 걷지 말고 잠시 멈춰 서서 따뜻한 온기부터 채워보세요. 곧 길이 보일 거예요.",
      affiliateLink: "https://link.coupang.com/a/weighted-blanket-comfort", 
      ctaText: "포근하게 안아주는 느낌, 허그 가중 담요"
    },
    "rainy": {
      name: "마음을 적시는, '차분한 단비' 상태",
      img: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600",
      desc: "오늘은 마음껏 촉촉해져도 괜찮은 날입니다. 억지로 밝은 척할 필요 없어요. 비가 내려야 땅이 굳고 새싹이 돋듯, 당신의 눈물이나 우울함도 내일의 당신을 더 단단하게 만드는 양분이 될 겁니다. 충분히 젖은 뒤에 다시 시작해도 늦지 않아요.",
      affiliateLink: "https://link.coupang.com/a/emotional-essay-bestseller", 
      ctaText: "당신의 마음을 대신 써 내려간 감성 에세이"
    },
    "stormy": {
      name: "폭풍전야, '강력한 저기압' 상태",
      img: "https://images.unsplash.com/photo-1500674425944-936c94b88e8d?w=600",
      desc: "많이 힘드시죠? 지금 당신의 마음엔 거친 비바람이 몰아치고 있네요. 이럴 땐 비바람을 맞서기보다 튼튼한 지붕 아래서 잠시 피하는 게 상책입니다. 당신의 탓이 아니에요. 그저 날씨가 나쁠 뿐입니다. 이 폭풍이 지나갈 때까지 제가 곁에서 함께 비를 피해주고 싶네요.",
      affiliateLink: "https://link.coupang.com/a/deep-sleep-aroma-pillow-mist", 
      ctaText: "생각을 멈추고 깊은 잠으로, 아로마 필로우 미스트"
    }
  }
};