export const blacklistData = {
  isReady: false,
  id: "blacklist",
  title: "나의 '연애 블랙리스트' 테스트",
  subTitle: "콩깍지도 못 막는다! 내가 연애할 때 절대 용납 못 하는 '극혐' 포인트와 나의 연애 성향을 분석해 드립니다.",
  mainImg: "/images/blacklist-main.jpg",

  questions: [
    {
      id: 1,
      q: "소개팅 첫 만남, 상대방이 이런 행동을 한다면?",
      img: "https://images.unsplash.com/photo-1515023115689-589c39715e10?w=600",
      a: [
        { text: "메뉴판 보면서 종업원에게 반말하기", type: "MANNERS" }, // 예의/태도 빌런
        { text: "첫 만남부터 전 애인 이야기 늘어놓기", type: "PAST" } // 무매너/눈치 빌런
      ]
    },
    {
      id: 2,
      q: "연락 문제, 당신이 더 참기 힘든 상황은?",
      img: "https://images.unsplash.com/photo-1556631107-ad28281ac094?w=600",
      a: [
        { text: "답장은 빠른데 영혼 없는 '읽씹' 수준의 단답", type: "COMMU" }, // 소통 부재
        { text: "반나절 이상 소식도 없이 연락 두절", type: "TRUST" } // 신뢰 부족
      ]
    },
    {
      id: 3,
      q: "데이트 중, 상대의 패션이 이렇다면?",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600",
      a: [
        { text: "때와 장소에 전혀 안 맞는 난해한 복장", type: "SENSE" }, // 센스 부족
        { text: "옷에 묻은 얼룩과 꼬질꼬질한 신발", type: "CLEAN" } // 청결 부족
      ]
    },
    {
      id: 4,
      q: "싸울 때 당신이 가장 '정떨어지는' 포인트는?",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
      a: [
        { text: "논리 없이 감정적으로만 소리 지르기", type: "MANNERS" },
        { text: "아무 말도 안 하고 입 꾹 닫고 잠수 타기", type: "COMMU" }
      ]
    },
    {
      id: 5,
      q: "상대방의 SNS에서 이걸 발견했다면?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "온통 허세와 자기애로 가득 찬 셀카 게시물", type: "SENSE" },
        { text: "이성 친구들과의 과한 친목질 흔적", type: "TRUST" }
      ]
    }
  ],

  results: {
    MANNERS: {
      name: "품격 수호자 '매너가 사람을 만든다'형",
      desc: "당신은 예의와 인성을 가장 중요하게 생각합니다. 식당에서 무례하거나 기본 에티켓이 없는 사람을 보면 사랑의 감정도 순식간에 식어버리죠. 당신에겐 다정하고 배려심 깊은 사람이 최고의 파트너입니다.",
      img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400",
      ctaText: "🕊️ 매너남/매너녀를 위한 향수 추천",
      affiliateLink: "https://play.ranklamp.com/item-perfume"
    },
    TRUST: {
      name: "불안 제로 추구 '믿음이 전부다'형",
      desc: "거짓말과 연락 두절은 당신의 블랙리스트 1순위! 신뢰가 한 번 깨지면 다시는 뒤돌아보지 않는 냉정함도 갖추고 있습니다. 당신에겐 투명하게 모든 것을 공유하는 정직한 사랑이 필요합니다.",
      img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400",
      ctaText: "🔐 신뢰를 지켜주는 커플 공유 앱 보기",
      affiliateLink: "https://play.ranklamp.com/item-trust-app"
    },
    COMMU: {
      name: "소통 전문가 '대화가 필요해'형",
      desc: "단답이나 벽 보고 얘기하는 듯한 침묵을 가장 견디기 힘들어합니다. 마음을 솔직하게 나누고 대화로 문제를 해결하고 싶은 당신! 리액션 좋고 말솜씨 있는 상대와 있을 때 가장 행복함을 느낍니다.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400",
      ctaText: "💬 대화가 끊이지 않는 질문 카드 보기",
      affiliateLink: "https://play.ranklamp.com/item-talk-card"
    },
    SENSE: {
      name: "취향 존중 요망 '센스가 국력이다'형",
      desc: "허세 부리거나 센스 없는 행동을 보면 순식간에 '현타'가 오는 타입입니다. 굳이 말하지 않아도 분위기를 읽고, 깔끔하게 자기 관리 잘하는 사람에게 매력을 느끼죠. 당신은 보는 눈이 꽤 높은 편이군요!",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
      ctaText: "✨ 센스 있는 데이트룩 코디 제안",
      affiliateLink: "https://play.ranklamp.com/item-fashion"
    }
  }
};