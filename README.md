## ๐จ๏ธ Showing

> Showing์ ๋ฎค์ง์ปฌ/์ฐ๊ทน ์๋น์์ ๋ ๋์ ๊ฒฝํ๊ณผ ์ ํ์ ์ํ์ฌ ๊ณต์ฐ์ ์ธ๋ถ ์ ๋ณด๋ฅผ ํตํ ๋ฎค์ง์ปฌ/์ฐ๊ทน ์ถ์ฒ ๋ฐ์ดํฐ ๋ฐ ๋ฆฌ๋ทฐ ๋ถ์์ ํตํ ํค์๋ ์๋ํด๋ผ์ฐ๋๋ฅผ ์ ๊ณตํฉ๋๋ค.  
> ๊ฐ ๊ณต์ฐ ๋น ๋ณ์  ํ๊ฐ์ ๋ฆฌ๋ทฐ ์์ฑ์ด ๊ฐ๋ฅํ๋ฉฐ, ๋ค๋ฅธ ์ฌ๋๋ค์ ๋ฆฌ๋ทฐ ๋ํ ํ์ธ ๊ฐ๋ฅํฉ๋๋ค.

<br>

## โจ ์ฃผ์ ํ์ด์ง

- ๋ฉ์ธ ํ์ด์ง

  ![](exec/main1.png)
  ![](exec/main2.png)
  ![](exec/main3.png)
  ![](exec/main4.png)
  ![](exec/main5.png)

- ๊ณต์ฐ ์์ธ

  ![](exec/show1.png)
  ![](exec/show2.png)
  ![](exec/show3.png)

- ๋ฆฌ๋ทฐ

  ![](exec/review.png)

- ๋ง์ด ํ์ด์ง

  ![](exec/user1.png)
  ![](exec/user2.png)
  ![](exec/user3.png)

<br>

## ๐๏ธ ์งํ ๊ธฐ๊ฐ

2022.02.21~2022.04.08(์ด 7์ฃผ)

<br>

## ๐๏ธ ํ์ ์๊ฐ

Backend : ๊น๋ฏผ์ค, ๊นํ์ง, ์ด๋ช์ฃผ

Frontend : ๊ณ ์ฃผํฌ, ์ก์์ง, ์ตํ๋ฆฐ

Data : ๊ณ ์ฃผํฌ, ๊น๋ฏผ์ค, ์ก์์ง, ์ด๋ช์ฃผ

Hadoop : ๊นํ์ง, ์ตํ๋ฆฐ

<br>

## ๐ญ ์ํคํ์ฒ

![](exec/architecture.png)

## ๐จ ๊ธฐ์ ์คํ

### Front-End

- Node.js - `v14.15.1`
- npm - `v8.1.2`
- HTML 5, CSS3, JavaScript (ES6)
- Vue.js 2

## Back-End

- Java - `openjdk v1.8.0_192`
- Spring Boot - `v2.5.7`
- Django
- JPA, QueryDSL
- MySQL - `v8.0.27`
- Swagger - `v3`

## Data

- Hadoop HDFS
- Hadoop mapreduce
- Python
- Selenium

## Infra

- AWS EC2 Ubuntu 20.04
- Jenkins - [ jenkins/jenkins:lts ] - `v2.332.1`
- Nginx - `nginx/1.18.0 (Ubuntu)`
- Certbot - `certbot 1.25.0`
- Docker - `v20.10.13`

<br>

## ๐จ ํ์ผ๊ตฌ์กฐ

[ํ๋ก์ ํธ ๊ตฌ์กฐ](https://broadleaf-crabapple-56b.notion.site/dfae4f46a3ee40eba813d49425fa9f8e)

<br>

## โจ ์ฐ์ถ๋ฌผ

### ํ๋ฉด ์ค๊ณ

![](exec/uiux.png)

### ERD

![](exec/erd.png)

### API

[API ์ค๊ณ์](https://broadleaf-crabapple-56b.notion.site/API-9a5a758b6b074989ab66d53ca90184f6)

<br>

## ๐๏ธ ๋น๋ ๋ฐฉ๋ฒ

์๊ฒฉ์ git ์ ์ฅ์๋ฅผ ๋ก์ปฌ์ ๋ณต์ 

```shell
git clone https://github.com/hengzizng/Showing.git
```

### ๋ฐฑ์๋

`DBDump.sql` ํ์ผ์ ํตํด ๋ก์ปฌ MySQL์ DB ์คํค๋ง๋ฅผ ์์ฑ

`application-prod.properties` ์ `spring.datasource.username` ๊ณผ `spring.datasource.password` ํญ๋ชฉ๋ค์ ๋ก์ปฌ MySQL์ ๋ง๋ค์ด๋ ์ ๋ณด์ ๋ง์ถฐ ๋ณ๊ฒฝ

backend ํ๋ก์ ํธ๋ฅผ ๋น๋

```shell
cd backend
./gradlew clean build
```

`./gradlew: command not found` ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค๋ฉด gradlew์ ์คํ ๊ถํ์ ๋ถ์ฌ

```shell
chmod +x gradlew
```

์์ฑ๋ jar ํ์ผ๋ก ํ๋ก์ ํธ๋ฅผ ์คํ

```shell
java -jar build/libs/backend-0.0.1-SNAPSHOT.jar
```

์๋น์ค swagger ์ฃผ์์ ์ ์ํด ์คํ์ ํ์ธ

- http://localhost:8081/swagger-ui/

### ํ๋ก ํธ์๋

npm์ ์ด์ฉํ์ฌ ํ์ํ ํจํค์ง ์ค์น

```shell
cd frontend
npm install
```

์นํฉ ๊ฐ๋ฐ ์๋ฒ ๊ตฌ๋

```shell
npm run serve
```

์๋น์ค ์ฃผ์์ ์ ์

- http://localhost:8080
