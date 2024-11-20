---
layout: post
title: "[JAVA] 5.Loop"
subtitle: "반복문"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초 반복문에 대해 다루고 있다.

---
## 반복문

### while
 `While1_2`
 ``` java
 package loop;
 public class While1_2 {
 public static void main(String[] args) {
 int count = 0;
 while (count < 3) {
            count++;
 System.out.println("현재 숫자는:" + count);
        }
    }
 }
 ```

 ### do-while 
 `do-while`문은 `while`과 비슷하지만, 조건에 상관없이 무조건 한 번은 코드를 실행한다.
 ``` java
  do {
 // 코드
} while (조건식);
 ```

<br>

### break, continue
`break`과 `continue`는 반복문에서 사용할 수 있는 키워드다.
<br>

✅ **break**
반복문을 즉시 종료하고 나감.
``` java
while(조건식) {
코드1;
 break;//즉시 while문 종료로 이동한다.
코드2;
 }
 //while문 종료
 ```

 <br>

✅ **continue**
반복문의 나머지 부분을 건너띄고 다음 반복으로 진행하는데 사용됨.
``` java
while(조건식) {
코드1;
 continue;//즉시 조건식으로 이동한다.
코드2;
 }
```

## for문
### for문 구조
``` java
for (1.초기식; 2.조건식; 4.증감식) {
 // 3.코드
}
```
💡 for문에서 초기식, 조건식, 증감식은 선택이다. 하지만 영역을 구분하는 세미콜론(`;`)은 유지해야한다.

``` java
// 조건이 없어서 무한반복하는 코드가 된다.
for (;;) {
 // 코드
}
```