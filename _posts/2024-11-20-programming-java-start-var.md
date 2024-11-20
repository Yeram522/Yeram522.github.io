---
layout: post
title: "[JAVA] Variable"
subtitle: "변수"
categories: programming
tags: java study
comments: true
header-img: img\programming\java\inflearn_java_start_thumbnail.png
---

> `김영한`님의 `김영한의 자바 입문`를 수강하고 작성한 문서이다.
>
> 자바 기초 변수에 대해 다루고 있다.

---

<br>

<br>


> 💡 **main**함수 단축어
>
>  `psvm` :   **p**ublic **s**tatic **v**oid **m**ain
> ```
> package variable;
>
>public class Var1 {
>    public static void main(String[] args) {
>        
>    }
>}
>```

## 변수 시작

`Var1`
``` java
package variable;

public class Var1 {
    public static void main(String[] args) {
        System.out.println(10);
        System.out.println(10);
        System.out.println(10);
    }
}
```
**패키지**
- 해당 패키지에 들어가는 파일은 첫줄에 `package variable;` 와 같이 소속된 패키지를 선언해주어야 한다.
- 자바 파일이 위치하는 패키지와 `package variable` 선언 위치가 같아야 한다.

<br>

`Var2`
``` java
package variable;

public class Var2 {
    public static void main(String[] args) {
        int a; // 변수 선언
        a = 10; // 변수 초기화

        System.out.println(a);
        System.out.println(a);
        System.out.println(a);
    }
}
```

**변수 값 변경**
`Var3`
``` java
package variable;

public class Var3 {
    public static void main(String[] args) {
        int a; // 변수 선언
        a = 10; // 변수 초기화 a(10)
        System.out.println(a);
        a = 50; // 변수 값 변경
        System.out.println(a);
    }
}
```

<br>

## 변수 선언과 초기화
`Var5`
``` java
package variable;

public class Var5 {
    public static void main(String[] args) {
        // 1. 변수 선언, 초기화 각각 따로
        int a;
        a = 1;
        System.out.println(a);

        int b = 2; // 2. 변수 선언과 초기화를 한번에
        System.out.println(b);

        int c = 3, d = 4; // 3. 여려 변수 선언과 초기화를 한번에
        System.out.println(c);
        System.out.println(d);
    }
}
```

✅ **초기화 하지 않은 변수 읽기**
>
> 변수를 선언만 하고 초기화를 하지 않을 경우에는 오류가 난다.
>
> `variable a might not have been initialized`
>
> 컴퓨터의 메모리 = 여러 시스템이 함께 사용하는 공간.
>
> 어떠한 값들이 계속 저장된다.
> 변수 선언 -> 메모리상의 어떤 공간을 차지하고 사용. 
>
> 하지만 그 공간에 어떤 값이 있었는지는 아무도 모른다. 
>
>💡따라서 초기화 하지 않으면 이상한 값이 출력 될 수 있다.

<br>

## 변수 타입
변수 데이터는 종류에 따라 다양한 형식이 존재. 영어로는 type 이라고 함.
<br>
<br>
`Var7`
``` java
package variable;

public class Var7 {
    public static void main(String[] args) {
        int a = 100; // 정수
        double b = 10.5; // 실수
        boolean c = true; // 불리언(boolean) true, false 입력 가능
        char d = 'A'; // 문자 하나
        String e = "Hello Java"; // 문자열, 문자열을 다루기 위한 특별한 타입

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);
    }
}
```

### 리터럴
코드에서 개발자가 직접 적은 값(`100`,`10.5`,`'A'`,`"Hello Java"`)와 같은 고정된 값을 프로그래밍 용어로 리터럴(literal)이라 함.
<br>
✅ 변수의 값은 변할 수 있지만, 리터럴은 개발자가 직접 입력한 고정된 값. 따라서 리터럴은 변하지 않음.


### 숫자 타입
``` java
package variable;

public class Var8 {
    public static void main(String[] args) {
        // 정수
        byte b = 127; // -128 ~ 127
        short s = 32767; // -32,768 ~ 32,767
        int i = 2147483647; // -2,147,483,648 ~ 2,147,483,647 ( 약 20억 )

        // -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
         long l = 9223372036854775807L;

         //실수
        float f = 10.0f;
        double d = 10.0;
    }
}
```
메모리를 작게 사용 -> 작은 숫자 표현
<br>
메모리 크게 사용 -> 큰 숫자 표현
<br>
![image](/assets/img/programming/java/java-variable_num_type.png)

