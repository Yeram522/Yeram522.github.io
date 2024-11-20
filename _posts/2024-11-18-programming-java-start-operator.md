---
layout: post
title: "[JAVA] 3.Operator"
subtitle: "연산자"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초 연산자에 대해 다루고 있다.

---

## 산술 연산자
> ### 주요 연산자 종류
> - **산술 연산자**: `+`, `-`, `*`, `/`, `%` (나머지)
> - **증감 연산자**: `++`, `--`  
> - **비교 연산자**: `==`, `!=`, `>`, `<`, `>=`, `<=`
> - **논리 연산자**: `&&` (AND), `||` (OR), `!` (NOT)  
> - **대입 연산자**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
> - **삼항 연산자**: `? :`

``` java
package operator;
public class Operator1 {
    public static void main(String[] args) {
        //변수 초기화
        int a = 5;
        int b = 2;
        
        //덧셈
        int sum = a + b;
        System.out.println("a + b = " + sum); //출력: a + b = 7
        
        //뺄셈 
        int diff = a - b;
        System.out.println("a - b = " + diff); //출력: a - b = 3
        
        //곱셈
        int multi = a * b;
        System.out.println("a * b = " + multi); //출력: a * b = 10
        
        //나눗셈
        int div = a / b;
        System.out.println("a / b = " + div); //출력: a / b = 2
        
        //나머지
        int mod = a % b;
        System.out.println("a % b = " + mod); //출력: a % b = 1
    }
}
```
💡 0으로 나누기를 하면 프로그램에 오류가 난다.

<br>

## 문자열 더하기
자바에서는 문자열에 + 연산자를 사용할 수 있다. + 연산자를 사용하면 두 문자를 연결 할 수 있다.
``` java
 package operator;
 public class Operator2 {
    public static void main(String[] args) {
        //문자열과 문자열 더하기1
        String result1 = "hello " + "world";
        System.out.println(result1);
        //문자열과 문자열 더하기2
        String s1 = "string1";
        String s2 = "string2";
        String result2 = s1 + s2;
        System.out.println(result2);
        //문자열과 숫자 더하기1
        String result3 = "a + b = " + 10;
        System.out.println(result3);
        //문자열과 숫자 더하기2
        int num = 20;
        String str = "a + b = ";
        String result4 = str + num;
        System.out.println(result4);
    }
 }
```

💡 **문자와 숫자를 더하면 숫자를 문자열로 변경한 다음에 서로 더한다.**

<br>

## 연산자 우선순위
> 연산자 우선순위 순서
>
> - 괄호 ()
> - 단항 연산자 (부호: ++, --, !, ~, new, (type))
> - 산술 연산자 (곱셈:*, /, %, 덧셈:+, -)
> - Shift 연산자 (<<, >>, >>>)
> - 비교 연산자 (<, <=, >, >=, instanceof)
> - 등식 연산자 (==, !=)
> - 비트 연산자 (&, ^, |)
> - 논리 연산자 (&&, ||)
> - 삼항 연산자 (? : )
> - 대입 연산자 (=, +=, -=, *=, /=, %=)

<br>

## 증감 연산자

> ✨ 증감 연산자의 위치에 따른 차이
>
> - ++a: 증가 후 사용. 전위(Prefix) 증감 연산자
> - a++: 사용 후 증가. 후위(Postfix) 증감 연산자

<br>

## 비교 연산자
- `==` : 동등성 (equal to)
- `!=` : 불일치 (not equal to)
- `>` : 크다 (greater than)  
- `<` : 작다 (less than)
- `>=` : 크거나 같다 (greater than or equal to)
- `<=` : 작거나 같다 (less than or equal to)

<br>

> ✅ `=` 와 `==` 는 다르다!
> `=` : 대입 연산자, 변수에 값을 대입한다.
> `==` : 동등한지 확인하는 비교 연산자

<br>

## 논리 연산자

- `&&` (그리고): 두 피연산자가 모두 참이면 참을 반환, 둘중 하나라도 거짓이면 거짓을 반환
- `||` (또는): 두 피연산자 중 하나라도 참이면 참을 반환, 둘다 거짓이면 거짓을 반환 
- `!` (부정): 피연산자의 논리적 부정을 반환. 즉, 참이면 거짓을, 거짓이면 참을 반환

<br>

## 대입 연산자
값을 변수에 할당하는 연산자. 

### 💡축약(복합) 대입 연산자

산술 연산자와 대입 연산자를 한번에 축약해서 사용할 수 있는데, 이것을 축약(복합) 대입 연산자라 한다.

연산자 종류: `+=`, `-=`, `*=`, `/=`, `%=`