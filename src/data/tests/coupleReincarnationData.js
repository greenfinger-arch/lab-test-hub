export const coupleReincarnationData = {
  isReady: false,
  title: "다시 태어나도 이 사람과? '부부 일심동체' 전생 계약서",
  subTitle: "우리가 이번 생에 부부로 만난 건, 전생의 어떤 계약 때문일까요?",
  mainImg: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800", // 오래된 양피지나 신비로운 우주 이미지
  questions: [
    {
      q: "전생의 기억이 담긴 '업보 상자'를 열었습니다. 가장 먼저 보이는 물건은?",
      img: "https://images.unsplash.com/photo-1589410726710-186835a74e79?w=600",
      a: [
        { text: "상대방이 나에게 빌려준 '금화 한 주머니'", type: "debtor" },
        { text: "상대방과 함께 나눠 가졌던 '부러진 옥가락지'", type: "soulmate" }
      ]
    },
    {
      q: "전생에 우리가 헤어질 때 마지막으로 나눈 약속은?",
      img: "https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?w=600",
      a: [
        { text: "\"다음 생엔 내가 너를 더 많이 괴롭혀 줄 거야!\"", type: "rival" },
        { text: "\"먼저 가서 기다릴게, 반드시 나를 찾아줘.\"", type: "soulmate" }
      ]
    },
    {
      q: "현생에서 배우자가 가끔 미워 보일 때 드는 생각은?",
      img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600",
      a: [
        { text: "전생에 내가 나라를 팔아먹었나 보다...", type: "debtor" },
        { text: "전생에 내가 구한 나라가 너무 커서(?) 보상받는 중이다.", type: "soulmate" }
      ]
    },
    {
      q: "만약 염라대왕이 '다음 생엔 다른 사람과 살래?'라고 묻는다면?",
      img: "https://images.unsplash.com/photo-1509424855423-b8ac80064b55?w=600",
      a: [
        { text: "잠시 고민하지만, 결국 '이 사람 아니면 안 돼요'라고 한다.", type: "soulmate" },
        { text: "단호하게 '이번엔 좀 쉬어갈게요'라고 한다.", type: "rival" }
      ]
    },
    {
      q: "우리 부부의 '일심동체' 점수, 당신의 솔직한 평가는?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "말하지 않아도 눈빛만 봐도 통하는 99점!", type: "soulmate" },
        { text: "서로 다른 별에서 온 것 같은 0.1점의 신선함!", type: "rival" }
      ]
    }
  ],
  results: {
    soulmate: {
      name: "지독하게 얽힌 '천년의 약속'형",
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600",
      desc: "당신들은 전생에 서로를 구하기 위해 목숨을 걸었던 사이군요! '다시 태어나도 반드시 만나자'던 그 지독한 약속이 현생의 결혼으로 이어진 것입니다. 가끔 싸우는 것도 사실은 더 깊이 사랑하기 위한 전생의 설계! 이번 생에도 계약은 유효하니 마음껏 사랑하세요.",
      affiliateLink: "https://link.coupang.com/a/couples-hand-casting-kit", 
      ctaText: "영원히 놓지 마! 커플 손잡기 석고 캐스팅 키트"
    },
    debtor: {
      name: "은혜 갚는 '까치와 선비'형",
      img: "https://images.unsplash.com/photo-1599408162449-7053e1a06708?w=600",
      desc: "어쩐지 배우자가 하는 일마다 내가 다 뒷수습을 하고 있다면? 축하합니다, 당신은 전생의 '채무자'입니다! 배우자가 전생에 당신을 위해 희생한 무언가를 이번 생에 갚아나가는 중이죠. 억울해하지 마세요. 당신의 헌신 덕분에 전생의 빚이 빛의 속도로 탕감되고 있으니까요!",
      affiliateLink: "https://link.coupang.com/a/comfortable-foot-massager", 
      ctaText: "업보 청산의 지름길! 배우자용 자동 발 마사지기"
    },
    rival: {
      name: "창과 방패의 대결, '운명의 라이벌'형",
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600",
      desc: "전생에 서로 다른 가문의 고수였거나, 라이벌 국가의 장군들이었을 확률이 높습니다. '누가 더 잘났나' 대결하다가 정이 들어버려 이번 생엔 부부라는 이름의 휴전 협정을 맺었군요. 매일 투닥거리는 건 협정 위반이 아니라, 여전히 서로를 가장 강력한 파트너로 인정한다는 증거입니다!",
      affiliateLink: "https://link.coupang.com/a/couple-board-game-set", 
      ctaText: "평화로운 전쟁! 부부 전용 보드게임 세트"
    }
  }
};