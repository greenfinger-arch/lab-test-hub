export const studyDeskData = {
  id: "studyDesk",
  title: "나의 집중력을 깨우는 '공부 명당' 찾기",
  relatedPostUrl: "https://ranklamp.com/student-desk-layout-optimization-for-maximum-focus",
  subTitle: "혹시 책상이 뇌를 방해하고 있나요? 공간 심리로 보는 최적의 배치",
  isReady: true,
  mainImg: "/images/study-main.jpg",
  questions: [
    {
      q: "책상에 앉았을 때, 방문은 어디에 있나요?",
      img: "/images/study-q1.jpg",
      a: [
        { text: "등 뒤에 문이 있어서 누가 들어올까 봐 흠칫한다 🚪", type: "FOCUS" },
        { text: "시야 옆쪽이나 앞쪽에 문이 있어 안정감이 있다 😌", type: "CALM" }
      ]
    },
    {
      q: "공부하다 고개를 들었을 때 가장 먼저 보이는 것은?",
      img: "/images/study-q2.jpg",
      a: [
        { text: "창밖의 풍경이나 연예인 포스터, 만화책 등 '유혹' 🎢", type: "CHAOS" },
        { text: "깔끔한 벽면이나 오늘 처리할 스케줄러 🗓️", type: "CALM" }
      ]
    },
    {
      q: "졸음이 쏟아지는 오후, 당신의 책상 조명 상태는?",
      img: "/images/study-q3.jpg",
      a: [
        { text: "어둑어둑한 분위기에서 스탠드 하나에 의지한다 🕯️", type: "FOCUS" },
        { text: "방 전체가 환하고 눈이 편안한 색온도다 💡", type: "CALM" }
      ]
    },
    {
      q: "지금 책상 위에 필기구 말고 다른 '친구'들이 있나요?",
      img: "/images/study-q4.jpg",
      a: [
        { text: "다 먹은 간식 봉지, 핸드폰, 잡동사니가 공존한다 🍫", type: "CHAOS" },
        { text: "지금 공부하는 책 한 권과 필통뿐이다 ✍️", type: "FOCUS" }
      ]
    },
    {
      q: "나의 평소 공부 자세를 솔직하게 말하자면?",
      img: "/images/study-q5.jpg",
      a: [
        { text: "거의 눕거나 턱을 괴고 '중력'과 싸우며 공부한다 🛌", type: "CHAOS" },
        { text: "의자 깊숙이 앉아 허리를 지탱하려 노력한다 🪑", type: "FOCUS" }
      ]
    }
  ],
  results: {
    FOCUS: {
      name: "몰입의 끝판왕, '독서실형' 배치",
      img: "/images/study-res01.jpg",
      desc: "당신은 주변 시야가 차단될 때 최고의 몰입도를 보이는군요! 책상을 벽 쪽으로 붙이고 시야를 분산시키는 물건은 과감히 치우세요. 문을 등지지 않도록 배치하는 것만으로도 심리적 불안감이 사라져 집중력이 쑥 올라갑니다.",
      ctaText: "집중력 향상 칸막이 데스크 보기",
      affiliateLink: "https://link.coupang.com/a/dXQUvB"
    },
    CALM: {
      name: "창의적인 수재, '카페형' 배치",
      img: "/images/study-res02.jpg",
      desc: "너무 막힌 곳보다는 적당히 탁 트인 공간에서 효율이 좋은 타입이네요! 책상을 방 한가운데 배치하거나 대각선으로 두어 시야를 확보해 보세요. 조명을 백색광보다는 살짝 따뜻한 색으로 바꾸면 마음이 편안해져 장기전에 강해집니다.",
      ctaText: "편안한 눈을 위한 LED 스탠드 보기",
      affiliateLink: "https://link.coupang.com/a/dXQX0w"
    },
    CHAOS: {
      name: "잠재력 폭발 직전, '환경 리셋' 시급",
      img: "/images/study-res03.jpg",
      desc: "지금 당신의 책상은 뇌가 쉴 틈을 주지 않고 있어요! 창가 바로 앞은 시선을 뺏기기 쉬우니 책상을 돌려보세요. 발바닥이 땅에 닿는 발받침대 하나만 추가해도 잡생각이 사라지고 엉덩이 힘이 길러집니다. 할 수 있어요!",
      ctaText: "바른 자세를 돕는 발받침대",
      affiliateLink: "https://link.coupang.com/a/dXReyK"
    }
  }
};