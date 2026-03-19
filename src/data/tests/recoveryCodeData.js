export const recoveryCodeData = {
  isReady: false,
  title: "넘어진 너를 일으켜 세울 마법의 주문",
  subTitle: "삶이 무겁게 느껴지는 날, 네가 다시 걸음을 뗄 수 있게 돕는 전언",
  mainImg: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800", // 묵묵히 길을 걷는 이의 뒷모습
  questions: [
    {
      q: "무언가 마음먹은 대로 되지 않았을 때, 가장 먼저 드는 생각은?",
      img: "https://images.unsplash.com/photo-1518115392630-f8d83962233c?w=600",
      a: [
        { text: "조금 더 완벽하게 준비했어야 했다는 자책", type: "strong-will" },
        { text: "이 길이 정말 내 길이 맞는 걸까 하는 막막함", type: "flexible-heart" }
      ]
    },
    {
      q: "네가 가장 견디기 힘든 실패의 모습은 어떤 것이니?",
      img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600",
      a: [
        { text: "나를 믿어준 사람들을 실망시키는 것", type: "responsible" },
        { text: "나 자신의 노력이 아무것도 아닌 것처럼 느껴지는 것", type: "strong-will" }
      ]
    },
    {
      q: "잠시 멈춰 서야 할 때, 너는 어디에서 위안을 찾고 싶니?",
      img: "https://images.unsplash.com/photo-1444212477490-ca40a9250fd9?w=600",
      a: [
        { text: "조용히 혼자 생각하며 마음을 정리할 수 있는 서재", type: "flexible-heart" },
        { text: "묵묵히 내 이야기를 들어주는 다정한 누군가의 곁", type: "responsible" }
      ]
    },
    {
      q: "비바람이 몰아치는 날, 네가 생각하는 가장 안전한 태도는?",
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600",
      a: [
        { text: "비에 젖더라도 한 걸음씩 앞으로 나아가는 것", type: "strong-will" },
        { text: "비가 그칠 때까지 잠시 지붕 밑에서 기다릴 줄 아는 것", type: "flexible-heart" }
      ]
    },
    {
      q: "결과보다 과정이 중요하다는 말을 너는 믿니?",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
      a: [
        { text: "그래도 결과가 없으면 의미가 없다고 생각한다.", type: "responsible" },
        { text: "그 과정에서 배운 것이 나를 만든다고 믿는다.", type: "flexible-heart" }
      ]
    },
    {
      q: "미래의 네가 과거의 너를 본다면, 어떤 말을 해줄 것 같니?",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600",
      a: [
        { text: "결국 다 지나갈 일이었다고 말해줄 거야.", type: "flexible-heart" },
        { text: "그때 네가 버텨줘서 지금의 내가 있다고 말해줄 거야.", type: "strong-will" }
      ]
    }
  ],
  results: {
    "strong-will": {
      name: "다시 시작할 수 있는 힘, '단단한 뿌리'",
      img: "https://images.unsplash.com/photo-1463171339941-c45639f4ff6b?w=600",
      desc: "얘야, 너는 참으로 강한 사람이구나. 네가 겪는 좌절은 네가 너무 높은 곳을 향해 손을 뻗었기 때문일 뿐이야. 넘어진 자리는 네가 얼마나 멀리 왔는지를 보여주는 지표란다. '지금 이 순간도 나의 역사다'라는 주문을 기억하렴. 잠시 털고 일어나면 그뿐이란다.",
      affiliateLink: "https://link.coupang.com/a/motivational-diary", 
      ctaText: "나만의 역사를 기록하는 5년 다이어리"
    },
    "flexible-heart": {
      name: "유연하게 흘러가는 지혜, '푸른 물결'",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      desc: "인생은 직선이 아니란다. 가끔은 구불구불 돌아가기도 하고, 멈춰 서서 바닥을 봐야 할 때도 있지. 지금 네가 겪는 혼란은 더 큰 바다로 나가기 위한 물살일 뿐이야. '이것 또한 삶의 일부다'라고 담담하게 받아들여 보렴. 유연함이 가장 큰 강인함이란다.",
      affiliateLink: "https://link.coupang.com/a/meditation-bowl", 
      ctaText: "마음의 평온을 찾는 명상 싱잉볼"
    },
    "responsible": {
      name: "함께 걷는 이들의 온기, '따뜻한 등불'",
      img: "https://images.unsplash.com/photo-1516733985036-3fe55abc59b7?w=600",
      desc: "너는 누군가를 위할 줄 아는 사려 깊은 아이구나. 그래서 네 실패가 더 아프게 느껴질 테지만, 기억하렴. 사람들은 네 성공이 아니라 네 존재 자체를 사랑한단다. 혼자 짊어지려 하지 마렴. '도움을 청하는 것은 용기다'라는 마법을 잊지 마. 우리는 늘 네 편이란다.",
      affiliateLink: "https://link.coupang.com/a/healing-tea-set", 
      ctaText: "소중한 이와 대화하며 나누는 힐링 차 세트"
    }
  }
};