---
layout: post
title: "[JAVA] 6.Scope, Type Casting"
subtitle: "스코프, 형변환"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초 스코프, 형변환에 대해 다루고 있다.

---

## 💡 스코프(Scope)
> 변수의 접근 가능한 범위

`Scope2`
``` java
package scope;

public class Scope2 {
 public static void main(String[] args) {
 int m = 10;
 for (int i = 0; i < 2; i++) { //블록 내부, for문 내
System.out.println("for m = " + m); //블록 내부에서 외부는 접근 가능
System.out.println("for i = " + i);
        } 
//i 생존 종료
    }
 }
```

<br>

### 스코프를 사용하는 이유
- **비효율적인 메모리 사용** : 사용하지 않는 변수들은 메모리에서 제거하여 효율적으로 메모리를 사용 할 수 있다.
- **코드 복잡성 증가** : 스코프를 사용하지 않는다면, 사용하지 않는 변수도 선언되어 있다면 생각해야하기 떄문에 복잡한 코드가 될 가능성이 매우 높다.


## 형변환
### 자동 형변환

- 작은 범위에서 큰 범위로는 값을 넣을 수 있다.
    - `int` -> `long` -> `double`
- 큰 범위에서 작은 범위는 다음과 같은 문제가 발생할 수 있음.
    - 소수점 버림
    - 오버플로우

✅ 작은 범위에서 큰 범위로 대입은 허용함 : 
`int < long < double`

💡 **자동 형변환 동작 원리**
``` java
 //intValue = 10
 doubleValue = intValue
 doubleValue = (double) intValue //형 맞추기
doubleValue = (double) 10 //변수 값 읽기
doubleValue = 10.0 //형변환
```

<div>

### 명시적 형변환
큰 범위에서 작은 범위 대입은 명시적 형변환이 필요함
숫자가 손실 되는 것을 감수하고도 값을 대입하고 싶다면 데이터 타입을 강제로 변환할 수 있다.
``` java
package casting;

public class Casting2 {
    public static void main(String[] args){
        double doubleValue = 1.5;
        int intValue = 0;

        // intValue = doubleValeu; //컴파일 오류 발생
        intValue = (int) doubleValue; //형변환
        System.out.printIn(intValue); //출력:1
    }
}
```
✅ 위의 코드에서 주석을 풀면 컴파일 오류가 발생한다.
``` 
java: incompatible types: possible lossy conversion from double to int
//java: 호환되지 않는 유형: double에서 int로의 가능한 손실 변환
```

<br>

💡 **명시적형변환 동작 원리**
``` java
//doubleValue = 1.5
intValue = (int) doubleValue;
intValue = (int) 1.5; //doubleValue에 있는 값을 읽는다.
intValue = 1; //(int)로 형변환 한다. intValue에 int형인 숫자 1을 대입한다.
```

### 형변환과 오버플로우
형변환을 할 떄 작은 숫자가 표현할 수 있는 범위를 넘어서면 오버플로우가 일어난다.

<br>


``` java
package casting;

public class Casting3 {

 public static void main(String[] args) {
    long maxIntValue = 2147483647; //int 최고값
    long maxIntOver = 2147483648L; //int 최고값 + 1(초과)
    int intValue = 0;
    intValue = (int) maxIntValue; //형변환
    System.out.println("maxIntValue casting=" + intValue); //출력:2147483647
    
    intValue = (int) maxIntOver; //형변환
    System.out.println("maxIntOver  casting=" + intValue); //출력:-2147483648
 }
}
```
**정상범위**(maxIntValue)
<br>
✔️ `int`로 표현할 수 있는 범위에 포함되기 때문에 `long`->`int` 로 변경해도 아무런 문제가 없다.

<br>

**초과범위**(maxIntOver)
<br>
✔️ `int`로 표현할 수 있는 가장 큰 숫자보다 1큰 숫자를 입력했기 때문에, 마지막에 `L`을 붙여서 `long` 형을 사용해야 한다.
``` java
maxIntOver = 2147483648L; //int 최고값 + 1
intValue = (int) maxIntOver; //변수 값 읽기
intValue = (int) 2147483648L; //형변환 시도
intValue = -2147483648;
```

<br>

### 계산과 형변환
형변환은 대입 뿐만 아니라, 계산을 할 때도 발생함.
1. **같은 타입끼리의 계산은 같은 타입의 결과를 낸다.**
  - `int + int`는 `int`를, `double + double`은 `double`의 결과가 나온다.

2. **서로 다른 타입의 계산은 큰 범위로 자동 형변환이 일어난다.**
  - `int + long`은 `long + long`으로 자동 형변환이 일어난다.
  - `int + double`은 `double + double`로 자동 형변환이 일어난다.