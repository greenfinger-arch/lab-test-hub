export const workerDateData = {
  id: "workerDate",
  title: "퇴근 후 로맨틱 레시피",
  relatedPostUrl: "https://ranklamp.com/after-work-romantic-date-recipe/",
  subTitle: "지친 하루 끝에 마법처럼 펼쳐질 우리만의 데이트",
  isReady: true,
  mainImg: "/images/workerDate-main.jpg", // 화사한 파티/데이트 무드
  questions: [
    {
      q: "오늘 퇴근길, 당신의 마음을 스치는 생각은?",
      img: "/images/workerDate1.jpg",
      a: [
        { text: "아무 생각 없다.. 그냥 맛있는 거 먹고 싶다! 😋", type: "FOOD" },
        { text: "예쁜 곳 가서 사진도 찍고 기분 전환하고 싶어! ✨", type: "MOOD" },
        { text: "완벽하게 고요하고 아늑한 곳에서 쉬고 싶어 🛋️", type: "REST" },
        { text: "이대로 집에 가기 아쉬워! 에너지를 발산하자! 💃", type: "PLAY" }
      ]
    },
    {
      q: "데이트 상대가 '오늘 뭐할까?'라고 묻는다면?",
      img: "/images/workerDate2.jpg",
      a: [
        { text: "요즘 제일 핫한 팝업스토어나 전시회 갈래?", type: "PLAY" },
        { text: "평점 4.8 이상! 실패 없는 숨은 맛집 어때?", type: "FOOD" },
        { text: "조용한 LP바에서 음악 들으면서 얘기하자", type: "REST" },
        { text: "뷰가 환상적인 루프탑 카페 가서 사진 찍자!", type: "MOOD" }
      ]
    },
    {
      q: "내일 아침 출근 걱정... 그래도 오늘 저녁은?",
      img: "/images/workerDate3.jpg",
      a: [
        { text: "짧고 굵게! 화끈하게 즐기고 자는 게 이득", type: "PLAY" },
        { text: "든든하게 먹어야 내일도 버티지! 보양 데이트", type: "FOOD" },
        { text: "은은한 조명 아래서 힐링하며 스트레스 풀기", type: "REST" },
        { text: "예쁜 비주얼을 보며 눈 정화하고 감성 충전!", type: "MOOD" }
      ]
    }
  ],
  results: {
    FOOD: {
      name: "미식의 향연, 고메 나이트",
      img: "/images/workerDate01.jpg",
      desc: "오늘 당신에게 필요한 건 정성 가득한 요리 한 접시! 줄 서서 먹는 맛집이나 프라이빗한 오마카세에서 미각의 즐거움을 느껴보세요. 배가 부르면 출근 스트레스도 사라지는 법이죠.",
      ctaText: "지금 가장 핫한 맛집 예약",
      affiliateLink: "https://www.catchtable.net/"
    },
    MOOD: {
      name: "인생샷 제조, 비주얼 나이트",
      img: "/images/workerDate02.jpg",
      desc: "지루한 사무실 뷰는 잊으세요! 한강이 보이는 루프탑이나 통창 유리 너머 야경이 펼쳐지는 감성 카페가 정답입니다. 예쁜 사진 한 장이 일주일의 원동력이 될 거예요.",
      ctaText: "야경 명소 루프탑 바 보기",
      affiliateLink: "https://www.catchtable.net/"
    },
    REST: {
      name: "고요한 쉼표, 힐링 나이트",
      img: "/images/workerDate03.jpg",
      desc: "서로의 숨소리에 집중할 수 있는 아늑한 와인바나 심야 만화카페는 어떠세요? 자극적인 곳보다는 낮은 조도 아래서 두런두런 대화 나누며 마음의 짐을 내려놓는 시간을 추천합니다.",
      ctaText: "아늑한 프라이빗 바 예약",
      affiliateLink: "https://www.catchtable.net/"
    },
    PLAY: {
      name: "텐션 업! 액티비티 나이트",
      img: "/images/workerDate04.jpg",
      desc: "앉아서 일하느라 굳은 몸을 깨울 시간! 야간 전시회 탐방, 볼링, 혹은 함께 원데이 클래스에 참여해 보세요. 무언가에 집중하다 보면 업무 생각은 어느덧 저 멀리 사라집니다.",
      ctaText: "이색 데이트 코스 찾기",
      affiliateLink: "https://www.klook.com/ko/"
    }
  }
};