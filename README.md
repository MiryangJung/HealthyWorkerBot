# HealthyWorkerBot
> 직장인건강지킴이 텔레그램 봇입니다. <br>
> 가만히 앉아서 일하다보니 물도 잘 안마시고, 자세도 구부정해져서 주기적으로 알림을 해주기 위해 만들었습니다.

## 사용 방법
ID : @HealthyWorkerBot
Link : [t.me/HealthyWorkerBot](https://t.me/HealthyWorkerBot)

## 작동 방식
9시부터 18시까지만 작동합니다.
- 물 : 20분마다
- 스트레칭 : 11시, 13시, 15시
- 눈 운동 : 17시

![example](example.png)

## 개발 환경 설정
```sh
git clone https://github.com/MiryangJung/HealthyWorkerBot.git
npm install
```

## Tech/Framework used
- Node.js
- node-telegram-bot-api
- node-cron
- mongoose
- moment-timezone

##### Built with
- Webstorm
- Heroku

## 업데이트 내역
* 1.0.0
    * 완성 및 테스트
* 1.1.0
    * gif가 재생되도록 하기

## Trouble Shooting

### Send Photo
* 문제
   * Gif가 재생되지 않음
* 해결
   * 해결 중
   
## 기여 방법

1. (<https://github.com/XXIT-Official/2019-xxit-tech-talk>)을 포크합니다.
2. (`git checkout -b feature/something`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add something'`) 명령어로 커밋하세요.
4. (`git push origin feature/something`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.

## Copyright and License

Copyright 2019 MiryangJung. Code released under the MIT license.