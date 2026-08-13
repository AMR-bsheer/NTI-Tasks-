

دليل شامل لأساسيات ومفاهيم JavaScript الحديثة (ES6+)، يغطي أهم الأنماط والسلوكيات في لغة الجافاسكريبت مع أمثلة توضيحية.

---

## 📋 جدول المحتويات

1. [وضع التدقيق: `"use strict"](https://www.google.com/search?q=%231-use-strict)`
2. [الرفع: Hoisting](https://www.google.com/search?q=%232-hoisting)
3. [مقارنة المتغيرات: `var` vs `let` vs `const](https://www.google.com/search?q=%233-var-vs-let-vs-const)`
4. [الدوال السهمية: Arrow Functions](https://www.google.com/search?q=%234-arrow-functions)
5. [النصوص القالبية: Template Literals](https://www.google.com/search?q=%235-template-literals)
6. [تفكيك البيانات: Destructuring](https://www.google.com/search?q=%236-destructuring)
7. [القيم الافتراضية: Default Parameters](https://www.google.com/search?q=%237-default-parameters)
8. [معامل التجميع: Rest Parameter](https://www.google.com/search?q=%238-rest-parameter)
9. [معامل النشر: Spread Operator](https://www.google.com/search?q=%239-spread-operator)
10. [إدارة الذاكرة وآليات النسخ: Memory & Copying](https://www.google.com/search?q=%2310-memory--copying)
11. [جدول المقارنة السريع](https://www.google.com/search?q=%23-%D8%AC%D8%AF%D9%88%D9%84-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D8%B1%D9%86%D8%A9-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%B9)

---

## 1. `"use strict"`

تفعيل الـ Strict Mode يمنع الأخطاء الشائعة ويمنع السلوكيات غير الآمنة أثناء تنفيذ الكود.

### الأخطاء التي يمنعها الـ Strict Mode:

* **Implicit Globals:** إنتاج متغيرات عالمية (Global) عن طريق الخطأ بدون تصريح (`var/let/const`).
* **Delete on Variables:** محاولة حذف المتغيرات المحلية.
* **Duplicate Parameters:** تكرار أسماء المعاملات في الدوال.
* **Reserved Words:** استخدام الكلمات المحجوزة للمستقبل كأعلام للمتغيرات.

### 💻 أمثلة توضيحية:

```javascript
// 1.1 Implicit Global (بدون Strict Mode)
function withoutStrict() {
    implicitGlobal = "I am global!"; // تصريح ضمني
}
withoutStrict();
console.log(implicitGlobal); // "I am global!" (متغير متاح على مستوى التطبيق)

// 1.2 Implicit Global (مع Strict Mode)
function withStrict() {
    "use strict";
    try {
        strictImplicit = "test!"; // ReferenceError
    } catch (error) {
        console.log("Strict Mode Error:", error.message);
    }
}
withStrict();

// 1.3 حذف المتغيرات (Delete)
function deleteExample() {
    "use strict";
    var localVar = "Local";
    
    // delete localVar; // SyntaxError في الـ Strict mode
    
    // الاستخدام الصحيح لـ delete هو لحذف خصائص الـ Objects فقط:
    var obj = { prop: "قيمة" };
    delete obj.prop;
    console.log(obj); // {}
}
deleteExample();

// 1.4 معامل بأسماء مكررة (Duplicate Parameters)
// "use strict";
// function duplicateParams(a, b, a) {} // SyntaxError: Duplicate parameter name not allowed

```

---

## 2. Hoisting

**الرفع (Hoisting):** هو سلوك الجافاسكريبت في رفع التصريحات (Declarations) إلى أعلى الـ Scope الخاص بها قبل تنفيذ الكود.

* **`var`:** يتم رفعها وتعيين قيمة مبدئية `undefined`.
* **Function Declarations:** يتم رفع الدالة بجسمها بالكامل، مما يتيح استدعاءها قبل تعريفها.
* **Function Expressions:** يتم رفع اسم المتغير فقط كـ `undefined` (إذا تم التصريح عنه بـ `var`).
* **`let` / `const`:** يتم رفعها لكن تبقى في منطقة **TDZ (Temporal Dead Zone)** ولا يمكن الوصول إليها قبل سطر التصريح.

### 💻 أمثلة توضيحية:

```javascript
// 2.1 hoisting المتغيرات بـ var
console.log(myVar); // undefined
var myVar = 5;

// 2.2 Function Declaration Hoisting
sayHello(); // تعمل بنجاح: "Welcome"
function sayHello() {
    console.log("Welcome");
}

// 2.3 Function Expression Hoisting
try {
    sayGoodbye(); // TypeError: sayGoodbye is not a function
} catch (e) {
    console.log(e.message);
}

var sayGoodbye = function () {
    console.log("Goodbye");
};

// 2.4 let / const و منطقة TDZ
try {
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 10;
} catch (e) {
    console.log(e.message);
}

// 2.5 Shadowing و Hoisting داخل نطاق الدالة
var x = 1;
function testHoist() {
    console.log("داخل الدالة قبل التعريف:", x); // undefined (بسبب الـ hoisting الخاص بـ var x الداخلي)
    var x = 2;
    console.log("داخل الدالة بعد التعريف:", x); // 2
}
testHoist();
console.log("خارج الدالة:", x); // 1

```

---

## 3. `var` vs `let` vs `const`

### 3.1 النطاق (Scope)

* **`var`:** تمتلك **Function Scope** (متاحة في كامل الدالة بغض النظر عن الكتل الفرعية `if` أو `for`).
* **`let` / `const`:** تمتلك **Block Scope** (متاحة فقط داخل أقواس `{}` التي تم تعريفها بها).

```javascript
// Function Scope (var)
function varScope() {
    if (true) {
        var x = "متاح في كل الدالة";
    }
    console.log(x); // يعمل بدون أخطاء
}

// Block Scope (let/const)
function blockScope() {
    if (true) {
        let y = "متاح داخل الـ block فقط";
    }
    // console.log(y); // ReferenceError: y is not defined
}

```

### 3.2 إعادة التصريح والتغيير (Re-declaration & Re-assignment)

| المعيار | `var` | `let` | `const` |
| --- | --- | --- | --- |
| **إعادة التصريح (Re-declaration)** | مسموح | ممنوع في نفس الـ Scope | ممنوع في نفس الـ Scope |
| **إعادة التعيين (Re-assignment)** | مسموح | مسموح | ممنوع |
| **القيمة المبدئية عند التصريح** | اختيارية (`undefined`) | اختيارية (`undefined`) | **إجبارية** |

```javascript
// var
var a = 1;
var a = 2; // مسموح

// let
let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared
b = 3; // مسموح

// const
const c = 10;
// c = 20; // TypeError: Assignment to constant variable.

```

### 3.3 `const` مع الكائنات والمصفوفات (Mutability)

تثبت `const` **المرجع في الذاكرة (Binding/Reference)**، ولكنها لا تمنع تعديل **محتويات** الكائن أو المصفوفة:

```javascript
const person = { name: "Ahmed", age: 25 };

// تعديل أو إضافة الخصائص مسموح:
person.name = "Mohamed";
person.city = "Alexandria";

// إعادة تعيين المرجع بالكامل ممنوع:
// person = { name: "Ali" }; // TypeError

const numbers = [1, 2, 3];
numbers.push(4); // مسموح [1, 2, 3, 4]
// numbers = [10, 20]; // TypeError

```

### 3.4 كائنات النطاق العام (Global Object Binding)

* المتغيرات المنسوبة بـ `var` على المستوى العام (Global Scope) تتصل مباشرة بـ `window` (في المتصفح) أو `global` (في Node.js).
* المتغيرات المنسوبة بـ `let` و `const` لا تضاف للـ Global Object.

```javascript
var gVar = "أنا على window";
let gLet = "أنا لست على window";

console.log(window.gVar); // "أنا على window"
console.log(window.gLet); // undefined

```

---

## 4. Arrow Functions

صيغة مختصرة وسلسة لكتابة الدوال، مفيدة خصوصاً للدوال ذات الاستدعاء الراجع (Callbacks).

* **ملاحظة:** لا تمتلك الـ Arrow Function سياق `this` خاصاً بها، بل تأخذه تلقائياً من النطاق المحيط (Lexical `this`).

```javascript
// دالة بسيطة بسطر واحد (Implicit Return)
const greet = (name) => `Hello, ${name}!`;
const add = (a, b) => a + b;

// دالة متعددة الأسطر (تتطلب return صريح)
const processUser = (firstName, lastName) => {
    const fullName = `${firstName}${lastName}`;
    return fullName.toUpperCase();
};

console.log(greet("Mohamed")); // "Hello, Mohamed!"
console.log(add(5, 3));        // 8

```

---

## 5. Template Literals

تسمح باستخدام الأقواس المائلة (Backticks ```) لتوفير:

1. دمج المتغيرات بأسلوب أنيق بـ `${expression}`.
2. نصوص متعددة الأسطر (Multi-line strings) بمرونة.

```javascript
const name = "Ali";
const role = "Developer";

// الطريقة القديمة
const oldWay = "User: " + name + " | Role: " + role;

// Modern Template Literals
const newWay = `User: ${name} | Role: ${role}`;

const multiline = `
    Line 1: Welcome
    Line 2: Modern JavaScript
`;

```

---

## 6. Destructuring

آلية استخراج البيانات من الكائنات والمصفوفات وإسنادها إلى متغيرات بصورة مباشرة.

### 6.1 تفكيك الكائنات (Object Destructuring)

```javascript
const user = {
    username: "fayez_dev",
    email: "user@example.com",
    stats: { followers: 1200 }
};

// استخراج الخصائص
const { username, email } = user;
console.log(username, email);

// تفكيك مع تخصيص اسم جديد للمتغير
const { username: accountName } = user;
console.log(accountName); // "fayez_dev"

```

### 6.2 تفكيك المصفوفات (Array Destructuring)

```javascript
const colors = ["Red", "Green", "Blue"];

// الاستخراج بناءً على الترتيب
const [primary, secondary] = colors;
console.log(primary);   // "Red"
console.log(secondary); // "Green"

```

---

## 7. Default Parameters

قيم افتراضية تعين للمعاملات إذا لم يتم تمريرها أثناء استدعاء الدالة أو إذا أُرسلت كـ `undefined`.

```javascript
const makeRequest = (url, method = "GET", timeout = 5000) => {
    return `Fetching ${url} using ${method} with timeout ${timeout}ms`;
};

console.log(makeRequest("/api/users")); 
// "Fetching /api/users using GET with timeout 5000ms"

console.log(makeRequest("/api/posts", "POST")); 
// "Fetching /api/posts using POST with timeout 5000ms"

```

---

## 8. Rest Parameter (`...args`)

تجمِع بقية المعاملات المُمررة للدالة داخل **مصفوفة حقيقية**. يجب أن تكون هي المعامل الأخير دائماً.

```javascript
const calculateSum = (multiplier, ...numbers) => {
    console.log("المعاملات الإضافية كـ Array:", numbers);
    return numbers.reduce((acc, curr) => acc + curr, 0) * multiplier;
};

console.log(calculateSum(2, 10, 20, 30)); // (10 + 20 + 30) * 2 = 120

```

---

## 9. Spread Operator (`...`)

يقوم بفك/فرد عناصر المصفوفات أو خصائص الكائنات.

```javascript
// 9.1 مع المصفوفات
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// دمج المصفوفات
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// نسخ سطحي (Shallow Copy)
const copiedArr = [...arr1];

// 9.2 مع الكائنات
const baseInfo = { name: "Ahmed", city: "Cairo" };
const extraInfo = { age: 24, city: "Alexandria" }; // city ستستبدل القيمة القديمة

const fullProfile = { ...baseInfo, ...extraInfo };
console.log(fullProfile); // { name: "Ahmed", city: "Alexandria", age: 24 }

// 9.3 تمرير عناصر المصفوفة كـ Arguments للدوال
const mathNumbers = [10, 50, 5, 80];
console.log(Math.max(...mathNumbers)); // 80

```

---

## 10. Memory & Copying

### آليات التخزين في الذاكرة:

* **Primitive Types (Numbers, Strings, Booleans...):** تُخزن بقيمتها في الـ **Stack**.
* **Reference Types (Objects, Arrays...):** يُخزن المرجع (Reference) في الـ **Stack** والقيمة الفعلية في الـ **Heap**.

---

### أنواع النسخ (Copying Mechanics):

#### 10.1 النسخ بالمرجع (Reference Copy)

نسخ المرجع فقط؛ أي تغيير يطرأ على النسخة يؤثر على الأصل مباشرةً.

```javascript
let original = { name: "Original" };
let refCopy = original;
refCopy.name = "Modified";

console.log(original.name); // "Modified" (تأثرت الخلية الأساسية)

```

#### 10.2 النسخ السطحي (Shallow Copy)

يفصل المستوى الأول فقط، لكن العناصر المتداخلة (Nested Objects/Arrays) تظل متصلة بالمرجع القديم.

```javascript
let p1 = { name: "P1", details: { age: 20 } };
let shallowCopy = { ...p1 };

shallowCopy.name = "P2";           // لا يؤثر على p1
shallowCopy.details.age = 99;      // ⚠️ يؤثر على p1 لأن المستوى المتداخل مرتبط بالمرجع

console.log(p1.details.age); // 99

```

#### 10.3 النسخ العميق (Deep Copy)

فصل تام ومستقل لجميع المستويات في الذاكرة.

##### الطريقة الأولى: `structuredClone` (الحديثة والأفضل)

```javascript
let person = { name: "Alex", nested: { score: 100 } };
let deepClone = structuredClone(person);

deepClone.nested.score = 0;
console.log(person.nested.score); // 100 (مستقل تماماً)

```

##### الطريقة الثانية: `JSON.parse(JSON.stringify())`

مناسبة للبيانات البسيطة، ولكنها تفتقد دعم أنواع البيانات المعقدة مثل (Functions, `undefined`, `Date`, Symbols).

```javascript
let data = { id: 1, meta: { active: true } };
let jsonDeepCopy = JSON.parse(JSON.stringify(data));

```

---

### 10.4 التخزين المحلي: `localStorage` و JSON

يخزن `localStorage` البيانات كـ **Strings** فقط، لذا يلزم تحويل البيانات قبل التخزين وبعد الاسترجاع.

```javascript
const products = [
    { id: 101, title: "Laptop" },
    { id: 102, title: "Phone" }
];

// 1. تحويل الـ Array/Object إلى String للحفظ
localStorage.setItem("cart", JSON.stringify(products));

// 2. قراءة البيانات وتحويلها مجدداً إلى Array/Object
const savedCart = localStorage.getItem("cart");
const parsedCart = JSON.parse(savedCart);

console.log(parsedCart[0].title); // "Laptop"

// تنظيف الـ localStorage
localStorage.removeItem("cart");
// localStorage.clear(); // مسح كافة البيانات

```

---

## 📊 جدول المقارنة السريع

| الخصيصة | `var` | `let` | `const` |
| --- | --- | --- | --- |
| **النطاق (Scope)** | Function Scope | Block Scope | Block Scope |
| **الرفع (Hoisting)** | نعم (`undefined`) | نعم (في الـ TDZ) | نعم (في الـ TDZ) |
| **إعادة التصريح** | مسموح | غير مسموح | غير مسموح |
| **إعادة التعيين** | مسموح | مسموح | غير مسموح |
| **التهيئة المبدئية** | اختيارية | اختيارية | **إجبارية** |
| **الاتصال بـ `window**` | نعم | لا | لا |
| **أنسب استخدام** | أكواد قديمة | متغيرات قابلة للتغيير | قيم ثابتة ومراجع الكائنات |
