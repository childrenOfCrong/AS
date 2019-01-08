function solution(genres, plays) {
    // 1. 장르별 플레이 수 합 구하기
    let genreSumObj = {};
    genres.forEach((genre, i) => {
        !genreSumObj[genre] ? genreSumObj[genre] = plays[i] : genreSumObj[genre] += plays[i];
    }
    );

    // 2. 합 수 정렬한 후, 순서별 장르 뽑기 
    const sumOrder = Object.values(genreSumObj).sort((a, b) => b - a);
    let genreOrder = [];
    sumOrder.forEach(genre => {
        for (let genre2 in genreSumObj) {
            if (genre === genreSumObj[genre2]) genreOrder.push(genre2);
        }
    });
    
    let obj = {}
    
    genres.forEach((genre, i) => {
        if(!obj[genre]) {
            obj[genre] = [[plays[i], i]]
        } else {
            obj[genre].push([plays[i], i])
        }
    })

    for(let genre in obj) {
        obj[genre].sort((a,b) => b[0]-a[0])
    }

    for(let genre in obj) {
        if(obj[genre].length > 2) {
            obj[genre].length = 2
        }
    }
    
    var ret = [];
    genreOrder.forEach(genre => {
        for(let j in obj) {
            if(j === genre) {
                ret.push(obj[j][0][1], obj[j][1][1])
            }
        }
    })
    return ret
}

const genres = ["classic", "pop", "classic", "classic", "pop"]
const plays = [500, 600, 150, 800, 2500]

console.log(solution(genres, plays))