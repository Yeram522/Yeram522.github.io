---
layout: post
title: "[JAVA] 7.Scanner"
subtitle: "스캐너"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초 스캐너에 대해 다루고 있다.

---

## Scanner
`Scanner1`
``` java
package scanner;

 import java.util.Scanner;

 public class Scanner1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("문자열을 입력하세요:");
        String str = scanner.nextLine();  // 입력을 String으로 가져옵니다.
        System.out.println("입력한 문자열: " + str);
        System.out.print("정수를 입력하세요:");
        int intValue = scanner.nextInt();  // 입력을 int로 가져옵니다.
        System.out.println("입력한 정수: " + intValue);
        System.out.print("실수를 입력하세요:");
        double doubleValue = scanner.nextDouble();  // 입력을 double로 가져옵니다.
        System.out.println("입력한 실수: " + doubleValue);
    }
 }
```
- `Scanner scanner = new Scanner(System.in);`
    -  이 코드는 객체와 클래스를 배워야 정확히 이해할 수 있다. 지금은 Scanner의 기능을 사용하기 위해 new를 사용해서 Scanner를 만든다 정도로 이해하면 된다. Scanner는 System.in을 사용해서 사용자의 입력을 편리하게 받도록 도와준다.
    - Scanner scanner 코드는 scanner 변수를 선언하는 것이다. 이제부터 scanner 변수를 통해서 scanner를 사용할 수 있다.

- `scanner.nextLine()`
    - 엔터(\n)를 입력할 때 까지 문자를 가져온다.

- `scanner.nextInt()`
    - 입력을 int형으로 가져온다. 정수 입력에 사용한다.

- `scanner.nextDouble()`
    - 입력을 double형으로 가져온다. 실수 입력에 사용한다.

<br>

**‼️ 다른 타입 입력시 오류가 발생한다.**

<br>

## print() VS printIn()

`print()`: 출력하고 다음 라인으로 넘기지 않는다.
```
System.out.print("hello");
System.out.print("world");
//결과: helloworld
```

<br>

`printIn()` 출력하고 다음 라인으로 넘긴다.
```
System.out.println("hello");
System.out.println("world");
//결과:
hello
world
```