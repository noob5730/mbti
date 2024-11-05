function calculateMBTI() {
    const form = document.getElementById('mbtiForm');
    const formData = new FormData(form);
    let result = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    formData.forEach((value) => {
        result[value]++;
    });

    // MBTI 유형 계산
    const type = (result.E >= result.I ? 'E' : 'I') +
                 (result.S >= result.N ? 'S' : 'N') +
                 (result.T >= result.F ? 'T' : 'F') +
                 (result.J >= result.P ? 'J' : 'P');

    // 결과 페이지로 이동하며 MBTI 결과를 전달
    localStorage.setItem('mbtiResult', type);
    window.location.href = 'result.html';
}

window.onload = function() {
    const resultType = localStorage.getItem('mbtiResult');
    const resultDescription = {
        "INTJ": "전략가형: 독창적이고 창의적인 사고를 가진 분석형 인물입니다.",
        "INTP": "논리주의자형: 호기심 많고 분석적인 성향을 지닌 탐구자입니다.",
        "ENTJ": "통솔자형: 리더십이 강하고 목표 지향적입니다.",
        "ENTP": "변론가형: 도전적인 논리와 창의적 사고를 선호합니다.",
        "INFJ": "옹호자형: 통찰력과 이상을 가진 조언자입니다.",
        "INFP": "중재자형: 따뜻하고 사려 깊으며 이상주의적입니다.",
        "ENFJ": "선도자형: 타인을 이끌며 사교성이 높은 인물입니다.",
        "ENFP": "활동가형: 활발하고 열정적이며 상상력이 풍부합니다.",
        "ISTJ": "청렴결백형: 신뢰와 성실함을 중요시하는 실용주의자입니다.",
        "ISFJ": "수호자형: 헌신적이며 책임감이 강한 사람입니다.",
        "ESTJ": "관리자형: 조직력과 리더십이 강합니다.",
        "ESFJ": "외교관형: 배려심이 많고 친절한 성향입니다.",
        "ISTP": "장인형: 실용적이고 침착한 문제 해결자입니다.",
        "ISFP": "탐험가형: 겸손하고 유연한 예술적 인물입니다.",
        "ESTP": "사업가형: 현실적이며 모험을 즐깁니다.",
        "ESFP": "연예인형: 사교적이고 에너지가 넘치는 사람입니다."
    };

    if (resultType) {
        document.getElementById('resultType').textContent = `당신의 MBTI 유형: ${resultType}`;
        document.getElementById('resultDescription').textContent = resultDescription[resultType];
    }
};
