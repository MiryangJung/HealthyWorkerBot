# HealthyWorkerBot
> 직장인건강지킴이 텔레그램 봇입니다. <br>
> 가만히 앉아서 일하다보니 물도 잘 안마시고, 자세도 구부정해져서 주기적으로 알림을 해주기 위해 만들었습니다.

## 사용
ID : @HealthyWorkerBot<br>
Link : [t.me/HealthyWorkerBot](https://t.me/HealthyWorkerBot)

## 작동 방식
평일 9시부터 18시까지만 작동합니다.
- 물 : 20분마다
- 스트레칭 : 11시, 13시, 15시
- 눈 운동 : 17시

![example](example.gif)

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
   * sendPhoto는 정적이미지만 가능함
   * sendDocument를 이용해서 gif 재생되도록 하였음
   
### Cron
* 문제
   * 7시전까지 메시지 발송됨
* 해결
   * cron 시간을 9-18을 하면 18시 XX분까지 작동함
   * 9-17으로 시간 변경
   
## 개발기
<https://miryang.dev/2019/09/23/healthyworkerbot/>
   
## 기여 방법

1. (<https://github.com/MiryangJung/HealthyWorkerBot>)을 포크합니다.
2. (`git checkout -b feature/something`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add something'`) 명령어로 커밋하세요.
4. (`git push origin feature/something`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.

## Copyright and License

Copyright 2019 MiryangJung. Code released under the MIT license.
