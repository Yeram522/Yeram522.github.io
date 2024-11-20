---
layout: post
title: "[JAVA] Conditional Statement"
subtitle: "조건문"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초 조건문에 대해 다루고 있다.

---

## If문

### If else

``` java
package cond;
public class If2 {
 public static void main(String[] args) {
    int age = 20;  // 사용자의 나이
    if (age >= 18) {
        System.out.println("성인입니다."); //참일 때 실행
    } 
    else {
        System.out.println("미성년자입니다.");//만족하는 조건이 없을 때 실행
        }
    }
}
```

### else if

``` java
 if (condition1) {
 // 조건1이 참일 때 실행되는 코드
} else if (condition2) {
 // 조건1이 거짓이고, 조건2가 참일 때 실행되는 코드
} else if (condition3) {
 // 조건2이 거짓이고, 조건3이 참일 때 실행되는 코드
} else {
 // 모든 조건이 거짓일 때 실행되는 코드
}
```

## Switch
``` java
switch (조건식) {
 case value1:
 // 조건식의 결과 값이 value1일 때 실행되는 코드
break;
 case value2:
 // 조건식의 결과 값이 value2일 때 실행되는 코드
break;
 default:
 // 조건식의 결과 값이 위의 어떤 값에도 해당하지 않을 때 실행되는 코드
   }
```

<br>

### 자바 14 새로운 switch문
``` java
package cond;
 public class Switch3 {
 public static void main(String[] args) {
 //grade 1:1000, 2:2000, 3:3000, 나머지: 500
 int grade = 2;
    }
문을 사용하
int coupon = switch (grade) {
 case 1 -> 1000;
 case 2 -> 2000;
 case 3 -> 3000;
 default -> 500;
        };
 System.out.println("발급받은 쿠폰 " + coupon);
 }
```

> ✅ 기존 `switch`문과 차이
> - `->` 를 사용
> - 선택된 데이터를 반환 할 수 있다.

<br>

## 삼항 연산자
`(조건) ? 참_표현식 : 거짓_표현식`

<br>

`condOp2`
``` java
 package cond;
 public class CondOp2 {
 public static void main(String[] args) {
 int age = 18;
 String status = (age >= 18) ? "성인" : "미성년자";
 System.out.println("age = " + age + " status = " + status);
    }
 }
 ```

 <br>

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
