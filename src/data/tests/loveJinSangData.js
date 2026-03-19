export const loveJinSangData = {
  isReady: false,
  title: "나의 '연애 개진상' 지수: 설마 나도?",
  subTitle: "사랑이라는 이름의 횡포, 당신의 '진상력'을 측정해 드립니다.",
  mainImg: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fe?w=800", // 장난꾸러기 표정이나 삐친 듯한 코믹한 이미지
  questions: [
    {
      q: "식당에서 메뉴를 고를 때 당신의 결정 방식은?",
      img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600",
      a: [
        { text: "\"아무거나!\"라고 말하고 연인이 고른 메뉴마다 퇴짜를 놓는다.", type: "answer-fixed" },
        { text: "연인이 좋아하는 걸로 주문하라고 흔쾌히 양보한다.", type: "angel" }
      ]
    },
    {
      q: "연인이 약속 시간에 5분 늦었을 때, 당신의 반응은?",
      img: "https://images.unsplash.com/photo-1509139562610-5a218202b077?w=600",
      a: [
        { text: "\"나 안 기다려! 집에 갈 거야!\"라며 길바닥에서 드라마를 찍는다.", type: "drama-queen" },
        { text: "\"천천히 와, 나 카페에서 책 보고 있어~\"라며 여유를 부린다.", type: "angel" }
      ]
    },
    {
      q: "술자리에서 취기가 오르면 당신은 어떻게 변하나요?",
      img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=600",
      a: [
        { text: "연인에게 전화를 걸어 똑같은 말을 10번 반복하며 운다.", type: "crying-drinker" },
        { text: "기분 좋게 하이텐션이 되어 연인에게 폭풍 애교를 부린다.", type: "angel" }
      ]
    },
    {
      q: "쇼핑몰에서 마음에 드는 걸 발견했을 때 당신의 행동은?",
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      a: [
        { text: "연인이 사줄 때까지 그 자리에 뿌리를 내리고 움직이지 않는다.", type: "luxury-villain" },
        { text: "나중에 내가 돈 모아서 사야지 생각하며 사진만 찍어둔다.", type: "angel" }
      ]
    },
    {
      q: "자려고 누웠는데 연인이 답장이 3분 넘게 없다면?",
      img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600",
      a: [
        { text: "\"자는 거야? 죽은 거야? 왜 답장 안 해?\"라며 부재중 전화를 남긴다.", type: "drama-queen" },
        { text: "피곤한가 보다 생각하며 나도 스르르 잠든다.", type: "angel" }
      ]
    }
  ],
  results: {
    "answer-fixed": {
      name: "답정너의 끝판왕, '메뉴판 독재자'",
      img: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fe?w=600",
      desc: "\"아무거나\"라고 말하고 모든 메뉴를 거절하는 당신의 기술은 가히 예술적입니다! 연인의 인내심을 테스트하는 데 도가 텄군요. 하지만 연인은 당신의 그 '결정 장애'마저 귀엽게 봐주고 있다는 사실을 잊지 마세요. 가끔은 진짜 아무거나 먹어보는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/random-food-dice", 
      ctaText: "메뉴 고민 끝! 점심 메뉴 결정 주사위"
    },
    "drama-queen": {
      name: "길거리 캐스팅 0순위, 'K-드라마 주인공'",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
      desc: "5분 지각에 이별 통보, 10분 지각에 해외 도주를 꿈꾸는 당신! 당신의 연애는 매일매일이 시청률 40%짜리 막장 드라마군요. 감정이 풍부한 건 좋지만 연인의 심장은 유리라는 걸 기억해 주세요. 그래도 당신이 없으면 연인의 삶은 너무 심심할 거예요!",
      affiliateLink: "https://link.coupang.com/a/handkerchief-set", 
      ctaText: "눈물 닦을 준비! 명품 손수건 세트"
    },
    "crying-drinker": {
      name: "술잔만 들면 오열, '수도꼭지 주당'",
      img: "https://images.unsplash.com/photo-1516726817505-f5ed17cb619a?w=600",
      desc: "술만 마시면 서러운 기억이 폭포수처럼 쏟아지는 당신! 똑같은 서운함을 밤새도록 읊조리는 당신의 끈기에 연인은 항복을 선언했습니다. 내일 아침 이불 킥은 확정! 연인에게 미안하다면 오늘 저녁엔 해장국을 직접 대령해 보세요.",
      affiliateLink: "https://link.coupang.com/a/hangover-remedy-set", 
      ctaText: "이불 킥 방지! 숙취 해소제 대용량 세트"
    },
    "luxury-villain": {
      name: "뿌리 깊은 쇼핑 본능, '백화점 나무'",
      img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=600",
      desc: "마음에 드는 물건 앞에 서면 절대 움직이지 않는 강한 신념의 소유자! 연인의 지갑이 마를 날이 없겠군요. 하지만 당신의 그 까다로운 취향 덕분에 연인의 안목도 덩달아 올라갔답니다. 가끔은 연인을 위해 작은 선물 하나 먼저 건네보는 건 어떨까요?",
      affiliateLink: "https://link.coupang.com/a/shoulder-massager", 
      ctaText: "짐 들고 다니느라 고생한 연인을 위한 마사지기"
    },
    "angel": {
      name: "지상으로 내려온 '천사 유니콘'",
      img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600",
      desc: "세상에, 당신은 진상 지수가 0%군요! 연인의 모든 실수를 웃음으로 승화시키고 배려하는 당신은 연애계의 유니콘입니다. 하지만 너무 참기만 하면 병이 될 수 있으니, 가끔은 귀여운 진상을 부려 연인을 당황시켜 보는 것도 연애의 기술이랍니다!",
      affiliateLink: "https://link.coupang.com/a/chocolate-gift-set", 
      ctaText: "착한 당신을 위한 달콤한 선물, 고디바 초콜릿"
    }
  }
};