

# 🚀 ES6 Lab — Part 2: Advanced Data Structures & Memory Management

دليل عملي يشرح الفرق بين حلقات التكرار (`for...in` vs `for...of`)، معالجة البيانات عبر `Map` و `Set`، تحسينات الكائنات (Enhanced Object Literals)، وآليات التعامل مع الذاكرة والنسخ العميق والسطحي في JavaScript.

---

## 📋 جدول المحتويات

1. [المقارنة بين `for...in` و `for...of](https://www.google.com/search?q=%231-forin-vs-forof)`
2. [كائن `Map` (الكائنات المتقدمة)](https://www.google.com/search?q=%232-map-advanced-object)
3. [مجموعة `Set` (القيم الفريدة)](https://www.google.com/search?q=%233-set-unique-values)
4. [التحكم في التكرار: `break` & `continue](https://www.google.com/search?q=%234-break--continue)`
5. [تحسينات كتابة الكائنات (Enhanced Object Literals)](https://www.google.com/search?q=%235-enhanced-object-literals)
6. [الذاكرة والنسخ: Stack vs Heap & Shallow vs Deep Copy](https://www.google.com/search?q=%236-memory--copying-mechanics)
7. [جدول الملخص السريع](https://www.google.com/search?q=%23-%D8%AC%D8%AF%D9%88%D9%84-%D8%A7%D9%84%D9%85%D9%84%D8%AE%D8%B5-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D8%B9)

---

## 1. `for...in` vs `for...of`

| الحقل / المفهوم | `for...in` | `for...of` |
| --- | --- | --- |
| **طبيعة التكرار** | تتكرر على **المفاتيح/الفهارس (Keys / Indexes)** | تتكرر على **القيم الفعلية (Values)** |
| **نوع البيانات المناسب** | الكائنات العادية `{}` والمصفوفات | البيانات القابلة للتكرار (Iterables: Arrays, Strings, Map, Set) |

---

### 💻 التطبيق على أنواع البيانات المختلفة:

#### أ) المصفوفات (Arrays)

```javascript
const arr = [10, 20, 30];

// 1. for...in → تعيد الفهارس (Indexes)
for (const index in arr) {
  console.log("Index:", index, "Value:", arr[index]);
}

// 2. for...of → تعيد القيم مباشرة (Values)
for (const val of arr) {
  console.log("Value:", val);
}

// 3. استخدام entries() للحصول على الفهرس والقيمة معاً
for (const [index, val] of arr.entries()) {
  console.log(`Index ${index}: ${val}`);
}

```

#### ب) النصوص (Strings)

```javascript
const str = "ASA";

// for...in → تُرجع الفهارس
for (const index in str) {
  console.log("Index:", index); // 0, 1, 2
}

// for...of → تُرجع الحروف الفعلية
for (const char of str) {
  console.log("Character:", char); // 'A', 'S', 'A'
}

```

#### جـ) الكائنات العادية (Objects)

الكائنات العادية `{}` **ليست** Iterable بشكل مباشر، لذا لا تعمل معها `for...of` وتخرج `TypeError`.

```javascript
const obj = { a: 1, b: 2 };

// 1. for...in تعمل بشكل مباشر على المفاتيح
for (const key in obj) {
  console.log("Key:", key, "Value:", obj[key]);
}

// 2. استخدام for...of مع الكائنات يلزم تحويلها أولاً:
for (const [key, value] of Object.entries(obj)) {
  console.log("Key:", key, "Value:", value);
}
// طرق إضافية: Object.keys(obj) أو Object.values(obj)

```

---

## 2. `Map` (Advanced Object)

الـ `Map` هو هيكل بيانات يُخزن الأزواج (Key-Value) مثل الكائن العادي، ولكنه يوفر إمكانيات أعلا وأداءً أفضل.

### لماذا نستخدم `Map` بدلاً من Object العادي؟

1. **أنواع المفاتيح:** مفتاح الـ Object يكون دائماً String أو Symbol، بينما مفتاح الـ `Map` يمكن أن يكون أي نوع (Objects, Functions, Numbers, Booleans).
2. **الترتيب (Order):** الـ `Map` يحتفظ بترتيب إدراج العناصر دائماً.
3. **الحجم (Size):** يمكنك معرفة عدد العناصر مباشرة عبر الخصيصة `.size`.
4. **الأداء:** أفضل في عمليات الإضافة والحذف التكرارية.

### 💻 أمثلة توضيحية واستخدام الـ API:

```javascript
const user = { id: 1 };
const map = new Map();

// 1. set(key, value) → إضافة أو تحديث
map.set("name", "Ahmed");
map.set(100, "ID Number");
map.set(user, "User Object Reference"); // استخدام كائن كمفتاح!

// 2. get(key) → قراءة القيمة
console.log(map.get("name")); // "Ahmed"
console.log(map.get(user));   // "User Object Reference"

// 3. has(key) → التحقق من وجود المفتاح
console.log(map.has("name")); // true
console.log(map.has("age"));  // false

// 4. delete(key) & size → الحذف والحجم
map.delete(100);
console.log("Size:", map.size); // 2

// 5. التكرار (Iteration)
for (const [key, value] of map) {
  console.log(`Key: ${key} -> Value: ${value}`);
}

// التكرار على المفاتيح أو القيم فقط:
for (const k of map.keys()) console.log("Key:", k);
for (const v of map.values()) console.log("Value:", v);

// 6. clear() → تفريغ الـ Map تماماً
map.clear();

```

---

## 3. `Set` (Unique Values)

الـ `Set` هي تجميعة من القيم الفريدة **(بدون أي تكرار)**.

### ميزات الـ `Set`:

* تخزين القيم دون تكرار (تتجاهل القيم المكررة تلقائياً).
* تحافظ على ترتيب الإدخال.
* لا توجد إمكانية للوصول للعناصر عبر الفهرس المباشر مثل `set[0]`.
* ممتازة للتحقق السريع من وجود عنصر وفلترة المصفوفات.

### 💻 أمثلة توضيحية واستخدام الـ API:

```javascript
const set = new Set();

// 1. add(value) → إضافة قيمة
set.add(10);
set.add(20);
set.add(10); // سيتجاهل التكرار تلقائياً

console.log("Size:", set.size); // 2

// 2. has(value) & delete(value)
console.log(set.has(10)); // true
set.delete(10);
console.log(set.has(10)); // false

// 3. التكرار على الـ Set
set.add(30);
set.add(40);

for (const val of set) {
  console.log("Set value:", val);
}

```

### 💡 حالة استخدام عملية (Practical Use Case): إزالة التكرار من مصفوفة

```javascript
const nums = [1, 2, 2, 3, 4, 4, 5];

// تحويل المصفوفة إلى Set لإزالة التكرار ثم إعادة فكها إلى Array
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // [1, 2, 3, 4, 5]

```

---

## 4. `break` & `continue`

أوامر للتحكم في سير التكرار داخل اللوبات:

* **`continue`:** تتخطى الدورة الحالية وتنتقل للدورة التالية فوراً.
* **`break`:** تُنهي اللوب بالكامل وتخرج منه.

```javascript
for (const n of [1, 2, 3, 4, 5, 6]) {
  if (n === 3) continue; // تخطي الرقم 3
  if (n === 5) break;    // إيقاف التكرار عند الوصول للرقم 5
  
  console.log("Loop value:", n); // يطبع: 1, 2, 4
}

```

---

## 5. Enhanced Object Literals

تحسينات تم إضافتها في ES6 لكتابة الكائنات بأسلوب مختصر وأكثر مرونة:

### 1. اختصار اسم الخصائص (Shorthand Properties)

إذا كان اسم المتغير يطابق اسم المفتاح في الكائن، يمكنك اختصاره:

```javascript
const name = "Ahmed";
const age = 25;

// الطريقة القديمة
const userOld = { name: name, age: age };

// الطريقة الحديثة (Shorthand)
const userNew = { name, age };

```

### 2. اختصار تعريف الدوال (Shorthand Methods)

يمكن كتابة الدوال داخل الكائنات بدون كلمة `function`:

```javascript
const calculator = {
  // Shorthand method
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(5, 7)); // 12

```

### 3. أسماء الخصائص الديناميكية (Computed Property Names)

يمكن استخدام الأقواس `[]` لإنشاء اسم المفتاح بناءً على قيمة متغير أو تعبير برمجي:

```javascript
const key1 = "email";
const key2 = "phone";

const contact = {
  [key1]: "ahmed@example.com",
  [key2]: "123456789",
  ["user_" + 99]: "Special User"
};

console.log(contact);
// Output: { email: 'ahmed@example.com', phone: '123456789', user_99: 'Special User' }

```

### 💡 تطبيق عملي: دالة بناء حمولة البيانات (API Payload Builder)

```javascript
function buildPayload(type, value) {
  return {
    type,                            // Shorthand property
    value,                           // Shorthand property
    createdAt: new Date().toISOString(),
    print() {                        // Shorthand method
      console.log(`${this.type}: ${this.value}`);
    },
    [type + "_flag"]: true           // Computed property
  };
}

const payload = buildPayload("order", 12345);
console.log(payload);
payload.print(); // "order: 12345"

```

---

## 6. Memory & Copying Mechanics

### مفاهيم الذاكرة الأساسية:

1. **Primitives (الأنواع الأولية):** مثل (`number`, `string`, `boolean`, `null`, `undefined`) تُخزن وتُنسخ **بالقيمة (By Value)** في الـ **Stack**.
2. **Reference Types (الأنواع المرجعية):** مثل (`Objects`, `Arrays`, `Functions`, `Map`, `Set`) تُخزن بياناتها في الـ **Heap**، بينما تحمل المتغيرات **مرجعاً (Reference)** يشير إلى مكانها في الذاكرة.

---

### أنواع النسخ وتطبيقاتها:

#### 1) النسخ بالمرجع (Reference Copy)

نسخ المرجع فقط دون إنشاء كائن جديد. أي تعديل يظهر في المتغيرين.

```javascript
const personA = { name: "Ahmed", child: { age: 5 } };
const personB = personA; // نفس المرجع في الذاكرة

personB.name = "Ali";
console.log(personA.name); // "Ali" (تأثر الأصل)

```

#### 2) النسخ السطحي (Shallow Copy)

يتم فصل المستوى الأول فقط في الذاكرة، بينما تظل الكائنات/المصفوفات المتداخلة (Nested) مشاركة لنفس المرجع.

```javascript
const original = { x: 1, nested: { y: 2 } };

// أ) باستخدام Spread Operator
const copySpread = { ...original };

// ب) باستخدام Object.assign
const copyAssign = Object.assign({}, original);

copySpread.x = 99;           // المستوى الأول مستقل (لا يؤثر على original.x)
copySpread.nested.y = 123;   // ⚠️ المستوى المتداخل مشترك! يؤثر على original.nested.y

```

#### 3) النسخ العميق (Deep Copy)

##### أ) عبر `structuredClone()` (الطريقة الحديثة والآمنة)

تنسخ جميع المستويات بانسلاخ تام وتدعم الأنواع المتقدمة مثل (`Map`, `Set`, `Date`, `Arrays`):

```javascript
const deepSrc = {
  n: 1,
  arr: [1, { k: 2 }],
  mySet: new Set([1, 2])
};

const deepClone = structuredClone(deepSrc);
deepClone.arr[1].k = 999;

console.log(deepSrc.arr[1].k);  // 2 (الأصل لم يتأثر)
console.log(deepClone.arr[1].k); // 999

```

##### ب) ملاحظات على النسخ مع `Map` و `Set`

تنبيه: تحويل `new Map(map1)` أو `new Set(set1)` يعتبر **نسخاً سطحياً (Shallow Copy)** بالنسبة للقيم الداخلية ذات المراجع:

```javascript
const m1 = new Map([["k", { v: 1 }]]);

// Shallow Copy مع Map
const m2 = new Map(m1);
m2.get("k").v = 42; 
console.log(m1.get("k").v); // 42 (تأثر الأصل)

// Deep Copy مع Map
const m3 = structuredClone(m1);
m3.get("k").v = 100;
console.log(m1.get("k").v); // 42 (الأصل آمن)

```

---

## 📊 جدول الملخص السريع

| الهيكل / الآلية | الميزة الأساسية | أفضل استخدام |
| --- | --- | --- |
| **`for...of`** | تكرار على القيم المباشرة | مع Arrays, Strings, Sets, Maps |
| **`for...in`** | تكرار على المفاتيح/الفهارس | مع Objects العادية |
| **`Map`** | أزواج (Key-Value) بأي نوع مفاتيح | عند الحاجة لمفاتيح غير نصية أو أداء مرتفع |
| **`Set`** | قيم فريدة فقط | إزالة التكرار والتحقق من الوجود بسرعة |
| **`Spread (...)`** | فك العناصر/الخصائص | الدمج والنسخ السطحي (Shallow Copy) |
| **`structuredClone`** | نسخ جميع المستويات تماماً | النسخ العميق (Deep Copy) المستقل للكائنات |