> ### 자바 데이터 타입
> 
> **정수형**
> - byte: -127 ~ 127 (1byte, 2⁸)
> - short: -32,768 ~ 32,767 (2byte, 2¹⁶)
> - int: -2,147,483,648 ~ 2,147,483,647 (약 20억) (4byte, 2³²)
> - long: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 (8byte, 2⁶⁴)
>
> **실수형**
> - float: 대략 -3.4E38 ~ 3.4E38, 7자리 정밀도 (4byte, 2³²)
> - double: 대략 -1.7E308 ~ 1.7E308, 15자리 정밀도 (8byte, 2⁶⁴)
>
> **기타**
> - boolean: true, false (1byte)
> - char: 문자 하나(1byte)
> - String: 문자열을 표현한다. 메모리 사용량은 문자 길이에 따라 동적으로 달라진다.(특별한 타입이다. 자세한 내용은 뒤에서 학습한다)

💡참고 : 메모리 용량은 매우 저렴. 따라서 메모리 용량을 약간 절약하기 보다는 개발 속도나 효율에 초점을 맞추는 것이 더 효과적이다.

<br>

### ✅ **자주 사용하는 타입**
실무에서 자주 사용하는 타입은 다음과 같다.

- **정수** - int, long: 자바는 정수에 기본으로 int를 사용한다. 만약 20억이 넘을 것 같으면 long을 쓰면 된다.
- 파일을 다룰 때는 byte를 사용한다.
- **실수** - double: 실수는 고민하지 말고 double을 쓰면 된다.
- **불린형** - boolean: true, false 참 거짓을 표현한다. 이후 조건문에서 자주 사용된다.
- **문자열** - String: 문자를 다룰 때는 문자 하나든 문자열이든 모두 String을 사용하는 것이 편리하다.

<br>

## 변수 명명 규칙

### 낙타표기법 🐪

낙타표기법(Camel Case)은 프로그래밍에서 변수, 함수, 클래스 등의 이름을 지을 때 많이 사용하는 표기법 중 하나이다. 이 표기법의 이름은 작성한 이름이 여러 단어로 구성되어 있을 때, 각 단어의 첫 글자가 대문자로 시작하고, 이 대문자들이 낙타의 등봉처럼 보이는 것에서 유래했다. 낙타표기법을 사용하면 이름에 공백을 넣지 않고도 여러 단어를 쉽게 구분할 수 있으므로, 변수의 이름을 이해하기 쉽게 만들어준다. 또한, 대부분의 프로그래밍 언어에서는 이름에 공백을 포함할 수 없기 때문에, 낙타표기법은 이런 제한을 우회하는 좋은 방법이다.

<br>

### 자바 언어의 관례 한번에 정리

#### 클래스는 대문자로 시작, 나머지는 소문자로 시작

- 자바에서 클래스 이름의 첫 글자는 대문자로 시작한다. 그리고 나머지는 모든 첫 글자를 소문자로 시작한다. 여기에 낙타 표기법을 적용하면 된다. 이렇게 하면 모든 자바 관례를 다 외울 수 있다!

- 예시: 클래스는 첫 글자 대문자, 나머지는 모든 첫 글자 소문자로 시작 + 낙타 표기법
 - 클래스: Person, OrderDetail
 - 변수를 포함한 나머지: firstName, userAccount

- 여기에 예외가 딱 2개가 있다.
 - 상수는 모두 대문자를 사용하고 언더바로 구분한다. (상수는 뒤에서 학습)
   - USER_LIMIT
 - 패키지는 모두 소문자를 사용한다. (패키지는 뒤에서 학습)
   - org.spring.boot

### 참고: 변수 이름은 의미있고, 그 용도를 명확하게 설명해야 한다.

- a, b: 이런 변수는 용도를 설명하지 않는다. 단순한 예제에서만 사용하는 것이 좋다.
- studentCount, maxScore, userAccount, orderCount: 용도를 명확하게 설명한다.