export const dailyVitaminData = {
  isReady: false,
  title: "나에게 건네는 '오늘의 한 문장': 영혼의 비타민",
  subTitle: "애썼던 오늘을 갈무리하고, 당신의 영혼에 한 조각 위로를 선물하세요.",
  mainImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800", // 평온한 숲이나 명상 이미지
  questions: [
    {
      q: "오늘 하루, 당신이 가장 많이 내뱉은 말은 무엇인가요?",
      img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600",
      a: [
        { text: "\"바쁘다 바빠!\" 정신없이 앞만 보고 달려왔다.", type: "deep-breath" },
        { text: "\"괜찮아, 할 수 있어.\" 스스로를 다독이며 버텼다.", type: "gentle-hug" }
      ]
    },
    {
      q: "지금 이 순간, 당신의 몸에서 가장 무겁게 느껴지는 곳은?",
      img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600",
      a: [
        { text: "세상의 무게를 짊어진 듯 뻣뻣한 '어깨와 목'", type: "deep-breath" },
        { text: "하루 종일 생각에 잠겨 복잡해진 '머릿속'", type: "clear-mind" }
      ]
    },
    {
      q: "창밖의 밤하늘을 보세요. 당신의 마음은 어떤 별과 닮았나요?",
      img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600",
      a: [
        { text: "작지만 단단하게 제 자리를 지키는 북극성", type: "gentle-hug" },
        { text: "누군가의 소원을 들어주려 바삐 움직이는 별똥별", type: "deep-breath" }
      ]
    },
    {
      q: "잠들기 전, 가장 듣고 싶은 위로의 형태는?",
      img: "https://images.unsplash.com/photo-1515377662630-cdfd90042467?w=600",
      a: [
        { text: "아무 말 없이 꼬옥 안아주는 따뜻한 온기", type: "gentle-hug" },
        { text: "\"정말 고생 많았어\"라는 진심 어린 한마디", type: "clear-mind" }
      ]
    }
  ],
  results: {
    "deep-breath": {
      name: "오늘 당신에게 필요한 비타민: '심호흡'",
      img: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=600",
      desc: "당신은 오늘 별똥별처럼 눈부시게 바빴군요. 하지만 이제는 멈춰도 괜찮아요. 크게 숨을 들이마시고 천천히 내뱉어 보세요. 공기와 함께 오늘의 긴장도 빠져나갑니다. 당신이 멈춘다고 해서 세상이 멈추진 않으니, 안심하고 깊은 잠에 빠져보세요.",
      affiliateLink: "https://link.coupang.com/a/earplug-and-eye-mask-set", 
      ctaText: "완벽한 소음 차단, 꿀잠 보장 수면 안대 세트"
    },
    "gentle-hug": {
      name: "오늘 당신에게 필요한 비타민: '포옹'",
      img: "https://images.unsplash.com/photo-1507502707541-f369a3b18502?w=600",
      desc: "누구보다 스스로에게 엄격했던 당신, 정말 애쓰셨습니다. 남을 돌보느라 정작 당신의 마음은 뒷전이지 않았나요? 오늘은 양팔을 교차해 스스로를 꼭 안아주세요. 그리고 말해주세요. '오늘 참 잘했다, 기특하다'라고요. 당신은 사랑받기에 충분한 사람입니다.",
      affiliateLink: "https://link.coupang.com/a/body-pillow-u-shape", 
      ctaText: "밤새 곁을 지켜줄, 포근한 U자형 바디필로우"
    },
    "clear-mind": {
      name: "오늘 당신에게 필요한 비타민: '비워냄'",
      img: "https://images.unsplash.com/photo-1518111394132-705a67677d2f?w=600",
      desc: "머릿속이 엉킨 실타래처럼 복잡하시군요. 걱정의 90%는 일어나지 않을 일들이니, 이제 그만 'OFF' 버튼을 누르세요. 내일의 문제는 내일의 당신이 해결할 거예요. 오늘의 당신은 그저 깨끗하게 비워진 마음으로 꿈나라 여행을 떠나기만 하면 됩니다.",
      affiliateLink: "https://link.coupang.com/a/pillow-mist-lavender-scent", 
      ctaText: "생각을 멈추는 향기, 라벤더 필로우 미스트"
    }
  }
};