---
layout: post
title: "[JAVA] 1.Start"
subtitle: "Hello World!"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초에 대해 다루고 있다.

---
## 자바 언어 탄생

- 객체지향언어
- C++ 문법을 기본으로 개발   
✔️ Java 이전에 객체지향 언어로 가장 범용적인 언어
✔️ C언어에 객체지향 특성 확장 

## 자바 언어 특징

- 타 언어에 비해 배우기 쉽다.
- 플랫폼에 독립적이다.
- 객체지향 프로그래밍이다.
- **Garbage Collector**로 사용되지 않는 메모리를 자동적으로 정리해준다. 

 
❓ `JVM` : 자바로 만들어진 프로그램을 실행해주는 프로그램

## 자바 개발환경 구축

### IDE ( 인텔리제이 VS 이클립스 )

- 최근에는 빠른 속도와 사용의 편의성 때문에 인텔리제이를 주로 사용
- 자바로 개발하는 대부분의 메이저 회사들도 최근에는 인텔리제이를 주로 사용한다.

### OS ( 윈도우 VS Mac )

- 자바로 개발하는 대부분의 메이저 회사들은 Mac 사용
- 윈도우로 사용해도 무방!

### 설치 및 세팅

- Settings.... 메뉴가 `File`에 있다.

## 자바 프로그램 실행

> ‼️**주의**‼️ <p>
> 자바 언어는 대소문자를 구분하기 떄문에, 대소문자가 다르면 오류가 발생할 수 있다. 


`HelloJava`
``` java
public class HelloJava {

    // 프로그램이 시작하는 실행 시점
    // ✅ main 메서드 : 자바는 main(String[] args) 메서드를 찾아서 프로그램을 시작
    public static void main(String[] args){

        // ✅ 값을 콘솔에 출력하는 기능. 문자열은 ""(쌍따옴표)를 사용
        System.out.println("Hello Java");
    }
}
```

`HelloJava2`
``` java
public class HelloJava2 {

    public static void main(String[] args) {
        System.out.println("hello java1");
        System.out.println("hello java2");
        System.out.println("hello java3");
        // ✅ main() 을 시작으로 위에서 아래로 한 줄 씩 실행된다.
    }
}
```



## 자바란?

### 인텔리제이를 통한 자바 컴파일, 실행 과정
![image](/assets/img/programming/java/java-intellij-compile-exe-image.png)

- 컴파일
    - 자바 코드를 컴파일 하려면 `javac` 라는 프로그램을 직접 사용해야함. 인텔리제이는 자바 코드를 실행할 때 이 과정을 자동으로 처리해줌.
    - ex) `javac Hello.java`
    - 인텔리제이 화면에서 프로젝트의 `.out` 폴더에 가보면 컴파일된 `.class` 파일이 있는 것을 확인 할 수 있음.
    ``` java
    public class CommentJava {

    public static void main(String[] args) {

        System.out.println("hello java1");

        //System.out.println("hello java2");
        /*System.out.println("hello java3");
        System.out.println("hello java4");
        System.out.println("hello java5");*/
        }
    }
    ```
- 실행
    - 자바를 실행하려면 `java`라는 프로그램을 사용해야함. 이때 컴파일된 `.class`파일을 지정해주면 된다.
    - 확장자는 제외함. ( ex : `javaHello`)
- 인텔리제이에서 자바 코드를 실행하면 컴파일과 실행을 모두 한번에 처리한다.

<br>

### 자바와 운영체제 독립성
**일반적인 프로그램**
- 일반적인 프로그램은 다른 운영체제에서 실행할 수 없다.
- 윈도우 프로그램은 MAC이나 Linux에서 작동 ❌
- **why?** 윈도우 프로그램은 윈도우 OS가 사용하는 명령어들로 구성되어 있기 때문에, 다른 OS와는 호환이 되지 않음.

<br>

**자바 프로그램**

![image](/assets/img/programming/java/java-intellij-exe-fluency.png)
- 자바프로그램은 자바가 설치된 모든 OS에서 실행할 수 있음.
- 자바 개발자는 특정 OS에 맞추에 개발을 하지 않아도 된다.
- 컴파일된 자바 파일( Hello.class )은 모든 자바 환경에서 실행 가능.
- 개발자는 각 OS에 맞는 자바를 설치하기만 하면 됨!

<br>

**자바 개발과 운영 환경**
- 개발할 때 자바와 서버에서 실행할 떄 다른 자바를 사용할 수 있다.
- Mac이나 윈도우 OS를 주로 사용
- 서버는 주로 리눅스 사용. AWS를 사용한다면 Amazon Corretto 자바를 AWS 리눅스 서버에 설치해서 사용하면 됨.
- _자바의 운영체제 독립성_ 덕분에 각각의 환경에 맞추어 자바를 설치하는 것이 가능.
