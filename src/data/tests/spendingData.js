export const spendingData = {
  isReady: false,
  id: "spending",
  title: "나의 스트레스 해소 '탕진' 유형 진단",
  subTitle: "금융 치료가 시급한 당신! 스트레스를 받을 때 당신의 통장은 어떤 비명을 지르고 있을까요?",
  mainImg: "/images/spending-main.jpg",

  questions: [
    {
      id: 1,
      q: "역대급 업무 스트레스로 지친 퇴근길, 당신의 손에 들린 것은?",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
      a: [
        { text: "나를 위로할 편의점 맥주와 매콤한 야식 세트", type: "FOOD" }, // 미식 탕진
        { text: "며칠 전부터 장바구니에 담아둔 그 브랜드 옷/신발", type: "FLEX" } // 플렉스 탕진
      ]
    },
    {
      id: 2,
      q: "큰 프로젝트를 끝낸 자신에게 주고 싶은 보상은?",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
      a: [
        { text: "비행기 표부터 끊고 보는 무계획 해외여행", type: "ESCAPE" }, // 탈출 탕진
        { text: "삶의 질을 떡상시켜줄 최신형 전자 기기", type: "FLEX" }
      ]
    },
    {
      id: 3,
      q: "통장 잔고가 아슬아슬할 때, 당신의 소비 태도는?",
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600",
      a: [
        { text: "소소하게 다이소에서 '천 원의 행복' 쇼핑", type: "SO-SO" }, // 소확행 탕진
        { text: "미래의 나를 믿고 일단 신용카드를 긁는다", type: "FLEX" }
      ]
    },
    {
      id: 4,
      q: "쇼핑 중 가장 행복을 느끼는 순간은 언제인가요?",
      img: "https://images.unsplash.com/photo-1526178613552-2a4546c13817?w=600",
      a: [
        { text: "문 앞에 택배 상자가 가득 쌓여있을 때", type: "FLEX" },
        { text: "정말 맛있는 음식을 입에 넣는 첫 순간", type: "FOOD" }
      ]
    },
    {
      id: 5,
      q: "당신이 가장 후회하는 지출 스타일은?",
      img: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=600",
      a: [
        { text: "배달 앱으로 야금야금 사라진 내 식비들", type: "FOOD" },
        { text: "예뻐서 샀는데 한 번도 안 쓴 예쁜 쓰레기들", type: "SO-SO" }
      ]
    }
  ],

  results: {
    FLEX: {
      name: "인생은 한 방! '통장 브레이커 플렉서'",
      desc: "스트레스가 클수록 결제 금액도 커지는 당신! '나를 위한 선물'이라는 명목하에 큼직한 한 방을 날리는 타입입니다. 소비를 통해 에너지를 얻지만, 카드 명세서를 볼 때 다시 스트레스를 받는 무한 굴레에 빠져 있군요!",
      img: "https://images.unsplash.com/photo-1556742049-2e9092003c41?w=400",
      ctaText: "💰 플렉스 후 통장 사수! 가계부 앱 추천",
      affiliateLink: "https://play.ranklamp.com/spending-flex"
    },
    FOOD: {
      name: "행복은 입안 가득! '고칼로리 금융 치료사'",
      desc: "당신에게 소비란 곧 맛있는 것을 의미합니다. 힘들수록 '먹는 게 남는 것'이라며 배달 앱 등급을 올리고 있지는 않나요? 미각을 통한 즉각적인 위로를 선호하는 당신, 건강과 지갑을 위해 가끔은 집밥도 추천드려요.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
      ctaText: "🍕 오늘 저녁 메뉴 고민 끝! 맛집 쿠폰 받기",
      affiliateLink: "https://play.ranklamp.com/spending-food"
    },
    ESCAPE: {
      name: "현실 도피의 명수 '프로 봇짐러'",
      desc: "일상의 압박이 극에 달하면 당신은 떠날 준비를 합니다. 숙소 예약과 비행기 티켓 결제만이 당신을 숨 쉬게 하는군요. 공간을 바꾸는 것으로 스트레스를 해결하는 당신은 진정한 자유 영혼입니다.",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400",
      ctaText: "✈️ 스트레스 제로! 지금 가장 싼 비행기 표",
      affiliateLink: "https://play.ranklamp.com/spending-escape"
    },
    SO_SO: {
      name: "야금야금 귀염둥이 '개미지옥 소확행러'",
      desc: "큰돈은 안 쓰지만, 다이소나 편의점, 문구점 등에서 소소하게 자주 지르는 타입입니다. 하나하나 가격은 저렴하지만 '가랑비에 옷 젖는 줄 모른다'는 말의 주인공이 바로 당신! 작고 귀여운 물건들이 당신의 방을 점령하고 있네요.",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400",
      ctaText: "🧸 귀여움 폭발! 데스크 꾸미기 소품 보기",
      affiliateLink: "https://play.ranklamp.com/spending-soso"
    }
  }
};