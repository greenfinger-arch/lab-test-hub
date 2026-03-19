export const outerInnerData = {
  isReady: false,
  title: "나의 겉바속촉 지수 테스트",
  subTitle: "남들이 보는 '나' vs 내가 아는 '나', 그 반전의 차이는?",
  mainImg: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800", // 겉은 바삭하고 속은 부드러운 디저트 이미지
  questions: [
    {
      q: "처음 보는 사람들로 가득한 모임에 참석했을 때 당신은?",
      img: "https://images.unsplash.com/photo-1528605248644-14dd0d483c79?w=600",
      a: [
        { text: "어색함을 깨기 위해 먼저 말을 걸며 분위기를 주도한다.", type: "outer-hot" },
        { text: "누군가 말을 걸어줄 때까지 핸드폰을 보거나 조용히 관찰한다.", type: "outer-cold" }
      ]
    },
    {
      q: "친구와 말다툼을 하고 집에 돌아온 당신의 모습은?",
      img: "https://images.unsplash.com/photo-1516589174422-b7569bc56184?w=600",
      a: [
        { text: "이미 지난 일! 침대에 눕자마자 3분 만에 기절해서 잔다.", type: "inner-hot" },
        { text: "아까 내가 했던 말, 상대의 표정... 새벽까지 복기하며 이불킥한다.", type: "inner-cold" }
      ]
    },
    {
      q: "누군가 나에게 선의의 거짓말이나 '빈말'을 했다는 걸 눈치챘다면?",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
      a: [
        { text: "그럴 수도 있지! 좋은 게 좋은 거라며 그냥 넘어간다.", type: "inner-hot" },
        { text: "왜 그랬을까? 나를 만만하게 본 건가? 의도가 궁금해진다.", type: "inner-cold" }
      ]
    },
    {
      q: "드라마나 영화를 볼 때 당신의 리액션은?",
      img: "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?w=600",
      a: [
        { text: "주인공의 감정에 동화되어 남몰래(혹은 대놓고) 눈물을 훔친다.", type: "inner-cold" },
        { text: "슬프긴 한데 '영화니까'라며 담담하게 감상평을 남긴다.", type: "inner-hot" }
      ]
    },
    {
      q: "상대방이 나에 대해 오해를 하고 있을 때, 나의 대응 방식은?",
      img: "https://images.unsplash.com/photo-1541191005931-f1625f3b777f?w=600",
      a: [
        { text: "조곤조곤 혹은 열정적으로 오해를 바로잡으려 애쓴다.", type: "outer-hot" },
        { text: "말해봤자 뭐해. 언젠간 알겠지 싶어 그냥 입을 닫는다.", type: "outer-cold" }
      ]
    },
    {
      q: "남들이 나에게 주로 하는 첫인상 평가는?",
      img: "https://images.unsplash.com/photo-1534124415367-18920115434d?w=600",
      a: [
        { text: "친해지기 쉬워 보이고 밝은 에너지가 느껴진다.", type: "outer-hot" },
        { text: "생각이 많아 보이고 조금은 다가가기 어렵다.", type: "outer-cold" }
      ]
    }
  ],
  results: {
    "cold-cold": {
      name: "완벽한 얼음성, '겉차속차' 냉동고",
      img: "https://images.unsplash.com/photo-1483197452165-7abc1b347941?w=600",
      desc: "당신은 첫인상도 이성적이고 속마음도 단단한 뚝심 있는 스타일! 감정에 휘둘리지 않는 냉철함이 당신의 큰 무기군요. 하지만 너무 완벽해 보이는 모습에 사람들이 겁을 먹을 수도 있어요. 가끔은 당신의 따뜻한 온도를 살짝만 공유해 보세요!",
      affiliateLink: "https://link.coupang.com/a/your-id-cold-1", 
      ctaText: "차가운 도시인의 감성, 메탈릭 보틀 텀블러"
    },
    "cold-hot": {
      name: "반전 매력의 정석, '겉차속따' 호빵",
      img: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=600",
      desc: "첫인상은 '차도남/차도녀'처럼 시크하지만, 알면 알수록 세상 다정한 츤데레! 내 사람이라고 생각되면 간이고 쓸개고 다 내주는 스타일이군요. 당신의 진면목을 발견한 사람들은 절대 당신 곁을 떠나지 못할 거예요. 그 따뜻한 속마음, 가끔은 티를 좀 내도 괜찮아요!",
      affiliateLink: "https://link.coupang.com/a/your-id-hot-1", 
      ctaText: "츤데레를 위한 따뜻한 무릎 담요와 핫팩"
    },
    "hot-cold": {
      name: "무서운 집중력, '겉따속차' 불꽃 얼음",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
      desc: "웃는 얼굴로 대화하지만 속으로는 상황 판단 끝! 겉으로는 사근사근해도 속에는 나만의 엄격한 기준과 칼 같은 논리가 서 있습니다. '착해 보인다고 만만하게 보지 마라'가 당신의 본모습이군요. 당신의 치밀한 분석력을 자기계발에 쏟아보세요!",
      affiliateLink: "https://link.coupang.com/a/your-id-cold-2", 
      ctaText: "냉철한 자기관리를 돕는 만년 플래너"
    },
    "hot-hot": {
      name: "인간 햇살, '겉따속따' 따끈따끈 호떡",
      img: "https://images.unsplash.com/photo-1504113840335-9fa79b7eeee6?w=600",
      desc: "겉과 속이 모두 따뜻한 긍정 에너지의 소유자! 누구에게나 다정하고 감수성도 풍부해서 주변에 항상 사람들이 모여드는군요. 하지만 타인의 기분에 너무 신경 쓰다 정작 본인이 지칠 수 있어요. 남을 챙기는 만큼 당신 자신을 돌보는 시간도 잊지 마세요!",
      affiliateLink: "https://link.coupang.com/a/your-id-hot-2", 
      ctaText: "나를 위한 힐링 타임, 향기로운 입욕제 세트"
    }
  }
};